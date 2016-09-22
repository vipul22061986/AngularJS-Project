var rest_city="";      // this will use for filter if its blanck then restaurant is by nearby else by city
var rest_page_count=0;
$(document).ready(function(e) {
                  $("#searchField_rest").on("input", function(e) {
                                       
                                       var sugList = $("#suggestions_rest");
                                       var text = $(this).val();
                                       if(text.length < 1) {
                                       sugList.html("");
                                       sugList.listview("refresh");
                                       }
                                       else
                                       {
                                       
                                       $.ajax({
                                              type:"POST",
                                              url:"http://isweting.com/restaurant/ws/restaurant/suggestion",
                                              dataType: "json",
                                              cache: false,
                                              beforeSend: function(xhr){
                                              xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));
                                              xhr.setRequestHeader('accesstoken',JSON.parse(window.localStorage.getItem('session')).accesstoken);
                                              xhr.setRequestHeader('iUserID',JSON.parse(window.localStorage.getItem('session')).DATA.iUserID);
                                              },
                                              data: { 'search':text},
                                              success: function(data) {
                                              
                                              var str = "";
                                              $.each(data.SEARCH_DATA, function(i, value){
                                                     str += '<li><a onclick="getRestaurant(\''+value+'\');">'+value+'</a></li>';
                                                     });
                                              if(str!="")
                                              {
                                              str+='<li style="font-size:12px;text-align:center;"><div>More Neighborhoods Available</div><div>By Name Search</div></li>';
                                              }
                                              sugList.html(str);
                                              sugList.listview("refresh");
                                              console.dir(value);
                                             
                                              }, // sucess end
                                              error: function(error) {
                                                console.log("error"+JSON.stringify(error));
                                              } // error end
                                              });  // ajax end
                                       }
}); // input ajax suggestion for restaurant end
                  
