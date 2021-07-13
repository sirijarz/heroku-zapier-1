const mongo = require('../../../utilities/dbConnections');


var addDefaultTemplate = function(userId){
    var db = mongo.getDB();
        var responseObj = {}

        var templateObj = {};
        templateObj.user_id = userId;
        templateObj.default_template = {
            id: "Default Meeting",
            title: "External Meeting (Default)"
        };
        templateObj.templates =  [
            {
                "title":"External Meeting (Default)",
                "source":"marsview",
                "id":"Default Meeting",
                "tag_list":[
                    {
                        "category":"Q & A",
                        "source":"marsview",
                        "enabled":true,
                        "tags":[],
                        "id":"default-questions-3"
                      },
                      {
                        "category":"Actions",
                        "source":"marsview",
                        "enabled":true,
                        "tags":[],
                        "id":"default-actions-1"
                      },
                  {
                    "category":"Highlights",
                    "source":"marsview",
                    "enabled":true,
                    "tags":[
                  ],
                    "id":"default-short-notes-3"
                  },
                  {
                    "category":"Notes",
                    "source":"marsview",
                    "enabled":true,
                    "tags":[
                      {
                          "value": "book a calendar",
                          "type": "default"
                      },
                      {
                          "value": "How are you",
                          "type": "default"
                      },
                      {
                          "value": "where do you live",
                          "type": "default"
                      },
                      {
                          "value": "where do you go on vacations",
                          "type": "default"
                      },
                      {
                          "value": "sports interest",
                          "type": "default"
                      },
                      {
                          "value": "how old are kids",
                          "type": "default"
                      },
                      {
                          "value": "financial advisor",
                          "type": "default"
                      },
                      {
                          "value": "retirement goals",
                          "type": "default"
                      },
                      {
                          "value": "retirement plan",
                          "type": "default"
                      },
                      {
                          "value": "investment strategy",
                          "type": "default"
                      },
                      {
                          "value": "estate plan",
                          "type": "default"
                      },
                      {
                          "value": "advanced care directive",
                          "type": "default"
                      },
                      {
                          "value": "trust",
                          "type": "default"
                      },
                      {
                          "value": "agenda",
                          "type": "default"
                      },
                      {
                          "value": "come to the right place",
                          "type": "default"
                      },
                      {
                          "value": "my clients",
                          "type": "default"
                      },
                      {
                          "value": "financial goals",
                          "type": "default"
                      },
                      {
                          "value": "financial planning",
                          "type": "default"
                      },
                      {
                          "value": "investment management",
                          "type": "default"
                      },
                      {
                          "value": "improve financial situation",
                          "type": "default"
                      },
                      {
                          "value": "understand your needs",
                          "type": "default"
                      },
                      {
                          "value": "what i offer",
                          "type": "default"
                      },
                      {
                          "value": "good fit",
                          "type": "default"
                      },
                      {
                          "value": "work together",
                          "type": "default"
                      },
                      {
                          "value": "valuable insight",
                          "type": "default"
                      },
                      {
                          "value": "take notes",
                          "type": "default"
                      },
                      {
                          "value": "assistant",
                          "type": "default"
                      },
                      {
                          "value": "information package",
                          "type": "default"
                      },
                      {
                          "value": "client experience",
                          "type": "default"
                      },
                      {
                          "value": "services i provide",
                          "type": "default"
                      },
                      {
                          "value": "my approach is different",
                          "type": "default"
                      },
                      {
                          "value": "benchmarks",
                          "type": "default"
                      },
                      {
                          "value": "qualifications",
                          "type": "default"
                      },
                      {
                          "value": "know you a bit better",
                          "type": "default"
                      },
                      {
                          "value": "about your background",
                          "type": "default"
                      },
                      {
                          "value": "your financial situation",
                          "type": "default"
                      },
                      {
                          "value": "motivation behind the decision",
                          "type": "default"
                      },
                      {
                          "value": "working on your finances",
                          "type": "default"
                      },
                      {
                          "value": "WHY seeking an advisor",
                          "type": "default"
                      },
                      {
                          "value": "why financial planning",
                          "type": "default"
                      },
                      {
                          "value": "provide for your family",
                          "type": "default"
                      },
                      {
                          "value": "your experience with money",
                          "type": "default"
                      },
                      {
                          "value": "greatest financial win",
                          "type": "default"
                      },
                      {
                          "value": "how did you feel",
                          "type": "default"
                      },
                      {
                          "value": "financial dreams",
                          "type": "default"
                      },
                      {
                          "value": "current financial situation",
                          "type": "default"
                      },
                      {
                          "value": "set expectations",
                          "type": "default"
                      },
                      {
                          "value": "achieve your financial goals",
                          "type": "default"
                      },
                      {
                          "value": "I can help you",
                          "type": "default"
                      },
                      {
                          "value": "Build a Financial Plan",
                          "type": "default"
                      },
                      {
                          "value": "clarity of financial direction",
                          "type": "default"
                      },
                      {
                          "value": "Create an Investment Plan",
                          "type": "default"
                      },
                      {
                          "value": "your risk tolerance",
                          "type": "default"
                      },
                      {
                          "value": "financial issues",
                          "type": "default"
                      },
                      {
                          "value": "wealth events",
                          "type": "default"
                      },
                      {
                          "value": "Determine a Retirement Income Plan",
                          "type": "default"
                      },
                      {
                          "value": "golden years",
                          "type": "default"
                      },
                      {
                          "value": "WHAT I OFFER",
                          "type": "default"
                      },
                      {
                          "value": "ongoing relationship",
                          "type": "default"
                      },
                      {
                          "value": "avoid financial mistakes",
                          "type": "default"
                      },
                      {
                          "value": "what I charge",
                          "type": "default"
                      },
                      {
                          "value": "advisory monthly fee",
                          "type": "default"
                      },
                      {
                          "value": "portfolio management",
                          "type": "default"
                      },
                      {
                          "value": "advisory process",
                          "type": "default"
                      },
                      {
                          "value": "monthly quarterly report",
                          "type": "default"
                      },
                      {
                          "value": "tax planning",
                          "type": "default"
                      },
                      {
                          "value": "estate plan",
                          "type": "default"
                      },
                      {
                          "value": "change about your financial situation",
                          "type": "default"
                      },
                      {
                          "value": "money to do for you",
                          "type": "default"
                      },
                      {
                          "value": "investment philosophy",
                          "type": "default"
                      },
                      {
                          "value": "of a lifestyle",
                          "type": "default"
                      },
                      {
                          "value": "planned out",
                          "type": "default"
                      },
                      {
                          "value": "your future",
                          "type": "default"
                      },
                      {
                          "value": "your concerns",
                          "type": "default"
                      },
                      {
                          "value": "make financial sense",
                          "type": "default"
                      },
                      {
                          "value": "thoughts on",
                          "type": "default"
                      },
                      {
                          "value": "high fee",
                          "type": "default"
                      },
                      {
                          "value": "cost of",
                          "type": "default"
                      },
                      {
                          "value": "think about it",
                          "type": "default"
                      },
                      {
                          "value": "over time",
                          "type": "default"
                      },
                      {
                          "value": "not ready",
                          "type": "default"
                      },
                      {
                          "value": "I already work with an advisor",
                          "type": "default"
                      },
                      {
                          "value": "not investing right now",
                          "type": "default"
                      },
                      {
                          "value": "Plan for the Future",
                          "type": "default"
                      },
                      {
                          "value": "Financial Planning",
                          "type": "default"
                      },
                      {
                          "value": "Retirement Income",
                          "type": "default"
                      },
                      {
                          "value": "Estate Planning",
                          "type": "default"
                      },
                      {
                          "value": "Business Succession",
                          "type": "default"
                      },
                      {
                          "value": "Meet Needs",
                          "type": "default"
                      },
                      {
                          "value": "Income Planning",
                          "type": "default"
                      },
                      {
                          "value": "Expense/Budgeting",
                          "type": "default"
                      },
                      {
                          "value": "Social Security",
                          "type": "default"
                      },
                      {
                          "value": "Corporate Benefits",
                          "type": "default"
                      },
                      {
                          "value": "Simplify Finances",
                          "type": "default"
                      },
                      {
                          "value": "Investment & Savings",
                          "type": "default"
                      },
                      {
                          "value": "Home & Assets",
                          "type": "default"
                      },
                      {
                          "value": "Automate",
                          "type": "default"
                      },
                      {
                          "value": "Aggregate",
                          "type": "default"
                      },
                      {
                          "value": "Help Children",
                          "type": "default"
                      },
                      {
                          "value": "Allowance & Savings",
                          "type": "default"
                      },
                      {
                          "value": "Loans & Gifting",
                          "type": "default"
                      },
                      {
                          "value": "Special Needs",
                          "type": "default"
                      },
                      {
                          "value": "Learning About Money",
                          "type": "default"
                      },
                      {
                          "value": "Execute Intentions",
                          "type": "default"
                      },
                      {
                          "value": "Wills & Trusts",
                          "type": "default"
                      },
                      {
                          "value": "Power of Attorney",
                          "type": "default"
                      },
                      {
                          "value": "Medical Directives",
                          "type": "default"
                      },
                      {
                          "value": "Protect Heirs",
                          "type": "default"
                      },
                      {
                          "value": "Ease Life's Transitions",
                          "type": "default"
                      },
                      {
                          "value": "Marriage/Divorce",
                          "type": "default"
                      },
                      {
                          "value": "Birth/Death",
                          "type": "default"
                      },
                      {
                          "value": "Leaving My Home",
                          "type": "default"
                      },
                      {
                          "value": "Career & Profession",
                          "type": "default"
                      },
                      {
                          "value": "Enhance Lifestyle",
                          "type": "default"
                      },
                      {
                          "value": "Vacation Home",
                          "type": "default"
                      },
                      {
                          "value": "Family Trips & Events",
                          "type": "default"
                      },
                      {
                          "value": "Hobbies & Leisure",
                          "type": "default"
                      },
                      {
                          "value": "Lease vs. Buy",
                          "type": "default"
                      },
                      {
                          "value": "Reduce Taxes",
                          "type": "default"
                      },
                      {
                          "value": "Tax-Loss Harvesting",
                          "type": "default"
                      },
                      {
                          "value": "Asset Location",
                          "type": "default"
                      },
                      {
                          "value": "Stock Options",
                          "type": "default"
                      },
                      {
                          "value": "Strategies",
                          "type": "default"
                      },
                      {
                          "value": "Assist Parents",
                          "type": "default"
                      },
                      {
                          "value": "Long-Term Care",
                          "type": "default"
                      },
                      {
                          "value": "Eldercare Counseling",
                          "type": "default"
                      },
                      {
                          "value": "Medical & Housing",
                          "type": "default"
                      },
                      {
                          "value": "Help Beneficiaries",
                          "type": "default"
                      },
                      {
                          "value": "Designations",
                          "type": "default"
                      },
                      {
                          "value": "Special Needs",
                          "type": "default"
                      },
                      {
                          "value": "Trusts & Trustees",
                          "type": "default"
                      },
                      {
                          "value": "Valuation/Projections",
                          "type": "default"
                      },
                      {
                          "value": "Live My Values",
                          "type": "default"
                      },
                      {
                          "value": "Clarify My Mission",
                          "type": "default"
                      },
                      {
                          "value": "Give to Community",
                          "type": "default"
                      },
                      {
                          "value": "Volunteer My Time",
                          "type": "default"
                      },
                      {
                          "value": "Align Investments",
                          "type": "default"
                      },
                      {
                          "value": "Manage Health",
                          "type": "default"
                      },
                      {
                          "value": "Medicare/Supplemental",
                          "type": "default"
                      },
                      {
                          "value": "Long-Term Care",
                          "type": "default"
                      },
                      {
                          "value": "Care Concierge",
                          "type": "default"
                      },
                      {
                          "value": "Wellness & Nutrition",
                          "type": "default"
                      },
                      {
                          "value": "Protect Assets",
                          "type": "default"
                      },
                      {
                          "value": "Insurance",
                          "type": "default"
                      },
                      {
                          "value": "Liquidity",
                          "type": "default"
                      },
                      {
                          "value": "Business Continuity",
                          "type": "default"
                      },
                      {
                          "value": "Corporate Structure",
                          "type": "default"
                      },
                      {
                          "value": "Fund Education",
                          "type": "default"
                      },
                      {
                          "value": "Savings & Investments",
                          "type": "default"
                      },
                      {
                          "value": "Pre-Paid Tuition",
                          "type": "default"
                      },
                      {
                          "value": "Student/Parent Loans",
                          "type": "default"
                      },
                      {
                          "value": "Grants/Scholarships",
                          "type": "default"
                      },
                      {
                          "value": "Give to Charities",
                          "type": "default"
                      },
                      {
                          "value": "Planning Strategies",
                          "type": "default"
                      },
                      {
                          "value": "Tax-Advantaged Gifts",
                          "type": "default"
                      },
                      {
                          "value": "Low-Bas",
                          "type": "default"
                      },
                        {
                            "value": "Given a notice",
                            "type": "default"
                        },
                        {
                            "value": "added a remark",
                            "type": "default"
                        },
                        {
                            "value": "marked important",
                            "type": "default"
                        },
                        {
                            "value": "when observed",
                            "type": "default"
                        },
                        {
                            "value": "they made a record",
                            "type": "default"
                        },
                        {
                            "value": "jotted down",
                            "type": "default"
                        },
                        {
                            "value": "made a point",
                            "type": "default"
                        },
                        {
                            "value": "that is crucial",
                            "type": "default"
                        },
                        {
                            "value": "It is significant",
                            "type": "default"
                        },
                        {
                            "value": "Strategically",
                            "type": "default"
                        },
                        {
                            "value": "the Pricing",
                            "type": "default"
                        },
                        {
                            "value": "describe your business",
                            "type": "default"
                        },
                        {
                            "value": "driving this change",
                            "type": "default"
                        },
                        {
                            "value": "major problems",
                            "type": "default"
                        },
                        {
                            "value": "currently using",
                            "type": "default"
                        },
                        {
                            "value": "issues you are having",
                            "type": "default"
                        },
                        {
                            "value": "specific features",
                            "type": "default"
                        },
                        {
                            "value": "new solution",
                            "type": "default"
                        },
                        {
                            "value": "how many users",
                            "type": "default"
                        },
                        {
                            "value": "additional users",
                            "type": "default"
                        },
                        {
                            "value": "considering other",
                            "type": "default"
                        },
                        {
                            "value": "time frame",
                            "type": "default"
                        },
                        {
                            "value": "final decision",
                            "type": "default"
                        },
                        {
                            "value": "impelmentation",
                            "type": "default"
                        },
                        {
                            "value": "a budget",
                            "type": "default"
                        },
                        {
                            "value": "amount of",
                            "type": "default"
                        },
                        {
                            "value": "many people",
                            "type": "default"
                        },
                        {
                            "value": "individual",
                            "type": "default"
                        },
                        {
                            "value": "experience of",
                            "type": "default"
                        },
                        {
                            "value": "decide to buy",
                            "type": "default"
                        },
                        {
                            "value": "buy this item",
                            "type": "default"
                        },
                        {
                            "value": "the measures",
                            "type": "default"
                        },
                        {
                            "value": "the challenges",
                            "type": "default"
                        },
                        {
                            "value": "consult with",
                            "type": "default"
                        },
                        {
                            "value": "decide on",
                            "type": "default"
                        },
                        {
                            "value": "make the purchase",
                            "type": "default"
                        },
                        {
                            "value": "most concerned about",
                            "type": "default"
                        },
                        {
                            "value": "expect to see",
                            "type": "default"
                        },
                        {
                            "value": "obstacle",
                            "type": "default"
                        },
                        {
                            "value": "reaching your goals",
                            "type": "default"
                        },
                        {
                            "value": "right time",
                            "type": "default"
                        },
                        {
                            "value": "go forward",
                            "type": "default"
                        },
                        {
                            "value": "about your company",
                            "type": "default"
                        },
                        {
                            "value": "your goals",
                            "type": "default"
                        },
                        {
                            "value": "achieve these goals",
                            "type": "default"
                        },
                        {
                            "value": "looking for",
                            "type": "default"
                        },
                        {
                            "value": "the issues",
                            "type": "default"
                        },
                        {
                            "value": "potential solution",
                            "type": "default"
                        },
                        {
                            "value": "roadblocks",
                            "type": "default"
                        },
                        {
                            "value": "timeline",
                            "type": "default"
                        },
                        {
                            "value": "choosing a vendor",
                            "type": "default"
                        },
                        {
                            "value": "purchasing decision",
                            "type": "default"
                        },
                        {
                            "value": "curve balls",
                            "type": "default"
                        },
                        {
                            "value": "make it easy",
                            "type": "default"
                        },
                        {
                            "value": "need anything",
                            "type": "default"
                        },
                        {
                            "value": "benefits of",
                            "type": "default"
                        },
                        {
                            "value": "afford to",
                            "type": "default"
                        },
                        {
                            "value": "decision maker",
                            "type": "default"
                        },
                        {
                            "value": "decision process",
                            "type": "default"
                        },
                        {
                            "value": "ideal world",
                            "type": "default"
                        },
                        {
                            "value": "doing it now",
                            "type": "default"
                        },
                        {
                            "value": "like most",
                            "type": "default"
                        },
                        {
                            "value": "like least",
                            "type": "default"
                        },
                        {
                            "value": "the situation",
                            "type": "default"
                        },
                        {
                            "value": "to motivate",
                            "type": "default"
                        },
                        {
                            "value": "to change",
                            "type": "default"
                        },
                        {
                            "value": "change of",
                            "type": "default"
                        },
                        {
                            "value": "stakeholders",
                            "type": "default"
                        },
                        {
                            "value": "comparing with",
                            "type": "default"
                        },
                        {
                            "value": "your budget",
                            "type": "default"
                        },
                        {
                            "value": "purchasing decision",
                            "type": "default"
                        },
                        {
                            "value": "win your business",
                            "type": "default"
                        },
                        {
                            "value": "a deal",
                            "type": "default"
                        },
                        {
                            "value": "compelling event",
                            "type": "default"
                        },
                        {
                            "value": "reach out",
                            "type": "default"
                        },
                        {
                            "value": "discovery of",
                            "type": "default"
                        },{
                          "value": "Balanced",
                          "type": "default"
                      },
                      {
                          "value": "Integrated",
                          "type": "default"
                      },
                      {
                          "value": "Total of",
                          "type": "default"
                      },
                      {
                          "value": "Compatible",
                          "type": "default"
                      },
                      {
                          "value": "Synchronized",
                          "type": "default"
                      },
                      {
                          "value": "Optimal",
                          "type": "default"
                      },
                      {
                          "value": "Responsive",
                          "type": "default"
                      },
                      {
                          "value": "Functional",
                          "type": "default"
                      },
                      {
                          "value": "Parallel",
                          "type": "default"
                      },
                      {
                          "value": "Systemetized",
                          "type": "default"
                      },
                      {
                          "value": "Management",
                          "type": "default"
                      },
                      {
                          "value": "Organization",
                          "type": "default"
                      },
                      {
                          "value": "Receiprocal",
                          "type": "default"
                      },
                      {
                          "value": "Monitored",
                          "type": "default"
                      },
                      {
                          "value": "Digital",
                          "type": "default"
                      },
                      {
                          "value": "Modular",
                          "type": "default"
                      },
                      {
                          "value": "Transitional",
                          "type": "default"
                      },
                      {
                          "value": "Incremental",
                          "type": "default"
                      },
                      {
                          "value": "Third Generation",
                          "type": "default"
                      },
                      {
                          "value": "Policy",
                          "type": "default"
                      },
                      {
                          "value": "Contingency",
                          "type": "default"
                      },
                      {
                          "value": "Hardware",
                          "type": "default"
                      },
                      {
                          "value": "Software",
                          "type": "default"
                      },
                      {
                          "value": "Projection",
                          "type": "default"
                      },
                      {
                          "value": "Timeframe",
                          "type": "default"
                      },
                      {
                          "value": "Concept",
                          "type": "default"
                      },
                      {
                          "value": "Programming",
                          "type": "default"
                      },
                      {
                          "value": "Mobility",
                          "type": "default"
                      },
                      {
                          "value": "Capability",
                          "type": "default"
                      },
                      {
                          "value": "Flexibility",
                          "type": "default"
                      },
                      {
                          "value": "Options",
                          "type": "default"
                      },
                      {
                          "value": "Advertisement",
                          "type": "default"
                      },
                      {
                          "value": "Big Data",
                          "type": "default"
                      },
                      {
                          "value": "Content Is King",
                          "type": "default"
                      },
                      {
                          "value": "Customer Journey",
                          "type": "default"
                      },
                      {
                          "value": "Deep Dive",
                          "type": "default"
                      },
                      {
                          "value": "Growth Hacking",
                          "type": "default"
                      },
                      {
                          "value": "Hyperlocal",
                          "type": "default"
                      },
                      {
                          "value": "Low Hanging Fruit",
                          "type": "default"
                      },
                      {
                          "value": "Jacking",
                          "type": "default"
                      },
                      {
                          "value": "Move the Needle",
                          "type": "default"
                      },
                      {
                          "value": "Retargeting",
                          "type": "default"
                      },
                      {
                          "value": "Alignment",
                          "type": "default"
                      },
                      {
                          "value": "Disruptor/Disruptive",
                          "type": "default"
                      },
                      {
                          "value": "Move the Needle",
                          "type": "default"
                      },
                      {
                          "value": "Retargeting",
                          "type": "default"
                      },
                      {
                          "value": "Alignment",
                          "type": "default"
                      },
                      {
                          "value": "Disruptor/Disruptive",
                          "type": "default"
                      },
                      {
                          "value": "Freemium",
                          "type": "default"
                      },
                      {
                          "value": "Leverage",
                          "type": "default"
                      },
                      {
                          "value": "Quick Win",
                          "type": "default"
                      },
                      {
                          "value": "Quota",
                          "type": "default"
                      },
                      {
                          "value": "Value Add",
                          "type": "default"
                      },
                      {
                          "value": "Wheelhouse",
                          "type": "default"
                      },
                      {
                          "value": "Customer Acquisition",
                          "type": "default"
                      },
                      {
                          "value": "Customer-Centric/Customer Centricity",
                          "type": "default"
                      },
                      {
                          "value": "Customer Lifecycle",
                          "type": "default"
                      },
                      {
                          "value": "Customer Retention",
                          "type": "default"
                      },
                      {
                          "value": "Personalization",
                          "type": "default"
                      },
                      {
                          "value": "Touchpoint",
                          "type": "default"
                      },
                      {
                          "value": "Voice of the Customer",
                          "type": "default"
                      },
                      {
                          "value": "Clickbait",
                          "type": "default"
                      },
                      {
                          "value": "Earned Media",
                          "type": "default"
                      },
                      {
                          "value": "Live Streaming",
                          "type": "default"
                      },
                      {
                          "value": "Micro-Influencer",
                          "type": "default"
                      },
                      {
                          "value": "User-Generated Content (UGC)",
                          "type": "default"
                      },
                      {
                          "value": "FOMO",
                          "type": "default"
                      },
                      {
                          "value": "Lit",
                          "type": "default"
                      },
                      {
                          "value": "Spilling Tea",
                          "type": "default"
                      },
                      {
                          "value": "TL;DR",
                          "type": "default"
                      },
                      {
                          "value": "Return on investment",
                          "type": "default"
                      },
                      {
                          "value": "Synergy",
                          "type": "default"
                      },
                      {
                          "value": "Customer journey",
                          "type": "default"
                      },
                      {
                          "value": "Deep dive",
                          "type": "default"
                      },
                      {
                          "value": "Impact",
                          "type": "default"
                      },
                      {
                          "value": "Ballpark",
                          "type": "default"
                      },
                      {
                          "value": "Core competency",
                          "type": "default"
                      },
                      {
                          "value": "Visibility",
                          "type": "default"
                      },
                      {
                          "value": "Startup",
                          "type": "default"
                      },
                      {
                          "value": "Sustainability",
                          "type": "default"
                      },
                      {
                          "value": "Pain point",
                          "type": "default"
                      },
                      {
                          "value": "Quick win",
                          "type": "default"
                      },
                      {
                          "value": "Hyperlocal",
                          "type": "default"
                      },
                      {
                          "value": "Next generation",
                          "type": "default"
                      },
                      {
                          "value": "Holistic",
                          "type": "default"
                      },
                      {
                          "value": "Logistics",
                          "type": "default"
                      },
                      {
                          "value": "Alignment",
                          "type": "default"
                      },
                      {
                          "value": "Freemium",
                          "type": "default"
                      },
                      {
                          "value": "Quota",
                          "type": "default"
                      },
                      {
                          "value": "Touchpoint",
                          "type": "default"
                      },
                      {
                          "value": "Retargeting",
                          "type": "default"
                      },
                      {
                          "value": "Content is king",
                          "type": "default"
                      },
                      {
                          "value": "Big data",
                          "type": "default"
                      },
                      {
                          "value": "Incentivize",
                          "type": "default"
                      },
                      {
                          "value": "Move the needle",
                          "type": "default"
                      },
                      {
                          "value": "Unpack",
                          "type": "default"
                      },
                      {
                          "value": "Ping",
                          "type": "default"
                      },
                      {
                          "value": "Drill down",
                          "type": "default"
                      },
                      {
                          "value": "Ecosystem",
                          "type": "default"
                      },
                      {
                          "value": "Bandwidth",
                          "type": "default"
                      },
                      {
                          "value": "Scalable",
                          "type": "default"
                      },
                      {
                          "value": "Risk Management",
                          "type": "default"
                      },
                      {
                          "value": "Benchmark",
                          "type": "default"
                      },
                      {
                          "value": "Paradigm",
                          "type": "default"
                      },
                      {
                          "value": "Review",
                          "type": "default"
                      },
                      {
                          "value": "Life Cycle",
                          "type": "default"
                      },
                      {
                          "value": "Off-line",
                          "type": "default"
                      },
                      {
                          "value": "Proactive",
                          "type": "default"
                      },
                      {
                          "value": "Strategy",
                          "type": "default"
                      },
                      {
                          "value": "Granular",
                          "type": "default"
                      },
                      {
                          "value": "Markets",
                          "type": "default"
                      },
                      {
                          "value": "Sales Driven",
                          "type": "default"
                      },
                      {
                          "value": "Free Space",
                          "type": "default"
                      },
                      {
                          "value": "Disruptive",
                          "type": "default"
                      },
                      {
                          "value": "Facilitate",
                          "type": "default"
                      },
                      {
                          "value": "Timeline",
                          "type": "default"
                      },
                      {
                          "value": "Penetration",
                          "type": "default"
                      },
                      {
                          "value": "Customer Value",
                          "type": "default"
                      },
                      {
                          "value": "Schedule",
                          "type": "default"
                      },
                      {
                          "value": "Touch Base",
                          "type": "default"
                      },
                      {
                          "value": "Restructuring",
                          "type": "default"
                      },
                      {
                          "value": "Drop the Ball",
                          "type": "default"
                      },
                      {
                          "value": "ROI",
                          "type": "default"
                      },
                      {
                          "value": "Cost",
                          "type": "default"
                      },
                      {
                          "value": "Out of the Loop",
                          "type": "default"
                      },
                      {
                          "value": "30000 feet at",
                          "type": "default"
                      },
                      {
                          "value": "actionable",
                          "type": "default"
                      },
                      {
                          "value": "at the end of the day",
                          "type": "default"
                      },
                      {
                          "value": "bandwidth",
                          "type": "default"
                      },
                      {
                          "value": "best of breed",
                          "type": "default"
                      },
                      {
                          "value": "best practices",
                          "type": "default"
                      },
                      {
                          "value": "boil the ocean",
                          "type": "default"
                      },
                      {
                          "value": "bring to the table",
                          "type": "default"
                      },
                      {
                          "value": "business model",
                          "type": "default"
                      },
                      {
                          "value": "buy-in",
                          "type": "default"
                      },
                      {
                          "value": "c-level",
                          "type": "default"
                      },
                      {
                          "value": "centers of excellence",
                          "type": "default"
                      },
                      {
                          "value": "circle back around",
                          "type": "default"
                      },
                      {
                          "value": "circle with",
                          "type": "default"
                      },
                      {
                          "value": "close the loop",
                          "type": "default"
                      },
                      {
                          "value": "commoditize ; commoditized",
                          "type": "default"
                      },
                      {
                          "value": "componentize",
                          "type": "default"
                      },
                      {
                          "value": "core competencies",
                          "type": "default"
                      },
                      {
                          "value": "critical path",
                          "type": "default"
                      },
                      {
                          "value": "cycles",
                          "type": "default"
                      },
                      {
                          "value": "deliverables",
                          "type": "default"
                      },
                      {
                          "value": "descope",
                          "type": "default"
                      },
                      {
                          "value": "dial-in",
                          "type": "default"
                      },
                      {
                          "value": "dialogue",
                          "type": "default"
                      },
                      {
                          "value": "disambiguate",
                          "type": "default"
                      },
                      {
                          "value": "disincent",
                          "type": "default"
                      },
                      {
                          "value": "disintermediate",
                          "type": "default"
                      },
                      {
                          "value": "drill-down",
                          "type": "default"
                      },
                      {
                          "value": "drinking the kool-aid",
                          "type": "default"
                      },
                      {
                          "value": "driver",
                          "type": "default"
                      },
                      {
                          "value": "eat(ing) your own dog food",
                          "type": "default"
                      },
                      {
                          "value": "ecosystem",
                          "type": "default"
                      },
                      {
                          "value": "elevator story",
                          "type": "default"
                      },
                      {
                          "value": "enabler",
                          "type": "default"
                      },
                      {
                          "value": "end-to-end",
                          "type": "default"
                      },
                      {
                          "value": "facetime",
                          "type": "default"
                      },
                      {
                          "value": "feature/scope creep",
                          "type": "default"
                      },
                      {
                          "value": "functionality",
                          "type": "default"
                      },
                      {
                          "value": "gain traction",
                          "type": "default"
                      },
                      {
                          "value": "go-live",
                          "type": "default"
                      },
                      {
                          "value": "going forward",
                          "type": "default"
                      },
                      {
                          "value": "granular ; granularity",
                          "type": "default"
                      },
                      {
                          "value": "heads-up (n. sorta)",
                          "type": "default"
                      },
                      {
                          "value": "helicopter view",
                          "type": "default"
                      },
                      {
                          "value": "high-level",
                          "type": "default"
                      },
                      {
                          "value": "incent",
                          "type": "default"
                      },
                      {
                          "value": "incentivize",
                          "type": "default"
                      },
                      {
                          "value": "instantiate",
                          "type": "default"
                      },
                      {
                          "value": "leapfrog",
                          "type": "default"
                      },
                      {
                          "value": "learnings",
                          "type": "default"
                      },
                      {
                          "value": "level set",
                          "type": "default"
                      },
                      {
                          "value": "leverage",
                          "type": "default"
                      },
                      {
                          "value": "long-pole item",
                          "type": "default"
                      },
                      {
                          "value": "loop in ; keep in the loop",
                          "type": "default"
                      },
                      {
                          "value": "low-hanging fruit",
                          "type": "default"
                      },
                      {
                          "value": "mindshare",
                          "type": "default"
                      },
                      {
                          "value": "mission-critical",
                          "type": "default"
                      },
                      {
                          "value": "modularize",
                          "type": "default"
                      },
                      {
                          "value": "monetize",
                          "type": "default"
                      },
                      {
                          "value": "net-net",
                          "type": "default"
                      },
                      {
                          "value": "network effects",
                          "type": "default"
                      },
                      {
                          "value": "next steps",
                          "type": "default"
                      },
                      {
                          "value": "offline",
                          "type": "default"
                      },
                      {
                          "value": "operationalize",
                          "type": "default"
                      },
                      {
                          "value": "optics",
                          "type": "default"
                      },
                      {
                          "value": "out of pocket",
                          "type": "default"
                      },
                      {
                          "value": "paradigm [shift]",
                          "type": "default"
                      },
                      {
                          "value": "peel the onion",
                          "type": "default"
                      },
                      {
                          "value": "performance management",
                          "type": "default"
                      },
                      {
                          "value": "ping",
                          "type": "default"
                      },
                      {
                          "value": "proactive",
                          "type": "default"
                      },
                      {
                          "value": "productize",
                          "type": "default"
                      },
                      {
                          "value": "programmatically",
                          "type": "default"
                      },
                      {
                          "value": "pushback",
                          "type": "default"
                      },
                      {
                          "value": "quick win",
                          "type": "default"
                      },
                      {
                          "value": "ramp up ; ramp-up",
                          "type": "default"
                      },
                      {
                          "value": "reach out",
                          "type": "default"
                      },
                      {
                          "value": "real-time",
                          "type": "default"
                      },
                      {
                          "value": "repurpose",
                          "type": "default"
                      },
                      {
                          "value": "robust",
                          "type": "default"
                      },
                      {
                          "value": "roll out ; roll-out",
                          "type": "default"
                      },
                      {
                          "value": "rough order of magnitude",
                          "type": "default"
                      },
                      {
                          "value": "scalable",
                          "type": "default"
                      },
                      {
                          "value": "scope",
                          "type": "default"
                      },
                      {
                          "value": "seamless",
                          "type": "default"
                      },
                      {
                          "value": "skip-level",
                          "type": "default"
                      },
                      {
                          "value": "socialize",
                          "type": "default"
                      },
                      {
                          "value": "solution",
                          "type": "default"
                      },
                      {
                          "value": "soup to nuts",
                          "type": "default"
                      },
                      {
                          "value": "space",
                          "type": "default"
                      },
                      {
                          "value": "special sauce / secret sauce",
                          "type": "default"
                      },
                      {
                          "value": "surface",
                          "type": "default"
                      },
                      {
                          "value": "synergy ; synergize",
                          "type": "default"
                      },
                      {
                          "value": "take to the next level",
                          "type": "default"
                      },
                      {
                          "value": "takeaway",
                          "type": "default"
                      },
                      {
                          "value": "task",
                          "type": "default"
                      },
                      {
                          "value": "touch base",
                          "type": "default"
                      },
                      {
                          "value": "tps reports",
                          "type": "default"
                      },
                      {
                          "value": "traction",
                          "type": "default"
                      },
                      {
                          "value": "turnkey solution",
                          "type": "default"
                      },
                      {
                          "value": "value chain",
                          "type": "default"
                      },
                      {
                          "value": "value proposition",
                          "type": "default"
                      },
                      {
                          "value": "value-add",
                          "type": "default"
                      },
                      {
                          "value": "wet signature",
                          "type": "default"
                      },
                      {
                          "value": "wetware",
                          "type": "default"
                      },
                      {
                          "value": "win-win",
                          "type": "default"
                      },
                      {
                          "value": "world-class",
                          "type": "default"
                      },{
                        "value": "Alignment",
                        "type": "default"
                    },
                    {
                        "value": "Amplify",
                        "type": "default"
                    },
                    {
                        "value": "Artisan artisanal",
                        "type": "default"
                    },
                    {
                        "value": "At the end of the day",
                        "type": "default"
                    },
                    {
                        "value": "Break through the clutter",
                        "type": "default"
                    },
                    {
                        "value": "Bring to the table",
                        "type": "default"
                    },
                    {
                        "value": "Buzzword",
                        "type": "default"
                    },
                    {
                        "value": "Clear goal",
                        "type": "default"
                    },
                    {
                        "value": "Disruptive innovation",
                        "type": "default"
                    },
                    {
                        "value": "Diversity",
                        "type": "default"
                    },
                    {
                        "value": "Emotional intelligence (EQ)",
                        "type": "default"
                    },
                    {
                        "value": "Empowermentcitation needed",
                        "type": "default"
                    },
                    {
                        "value": "Exit strategy",
                        "type": "default"
                    },
                    {
                        "value": "Face timecitation needed",
                        "type": "default"
                    },
                    {
                        "value": "Generation",
                        "type": "default"
                    },
                    {
                        "value": "Globalization",
                        "type": "default"
                    },
                    {
                        "value": "Going forward",
                        "type": "default"
                    },
            
                    {
                      "value": "in the future",
                      "type": "default"
                    },
                    {
                      "value": "from now on",
                      "type": "default"
                    },
                    {
                        "value": "grow the business.",
                        "type": "default"
                    },
                    {
                        "value": "Headlights  to gain visibility into",
                        "type": "default"
                    },
                    {
                        "value": "Heavy lifting",
                        "type": "default"
                    },
                    {
                        "value": "Holistic approach",
                        "type": "default"
                    },
                    {
                        "value": "Impact  instead of effect as a noun",
                        "type": "default"
                    },
                    {
                        "value": "Leverage  used as verb to mean magnify multiply augment or increase.",
                        "type": "default"
                    },
                    {
                        "value": "Millennial",
                        "type": "default"
                    },
                    {
                        "value": "Lateral Violence",
                        "type": "default"
                    },
                    {
                        "value": "Mind share",
                        "type": "default"
                    },
                    {
                        "value": "Moving forwardcitation needed",
                        "type": "default"
                    },
                    {
                        "value": "Mouthfeel",
                        "type": "default"
                    },
                    {
                        "value": "Fleet Dynamism",
                        "type": "default"
                    },
                    {
                        "value": "New normal",
                        "type": "default"
                    },
                    {
                        "value": "On the runway",
                        "type": "default"
                    },
                    {
                        "value": "Optics",
                        "type": "default"
                    },
                    {
                        "value": "Organic growth",
                        "type": "default"
                    },
                    {
                        "value": "Paradigm",
                        "type": "default"
                    },
                    {
                        "value": "Paradigm shift",
                        "type": "default"
                    },
                    {
                        "value": "Patriarchy",
                        "type": "default"
                    },
                    {
                        "value": "Proactive",
                        "type": "default"
                    },
                    {
                        "value": "Push the envelope",
                        "type": "default"
                    },
                    {
                        "value": "Reimagine",
                        "type": "default"
                    },
                    {
                        "value": "Resonate",
                        "type": "default"
                    },
                    {
                        "value": "Roadmap",
                        "type": "default"
                    },
                    {
                        "value": "Robust",
                        "type": "default"
                    },
                    {
                        "value": "Reach out",
                        "type": "default"
                    },
                    {
                        "value": "Rustic",
                        "type": "default"
                    },
                    {
                        "value": "Sea change",
                        "type": "default"
                    },
                    {
                        "value": "Sisterhood",
                        "type": "default"
                    },
                    {
                        "value": "Spin-upcitation needed",
                        "type": "default"
                    },
                    {
                        "value": "Strategic Communication",
                        "type": "default"
                    },
                    {
                        "value": "Stratcom",
                        "type": "default"
                    },{
                      "value": "Accountable talk",
                      "type": "default"
                  },
                  {
                      "value": "Higher order thinking",
                      "type": "default"
                  },
                  {
                      "value": "Invested incitation needed",
                      "type": "default"
                  },
                  {
                      "value": "Run like a business",
                      "type": "default"
                  },
                  {
                      "value": "Student engagement",
                      "type": "default"
                  },
                  {
                      "value": "Common Core",
                      "type": "default"
                  },
                  {
                      "value": "Bloom's Taxonomy",
                      "type": "default"
                  },
                  {
                      "value": "Differentiated instruction",
                      "type": "default"
                  },
                  {
                      "value": "Digital Literacy",
                      "type": "default"
                  },
                  {
                      "value": "Flipped Classroom",
                      "type": "default"
                  },
                  {
                      "value": "Guided Reading",
                      "type": "default"
                  },
                  {
                      "value": "Instructional Scaffolding",
                      "type": "default"
                  },
                  {
                      "value": "Multiple Intelligences",
                      "type": "default"
                  },
                  {
                      "value": "Project Based Learning",
                      "type": "default"
                  },            {
                    "value": "Analytics",
                    "type": "default"
                },
                {
                    "value": "Ballpark figurecitation needed",
                    "type": "default"
                },
                {
                    "value": "Bandwidth",
                    "type": "default"
                },
                {
                    "value": "Business to Businesscitation needed  also known as BB",
                    "type": "default"
                },
                {
                    "value": "Business to Consumercitation needed  also known as BC",
                    "type": "default"
                },
                {
                    "value": "Best of Breedcitation needed",
                    "type": "default"
                },
                {
                    "value": "Best practicescitation needed",
                    "type": "default"
                },
                {
                    "value": "Bizmeth",
                    "type": "default"
                },
                {
                    "value": "business method",
                    "type": "default"
                },
                {
                    "value": "Brick and mortar",
                    "type": "default"
                },
                {
                    "value": "Business process outsourcing  also known as BPO",
                    "type": "default"
                },
                {
                    "value": "Buzzword compliant",
                    "type": "default"
                },
                {
                    "value": "Building capabilities/Capability buildingcitation needed",
                    "type": "default"
                },
                {
                    "value": "Cadence",
                    "type": "default"
                },
                {
                    "value": "Client centriccitation needed",
                    "type": "default"
                },
                {
                    "value": "Close the loop",
                    "type": "default"
                },
                {
                    "value": "Co opetition",
                    "type": "default"
                },
                {
                    "value": "Come to Jesus moment",
                    "type": "default"
                },
                {
                    "value": "Content marketing",
                    "type": "default"
                },
                {
                    "value": "Core competency",
                    "type": "default"
                },
                {
                    "value": "Creativecitation needed",
                    "type": "default"
                },
                {
                    "value": "Customer centriccitation needed(also customer centric mindset)",
                    "type": "default"
                },
                {
                    "value": "Downsizingcitation needed",
                    "type": "default"
                },
                {
                    "value": "Drill down",
                    "type": "default"
                },
                {
                    "value": "Drinking the Kool Aidcitation needed trusting in things offered by authority figures",
                    "type": "default"
                },
                {
                    "value": "Early stage",
                    "type": "default"
                },
                {
                    "value": "Employer branding",
                    "type": "default"
                },
                {
                    "value": "Eating your own dogfoodcitation needed  use a product yourself which you sell to others",
                    "type": "default"
                },
                {
                    "value": "Enable",
                    "type": "default"
                },
                {
                    "value": "Entitlement",
                    "type": "default"
                },
                {
                    "value": "Evangelist",
                    "type": "default"
                },
                {
                    "value": "Event horizon",
                    "type": "default"
                },
                {
                    "value": "Eyeballs",
                    "type": "default"
                },
                {
                    "value": "Free value",
                    "type": "default"
                },
                {
                    "value": "Fulfilment issues",
                    "type": "default"
                },
                {
                    "value": "Generation Y",
                    "type": "default"
                },
                {
                    "value": "Herding catscitation needed",
                    "type": "default"
                },
                {
                    "value": "Holistic (approach/integration)",
                    "type": "default"
                },
                {
                    "value": "Home real estate usage for an unoccupied dwelling unit",
                    "type": "default"
                },
                {
                    "value": "Hyperlocal",
                    "type": "default"
                },
                {
                    "value": "Innovation",
                    "type": "default"
                },
                {
                    "value": "Innovativecitation needed",
                    "type": "default"
                },
                {
                    "value": "Knowledge Process Outsourcing  also known as KPO",
                    "type": "default"
                },
                {
                    "value": "Leveragecitation needed",
                    "type": "default"
                },
                {
                    "value": "Logistics  Now commonly used for shipping and shipping companies",
                    "type": "default"
                },
                {
                    "value": "Long Tail",
                    "type": "default"
                },
                {
                    "value": "Low Hanging Fruit",
                    "type": "default"
                },
                {
                    "value": "Make it pop",
                    "type": "default"
                },
                {
                    "value": "Mindshare",
                    "type": "default"
                },
                {
                    "value": "Mission Critical",
                    "type": "default"
                },
                {
                    "value": "Management Visibility",
                    "type": "default"
                },
                {
                    "value": "New economy",
                    "type": "default"
                },
                {
                    "value": "Next generation",
                    "type": "default"
                },
                {
                    "value": "Offshoring  also known as Offshore outsourcing or something being offshorable",
                    "type": "default"
                },
                {
                    "value": "One Team",
                    "type": "default"
                },
                {
                    "value": "Opportunities",
                    "type": "default"
                },
                {
                    "value": "Pain point",
                    "type": "default"
                },
                {
                    "value": "Paralysis by Analysis",
                    "type": "default"
                },
                {
                    "value": "Passionate",
                    "type": "default"
                },
                {
                    "value": "Privacy",
                    "type": "default"
                },
                {
                    "value": "Productivity",
                    "type": "default"
                },
                {
                    "value": "Profit center",
                    "type": "default"
                },
                {
                    "value": "Quick win",
                    "type": "default"
                },
                {
                    "value": "Return on Investment  also known as ROI",
                    "type": "default"
                },
                {
                    "value": "Reverse fulfilment  processing returned products",
                    "type": "default"
                },
                {
                    "value": "Rightshoring",
                    "type": "default"
                },
                {
                    "value": "Seamless (integration)",
                    "type": "default"
                },
                {
                    "value": "Serum",
                    "type": "default"
                },
                {
                    "value": "Share options",
                    "type": "default"
                },
                {
                    "value": "Solution",
                    "type": "default"
                },
                {
                    "value": "SOX  abbreviation of Sarbanes Oxley",
                    "type": "default"
                },
                {
                    "value": "Sustainability",
                    "type": "default"
                },
                {
                    "value": "Storytelling",
                    "type": "default"
                },
                {
                    "value": "Startup",
                    "type": "default"
                },
                {
                    "value": "Take Offline",
                    "type": "default"
                },
                {
                    "value": "Talent Relationship Management",
                    "type": "default"
                },
                {
                    "value": "Tiger team",
                    "type": "default"
                },
                {
                    "value": "Time Blindness",
                    "type": "default"
                },
                {
                    "value": "Touchpointcitation needed",
                    "type": "default"
                },
                {
                    "value": "Value added",
                    "type": "default"
                },            {
                  "value": "4G",
                  "type": "default"
              },
              {
                  "value": "5G",
                  "type": "default"
              },
              {
                  "value": "Agile",
                  "type": "default"
              },
              {
                  "value": "Ajax",
                  "type": "default"
              },
              {
                  "value": "Algorithm",
                  "type": "default"
              },
              {
                  "value": "Andon",
                  "type": "default"
              },
              {
                  "value": "API",
                  "type": "default"
              },
              {
                  "value": "Benchmarking",
                  "type": "default"
              },
              {
                  "value": "Back end",
                  "type": "default"
              },
              {
                  "value": "Beta",
                  "type": "default"
              },
              {
                  "value": "Big data  larger data sets than last month",
                  "type": "default"
              },
              {
                  "value": "Bio",
                  "type": "default"
              },
              {
                  "value": "Bleeding edge",
                  "type": "default"
              },
              {
                  "value": "Blockchain",
                  "type": "default"
              },
              {
                  "value": "Bring your own Device",
                  "type": "default"
              },
              {
                  "value": "Bricks and clicks",
                  "type": "default"
              },
              {
                  "value": "Clickthrough",
                  "type": "default"
              },
              {
                  "value": "Cloud computingcitation needed",
                  "type": "default"
              },
              {
                  "value": "Collaboration",
                  "type": "default"
              },
              {
                  "value": "Content management",
                  "type": "default"
              },
              {
                  "value": "Content Management System",
                  "type": "default"
              },
              {
                  "value": "Convergence",
                  "type": "default"
              },
              {
                  "value": "Cross platform",
                  "type": "default"
              },
              {
                  "value": "CSS",
                  "type": "default"
              },
              {
                  "value": "Cyber physical Systems (CPS)",
                  "type": "default"
              },
              {
                  "value": "Datafication",
                  "type": "default"
              },
              {
                  "value": "Data mining  any kind of data collection or analysis even simple statistics such as taking averages on large data sets",
                  "type": "default"
              },
              {
                  "value": "Data science",
                  "type": "default"
              },
              {
                  "value": "Deep dive",
                  "type": "default"
              },
              {
                  "value": "Deep learning",
                  "type": "default"
              },
              {
                  "value": "Deep web",
                  "type": "default"
              },
              {
                  "value": "Dark web",
                  "type": "default"
              },
              {
                  "value": "Design pattern",
                  "type": "default"
              },
              {
                  "value": "DevOpsdead link",
                  "type": "default"
              },
              {
                  "value": "Digital divide",
                  "type": "default"
              },
              {
                  "value": "Digital Remastering",
                  "type": "default"
              },
              {
                  "value": "Digital Rights Management also known as DRM",
                  "type": "default"
              },
              {
                  "value": "Digital signagecitation needed",
                  "type": "default"
              },
              {
                  "value": "Disruptive Technologies",
                  "type": "default"
              },
              {
                  "value": "Document management",
                  "type": "default"
              },
              {
                  "value": "Dot bomb",
                  "type": "default"
              },
              {
                  "value": "Driven Development",
                  "type": "default"
              },
              {
                  "value": "E learning",
                  "type": "default"
              },
              {
                  "value": "Eco",
                  "type": "default"
              },
              {
                  "value": "ecological",
                  "type": "default"
              },
              {
                  "value": "End to end",
                  "type": "default"
              },
              {
                  "value": "Engine   most often in reference to physics engine",
                  "type": "default"
              },
              {
                  "value": "Enterprise Content Management  also known as ECM",
                  "type": "default"
              },
              {
                  "value": "Enterprise Service Bus  also known as ESB",
                  "type": "default"
              },
              {
                  "value": "Ephemeral Rogue Entitycitation needed",
                  "type": "default"
              },
              {
                  "value": "Framework",
                  "type": "default"
              },
              {
                  "value": "Frictionless (software development)",
                  "type": "default"
              },
              {
                  "value": "Front end",
                  "type": "default"
              },
              {
                  "value": "Folksonomy",
                  "type": "default"
              },
              {
                  "value": "Fuzzy logic",
                  "type": "default"
              },
              {
                  "value": "Growth Hacking",
                  "type": "default"
              },
              {
                  "value": "HTMLcitation needed",
                  "type": "default"
              },
              {
                  "value": "IaaS",
                  "type": "default"
              },
              {
                  "value": "Ideation Management",
                  "type": "default"
              },
              {
                  "value": "Immersion",
                  "type": "default"
              },
              {
                  "value": "Information superhighway / Information highway",
                  "type": "default"
              },
              {
                  "value": "Internet of Things",
                  "type": "default"
              },
              {
                  "value": "JavaScript",
                  "type": "default"
              },
              {
                  "value": "Lambda",
                  "type": "default"
              },
              {
                  "value": "Machine Learning",
                  "type": "default"
              },
              {
                  "value": "Mashup",
                  "type": "default"
              },
              {
                  "value": "Microservices",
                  "type": "default"
              },
              {
                  "value": "Mobile",
                  "type": "default"
              },
              {
                  "value": "Modularity",
                  "type": "default"
              },
              {
                  "value": "Nanotechnology",
                  "type": "default"
              },
              {
                  "value": "Netiquette",
                  "type": "default"
              },
              {
                  "value": "Next Generation",
                  "type": "default"
              },
              {
                  "value": "NextGen",
                  "type": "default"
              },
              {
                  "value": "Open source",
                  "type": "default"
              },
              {
                  "value": "Quantum supremacy",
                  "type": "default"
              },
              {
                  "value": "PaaS",
                  "type": "default"
              },
              {
                  "value": "Podcasting",
                  "type": "default"
              },
              {
                  "value": "Real time",
                  "type": "default"
              },
              {
                  "value": "Responsive Web Designcitation needed",
                  "type": "default"
              },
              {
                  "value": "Sensorization",
                  "type": "default"
              },
              {
                  "value": "SaaS",
                  "type": "default"
              },
              {
                  "value": "Scalability",
                  "type": "default"
              },
              {
                  "value": "Skeuomorphic",
                  "type": "default"
              },
              {
                  "value": "Social bookmarking",
                  "type": "default"
              },
              {
                  "value": "Social software",
                  "type": "default"
              },
              {
                  "value": "SDN  Software defined Networking",
                  "type": "default"
              },
              {
                  "value": "SPA",
                  "type": "default"
              },
              {
                  "value": "Single Pane of Glass",
                  "type": "default"
              },
              {
                  "value": "Spam",
                  "type": "default"
              },
              {
                  "value": "Stack",
                  "type": "default"
              },
              {
                  "value": "Strategic Ineptness",
                  "type": "default"
              },
              {
                  "value": "Sync up",
                  "type": "default"
              },
              {
                  "value": "Systems Development Life Cycle",
                  "type": "default"
              },
              {
                  "value": "Tagging",
                  "type": "default"
              },
              {
                  "value": "Transmedia",
                  "type": "default"
              },
              {
                  "value": "Toolchain",
                  "type": "default"
              },
              {
                  "value": "UC  Unified Communications",
                  "type": "default"
              },
              {
                  "value": "User generated content",
                  "type": "default"
              },
              {
                  "value": "Viral",
                  "type": "default"
              },
              {
                  "value": "Virtualization",
                  "type": "default"
              },
              {
                  "value": "Vortal",
                  "type": "default"
              },
              {
                  "value": "Web",
                  "type": "default"
              },
              {
                  "value": "Webinar",
                  "type": "default"
              },
              {
                  "value": "Web services",
                  "type": "default"
              },
              {
                  "value": "Wikiality",
                  "type": "default"
              },
              {
                  "value": "Workflow",
                  "type": "default"
              },            {
                "value": "initial public offering",
                "type": "default"
            },
            {
                "value": "ipo",
                "type": "default"
            },
            {
                "value": "innovation",
                "type": "default"
            },
            {
                "value": "insolvent",
                "type": "default"
            },
            {
                "value": "interest",
                "type": "default"
            },
            {
                "value": "investment bank",
                "type": "default"
            },
            {
                "value": "lease",
                "type": "default"
            },
            {
                "value": "leverage",
                "type": "default"
            },
            {
                "value": "liabilities",
                "type": "default"
            },
            {
                "value": "liability",
                "type": "default"
            },
            {
                "value": "lien",
                "type": "default"
            },
            {
                "value": "liquidity",
                "type": "default"
            },
            {
                "value": "managerial decisions",
                "type": "default"
            },
            {
                "value": "marketing",
                "type": "default"
            },
            {
                "value": "merger",
                "type": "default"
            },
            {
                "value": "mortgage",
                "type": "default"
            },
            {
                "value": "opportunity costs",
                "type": "default"
            },
            {
                "value": "perquisites",
                "type": "default"
            },
            {
                "value": "preferred stock",
                "type": "default"
            },
            {
                "value": "proxy",
                "type": "default"
            },
            {
                "value": "public offering",
                "type": "default"
            },
            {
                "value": "quick assets",
                "type": "default"
            },
            {
                "value": "return on assets",
                "type": "default"
            },
            {
                "value": "roa",
                "type": "default"
            },
            {
                "value": "return on equity",
                "type": "default"
            },
            {
                "value": "roe",
                "type": "default"
            },
            {
                "value": "roi",
                "type": "default"
            },
            {
                "value": "security",
                "type": "default"
            },
            {
                "value": "shares",
                "type": "default"
            },
            {
                "value": "stakeholder",
                "type": "default"
            },
            {
                "value": "stock",
                "type": "default"
            },
            {
                "value": "stock market",
                "type": "default"
            },
            {
                "value": "stockholder",
                "type": "default"
            },
            {
                "value": "succession",
                "type": "default"
            },
            {
                "value": "takeover",
                "type": "default"
            },
            {
                "value": "treasurer",
                "type": "default"
            },
            {
                "value": "underwrite",
                "type": "default"
            },
            {
                "value": "unemployment rate",
                "type": "default"
            },
            {
                "value": "venture capital",
                "type": "default"
            },
            {
                "value": "voting rights",
                "type": "default"
            },
            {
                "value": "working capital",
                "type": "default"
            },
            {
                "value": "Bid",
                "type": "default"
            },
            {
                "value": "Blue Chip Stocks",
                "type": "default"
            },
            {
                "value": "Bond",
                "type": "default"
            },
            {
                "value": "Business angel",
                "type": "default"
            },
            {
                "value": "Capital",
                "type": "default"
            },
            {
                "value": "Capital stock",
                "type": "default"
            },
            {
                "value": "Commodities",
                "type": "default"
            },
            {
                "value": "Dividend",
                "type": "default"
            },
            {
                "value": "Equity",
                "type": "default"
            },
            {
                "value": "Equities",
                "type": "default"
            },
            {
                "value": "Futures",
                "type": "default"
            },
            {
                "value": "Insider",
                "type": "default"
            },
            {
                "value": "Insider dealing / trading",
                "type": "default"
            },
            {
                "value": "IPO",
                "type": "default"
            },
            {
                "value": "Issue",
                "type": "default"
            },
            {
                "value": "Liabilities",
                "type": "default"
            },
            {
                "value": "Mortgage",
                "type": "default"
            },
            {
                "value": "Mutual fund",
                "type": "default"
            },
            {
                "value": "Option",
                "type": "default"
            },
            {
                "value": "Par value",
                "type": "default"
            },
            {
                "value": "Penny stock",
                "type": "default"
            },
            {
                "value": "Portfolio",
                "type": "default"
            },
            {
                "value": "Securities",
                "type": "default"
            },
            {
                "value": "Share",
                "type": "default"
            },
            {
                "value": "Share certificate",
                "type": "default"
            },
            {
                "value": "Shareholder",
                "type": "default"
            },
            {
                "value": "Speculator",
                "type": "default"
            },
            {
                "value": "Stock",
                "type": "default"
            },
            {
                "value": "Stockbroker",
                "type": "default"
            },
            {
                "value": "Stockholder",
                "type": "default"
            },
            {
                "value": "Trader",
                "type": "default"
            },
            {
                "value": "ATM",
                "type": "default"
            },
            {
                "value": "Banknote",
                "type": "default"
            },
            {
                "value": "Bitcoin",
                "type": "default"
            },
            {
                "value": "Borrow",
                "type": "default"
            },
            {
                "value": "Broke",
                "type": "default"
            },
            {
                "value": "Budget",
                "type": "default"
            },
            {
                "value": "Cash",
                "type": "default"
            },
            {
                "value": "Cash dispenser",
                "type": "default"
            },
            {
                "value": "Cashier",
                "type": "default"
            },
            {
                "value": "Cheque",
                "type": "default"
            },
            {
                "value": "check",
                "type": "default"
            },
            {
                "value": "Coin",
                "type": "default"
            },
            {
                "value": "Currency",
                "type": "default"
            },
            {
                "value": "Debt",
                "type": "default"
            },
            {
                "value": "Deposit",
                "type": "default"
            },
            {
                "value": "Money placed in an account in a bank.",
                "type": "default"
            },
            {
                "value": "Donate",
                "type": "default"
            },
            {
                "value": "Exchange rate",
                "type": "default"
            },
            {
                "value": "Fee",
                "type": "default"
            },
            {
                "value": "Instalment",
                "type": "default"
            },
            {
                "value": "Interest",
                "type": "default"
            },
            {
                "value": "Invest",
                "type": "default"
            },
            {
                "value": "Legal tender",
                "type": "default"
            },
            {
                "value": "Lend",
                "type": "default"
            },
            {
                "value": "Loan",
                "type": "default"
            },
            {
                "value": "Owe",
                "type": "default"
            },
            {
                "value": "Petty cash",
                "type": "default"
            },
            {
                "value": "Receipt",
                "type": "default"
            },
            {
                "value": "Refund",
                "type": "default"
            },
            {
                "value": "Tip",
                "type": "default"
            },
            {
                "value": "Withdraw",
                "type": "default"
            }
                  ],
                    "id":"default-notes-2"
                  }
                ]
              },
            {
            "title":"Internal Meeting",
            "source":"marsview",
            "id":"Internal Meeting",
            "tag_list":[
                {
                    "category":"Q & A",
                    "source":"marsview",
                    "enabled":true,
                    "tags":[],
                    "id":"default-questions-3"
                  },
                  {
                    "category":"Actions",
                    "source":"marsview",
                    "enabled":true,
                    "tags":[],
                    "id":"default-actions-1"
                  },
              {
                "category":"Highlights",
                "source":"marsview",
                "enabled":true,
                "tags":[
              ],
                "id":"default-short-notes-3"
              },
              {
                "category":"Notes",
                "source":"marsview",
                "enabled":true,
                "tags":[
                  {
                      "value": "next steps",
                      "type": "default"
                  },
                  {
                      "value": "action item",
                      "type": "default"
                  },
                  {
                      "value": "let me introduce",
                      "type": "default"
                  },
                  {
                      "value": "set deadline",
                      "type": "default"
                  },
                  {
                      "value": "by the week",
                      "type": "default"
                  },
                  {
                      "value": "by the quarter",
                      "type": "default"
                  },
                  {
                      "value": "by end of the day",
                      "type": "default"
                  },
                  {
                      "value": "the issue",
                      "type": "default"
                  },
                  {
                      "value": "discuss issues",
                      "type": "default"
                  },
                  {
                      "value": "the problem",
                      "type": "default"
                  },
                  {
                      "value": "the challenges",
                      "type": "default"
                  },
                  {
                      "value": "the minutes",
                      "type": "default"
                  },
                  {
                      "value": "done yesterday",
                      "type": "default"
                  },
                  {
                      "value": "is completed",
                      "type": "default"
                  },
                  {
                      "value": "to be completed",
                      "type": "default"
                  },
                  {
                      "value": "done today",
                      "type": "default"
                  },
                  {
                      "value": "work on",
                      "type": "default"
                  },
                  {
                      "value": "blockers",
                      "type": "default"
                  },
                  {
                      "value": "impact",
                      "type": "default"
                  },
                  {
                      "value": "the goal of",
                      "type": "default"
                  },
                  {
                      "value": "meet goals",
                      "type": "default"
                  },
                  {
                      "value": "affect the",
                      "type": "default"
                  },
                  {
                      "value": "impediments",
                      "type": "default"
                  },
                  {
                      "value": "set the agenda",
                      "type": "default"
                  },
                  {
                      "value": "an update",
                      "type": "default"
                  },
                  {
                      "value": "update the",
                      "type": "default"
                  },
                  {
                      "value": "the risks",
                      "type": "default"
                  },
                  {
                      "value": "the context",
                      "type": "default"
                  },
                  {
                      "value": "the objectives",
                      "type": "default"
                  },
                  {
                      "value": "budget",
                      "type": "default"
                  },
                  {
                      "value": "cost of",
                      "type": "default"
                  },
                  {
                      "value": "the pricing",
                      "type": "default"
                  },
                  {
                      "value": "the project",
                      "type": "default"
                  },
                  {
                      "value": "status of",
                      "type": "default"
                  },
                  {
                      "value": "the status",
                      "type": "default"
                  },
                  {
                      "value": "the delay is",
                      "type": "default"
                  },
                  {
                      "value": "performance review",
                      "type": "default"
                  },
                  {
                      "value": "project review",
                      "type": "default"
                  },
                  {
                      "value": "uat",
                      "type": "default"
                  },
                  {
                      "value": "user testing",
                      "type": "default"
                  },
                  {
                      "value": "acceptance criteria",
                      "type": "default"
                  },
                  {
                      "value": "action items",
                      "type": "default"
                  },
                  {
                      "value": "agile methodology",
                      "type": "default"
                  },
                  {
                      "value": "technical specification",
                      "type": "default"
                  },
                  {
                      "value": "functional specification",
                      "type": "default"
                  },
                  {
                      "value": "business requirements",
                      "type": "default"
                  },
                  {
                      "value": "documentation",
                      "type": "default"
                  },
                  {
                      "value": "qa quality assurance",
                      "type": "default"
                  },
                  {
                      "value": "cost estimate",
                      "type": "default"
                  },
                  {
                      "value": "time estimate",
                      "type": "default"
                  },
                  {
                      "value": "timeline",
                      "type": "default"
                  },
                  {
                      "value": "opex operational expense",
                      "type": "default"
                  },
                  {
                      "value": "capex capital expense",
                      "type": "default"
                  },
                  {
                      "value": "change control board",
                      "type": "default"
                  },
                  {
                      "value": "ccb",
                      "type": "default"
                  },
                  {
                      "value": "project review board",
                      "type": "default"
                  },
                  {
                      "value": "prb",
                      "type": "default"
                  },
                  {
                      "value": "architecture review board",
                      "type": "default"
                  },
                  {
                      "value": "arb",
                      "type": "default"
                  },
                  {
                      "value": "change management",
                      "type": "default"
                  },
                  {
                      "value": "communications",
                      "type": "default"
                  },
                  {
                      "value": "contingency plan",
                      "type": "default"
                  },
                  {
                      "value": "critical success factor",
                      "type": "default"
                  },
                  {
                      "value": "effort estimate",
                      "type": "default"
                  },
                  {
                      "value": "gantt chart",
                      "type": "default"
                  },
                  {
                      "value": "handover",
                      "type": "default"
                  },
                  {
                      "value": "integration test",
                      "type": "default"
                  },
                  {
                      "value": "kickoff meeting",
                      "type": "default"
                  },
                  {
                      "value": "level of effort",
                      "type": "default"
                  },
                  {
                      "value": "the milestones",
                      "type": "default"
                  },
                  {
                      "value": "pareto chart",
                      "type": "default"
                  },
                  {
                      "value": "percent complete",
                      "type": "default"
                  },
                  {
                      "value": "the phase",
                      "type": "default"
                  },
                  {
                      "value": "project planning",
                      "type": "default"
                  },
                  {
                      "value": "project portfolio",
                      "type": "default"
                  },
                  {
                      "value": "in process",
                      "type": "default"
                  },
                  {
                      "value": "process of",
                      "type": "default"
                  },
                  {
                      "value": "proof of concept",
                      "type": "default"
                  },
                  {
                      "value": "prototype development",
                      "type": "default"
                  },
                  {
                      "value": "production live",
                      "type": "default"
                  },
                  {
                      "value": "support the",
                      "type": "default"
                  },
                  {
                      "value": "resource availability",
                      "type": "default"
                  },
                  {
                      "value": "work breakdown",
                      "type": "default"
                  },
                  {
                      "value": "resource breakdown",
                      "type": "default"
                  },
                  {
                      "value": "schedule the",
                      "type": "default"
                  },
                  {
                      "value": "scope creep",
                      "type": "default"
                  },
                  {
                      "value": "scrum meeting",
                      "type": "default"
                  },
                  {
                      "value": "the sprint",
                      "type": "default"
                  },
                  {
                      "value": "stakeholder",
                      "type": "default"
                  },
                  {
                      "value": "six sigma",
                      "type": "default"
                  },
                  {
                      "value": "steering committee",
                      "type": "default"
                  },
                  {
                      "value": "assign task",
                      "type": "default"
                  },
                  {
                      "value": "time and material",
                      "type": "default"
                  },
                  {
                      "value": "top down",
                      "type": "default"
                  },
                  {
                      "value": "use case",
                      "type": "default"
                  },
                  {
                      "value": "waterfall approach",
                      "type": "default"
                  },
                  {
                      "value": "workaround",
                      "type": "default"
                  },
                  {
                      "value": "interview with",
                      "type": "default"
                  },
                  {
                      "value": "candidate for",
                      "type": "default"
                  },
                  {
                      "value": "experience",
                      "type": "default"
                  },
                  {
                      "value": "benefits of",
                      "type": "default"
                  },
                  {
                      "value": "the benefits",
                      "type": "default"
                  },
                  {
                      "value": "the salary",
                      "type": "default"
                  },
                  {
                      "value": "the compensation",
                      "type": "default"
                  },
                  {
                      "value": "the applicant",
                      "type": "default"
                  },
                  {
                      "value": "the onboarding",
                      "type": "default"
                  },
                  {
                      "value": "the challenges",
                      "type": "default"
                  },
                  {
                      "value": "the management",
                      "type": "default"
                  },
                  {
                      "value": "leadership skills",
                      "type": "default"
                  },
                  {
                      "value": "responsible for",
                      "type": "default"
                  },
                  {
                      "value": "team development",
                      "type": "default"
                  },
                  {
                      "value": "the resume",
                      "type": "default"
                  },
                  {
                      "value": "profile of",
                      "type": "default"
                  },
                  {
                      "value": "the profile",
                      "type": "default"
                  },
                  {
                      "value": "change of job",
                      "type": "default"
                  },
                  {
                      "value": "job roles",
                      "type": "default"
                  },
                  {
                      "value": "the responsibilities",
                      "type": "default"
                  },
                  {
                      "value": "detail-oriented",
                      "type": "default"
                  },
                  {
                      "value": "the effective",
                      "type": "default"
                  },
                  {
                      "value": "the efficient",
                      "type": "default"
                  },
                  {
                      "value": "maintained well",
                      "type": "default"
                  },
                  {
                      "value": "met the deadline",
                      "type": "default"
                  },
                  {
                      "value": "on time",
                      "type": "default"
                  },
                  {
                      "value": "organize the",
                      "type": "default"
                  },
                  {
                      "value": "practical approach",
                      "type": "default"
                  },
                  {
                      "value": "prepare for",
                      "type": "default"
                  },
                  {
                      "value": "provide with",
                      "type": "default"
                  },
                  {
                      "value": "reorganize the",
                      "type": "default"
                  },
                  {
                      "value": "results; results-oriented",
                      "type": "default"
                  },
                  {
                      "value": "satisfied the client's requests",
                      "type": "default"
                  },
                  {
                      "value": "the solution",
                      "type": "default"
                  },
                  {
                      "value": "support for",
                      "type": "default"
                  },
                  {
                      "value": "team player",
                      "type": "default"
                  },
                  {
                      "value": "build out",
                      "type": "default"
                  },
                  {
                      "value": "coordinate with",
                      "type": "default"
                  },
                  {
                      "value": "deliver the",
                      "type": "default"
                  },
                  {
                      "value": "develop the",
                      "type": "default"
                  },
                  {
                      "value": "i handled that by",
                      "type": "default"
                  },
                  {
                      "value": "the initiative",
                      "type": "default"
                  },
                  {
                      "value": "innovative solution",
                      "type": "default"
                  },
                  {
                      "value": "negotiated an",
                      "type": "default"
                  },
                  {
                      "value": "plan for",
                      "type": "default"
                  },
                  {
                      "value": "resolve the",
                      "type": "default"
                  },
                  {
                      "value": "supervise the",
                      "type": "default"
                  },
                  {
                      "value": "accomplish the",
                      "type": "default"
                  },
                  {
                      "value": "energized by",
                      "type": "default"
                  },
                  {
                      "value": "enthusiastic about",
                      "type": "default"
                  },
                  {
                      "value": "interested in",
                      "type": "default"
                  },
                  {
                      "value": "love for",
                      "type": "default"
                  },
                  {
                      "value": "motivated by",
                      "type": "default"
                  },
                  {
                      "value": "priority of",
                      "type": "default"
                  },
                  {
                      "value": "win win",
                      "type": "default"
                  },
                  {
                      "value": "corporate synergy",
                      "type": "default"
                  },
                  {
                      "value": "the disruption",
                      "type": "default"
                  },
                  {
                      "value": "deep dive",
                      "type": "default"
                  },
                  {
                      "value": "core competency",
                      "type": "default"
                  },
                  {
                      "value": "incentivize",
                      "type": "default"
                  },
                  {
                      "value": "outside the box",
                      "type": "default"
                  },
                  {
                      "value": "bleeding edge",
                      "type": "default"
                  },
                  {
                      "value": "move the needle",
                      "type": "default"
                  },
                  {
                      "value": "ideate",
                      "type": "default"
                  },
                  {
                      "value": "unpack",
                      "type": "default"
                  },
                  {
                      "value": "wheelhouse",
                      "type": "default"
                  },
                  {
                      "value": "reach out",
                      "type": "default"
                  },
                  {
                      "value": "deliverable",
                      "type": "default"
                  },
                  {
                      "value": "amplify",
                      "type": "default"
                  },
                  {
                      "value": "out of pocket",
                      "type": "default"
                  },
                  {
                      "value": "drill down",
                      "type": "default"
                  },
                  {
                      "value": "ping",
                      "type": "default"
                  },
                  {
                      "value": "bandwidth",
                      "type": "default"
                  },
                  {
                      "value": "low-hanging fruit",
                      "type": "default"
                  }
              ],
                "id":"default-notes-2"
              }
            ]
          }
        ];
        templateObj.updated_time = new Date();
       
        db.collection("templates").update({'user_id': userId},templateObj, {upsert:true}, function(err,result){
            console.log(result);
            if(err){
                console.log(err)
            }
        })
    return;
}



module.exports = {
    addDefaultTemplate: addDefaultTemplate
}