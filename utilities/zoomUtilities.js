var request = require('request');
const mongo  = require('./dbConnections');
var encryption = require('./encryptionUtilities');

var zoomCredentials = {
  clientId: 'CL1jHQnHSLOVE5HIDQ7QCg',
  clientSecret: 'yWkx0u0tfO40BBmS3vPUzEauSaIvgy8K'
};


var saveZoomUserDetails =  function(accessToken, userId) {
    var db = mongo.getDB();
    let userDetails = {};
    var userDetailsPromise = new Promise((resolve,reject) => {
     
    var bcURL = `https://api.zoom.us/v2/users/me`;

    let responseObj = {};

    request.get(
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + accessToken
          },
          url: bcURL
        },
        (error, response, result) => {

          console.log(bcURL)
          if (error) {
            responseObj.status = false;
            responseObj.msg = "Error getting user details";
            responseObj.err = error;
            resolve(responseObj);
            
          } else {
            // console.log(result);

            userDetails = JSON.parse(result);
            // console.log(userData, "USERDATA")
            if(userDetails != ''){
                db.collection("integration_creds").update(
                    { user_id: userId },
                    { $set: { 'zoom.userDetails': userDetails, updated_time: new Date() } },
                    { upsert: true },
                    function(err, result) {
                      if (err) {
                        responseObj.status = false;
                        responseObj.msg = "Error saving data";
                        responseObj.err = err;
                        resolve(responseObj);
                      } else {
                        responseObj.status = true;
                        responseObj.data = result;
                        resolve(responseObj);
                      }
                    }
                  );
            }else{
                responseObj.status = false;
                responseObj.data = userDetails;
              //   return  responseObj;
              resolve(responseObj)
            }
          //   res.send(responseObj);
          }
        }
      );
    });

  return userDetailsPromise;
}

var getZoomRecordings =  function(accessToken, refreshToken, expiresIn, userId, zoomId) {
    
    var recordingsPromise = new Promise((resolve,reject) => {
     
    var bcURL = `https://api.zoom.us/v2/users/${zoomId}/recordings?from=2020-03-01`;

    let responseObj = {};

    refreshTokens(accessToken, refreshToken, expiresIn, userId).then(result => {
        if (result.status === true) {
            request.get(
                {
                  headers: {
                    "content-type": "application/json",
                    Authorization: "Bearer " + result.accessToken
                  },
                  url: bcURL
                },
                (error, response, body) => {
                  let result = JSON.parse(body);
        
                  console.log(bcURL)
                  if (error) {
                    responseObj.status = false;
                    responseObj.msg = "Error getting recordings";
                    responseObj.err = err;
                    resolve(responseObj);
                  } else {
                    responseObj.status = true;
                    responseObj.data = result;
                    resolve(responseObj);
                  }
                }
              );
        } else {
            resolve(result);
        }
    })
    });

  return recordingsPromise;
}

var getRecordingDetails =  function(accessToken, refreshToken, expiresIn, userId, meetingId) {
    
  var recordingsPromise = new Promise((resolve,reject) => {
   
  var bcURL = `https://api.zoom.us/v2/meetings/${meetingId}/recordings`;

  let responseObj = {};

  refreshTokens(accessToken, refreshToken, expiresIn, userId).then(result => {
      if (result.status === true) {
          request.get(
              {
                headers: {
                  "content-type": "application/json",
                  Authorization: "Bearer " + result.accessToken
                },
                url: bcURL
              },
              (error, response, body) => {
                let result = JSON.parse(body);
      
                console.log(bcURL)
                if (error) {
                  responseObj.status = false;
                  responseObj.msg = "Error getting recordings";
                  responseObj.err = err;
                  resolve(responseObj);
                } else {
                  responseObj.status = true;
                  responseObj.data = result;
                  resolve(responseObj);
                }
              }
            );
      } else {
          resolve(result);
      }
  })
  });

return recordingsPromise;
}