$("#location .nearby").click(function(event){			//give you all the nearby restaurants...(withour any filter...)
                rest_page_count=0;
                $('#listing .loadmore').hide();
                $.mobile.changePage("#listing", {changeHash: false});
                rest_city="";
                $('.restaurant_list ul').html('');
                             var distance=$('input:radio[name=chk_distance]:checked').val();
                             navigator.geolocation.getCurrentPosition(function(position){
                                                                      latitude = position.coords.latitude;
                                                                      longitude = position.coords.longitude;
                                                                    //  alert("--->"+position.coords.latitude+"==="+position.coords.longitude);
                                                                      
                                                                    //  alert(latitude+"===="+longitude);
                           
                             $.mobile.loading( 'show', {text: 'Loading...',textVisible: true,theme: 'z',html: ""});
                            
                             $.ajax({
                                    type:"POST",
                                    url:"http://isweting.com/restaurant/ws/restaurant/getAllYelp",
                                    dataType: "json",
                                    cache: false,
                                    beforeSend: function(xhr){
                                    xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));
                                    xhr.setRequestHeader('accesstoken',JSON.parse(window.localStorage.getItem('session')).accesstoken);
                                    xhr.setRequestHeader('iUserID',JSON.parse(window.localStorage.getItem('session')).DATA.iUserID);
                                    },
                                    data: {"load_page":rest_page_count,"dLatitude":latitude,"dLongitude":longitude,"distance":distance},
                                    success: function(data) {
                                    
            
                                    if(data.SUCCESS==0)
                                    {
                                        window.plugins.toast.show('Sorry, no Caribbean restaurants were found in this area, please try another location..', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                                        $.mobile.changePage("#home", {changeHash: false});
                                    }
                                    else
                                    {
                                         GetRestHtml(data);  // it fill html see below function
                                         $("#listing_panel .filterbutton").html('<a onClick="$(\'#location .nearby\').click();">Filter</a>');
                                            $.mobile.changePage("#listing", {changeHash: false});
                                        $("#listing_panel").panel( "close" );
                                    }
                                    $.mobile.loading( 'hide');
                                    }, // sucess end
                                    error: function(error)
                                    {
                                        alert("Not Able to List Data Please check Network Connection...");
                                        $("#suggestions_rest").html("");
                                        $("#searchField_rest").val("");
                                        $.mobile.loading( 'hide');
                                        $.mobile.changePage("#home", {changeHash: false});
                                    } // error end
                                    }); // ajax end
                            }, function(e){
                                                 $.mobile.loading( 'hide');
                                                                      }); // location end
                             
    });	// rest nearby end
                  
     $("#listing .loadmore a").click(function(){
                                     
                  rest_page_count=rest_page_count+1;
                  FilterRestaurant();
      }); // loadmore end
                  
      $(".fav_restaurant").click(function(event){
                                 $("#myting .restaurant_list ul").html('');
                                           $.mobile.loading( 'show', {text: 'Loading...',textVisible: true,theme: 'z',html: ""});
                                           var html="";
                                           $.ajax({
                                                  type:"GET",
                                                  url:"http://isweting.com/restaurant/ws/restaurant/getFav",
                                                  dataType: "json",
                                                  cache: false,
                                                  beforeSend: function(xhr){
                                                  xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));
                                                  xhr.setRequestHeader('accesstoken',JSON.parse(window.localStorage.getItem('session')).accesstoken);
                                                  xhr.setRequestHeader('iUserID',JSON.parse(window.localStorage.getItem('session')).DATA.iUserID);
                                                  },
                                                  success: function(data) {
                                                  
                                                  if(data.SUCCESS==0)
                                                  {
                                                  window.plugins.toast.show(' No Restaurant  Found..', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                                                  $.mobile.changePage("#home", {changeHash: false});
                                                  }
                                                  else
                                                  {
                                                   var test = data.FAV_DATA;
                                                  
                                                   MapData=[];
                                                   MapData.push(test);
                                                  
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
                                                         
                                                         html+='<li onclick="getRestaurantDetail(\''+test.id+'\',\''+test.data_from+'\' )" class="'+custom_class+'"><div class="li_img">';
                                                         if(test.vImage==""){html+='<img src="images/notavailable.png">';}
                                                         else{html+='<img src="'+test.vImage+'">';}
                                                         
                                                         html+='</div><div class="rest_details">';
                                                         html+='<h2>'+test.vName+'</h2>';
                                                         html+='<p>'+test.vLocation+'</p>';
                                                         html+='</div><div class="ratings">';
                                                         html+='<div class="stars"><img src="'+test.rating_img_url+'"></div><div class="text">'+test.review_count+' reviews</div>';
                                                         html+='</div></li>';
                                                         
                                                         });  // for each end for data
                                                  $("#myting .restaurant_list ul").html(html);
                        $('#details .heading .left_arrow').html('<a onclick=\'$(".fav_restaurant").click();\'></a>');
                                                  $.mobile.changePage("#myting", {changeHash: false});
                                                  }
                                                  } // else of no rest availbale
                                                  $.mobile.loading( 'hide');
                                                  }, // sucess end
                                                  error: function(error) {
                                                        alert("Check Network Connection...");
                                                  $.mobile.loading( 'hide');
                                                  }
                                                  }); // ajax end
                                           
                                           }); // myting page show
}); // doc ready end

function getRestaurant(rest)
{
    rest_page_count=0;
    $('#listing .loadmore').hide();
    $("#listing_panel .filterbutton").html('<a onClick="getRestaurant(rest_city);">Filter</a>');
   
    $.mobile.changePage("#listing", {changeHash: false});
     $("#listing_panel").panel( "close" );
    rest_city=rest;
    $("#suggestions_rest").html("");
    $("#searchField_rest").val("");
     $('.restaurant_list ul').html('');
     FilterRestaurant();
    
    
} // get Restaurant End
function FilterRestaurant() {
    
        var distance=$('input:radio[name=chk_distance]:checked').val();
       
    navigator.geolocation.getCurrentPosition(function(position){
                                             latitude = position.coords.latitude;
                                             longitude = position.coords.longitude;
                                            // alert("--->"+position.coords.latitude+"==="+position.coords.longitude);
                                             
                                           //  alert(latitude+"===="+longitude);
                                             
        $.mobile.loading( 'show', {text: 'Loading...',textVisible: true,theme: 'z',html: ""});
        $.ajax({
               type:"POST",
               url:"http://isweting.com/restaurant/ws/restaurant/getAllYelp",
               dataType: "json",
               cache: false,
               beforeSend: function(xhr){
               xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));
               xhr.setRequestHeader('accesstoken',JSON.parse(window.localStorage.getItem('session')).accesstoken);
               xhr.setRequestHeader('iUserID',JSON.parse(window.localStorage.getItem('session')).DATA.iUserID);
               },
               data: { 'location':rest_city,"load_page":rest_page_count,"dLatitude":latitude,"dLongitude":longitude,"distance":distance},
               success: function(data) {
 
               if(data.SUCCESS==0)
               {
               window.plugins.toast.show(' Sorry, no Caribbean restaurants were found in this area, please try another location..', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                   $.mobile.changePage("#home", {changeHash: false});
               }
               else{
                    GetRestHtml(data);  // it fill html see below function
                    $.mobile.changePage("#listing", {changeHash: false});
                }
                $.mobile.loading( 'hide');
               }, // sucess end
               error: function(error) {
                    alert("Not Able to List Data Please check Network Connection...");
                    $("#suggestions_rest").html("");
                    $("#searchField_rest").val("");
                    $.mobile.loading( 'hide');
               } // error end
         }); // ajax end
    
            }, function(e){
                $.mobile.loading( 'hide');
            }); // location end

} // function end of FilterRestaurant

