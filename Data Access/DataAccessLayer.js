
var createApikey = function (mongoConnection){
    
    return function(zapierUser){
        var db = mongoConnection.getDB();
        
            var responseObj = {}
            var newUser = Object.assign({},zapierUser)
        return new Promise(function(resolve,reject){
            
            db.collection('mv_sm_zapier').insertOne(newUser,function(err,result){
                if(err){
                    responseObj.status = false;
                    responseObj.err = err;
                    responseObj.msg = "Error saving setting please try again later";
                    resolve(responseObj)
                }else{
                    responseObj.status = true;
                    responseObj.data = result;

                    resolve(responseObj)
                }
            })
        })
    }
}
var getZapierUser = function (mongoConnection){
    
    return function(email,api_key){
        var db = mongoConnection.getDB();
        
            var responseObj = {}
           
        return new Promise(function(resolve,reject){
            
            db.collection('mv_sm_zapier').findOne({'email': email, 'api_key' : api_key},function(err,result){
                console.log(result)
                if(err){
                    responseObj.status = false;
                    responseObj.err = err;
                    responseObj.msg = "Errorfinding zapier user please try again later";
                    resolve(responseObj)
                }else{
                    responseObj.status = true;
                    responseObj.data = result;

                    resolve(responseObj)
                }
            })
        })
    }
}
var printData = function (mongoConnection){
    
    return function(email,updateObj){
        var db = mongoConnection.getDB();
        
            var responseObj = {}
            //  var data = Object.assign({},data)
        return new Promise(function(resolve,reject){
            
            db.collection('mv_sm_zapier').updateOne({'email': email},{ $set: { 'data': updateObj.data}},function(err,result){

                if(err){
                    responseObj.status = false;
                    responseObj.err = err;
                    responseObj.msg = "Error saving setting please try again later";
                    resolve(responseObj)
                }else{
                    responseObj.status = true;
                    responseObj.data = result;

                    resolve(responseObj)
                }
            })
        })
    }
}

module.exports ={
    createApikey,
    getZapierUser,
    printData
}