var getRecordingSettings =  function(accessToken, refreshToken, expiresIn, userId, meetingId) {
    
  var recordingsPromise = new Promise((resolve,reject) => {
   
  var bcURL = `https://api.zoom.us/v2/meetings/${meetingId}/recordings/settings`;

  let responseObj = {};

  refreshTokens(accessToken, refreshToken, expiresIn, userId).then(result => {
      if (result.status === true) {
          request.get(
              {
                headers: {
                  "content-type": "application/json",
                  Authorization: "Bearer " + result.accessToken
                },
                url: bcURL
              },
              (error, response, body) => {
                let result = JSON.parse(body);
      
                console.log(bcURL)
                if (error) {
                  responseObj.status = false;
                  responseObj.msg = "Error getting recordings";
                  responseObj.err = err;
                  resolve(responseObj);
                } else {
                  responseObj.status = true;
                  responseObj.data = result;
                  resolve(responseObj);
                }
              }
            );
      } else {
          resolve(result);
      }
  })
  });

return recordingsPromise;
}


var refreshTokens = function(accessToken, refreshToken, expiresIn, userId) {
    var db = mongo.getDB();
    var refreshTokenPromise = new Promise((resolve,reject) => {
    
    let responseObj = {};
    let clientId = 'CL1jHQnHSLOVE5HIDQ7QCg';
    let clientSecret = 'yWkx0u0tfO40BBmS3vPUzEauSaIvgy8K';

    var now = new Date();
    var expires = new Date(expiresIn);
    // Check if accessToken is expired or not 
    
    if(now < expires) {
        console.log("Not Expired");
        responseObj.status = true;
        responseObj.accessToken = accessToken;
        resolve(responseObj);
    } else {
        console.log("Expired");
        var options = {
            method: 'POST',
            url: 'https://zoom.us/oauth/token?grant_type=refresh_token&refresh_token=' + refreshToken,
            headers: {
              /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
              **/
             Authorization: 'Basic ' + Buffer.from(zoomCredentials.clientId + ':' + zoomCredentials.clientSecret).toString('base64')
            }
        };
        // console.log(refreshToken);
        request(options, function (error, response, body) {
            
          const json = JSON.parse(body);
          // console.log(json);
          if(!json.error) {
               // Check payload
               let zoom = {};
               var now = new Date();
        
               let expiryDate = new Date(now.getTime() + json.expires_in*1000);
                      
               zoom.accessToken = encryption.encrypt(json.access_token);
               zoom.refreshToken = encryption.encrypt(json.refresh_token);
               zoom.expiresIn = expiryDate;
               db.collection("integration_creds").update(
                { user_id: userId },
                { $set: { 'zoom.accessToken' : zoom.accessToken , 'zoom.refreshToken': zoom.refreshToken, 'zoom.expiresIn': zoom.expiresIn, updated_time: new Date() } },
                { upsert: false },
                function(err, result) {
                  if (err) {
                    responseObj.status = false;
                    resolve(responseObj);
                  } else {
                    responseObj.status = true;
                    responseObj.accessToken = json.access_token;
                    resolve(responseObj);
                  }
                }
              );
          } else {
            responseObj.status = false;
            resolve(responseObj);
          }
    
        });
    }

    
  });

  return refreshTokenPromise;
}

var getMeetingDetails =  function(accessToken, refreshToken, expiresIn, userId, meetingId) {
    
  var meetingPromise = new Promise((resolve,reject) => {
   
  var bcURL = `https://api.zoom.us/v2/meetings/${meetingId}`;

  let responseObj = {};

  refreshTokens(accessToken, refreshToken, expiresIn, userId).then(result => {
      if (result.status === true) {
          request.get(
              {
                headers: {
                  "content-type": "application/json",
                  Authorization: "Bearer " + result.accessToken
                },
                url: bcURL
              },
              (error, response, body) => {
                let result = JSON.parse(body);
      
                console.log(bcURL)
                if (error) {
                  responseObj.status = false;
                  responseObj.msg = "Error getting recordings";
                  responseObj.err = err;
                  resolve(responseObj);
                } else {
                  responseObj.status = true;
                  responseObj.data = result;
                  resolve(responseObj);
                }
              }
            );
      } else {
          resolve(result);
      }
  })
  });

return meetingPromise;
}

module.exports = {
    saveZoomUserDetails:saveZoomUserDetails,
    getZoomRecordings: getZoomRecordings,
    getRecordingDetails: getRecordingDetails,
    getRecordingSettings:getRecordingSettings,
    refreshTokens: refreshTokens,
    getMeetingDetails: getMeetingDetails
    
  }