function GetRestHtml(data)
{
   var html="";
    
    var test = data.RESTAURANT_DATA;
    MapData.push(test);
   
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
                         
                                    html+='<li onclick="getRestaurantDetail(\''+test.id+'\',\''+test.data_from+'\' )" class="'+custom_class+'"><div class="li_img">';
                                        if(test.vImage==""){html+='<img src="images/notavailable.png">';}
                                        else{html+='<img src="'+test.vImage+'">';}

                                   html+='</div><div class="rest_details">';
                                   html+='<h2>'+test.vName+'</h2>';
                                   html+='<p>'+test.vLocation+'</p>';
                                   html+='</div><div class="ratings">';
                                   html+='<div class="stars"><img src="'+test.rating_img_url+'"></div><div class="text">'+test.review_count+' reviews</div>';
                                   html+='</div></li>';
                           
                           
                           });  // for each end for data
                                $('#details .heading .left_arrow').html('<a href="#listing"></a>');
                                $('#listing .restaurant_list ul').append(html);
                             
                    
                    
                   } // test if end
    
     if(data.is_next_page!=1)
    {
        $('#listing .loadmore').hide();
    }
    else
    {
        $('#listing .loadmore').show();
    }
    $.mobile.loading( 'hide');
   
}
function getRestaurantDetail(resid,data_from)
{
   
    $.mobile.loading( 'show', {text: 'Loading...',textVisible: true,theme: 'z',html: ""});
	Data_from = data_from;
	id = resid;
    
    var html='';
    $.ajax({
           type:"POST",
           //url: "eventdetails.json",
           url:"http://isweting.com/restaurant/ws/restaurant/getYelpResDetail",
           dataType: "json",
           cache: false,
           beforeSend: function(xhr){
           xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));
           xhr.setRequestHeader('accesstoken',JSON.parse(window.localStorage.getItem('session')).accesstoken);
           xhr.setRequestHeader('iUserID',JSON.parse(window.localStorage.getItem('session')).DATA.iUserID);
           },
           data:{'id' : resid, 'data_from' : data_from},
           success: function(data) {
           
           html="";
           test = data.RESTAURANT_DATA;
           test1 = test.reviews;
           
          
                      
          
           
           currentResName =test.vName;
           html+='<div class="detail_img">';
           
           if(test.vImage==""){html+='<img src="images/notavailable_big.jpg">';}
           else{html+='<img src="'+test.vImage+'">';}
           
           html+='<div class="address">';
           html+='<div class="detail_address"><h2>'+test.vName+'</h2>';
           html+='<p>'+test.vLocation+'</p>';
           html+='</div><div class="detail_ratings"><div class="stars"><img src="'+test.rating_img_url+'"></div>';
           html+='<div class="text">'+test.review_count+' reviews </div></div></div></div>';
           html+='<div class="options"><div class="review"><a href="#reviews_ratings"></a></div><div class="directions"><a href="#maps_direction" style="display:block !important;font-size: 0px;line-height:54px;" onclick="calculateRoute(\''+latitude+','+longitude+'\',\''+test.vLocation+'\');" >Maps Direction</a></div><div class="call"><a href="tel:'+test.vPhone+'" style="display:block !important;font-size: 0px;line-height:54px;">124243252545245</a></div>';
           if(test.is_favourite==0)
           {
           html+='<div class="favrouite addto" onclick="AddRemoveFavourite(\''+resid+'\',\''+data_from+'\');"></div>';
           }
           else
           {
           html+='<div class="unfavrouite addto" onclick="AddRemoveFavourite(\''+resid+'\',\''+data_from+'\');"></div>';
           }
           html+='</div><div class="about">';
           html+='<h2> Recent Review</h2>';
           html+='<p>'+test.tDescription+'</p>';
           html+='<img src="images/border_bottom.png"></div><div class="reviews"><h2> Reviews </h2>';
           
           $.each(test1, function(i, test1)
                  {
                  html+='<ul><li><div class="li_name"><div>'+test1.name+'</div></div><div class="detailed_review">';
                  html+='<div class="li_details"><p>'+test1.excerpt+'</p>';
                  html+='</div><div class="ratings detail_stars"><div class="stars"><img src="'+test1.rating_img_url+'"></div>';
                  html+='</div><img src="images/border_bottom.png"></div></li></ul>';
                  });  // for each end for data
        
           html+='</div>';
           html+='<div class="yelpreview"><a onclick="redirect(\''+test.mobile_url+'\');">View Yelp Review</a></div>';
           $('#details .detail_content').html(html);
           $('#details .heading .center_text').html(test.vName);
           
           $.mobile.changePage("#details", {changeHash: false});
           
           },
           //	error: function(jqXHR, textStatus, errorThrown) {
           error: function(jqXHR) {
           //alert(jqXHR.status);
           alert("Details Not Availbale Now.Please try After some Time...");
            $.mobile.loading( 'hide');
           }
           });	
} // function end for restaurant detail

