var token;
var param;
document.addEventListener("deviceready", onDeviceReadytwitter, false);
function onDeviceReadytwitter() {
   
    var root = this;
    cb = window.plugins.ChildBrowser;
    if(!localStorage.getItem(twitterKey)){
        $("#loginBtn").show();
        $("#logoutBtn").hide();
    }
    else {
        $("#loginBtn").hide();
        $("#logoutBtn").show();
    }
    
    if (cb != null) {
        cb.onLocationChange = function(loc){ root.locChanged(loc); };
        cb.onClose = function(){root.onCloseBrowser()};
        cb.onOpenExternal = function(){root.onOpenExternal();};
    }
}

function onCloseBrowser() {
    console.log("onCloseBrowser!");
}

function locChanged(loc) {
    console.log("locChanged!");
}

function onOpenExternal() {
    console.log("onOpenExternal!");
}


// GLOBAL VARS
var oauth; // It Holds the oAuth data request
var requestParams; // Specific param related to request
var options = {
consumerKey: 'qo6LGSOGymczLTrffJxZK1q0v',				//'KCGqeNzecNLY55DBVMaa4Q', // OUr Test Twitter CONSUMER_KEY
consumerSecret:'KxUlyvLvudtG9LMMpjxZwK3kU09U246Iez1gUDE9bRevh3GmRL',// '9MsP9jbL3C4pEtOm9H1WfCUhEMaeotPgRusWE4Poj7o', // OUr Test Twitter CONSUMER_SECRET
    callbackUrl: "https://twitter.com" }; // YOU have to replace it on one more Place
var twitterKey = "twtrKey"; // This key is used for storing Information related
var Twitter = {
init:function(){
    $.mobile.loading( 'show', {text: 'Loading...',textVisible: true,theme: 'z',html: ""});
    // Apps storedAccessData , Apps Data in Raw format
    var storedAccessData, rawData = localStorage.getItem(twitterKey);
    // here we are going to check whether the data about user is already with us.
    
    // we have no data for save user
    oauth = OAuth(options);
    oauth.get('https://api.twitter.com/oauth/request_token',
              function(data) {
              requestParams = data.text;
              cb.showWebPage('https://api.twitter.com/oauth/authorize?'+data.text); // This opens the Twitter authorization / sign in page
              cb.onLocationChange = function(loc){  $.mobile.loading( 'hide');Twitter.success(loc); }; // Here will will track the change in URL of ChildBrowser
              },
              function(data) {
              $.mobile.loading( 'hide');
              console.log("ERROR: "+data);
              }
              );
},
    /*
     When ChildBrowser's URL changes we will track it here.
     We will also be acknowledged was the request is a successful or unsuccessful
     */
success:function(loc){
    // Here the URL of supplied callback will Load
    /*
     Here Plugin will check whether the callback Url matches with the given Url
     */
    if (loc.indexOf("https://twitter.com") >= 0) {
        // Parse the returned URL
        var index, verifier = '';
        var params = loc.substr(loc.indexOf('?') + 1);
        
        params = params.split('&');
        for (var i = 0; i < params.length; i++) {
            var y = params[i].split('=');
            if(y[0] === 'oauth_verifier') {
                verifier = y[1];
            }
        }
        // Here we are going to change token for request with token for access
        /*
         Once user has authorised us then we have to change the token for request with token of access
         here we will give data to localStorage.
         */
        oauth.get('https://api.twitter.com/oauth/access_token?oauth_verifier='+verifier+'&'+requestParams,
                  function(data) {
                  
                  var accessParams = {};
                  var qvars_tmp = data.text.split('&');
                  for (var i = 0; i < qvars_tmp.length; i++) {
                      var y = qvars_tmp[i].split('=');
                      accessParams[y[0]] = decodeURIComponent(y[1]);
                  }
                  
                  /*  $('#oauthStatus').html('<span style="color:green;">Success!</span>');
                   $('#stage-auth').hide();
                   $('#stage-data').show();*/
                  oauth.setAccessToken([accessParams.oauth_token, accessParams.oauth_token_secret]);
                  // Saving token of access in Local_Storage
                  var accessData = {};
                  //	  alert(accessParams.oauth_token+"token");
                  accessData.accessTokenKey = accessParams.oauth_token;
                  accessData.accessTokenSecret = accessParams.oauth_token_secret;
                  token = accessData.accessTokenKey;
                  param = accessData.accessTokenSecret;
                  // Configuring Apps LOCAL_STORAGE
                  console.log("TWITTER: Storing token key/secret in localStorage");
                  oauth.get('https://api.twitter.com/1.1/account/verify_credentials.json?skip_status=true',
                            function(data) {
                            
                            var entry = JSON.parse(data.text);
                            $.mobile.loading( 'show', {text: 'Loading...',textVisible: true,theme: 'z',html: ""});
                            loginwithtwitter(entry.screen_name,entry.id)
                            // Just for eg.
                           
                            //app.init();
                            },
                            function(data) {
                            console.log("ERROR: " + data);
                            }
                            );
                  
                  // Now we have to close the child browser because everthing goes on track.
                  
                  window.plugins.ChildBrowser.close();
                  
                  },
                  function(data) {
                  console.log(data);
                  
                  
                  }
                  );
    }
    else {
        // Just Empty
    }
},
    
tweet:function(){
    
    var storedAccessData, rawData = localStorage.getItem(twitterKey);
    storedAccessData = JSON.parse(rawData); // Paring Json
    options.accessTokenKey = storedAccessData.accessTokenKey; // it will be saved on first signin
    options.accessTokenSecret = storedAccessData.accessTokenSecret; // it will be save on first login
    
    token=storedAccessData.accessTokenKey;
    param=storedAccessData.accessTokenSecret;
    
    
    
    // javascript OAuth will care of else for app we need to send only the options
    oauth = OAuth(options);
    oauth.get('https://api.twitter.com/1.1/account/verify_credentials.json?skip_status=true',
              function(data) {
              var entry = JSON.parse(data.text);
              
              }
              );
},
    /*
     We now have the data to tweet
     */
post:function(){
    var theTweet = $("#tweet").val(); // You can change it with what else you likes.
    oauth.post('https://api.twitter.com/1.1/statuses/update.json',
               { 'status' : theTweet,  // javascript OAuth encodes this
               'trim_user' : 'true' },
               function(data) {
               var entry = JSON.parse(data.text);
               console.log(entry);
               
               // just for eg.
               done();
               },
               function(data) {
               console.log(data);
               }
               );
}
    
}  // post finish

function redirect(redirecturl)
{
    window.plugins.ChildBrowser.showWebPage(redirecturl,
                                            { showLocationBar: true });
}

