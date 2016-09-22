var pushNotification;
document.addEventListener('deviceready', getPushDetail, true);
function getPushDetail() {
    try
    {
        pushNotification = window.plugins.pushNotification;

          //  $("#app-status-ul").append('<li>registering iOS</li>');
            pushNotification.register(tokenHandler, errorHandler, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"});	// required!
    }
    catch(err) 
    { 
        txt="There was an error on this page.\n\n"; 
        txt+="Error description: " + err.message + "\n\n"; 
        alert(txt); 
    }
} // get pushdetail end
// handle APNS notifications for iOS
function onNotificationAPN(e) {
    if (e.alert) {
      //  $("#app-status-ul").append('<li>push-notification: ' + e.alert + '</li>');
        navigator.notification.alert(e.alert);
    }
    
    if (e.sound) {
        var snd = new Media(e.sound);
        snd.play();
    }
    
    if (e.badge) {
        pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
    }
}

function tokenHandler (result) {
    devicetoken=result;
    console.log('token---mayur::: '+result);
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
}

function successHandler (result) {
    console.log('<li>success---mayur::::::'+ result +'</li>');
}

function errorHandler (error) {
    console.log('<li>error----mayur::::::'+ error +'</li>');
}