var currentLagLng;
$(document).ready(function() {
               
	//------- Google Maps ---------//
	
	$("#event_listing .right_location a").click(function(event){
                                              
                              initmapevent(MapData);
			
    }); // event End
                  $("#listing .right_location a").click(function(event){
                                                        
                                                        initmap(MapData);
                 }); // resturant
                  $("#myting .right_location a").click(function(event){
                                                        
                                                       initmapmyting(MapData[0]);
                  }); // myting
                  
                  
                               
}); // doc ready end



function initmap(Latlong)
                  {
                      var currentLagLng;
                      
                            $.each(Latlong,function(i, test){
                                    $.each(test,function(i, subtest){
        
                                           currentLagLng = new google.maps.LatLng(subtest.dLatitude,subtest.dLongitude);
                                           return;
                                   });
                              });
                      
                      var myOptions = {
                      zoom: 8,
                      center: currentLagLng,
                      mapTypeId: google.maps.MapTypeId.ROADMAP
                      }
                      var map = new google.maps.Map(document.getElementById("map_div"), myOptions);
                     
                      $.each(Latlong, function(i, data){
                             $.each(data, function(i, test){
                             lat = test.dLatitude;
                             long = test.dLongitude;
                              var myLatlng = new google.maps.LatLng(lat,long);
                              var marker = new google.maps.Marker({
                                                              
                                                                position: myLatlng,
                                                                map: map,
                                                                 //  icon: 'http://www.google.com/intl/en_us/mapfiles/ms/icons/blue-dot.png',
                                                                 title: "Is We Ting",
                                                                 animation: google.maps.Animation.DROP
                                                                }); //marker end
                                    }); //for each end
                             }); // for each end
                      
                             $.mobile.changePage("#map", {changeHash: false});
                      
                      
} // function initmap end
function initmapevent(Latlong)
{
    
    var currentLagLng;
    
    $.each(Latlong,function(i, test){
           $.each(test,function(i, subtest){
                  
                  currentLagLng = new google.maps.LatLng(subtest.dLatitude,subtest.dLongitude);
                  return;
                  });
           });
    
    var myOptions = {
    zoom: 8,
    center: currentLagLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_div_event"), myOptions);
    
    $.each(Latlong, function(i, data){
           $.each(data, function(i, test){
                 
                  lat = test.dLatitude;
                  long = test.dLongitude;
                  var myLatlng = new google.maps.LatLng(lat,long);
                  var marker = new google.maps.Marker({
                                                      
                                                      position: myLatlng,
                                                      map: map,
                                                      //  icon: 'http://www.google.com/intl/en_us/mapfiles/ms/icons/blue-dot.png',
                                                      title: "Is We Ting",
                                                      animation: google.maps.Animation.DROP
                                                      }); //marker end
                  }); //for each end
           }); // for each end
    
                  $.mobile.changePage("#event_map", {changeHash: false});
    
    
} // function initmap end
function initmapmyting(Latlong)
{
   // alert(JSON.stringify(Latlong) +"Latlong fav map");
    var currentLagLng;
    
    $.each(Latlong,function(i, test){
           currentLagLng = new google.maps.LatLng(test.dLatitude,test.dLongitude);
           return;
           });
    var myOptions = {
    zoom: 25,
    center: currentLagLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_div_myting"), myOptions);
    $.each(Latlong, function(i, data){
           lat = data.dLatitude;
           long = data.dLongitude;
         //  alert(lat +"==="+ long);
           var myLatlng = new google.maps.LatLng(lat,long);
           var marker = new google.maps.Marker({
                                               
                                               position: myLatlng,
                                               map: map,
                                               //  icon: 'http://www.google.com/intl/en_us/mapfiles/ms/icons/blue-dot.png',
                                               title: "Is We Ting",
                                               animation: google.maps.Animation.DROP
                                               }); //marker end
           
           }); // for each end
    
   
              
               $.mobile.changePage("#myting_map", {changeHash: false});
    
    
} // function initmapmyting


function calculateRoute(from, to) {

    // Center initialized to Naples, Italy
    var myOptions = {
    zoom: 10,
    center: new google.maps.LatLng(latitude,longitude),
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // Draw the map
    var mapObject = new google.maps.Map(document.getElementById("from_to"), myOptions);
    
    var directionsService = new google.maps.DirectionsService();
    var directionsRequest = {
    origin: from,
    destination: to,
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
    };
    directionsService.route(
                            directionsRequest,
                            function(response, status)
                            {
                          
                                    if (status == google.maps.DirectionsStatus.OK)
                                    {
                                 
                                            new google.maps.DirectionsRenderer({
                                                         map: mapObject,
                                                         directions: response
                                                    });
                                            }
                                    }
                            ); // function response
} //function to get directions


