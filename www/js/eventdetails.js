// JavaScript Document

function getDetailEvent(eventid)
{
            $.mobile.loading( 'show', {text: 'Loading...',textVisible: true,theme: 'z',html: ""});
			var html='';
			 $.ajax({
				type:"GET", 
				//url: "eventdetails.json", 
				url:"http://isweting.com/restaurant/ws/event/detail/iEventID/"+eventid,
				dataType: "json",
				beforeSend: function(xhr){
					xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));
					xhr.setRequestHeader('accesstoken',JSON.parse(window.localStorage.getItem('session')).accesstoken);
					xhr.setRequestHeader('iUserID',JSON.parse(window.localStorage.getItem('session')).DATA.iUserID);
					},
				success: function(data) {
						//alert(JSON.stringify(data));
						html="";
						test = data.EVENT_DATA;
                
								if(test.vImage == "" )
								{
									test.vImage = "Image Unavailable!";
								}
								if(test.tDescription == "" )
								{
									
									test.tDescription = "---";
								}
								if(test.tAddress == "" )
								{
									
									test.tAddress = "---";
								}
								if(test.dtSchedule == "" )
								{
									
									test.dtSchedule = "---";
								}
								if(test.vPhone == "" )
								{
									test.vPhone = "---";
								}
                                if(test.vEmail == "" )
                                {
									
									test.vEmail = "---";
								}
                                if(test.vWebsite == "" )
                                {
									
									test.vWebsite = "---";
								}
						
								html+='<div class="detail_img"><img src="'+test.vImage+'"></div>';
                    if(test.slider_images=="")
                    {
                    
                    }
                    else
                    {
                        html+='<div class="options">';
                    }
                                $.each(test.slider_images,function(i,imagedata)
                                {
                                       
                                   html+='<div class="eventthumb" onclick="changeImg(\''+imagedata.image+'\',this);"><img src="'+imagedata.thumb+'"></div>';
                                       
                                });
                    
							/*	html+='<div class="directions event_2"></div>';
								html+='<div class="call event_3"></div>';
								html+='<div class="reservation event_4"></div>';*/
                    if(test.slider_images=="")
                    {
                    }
                    else
                    {
                    html+='</div>';
                    }
                				
                    
                                if(test.is_favourite==0)
                                {
                    
                                    html+='<div class="event_favourite addto" onclick="AddRemoveEventFavourite(\''+eventid+'\');"></div>';
                                    }
                                else
                                {
                                    
                                    html+='<div class="event_unfavourite addto" onclick="AddRemoveEventFavourite(\''+eventid+'\');"></div>';
                                    }
                    
                                html+='<div class="about">';
                                html+='<p>'+test.tDescription+'</p>';
                				html+='</div><div class="eventdetails">';
                				html+='<div class="icon"></div>';
                    			html+='<div class="venue">';
								html+='<div class="event_address">'+test.tAddress+'</div>';
                    			html+='<div class="event_date">'+test.dtSchedule+'</div>';
                    			html+='<div class="phone_no"><a href="tel:'+test.vPhone+'">'+test.vPhone+'</a></div>';
                    			html+='<div class="event_email"><a onclick="composeMail(\''+test.vEmail+'\',\''+test.vName+'\');">'+test.vEmail+'</a></div>';
                    			html+='<div class="website"><a onclick="redirect(\''+test.vWebsite+'\');">'+test.vWebsite+'</a></div></div>';
                				html+='</div>';
							
								$('.detail_content').html(html);
                                $("#event_details .heading .center_text").html(test.vName);
                                $.mobile.changePage("#event_details", {changeHash: false});
						
						
					},
				error: function(jqXHR) {
						//alert(jqXHR.status);
						alert("Not Able to List Data Please check Network Connection...");
                         $.mobile.loading( 'hide');
                        $.mobile.changePage("#event_listing", {changeHash: false});
					}
			}); // end ajax call
}
function changeImg(newimage,thumb)
{
    
    oldimage=$("#event_details .detail_img img").attr("src");
    $(thumb).html('<img src="'+oldimage+'">').fadeIn(300);
    $("#event_details .detail_img img").attr("src",newimage).fadeIn(300);
    $(thumb).attr("onclick","");
    $(thumb).attr('onclick','changeImg(\''+oldimage+'\',this);');
    
    
} // changeImg end here

function composeMail(email,name)
{
   
   /* window.plugin_email.EmailComposer.open({
                             to:      ['info@appplant.de'],
                             subject: 'Congratulations',
                             body:    '<h1>Happy Birthday!!!</h1>',
                             isHtml:  true
                             });
    
    */
    var options ={
    to:      [email],
    subject: name+' Enquiry',
    body:    '',
    isHtml:  true
    };
   
    var callbackFn = null,
    
    options    = options || {};
    
    var defaults = {
    subject:     null,
    body:        null,
    to:          null,
    cc:          null,
    bcc:         null,
    attachments: null,
    isHtml:      true
    }
    
    for (var key in defaults) {
        if (options[key] !== undefined) {
            defaults[key] = options[key];
        }
    }
    
    cordova.exec(null, null, 'EmailComposer', 'open', [options]);
    
} // composeMail End

function AddRemoveEventFavourite(eventid)
{
    $.ajax({
           type:"POST",
           url:"http://isweting.com/restaurant/ws/event/favourite",
           dataType: "json",
           beforeSend: function(xhr){
           xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));
           xhr.setRequestHeader('accesstoken',JSON.parse(window.localStorage.getItem('session')).accesstoken);
           xhr.setRequestHeader('iUserID',JSON.parse(window.localStorage.getItem('session')).DATA.iUserID);
           },
           data:{'iEventID' : eventid},
           success: function(data) {
           if(data.SUCCESS==1)
           {
           window.plugins.toast.show(data.MESSAGE, 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
           /* $(".favourites a").click(); */
           if($(".addto").hasClass("event_favourite"))
           {
           $(".addto").removeClass("event_favourite");
           $(".addto").addClass("event_unfavourite");
           }
           else
           {
           $(".addto").removeClass("event_unfavourite");
           $(".addto").addClass("event_favourite");
           }
           }
           
           },
           error: function(error) {
           alert("Not able to add/remove try again..");
           }
           }); // ajax end
} //AddToFavourite end