function postreview()
{
  
    if($('#review').val()=='')
    {
        window.plugins.toast.show('Please write some review !', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
        return false;
    }
    
    var starreview=0;
    var review = $('#review').val();
    $.each($(".star-rating-on"),function(i,value){
           starreview++;
           });
   if(starreview==0)
   {
       window.plugins.toast.show('Please choose the star rating!', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
       return false;
   }
    $.ajax({
           type:"POST",
           url:"http://isweting.com/restaurant/ws/rating/rate",
           dataType: "json",
           cache: false,
           beforeSend: function(xhr){
           xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));
           xhr.setRequestHeader('accesstoken',JSON.parse(window.localStorage.getItem('session')).accesstoken);
           xhr.setRequestHeader('iUserID',JSON.parse(window.localStorage.getItem('session')).DATA.iUserID);
           },
           data:{'id' : id, 'from' : Data_from, 'tReview' : review, 'iStar' : starreview},
           success: function(data) {
           
                 $("#review").val("");
                  $.each($(".star-rating-on"),function(i,value){
                  $(this).removeClass("star-rating-on");
                  });

           window.plugins.toast.show('Thanks For Review..!!', 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
           getRestaurantDetail(id,Data_from);
           
           }, 
           error: function(error) {
                alert("Not Able to Post Review Try Again...");
           }
           });
    
} // submit review end
function AddRemoveFavourite(resid,data_from)
{
    $.ajax({
           type:"POST",
           url:"http://isweting.com/restaurant/ws/restaurant/addFav",
           dataType: "json",
           cache: false,
               beforeSend: function(xhr){
               xhr.setRequestHeader('X-API-KEY',window.localStorage.getItem('key'));
               xhr.setRequestHeader('accesstoken',JSON.parse(window.localStorage.getItem('session')).accesstoken);
               xhr.setRequestHeader('iUserID',JSON.parse(window.localStorage.getItem('session')).DATA.iUserID);
               },
               data:{'id' : resid, 'from' : Data_from, 'dLongitude' : longitude, 'dLatitude' : latitude},
                success: function(data) {
                    
                if(data.SUCCESS==1)
                {
                    window.plugins.toast.show(data.MESSAGE, 'short', 'center', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
                   /* $(".favourites a").click(); */
                    if($(".addto").hasClass("favrouite"))
                    {
                            $(".addto").removeClass("favrouite");
                            $(".addto").addClass("unfavrouite");
                    }
                     else
                    {
                           $(".addto").removeClass("unfavrouite");
                           $(".addto").addClass("favrouite");
                    }
                }
           
               },
               error: function(error) {
                    alert("Not able to add/remove try again..");
               }
           }); // ajax end
} //AddToFavourite end

function distanceFilter()
{
    $("#listing_panel").panel( "close" );
    getRestaurant(rest);
}
