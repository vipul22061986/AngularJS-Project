var event_city="";      // this will use for filter if its blanck then event is by nearby else by city
var event_page_count=0;
$(document).ready(function(e) {
                  $("#nearbyevent").click(function(event){
                           event_city="";
                           event_page_count=0;
                            $('.event_list ul').html('');
                            $('#listing .loadmore').hide();
                            $.mobile.changePage("#event_listing", {changeHash: false});
                            filtersearch();
                             
                  }); // nearby event end
  $("#searchField").on("input", function(e) {
                                       var sugList = $("#suggestions");
                                       var text = $(this).val();
                                       if(text.length < 1) {
                                       sugList.html("");
                                       sugList.listview("refresh");
                                       }
                                       else
                                       {
                                      
                                       $.ajax({
                                              type:"POST",
                                               cache: false,
                                              url:"http://isweting.com/restaurant/ws/event/suggestion",
                                              dataType: "json",
                                              beforeSend: function(xhr){
                                              xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));
                                              xhr.setRequestHeader('accesstoken',JSON.parse(window.localStorage.getItem('session')).accesstoken);
                                              xhr.setRequestHeader('iUserID',JSON.parse(window.localStorage.getItem('session')).DATA.iUserID);
                                              },
                                              data: { 'search':text},
                                              success: function(data) {
                                             
                                              var str = "";
                                              $.each(data.SEARCH_DATA, function(i, value){
                                                    
                                                     str += '<li><a onclick="appendcity(\''+value+'\');">'+value+'</a></li>';
                                                     
                                                     });
                                              if(str!="")
                                              {
                                              str+='<li style="font-size:12px;text-align:center;"><div>More Neighborhoods Available</div><div>By Name Search</div></li>';
                                              }
                                              sugList.html(str);
                                              sugList.listview("refresh");
                                             // console.dir(value);
                                              
                                              }, // sucess end
                                              error: function(error) {
                                              console.log("error"+JSON.stringify(error));
                                              $.mobile.loading( 'hide');
                                              } // error end
                                              });  // ajax end
                                       }
       }); // input ajax suggestion end
	 
       $(".fav_events").click(function(event)
                                         {
                                         /********************
                                          0  not selected
                                          1  Indoor
                                          2  Outdoor
                                          3  Accept Credit Cards
                                          4  Live Performance
                                          5  Dj Only
                                          pass all with , seprated
                                          ********************/
                                         setTimeout(function(){
                                                    $(this).trigger('resize');
                                                    },50);
                                         $.mobile.loading( 'show', {text: 'Loading...',textVisible: true,theme: 'z',html: ""});
                                         
                                         var param="";
                                         if($('#indoor_select').val()=="on"){param+="1,";}
                                         if($('#outdoor_select').val()=="on") {param+="2,";}
                                         if($('#cc_select').val()=="on") {param+="3,";}
                                         if($('#perfor_select').val()=="on") {param+="4,";}
                                         if($('#dj_select').val()=="on") {param+="5,";}
                                         if(param==""){param+="0";}else{param=param.substr(0,(param.length-1));}
                                         var html='';
                                        //s $('.restaurant_list ul').html('');
                                         $.ajax({
                                                type:"GET",
                                                 cache: false,
                                                //url: "eventlistingpanel.json",
                                                url: "http://isweting.com/restaurant/ws/event/getFav",
                                                dataType: "json",
                                                beforeSend: function(xhr){
                                                xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));
                                                xhr.setRequestHeader('accesstoken',JSON.parse(window.localStorage.getItem('session')).accesstoken);
                                                xhr.setRequestHeader('iUserID',JSON.parse(window.localStorage.getItem('session')).DATA.iUserID);
                                                },
                                                success: function(data) {
                                                
                                                if(data.SUCCESS==0)
                                                {
                                                
                                                window.plugins.toast.show('No Event Found....', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                                                $.mobile.changePage("#home", {changeHash: false});
                                                }
                                                else
                                                {
                                                
                                                var test = data.FAV_DATA;
                                            //    alert(JSON.stringify(data));
                                                MapData=[];
                                                MapData.push(test);  // store all listing to variable for display in pin in map
                                                if(test!="" && test!="[]")
                                                {
                                                var custom_class="";
                                                var i = 0;
                                                $.each(test, function(i, test){
                                                       
                                                       if ((i%2) == 0)
                                                       {
                                                       custom_class="first";
                                                       }
                                                       else
                                                       {
                                                       custom_class="second";
                                                       }
                                                       //	alert(JSON.stringify(test.vImage));
                                                       html+='<li onclick="getDetailEvent('+test.iEventID+');" class="'+custom_class+'"><div class="li_img"><img src="'+test.vImage+'">';
                                                       html+='</div><div class="rest_details event_details">';
                                                       html+='<h2>'+test.vName+'</h2>';
                                                       if(test.tDescription.length>=100)
                                                       {
                                                       html+='<p>'+test.tDescription.substr(0,100);+'...</p>';
                                                       }
                                                       else
                                                       {
                                                       html+='<p>'+test.tDescription+'</p>';
                                                       
                                                       }
                                                       html+='</div></li>';
                                                       });  // for each end for data
                                                }
                                                $('#event_details .heading .left_arrow').html('<a onclick=\'$(".fav_events").click();\'></a>');
                                                $.mobile.changePage("#myting", {changeHash: false});
                                                $('.restaurant_list ul').html(html);
                                                } // success if condition end
                                                $.mobile.loading( 'hide');
                                                
                                                },
                                                error: function(jqXHR) {
                                                alert("Not Able to List Data Please check Network Connection...");
                                                $.mobile.loading( 'hide');
                                                $.mobile.changePage("#home", {changeHash: false});
                                                
                                                }
                                                });
                                         $("#event_listing_panel").panel("close");
                                         });// fuction filtersearch end here.
                  
                  $("#event_listing .loadmore a").click(function(){
                                event_page_count=event_page_count+1;
                                filtersearch();
                   }); // loadmore end
                  
}); // doc ready end
function appendcity(city)
{
    $("#suggestions").html("");
    $("#searchField").val("");
    event_city=city;
     $('.event_list ul').html('');
     $('#listing .loadmore').hide();
    event_page_count=0;
    $.mobile.changePage("#event_listing", {changeHash: false});
    filtersearch();

}
function filter_resturant()
{
    $('.event_list ul').html('');
    $('#listing .loadmore').hide();
    event_page_count=0;
    filtersearch();
}
function filtersearch()
{
	/********************
     0  not selected
     1  Indoor
     2  Outdoor
     3  Accept Credit Cards
     4  Live Performance
     5  Dj Only
     pass all with , seprated
     ********************/
    $.mobile.loading( 'show', {text: 'Loading...',textVisible: true,theme: 'z',html: ""});
    
    var param="";
    if($('#indoor_select').val()=="on"){param+="1,";}
    if($('#outdoor_select').val()=="on") {param+="2,";}
    if($('#cc_select').val()=="on") {param+="3,";}
    if($('#perfor_select').val()=="on") {param+="4,";}
    if($('#dj_select').val()=="on") {param+="5,";}
    if(param==""){param+="0";}else{param=param.substr(0,(param.length-1));}
    var html='';
     navigator.geolocation.getCurrentPosition(function(position){
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
          //  alert("--->"+position.coords.latitude+"==="+position.coords.longitude);
            
          //  alert(latitude+"===="+longitude);
            
            $.ajax({
                   type:"POST",
                   cache: false,
                   //url: "eventlistingpanel.json",
                   url: "http://isweting.com/restaurant/ws/event/filter",
                   dataType: "json",
                   beforeSend: function(xhr){
                   xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));
                   xhr.setRequestHeader('accesstoken',JSON.parse(window.localStorage.getItem('session')).accesstoken);
                   xhr.setRequestHeader('iUserID',JSON.parse(window.localStorage.getItem('session')).DATA.iUserID);
                   },
                   data: {'vEventCat':param,'city':event_city,"dLatitude":latitude,"dLongitude":longitude,"load_page":event_page_count},
                   success: function(data) {
                   
                   if(data.SUCCESS==0)
                   {
                   
                   window.plugins.toast.show('No Event Found....', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                   $.mobile.changePage("#home", {changeHash: false});
                   }
                   else
                   {
                   
                   
                   var test = data.EVENT_DATA;
                   MapData.push(test);
                   // store all listing to variable for display in pin in map
                   if(test!="" && test!="[]")
                   {
                   var custom_class="";
                   var i = 0;
                   $.each(test, function(i, test){
                          
                          if ((i%2) == 0)
                          {
                          custom_class="first";
                          }
                          else
                          {
                          custom_class="second";
                          }
                          //	alert(JSON.stringify(test.vImage));
                          html+='<li onclick="getDetailEvent('+test.iEventID+');" class="'+custom_class+'"><div class="li_img"><img src="'+test.vImage+'">';
                          html+='</div><div class="rest_details event_details">';
                          html+='<h2>'+test.vName+'</h2>';
                          if(test.tDescription.length>=100)
                          {
                          html+='<p>'+test.tDescription.substr(0,100);+'...</p>';
                          }
                          else
                          {
                          html+='<p>'+test.tDescription+'</p>';
                          
                          }
                          
                          html+='</div></li>';
                          });  // for each end for data
                   }
                   $('#event_details .heading .left_arrow').html('<a href="#event_listing"></a>');
                   $.mobile.changePage("#event_listing", {changeHash: false});
                   $('.event_list ul').append(html);
                   if(data.is_next_page!=1)
                   {
                   $('#event_listing .loadmore').hide();
                   }
                   else
                   {
                   $('#event_listing .loadmore').show();
                   }
                   } // success if condition end
                   $.mobile.loading( 'hide');
                   },
                   error: function(jqXHR) {
                   alert("Not Able to List Data Please check Network Connection...");
                   $.mobile.loading( 'hide');
                   $.mobile.changePage("#home", {changeHash: false});
                   
                   }
            }); // ajax end here
            
            $("#event_listing_panel").panel("close");
            
            
            
            
                                              }, function(e){
                                               $.mobile.loading( 'hide');
                                              }); // location end
    
   
   
} // fuction filtersearch end here.

