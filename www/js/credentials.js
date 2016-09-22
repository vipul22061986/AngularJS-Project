// JavaScript Document

$(document).ready(function(e) {
	$('#signup').click(function() {
					
					var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

					if(document.getElementById('password').value != document.getElementById('confirm_password').value)
					{
						
                       window.plugins.toast.show('Password does not match!', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
						return false;				
					}
					
					if(!regex.test($("#email").val()))
						{
						
                        window.plugins.toast.show('Invalid Email Address..', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
						return false;
						}

					var name = $('#name').val();
					var email = $('#email').val();
					var password = $('#password').val();

                       $.ajax({
                              url: "http://isweting.com/restaurant/ws/key/index/format/json",
                              type: "POST",
                              cache: false,
                              beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY', '6d9f729b765aae27f45e5ef9150fa073f8a61b94');},
                              success: function(e) {
                              window.localStorage.setItem('key',e.key);
                              $.ajax({
                                     url: 'http://isweting.com/restaurant/ws/admin/register',
                                     type: 'POST',
                                      cache: false,
                                     beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));},
                                     data: { 'vName': name, 'vEmail': email, 'vPassword': password,'vDeviceToken':devicetoken,'ePlatform':'ios' },
                                     success: function(data) {
                                     window.localStorage.setItem('session', JSON.stringify(data));
                                     window.plugins.toast.show('Registered Successfully...', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                                     $.mobile.changePage("#home", {changeHash: false });
                                     
                                     }
                                     }); // reguster ws end here
                              
                              },
                              error: function(e){alert('Failure!'+JSON.stringify(e));}
                              });

                       
				
				}); // signup function end
				
	$('#signin').click(function() {
                       
					var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
					if(!regex.test($("#vEmail").val()))
					{
                                window.plugins.toast.show('Invalid Email Address..', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
								return false;
					}
					var vemail = $('#vEmail').val();
					var vpassword =  $('#vPassword').val();
					$.mobile.loading( 'show', {text: 'Loading...',textVisible: true,theme: 'z',html: ""});
                       $.ajax({
                              url: "http://isweting.com/restaurant/ws/key/index/format/json",
                              type: "POST",
                              cache: false,
                              beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY', '6d9f729b765aae27f45e5ef9150fa073f8a61b94');},
                              success: function(e) {
                                window.localStorage.setItem('key',e.key);
                              $.ajax({
                                     url: 'http://isweting.com/restaurant/ws/admin/login',
                                     type: 'POST',
                                      cache: false,
                                     beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));},
                                     data: {'vEmail': vemail, 'vPassword': vpassword, 'dLatitude' : latitude, 'dLongitude' : longitude,'ePlatform':'ios','vDeviceToken':devicetoken },
                                     success: function(data) {
                                     if (data.SUCCESS == 1)
                                     {
                                     window.localStorage.setItem('session', JSON.stringify(data));
                                     userID = JSON.parse(window.localStorage.getItem('session')).DATA.iUserID;
                                     access_token = JSON.parse(window.localStorage.getItem('session')).accesstoken;
                                     window.location='#home';
                                     $('#vEmail').val('');
                                     $('#vPassword').val('');
                                     $('#name').val('');
                                     $('#email').val('');
                                     $('#password').val('');
                                     $('#confirm_password').val('');
                                     }
                                     else 
                                     {
                                            window.plugins.toast.show('Please Enter Valid UserId or Password..!!', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                                     }
                                     $.mobile.loading( 'hide');
                                     },error: function(e){
                                        alert("Not Able to List Data Please check Network Connection...");
                                        $.mobile.loading( 'hide');
                                     }
                                     }); // ajax end for adminlogin
                              
                              },
                              error: function(e){alert("Not Able to List Data Please check Network Connection...");}
                              }); // key/index ws end here

				
				}); // sign in end
                  
                $('#sumbitbutton').click(function() {
                                      
                                     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                                         if(!regex.test($(".forgot_email").val()) && $(".forgot_email").val()=="")
                                     {
                                     
                                     window.plugins.toast.show('Invalid Email Address..', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                                     return false;
                                     }
                                     var vemail = $(".forgot_email").val();
                                     $.mobile.loading( 'show', {text: 'Loading...',textVisible: true,theme: 'z',html: ""});
                                     $.ajax({
                                            url: "http://isweting.com/restaurant/ws/key/index/format/json",
                                            type: "POST",
                                            cache: false,
                                            beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY', '6d9f729b765aae27f45e5ef9150fa073f8a61b94');},
                                            success: function(e) {
                                           
                                            
                                           
                                            $.ajax({
                                                   url: 'http://isweting.com/restaurant/ws/admin/forgot_pass',
                                                   type: 'POST',
                                                    cache: false,
                                                   beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY',e.key);},
                                                   data: {'vEmail': vemail},
                                                   success: function(data) {
                                                   if (data.SUCCESS == 1)
                                                   {
                                                   window.location='#login';
                                                   $('#vEmail').val('');
                                                   }
                                                   else
                                                   {
                                                   window.plugins.toast.show('Email is Not Exist', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                                                   }
                                                   $.mobile.loading( 'hide');
                                                   },error: function(e){
                                                   alert("Not Able to List Data Please check Network Connection...");
                                                   $.mobile.loading( 'hide');
                                                   }
                                                   }); // ajax end for adminlogin
                                            
                                            },
                                            error: function(e){alert("Not Able to List Data Please check Network Connection...");}
                                            }); // key/index ws end here
                                     
                                     
                                     }); // Forgot Password End
                  
}); // doc ready end
function changePassword()
{
    
    if($("#change_password_email").val()!=$("#change_password_email_verify").val())
    {
       window.plugins.toast.show('Password Mismatch....', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
        return false;
    }
    
  
  
           // call ws for login
           $.ajax({
                  url: 'http://isweting.com/restaurant/ws/user/change_pass',
                  type: 'POST',
                   cache: false,
                  beforeSend: function(xhr){
                  xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));
                  xhr.setRequestHeader('accesstoken',JSON.parse(window.localStorage.getItem('session')).accesstoken);
                  xhr.setRequestHeader('iUserID',JSON.parse(window.localStorage.getItem('session')).DATA.iUserID);
                  },
                  data: {'new_pass' : $("#change_password_email").val() },
                  success: function(data) {
                  
                  $("#change_password_email").val('');
                  $("#change_password_email_verify").val('');
                  
                  if (data.SUCCESS == 1)
                  {
                  
                        window.plugins.toast.show('Password Updated...', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                  
                        window.location='#home';
                  
                  }
                  else
                  {
                        window.plugins.toast.show('Please try again...', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                 
                  }
                  
                  },error: function(e){
                    alert(JSON.stringify(e)+"Please check Network Connection..");
                  }
                  
            });// ajax call end
    
    
}// change password end here.
function logoutuser(){
        localStorage.clear();
        userID ='';
        access_token ='';
        window.plugins.toast.show('Successfully Logout', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
        $.mobile.changePage("#login", {changeHash: false });
} // logoutues end
function loginwithfb(name,email,id)
{
			
					var vemail = email;
					var vFBID = id;
				
                    $.ajax({
                           url: "http://isweting.com/restaurant/ws/key/index/format/json",
                           type: "POST",
                          cache: false,
                           beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY', '6d9f729b765aae27f45e5ef9150fa073f8a61b94');},
                           success: function(e) {
                            window.localStorage.setItem('key',e.key);
                          
                           // call ws for login
                           $.ajax({
                                  url: 'http://isweting.com/restaurant/ws/admin/fbLogin/format/json',
                                  type: 'POST',
                                   cache: false,
                                  beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));},
                                  data: { 'dLatitude' : latitude, 'dLongitude' : longitude,'vEmail': vemail, 'vFBID': vFBID,'ePlatform':'ios','vDeviceToken':devicetoken,'vName':name },
                                  success: function(data) {
                                  
                                  
                                  if (data.SUCCESS == 1)
                                  {
                                  window.localStorage.setItem('session', JSON.stringify(data));
                                 
                                  window.location='#home';
                                  }
                                  else 
                                  {
                                  window.plugins.toast.show('Unable to Login Please Try Again...', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                                  logoutuser();
                                  }
                                  
                                  },error: function(e){
                                  alert("Not able to Login Please try Again...");
                                  }
                                  });// ajax call end for fblogin
                           
                           
                           
                           },
                           error: function(e){alert('Failure!'+JSON.stringify(e));}
                   });// ajax calll end for key/index

            
            
				
		}	
function loginwithtwitter(userid,token)
{
    
    $.ajax({
           url: "http://isweting.com/restaurant/ws/key/index/format/json",
           type: "POST",
cache: false,
           beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY', '6d9f729b765aae27f45e5ef9150fa073f8a61b94');},
           success: function(e) {
           window.localStorage.setItem('key',e.key);
           
           $.ajax({
                  url: 'http://isweting.com/restaurant/ws/admin/twitterLogin/format/json',
                  type: 'POST',
                   cache: false,
                  beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));},
                  data: { 'dLatitude' : latitude, 'dLongitude' : longitude,'vEmail': userid, 'vTWID': token,'ePlatform':'ios','vDeviceToken':devicetoken },
                  success: function(data) {
                  if (data.SUCCESS == 1)
                  {
                  window.localStorage.setItem('session', JSON.stringify(data));
                  window.location='#home';
                  }
                  else
                  {
                  
                  window.plugins.toast.show('Unable to Login Please Try Again...', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                  logoutuser();
                  }
                  
                  },error: function(e){
                  //	alert(JSON.stringify(e));
                  }
				  });// ajax call end for twitterlogin
           
           
           },
           error: function(e){alert('Failure!'+JSON.stringify(e));}
           }); // ajax calll end for key/index
    
		
}

