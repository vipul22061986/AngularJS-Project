var single_cart={"data":[]};
var detail_cart={"data":[]};
var mastercart = [];
var store_name='';
var all_product;
var selected_cart_id;
var selected_id; // this will used for current product id for product with variant
var selected_store_name ='';
var selected_productId = '';
var global_storeid=0;
var Redirection_bit=0; // this bit will decide when you click on backbutton which page you have to redirect product,special,loyalty
var lat="";
var long="";
var current_address="";
var store_type; // if 1 when user press yes initial alert and if 0 use select no to select store type
var store_type_name=''; // selected store type;
var app = angular.module('MobileAngularUiExamples', [
  "ngRoute",
  "ngTouch",
  "mobile-angular-ui"
]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/',          {templateUrl: "overlay.html"});
  $routeProvider.when('/home',          {templateUrl: "home.html"});
  $routeProvider.when('/search_store',    {templateUrl: "search_store.html"});
  $routeProvider.when('/scan',    {templateUrl: "scan.html"}); 
  $routeProvider.when('/category_name',      {templateUrl: "category_name.html"}); 
  $routeProvider.when('/store_listing', {templateUrl: "store_listing.html"}); 
  $routeProvider.when('/preview_order',   {templateUrl: "preview_order.html"});
  $routeProvider.when('/special_products',     {templateUrl: "special_products.html"});
  $routeProvider.when('/products',     {templateUrl: "products.html"});
  $routeProvider.when('/product_details',  {templateUrl: "product_details.html"});
  $routeProvider.when('/store_name',  {templateUrl: "store_name.html"});
  $routeProvider.when('/login',  {templateUrl: "login.html"});
  $routeProvider.when('/register',  {templateUrl: "register.html"});
  $routeProvider.when('/product_info',  {templateUrl: "product_info.html"});
$routeProvider.when('/loyalty_message',  {templateUrl: "loyalty_message.html"});
$routeProvider.when('/available_loyalty',  {templateUrl: "available_loyalty.html"});
$routeProvider.when('/offers',  {templateUrl: "offers.html"});
$routeProvider.when('/get_points',  {templateUrl: "get_points.html"});
 $routeProvider.when('/product_loyalty',  {templateUrl: "productloyalty.html"});
 $routeProvider.when('/choose_shop',  {templateUrl: "choose_shop.html"});          

           });

app.service('analytics', [
  '$rootScope', '$window', '$location', function($rootScope, $window, $location) {
    var send = function(evt, data) {
      ga('send', evt, data);
    }
  }
]);

app.directive( "carouselExampleItem", function($rootScope, $swipe){
  return function(scope, element, attrs){
      var startX = null;
      var startY = null;
      var endAction = "cancel";
      var carouselId = element.parent().parent().attr("id");

      var translateAndRotate = function(x, y, z, deg){
        element[0].style["-webkit-transform"] = "translate3d("+x+"px,"+ y +"px," + z + "px) rotate("+ deg +"deg)";
        element[0].style["-moz-transform"] = "translate3d("+x+"px," + y +"px," + z + "px) rotate("+ deg +"deg)";
        element[0].style["-ms-transform"] = "translate3d("+x+"px," + y + "px," + z + "px) rotate("+ deg +"deg)";
        element[0].style["-o-transform"] = "translate3d("+x+"px," + y  + "px," + z + "px) rotate("+ deg +"deg)";
        element[0].style["transform"] = "translate3d("+x+"px," + y + "px," + z + "px) rotate("+ deg +"deg)";
      }

      $swipe.bind(element, {
        start: function(coords) {
          endAction = null;
          startX = coords.x;
          startY = coords.y;
        },

        cancel: function(e) {
          endAction = null;
          translateAndRotate(0, 0, 0, 0);
          e.stopPropagation();
        },

        end: function(coords, e) {
          if (endAction == "prev") {
            $rootScope.carouselPrev(carouselId);
          } else if (endAction == "next") {
            $rootScope.carouselNext(carouselId);
          }
          translateAndRotate(0, 0, 0, 0);
          e.stopPropagation();
        },

        move: function(coords) {
          if( startX != null) {
            var deltaX = coords.x - startX;
            var deltaXRatio = deltaX / element[0].clientWidth;
            if (deltaXRatio > 0.3) {
              endAction = "next";
            } else if (deltaXRatio < -0.3){
              endAction = "prev";
            } else {
              endAction = null;
            }
            translateAndRotate(deltaXRatio * 200, 0, 0, deltaXRatio * 15);
          }
        }
      });
    }
});

app.controller('MainController', function($rootScope, $location,$scope, $http, analytics,$compile){
            
  
  $rootScope.$on("$routeChangeStart", function(){
    $rootScope.loading = true;
  });
	
  $rootScope.$on("$routeChangeSuccess", function(){
    $rootScope.loading = false;
  });
        app.initialize();   /** Init Paypal Method and Plugins**/
               console.log("test:===>"+new Date());
               
       $rootScope.Setredirect=function()
       {
             if(Redirection_bit==0)
             {
                 window.location.href="#/products";
             }
             else if(Redirection_bit==1)
             {
                 window.location.href="#/special_products";
             }
             else if(Redirection_bit==2)
             {
                  window.location.href="#/product_loyalty";
             }
       
       }// set redirection for back  on product Detail Page
       // using below function it will decide which type of store is listing
      $rootScope.select_store_type=function(type)
       {
               store_type=type;
       }//select_store_type function end here
  $rootScope.getImage=function(){
			//	alert("inside image captured fxn...");
				navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
				destinationType: Camera.DestinationType.FILE_URI,
				sourceType : navigator.camera.PictureSourceType.SAVEDPHOTOALBUM,
				correctOrientation : true });
			
				function onSuccess(imageURI) {
					var image = imageURI;
					//alert(image + "image URI");
					document.getElementById('takenImage').src = imageURI;
				}
				
				function onFail(message) {
					alert('Failed because: ' + message);
				}

			} // camera fxn end 
			
			
	  $rootScope.getQR=function()
	  {
				 
					  cordova.plugins.barcodeScanner.scan(
					  function (result) {
	navigator.notification.alert('Alert',function(){},"We got a barcode\n" +"Result: " + result.text + "\n" +"Format: " + result.format + "\n" +"Cancelled: " + result.cancelled,'Ok');
														  
					}, 
					  function (error) {
						  alert("Scanning failed: " + error);
					  }
				   );
		 },
           $scope.find_store_byname=function()
           {
               
               store_name=$("#product_name").val();
               if(store_name=="")
               {
               alert("Please Enter Suburbd/storename..!!!");
               }
               else
               {
                   var url="";
                   if(store_type==1)
                   {
                        var url='http://202.59.96.95/rest_stores/searchStoreList/?term='+store_name+'&currenttime='+encodeURI(new Date());
                   }
                   else
                   {
                       var url='http://202.59.96.95/rest_customers/storesBySuburbBytype?search='+store_name+'&type='+store_type_name;
                   }
               $http.get(url).then(function(result){
                             $scope.entries = result.data;
                             $(".custom_msg").html('current suburbd');
                            $scope.fillhtml(result.data);
               });
               
               }
           } // find store by name or suburbd function end here
        $scope.search_go=function()
               {
               navigator.geolocation.getCurrentPosition(function(position) {
                                                        lat=position.coords.latitude;
                                                        long=position.coords.longitude;
                                                        var geocoder = new google.maps.Geocoder();
                                                        var latLng = new google.maps.LatLng(lat, long);
                                                        geocoder.geocode({
                                                                         latLng: latLng
                                                                         },
                                                                         function(responses) {
                                                                         if (responses && responses.length > 0)
                                                                         {
                                                                         current_address=responses[0].formatted_address;
                                                                         $("p.custom_msg").html(current_address);
                                                                         }
                                                                         else
                                                                         {
                                                                         alert('Cannot determine address at this location.');
                                                                         $("p.custom_msg").html('current postcode');
                                                                         }
                                                                         });
                           var url="";
                           if(store_type==1)
                           {
                           var url='http://202.59.96.95/rest_customers/nearByStores?lat='+lat+'&long='+long;
                           }
                           else
                           {
                           var url='http://202.59.96.95/rest_customers/nearByStoresByType?lat='+lat+'&long='+long+'&type='+encodeURI(store_type_name);
                           }
                          $http.get(url).then(function(result){
                                   $scope.entries = result.data;
                                   $("#product_name").val('');
                                   $("p.custom_msg").html(current_address);
                                   $scope.fillhtml(result.data);
                                                                                                                   
                          }); // http call for get store from lat long
                                                        
                    },function(e){
                    var html="";
                    alert("Not Able to Get Location..!!!");
                    html+='<div class="container-fluid section gray ">';
                    html+='<div class="tab-content loyalty_msg gray">';
                    html+='<p> No Store Found..!!!</p >';
                    html+='</div></div>';
                    $('#list_stores').html(html);
                    });// get lat long end
               
             } // go search end
       $scope.get_store_fromtype=function(storetype)
       {
                navigator.geolocation.getCurrentPosition(function(position) {
                lat=position.coords.latitude;
                long=position.coords.longitude;
                var geocoder = new google.maps.Geocoder();
                var latLng = new google.maps.LatLng(lat, long);
                geocoder.geocode({
                             latLng: latLng
                             },
                             function(responses) {
                             if (responses && responses.length > 0)
                             {
                                 current_address=responses[0].formatted_address;
                                 $("p.custom_msg").html(current_address);
                             }
                             else
                             {
                                 alert('Cannot determine address at this location.');
                                 $("p.custom_msg").html('current postcode');
                             }
                             });
                
                $http.get('http://202.59.96.95/rest_customers/nearByStoresByType?lat='+lat+'&long='+long+'&type='+encodeURI(storetype)).then(function(result){
                             $scope.entries = result.data;
                             store_type_name=storetype;
                             $("#product_name").val('');
                             $scope.fillhtml(result.data);
                             }); // http call for get store from lat long
                },function(e){
                        var html="";
                         alert("Not Able to Get Location..!!!");
                         html+='<div class="container-fluid section gray ">';
                         html+='<div class="tab-content loyalty_msg gray">';
                         html+=' <p> No Store Found..!!!</p>';
                         html+='</div></div>';
                         $('#list_stores').html(html);
                });// get lat long end
       }//get Store From Type
       $scope.fillhtml=function(result)
               {
               var html="";
               $.each(result,function(i,entry)
                      {
                      html+='<a class="list-group-item storealistig" href="#/category_name" ng-click="get_category(\''+entry.name+'\')">';
                      html+=' <div class="pull-left">';
					  html+=' <p class="isopen">Is Open : ';
                      if(entry.store_status=="Yes")
                      {
                      html+='<span class="green">Yes</span></p>';
                      }
                      else
                      {
                      html+='<span class="orange">No</span></p>';
                      }
                      html+='<img src="http://202.59.96.95/img/stores/'+entry.image+'">';
                      html+=' </div>';
                      html+=' <div class="address product_title" >';
                      html+=' <h4 id="selected_StoreName">'+entry.name+'</h4>';
                      html+=' <p id="selected_AddressName">'+entry.address+'</p>';
                      html+=' <p class="preorderstore">Pre Order :';
                          if(entry.preorder==null)
                          {
                           html+='<span class="orange">No</span></p>';
                          }
                          else
                          {
                                  if(entry.preorder.status=="Yes")
                                  {
                                  html+='<span class="green">Yes</span></p>';
                                  }
                                  else
                                  {
                                  html+='<span class="orange">No</span></p>';
                                  }

                          }
                      html+='  <p class="deliverystore">Delivery : ';
                      if(entry.delivery==null)
                      {
                      html+='<span class="orange">No</span></p>';
                      }
                      else
                      {
                            if(entry.delivery.status=="Yes")
                            {
                                html+='<span class="green">Yes</span></p>';
                            }
                            else
                            {
                                html+='<span class="orange">No</span></p>';
                            }
                      }
                      
					  html+=' <p id="selected_AddressName">'+entry.specials+' Special</p>';
					  html+='<div class="store_rating"><img src="images/info.png"></div>';
                      /*html+=' <p class="isopen">Is Open : ';
                      if(entry.store_status=="Yes")
                      {
                      html+='<span class="green">Yes</span></p>';
                      }
                      else
                      {
                      html+='<span class="orange">No</span></p>';
                      }*/
					  
                      html+=' </p></div><div class="pull-right order">';
                      html+=' <span class="price"><i class="fa fa-chevron-right"></i> </span>';
                      html+=' </div>';
                      html+=' </a>';
                      });
               if(html=="")
               {
               html+='<div class="container-fluid section gray ">';
               html+='<div class="tab-content loyalty_msg gray">';
               html+=' <p> No Store Found..!!!</p>';
               html+='</div></div>';
                $('#list_stores').html(html);
               }
               else
               {
               html=$compile(angular.element(html))($scope);
               $('#list_stores').html(html);
               }
       
               
        }
	 	$scope.get_category=function(name, $scope)
		{
			selected_store_name = name;
			//alert(selected_store_name + " : selected name");
			
		}
       $scope.product_info=function(product_id)
       {
           $.each(all_product.data,function(i,data)
                  {
                  //alert(data['Product']['id']+"====="+product_id);
                  if(data['Product']['id']==product_id)
                  {
                      $("#product_info").html(data['Product']['description']);
                      window.location.href="#/product_info";
                  }
                  });
       }

		$scope.get_productId=function(id, $scope)
		{
			selected_productId = id;
			//alert(selected_productId + " : selected id");
			}
		 $scope.pre_order_cart=function()
		{
                  var current_product_string="";
					var flag=0;
					var productname,productid,qty,sku="";
					var product_price,total_price,productextraprice=0;
					$.each(detail_cart.data,function(i,subdata)
					{
						current_product_string+=subdata.option+'('+subdata.price+')';
						productextraprice=parseFloat(productextraprice)+parseFloat(subdata.price);

						productname=subdata.productname;
						productid=subdata.id;
						qty=subdata.qty;
						sku=subdata.sku;
						product_price=subdata.productprice;
					});
                   if (current_product_string.indexOf("(0)") >= 0)
                   {
                   alert("Please select Proper Variant...");
                   return false;
                   }
               
					total_price=(parseFloat(product_price)+parseFloat(productextraprice)) * parseInt(qty);
					total_price = !Number(total_price) ? total_price : Number(total_price)%1 === 0 ? Number(total_price).toFixed(2) : total_price;
			
					$.each(mastercart,function(i,subdata)
					{
                          // alert(subdata.product_string+":"+subdata.product_id+ "---" + current_product_string + " : "+productid);
						if(subdata.product_string==current_product_string && subdata.product_id==productid)
						{
							flag=1;	
							subdata.product_qty= parseInt(subdata.product_qty)+parseInt(qty);
						}
					});
					if(flag==0)
					{
					 mastercart.push({"product_id":productid,"product_name":productname,"product_sku":sku,"product_qty":qty,"product_total":total_price,"product_price":product_price,"productextraprice":productextraprice,"product_string":current_product_string});
					}
               window.location.href="#/preview_order";

		}
       $scope.pay_at_paypal=function()
       {
               PayPalMobile.renderSinglePaymentUI(app.createPayment($(".subrowtotalmaster").html()),function(payment){
                                                  alert("Order Posted Sucessfully...");
                                                  var paypal_receipt=payment.response.id;
                                                  console.log(JSON.stringify(payment));
                                                  $scope.postdata("paypal",paypal_receipt);
                                                  },function(e){
                                                  alert("order Cancelled");
                                                    window.location.href="#/home";
                                                  });
       }
        $scope.postdata=function(paymenttype,receipt_id)
        {
               $http({
                     url: 'http://202.59.96.95/rest_customers/preOrder',
                     method: "POST",
                     contentType:"application/json; charset=utf-8",
                     data: {"cart":{"paypal_pay_id":receipt_id,"payment_type":paymenttype,"cart_total":$(".subrowtotalmaster").html(),"storename":selected_store_name,"cust_detail":JSON.parse(window.localStorage.getItem('session')),"simpleproduct":single_cart,"detailproduct":mastercart}}
                     }).success(function(result){
                                alert("Data Sucessfully Posted...");
                                console.log(JSON.stringify(result));
                                window.location.href="#/home";
                                
                                }).error(function(error){
                                         alert("Error : " + JSON.stringify(error));
                                });
               
        }
		$scope.payatcounter=function()
		{
               $scope.postdata("counter","NULL");
		}
		$scope.cart_id=function(id)
		{
			selected_cart_id = id;
			selected_id='';
		//	alert(selected_cart_id + " : selected id");
			
        }// function for without variant
        $scope.detail_cart=function(id)
       {
               selected_id=id;
			   selected_cart_id = '';
       } // function for with variant and diffrent attribute
    
		
			
		$scope.login=function(hash)
			{
				var email = document.getElementById('login_email').value;
				var password = document.getElementById('login_password').value;
				$http({
				  url: 'http://202.59.96.95/rest_customers/customer_auth',
				  method: "POST",
				  contentType:"application/json; charset=utf-8",
				  data: {"Customer":{"email":email,"password":password}}
			
			}).success(function(result){
				if (result.email && result.id)
					{
						alert("successfully logged in...");
						window.localStorage.setItem('session',JSON.stringify(result));
						//alert(JSON.parse(window.localStorage.getItem('session')));
						// localStorage.clear();
						//$location.path(hash);
                       if(Redirection_bit==0)
                       {
                       window.location.href="#/products";
                       }
                       else if(Redirection_bit==1)
                       {
                       window.location.href="#/special_products";
                       }
                       else if(Redirection_bit==2)
                       {
                       window.location.href="#/product_loyalty";
                       }
					}
				else { alert("Incorrect password or Email Id!"); }
				}).
				error(function(error){
					alert("Error : " + JSON.stringify(error));
				});
		 
			}
	
});  //  main controller end here;

app.controller('StoreController', function($scope,$location,$http,$compile) {
               single_cart={"data":[]};
               detail_cart={"data":[]};
               mastercart = [];
               if(store_type==1)
               {
               navigator.geolocation.getCurrentPosition(function(position) {
                                                        lat=position.coords.latitude;
                                                        long=position.coords.longitude;
                                                        var geocoder = new google.maps.Geocoder();
                                                        var latLng = new google.maps.LatLng(lat, long);
                                                        geocoder.geocode({
                                                         latLng: latLng
                                                         },
                                                         function(responses) {
                                                             if (responses && responses.length > 0)
                                                             {
                                                                         current_address=responses[0].formatted_address;
                                                                         $("p.custom_msg").html(current_address);
                                                             }
                                                             else
                                                             {
                                                                         alert('Cannot determine address at this location.');
                                                                         $("p.custom_msg").html('current postcode');
                                                             }
                                                         });
                                                       
                                 $http.get('http://202.59.96.95/rest_customers/nearByStores?lat='+lat+'&long='+long).then(function(result){
                                         $scope.entries = result.data;
                                         $("#product_name").val('');
                                         $scope.fillhtml(result.data);
                             }); // http call for get store from lat long
                    },function(e){
                    alert("Not Able to Get Location..!!!");
                    var html="";
                    html+='<div class="container-fluid section gray ">';
                    html+='<div class="tab-content loyalty_msg gray">';
                    html+=' <p> No Store Found..!!!</p>';
                    html+='</div></div>';
                    $('#list_stores').html(html);
                    });// get lat long end
               } // if condition end
               
               $scope.fillhtml=function(result)
               {
               var html="";
               $.each(result,function(i,entry)
                      {
                      html+='<a class="list-group-item storealistig" href="#/category_name" ng-click="get_category(\''+entry.name+'\')">';
                      html+=' <div class="pull-left">';
                      html+='<img src="http://202.59.96.95/img/stores/'+entry.image+'">';
                      html+=' </div>';
                      html+=' <div class="address product_title" >';
                      html+=' <h4 id="selected_StoreName">'+entry.name+'</h4>';
                      html+=' <p id="selected_AddressName">'+entry.address+'</p>';
                      html+=' <p class="preorderstore">Pre Order :';
                      if(entry.preorder==null)
                      {
                      html+='<span class="orange">No</span></p>';
                      }
                      else
                      {
                      if(entry.preorder.status=="Yes")
                      {
                      html+='<span class="green">Yes</span></p>';
                      }
                      else
                      {
                      html+='<span class="orange">No</span></p>';
                      }
                      
                      }
                      html+='  <p class="deliverystore">Delivery : ';
                      if(entry.delivery==null)
                      {
                      html+='<span class="orange">No</span></p>';
                      }
                      else
                      {
                      if(entry.delivery.status=="Yes")
                      {
                      html+='<span class="green">Yes</span></p>';
                      }
                      else
                      {
                      html+='<span class="orange">No</span></p>';
                      }
                      }

                      html+=' <p class="isopen">Is Open : ';
                     
                      if(entry.store_status=="Yes")
                      {
                      html+='<span class="green">Yes</span></p>';
                      }
                      else
                      {
                      html+='<span class="orange">No</span></p>';
                      }

                      
                      html+='</p></div><div class="pull-right order">';
                      html+=' <span class="price"><i class="fa fa-chevron-right"></i> </span>';
                      html+=' </div>';
                      html+=' </a>';
                      });
               
               if(html=="")
               {
               html+='<div class="container-fluid section gray ">';
               html+='<div class="tab-content loyalty_msg gray">';
               html+=' <p> No Store Found..!!!</p>';
               html+='</div></div>';
               $('#list_stores').html(html);
               }
               else
               {
               html=$compile(angular.element(html))($scope);
               $('#list_stores').html(html);
               }
               
               
               }
               
}); // StoreController End here

app.controller('registerController', function($scope,$location,$http) {
               
      $scope.register_user=function(path)
      {
               var email = document.getElementById('email').value;
               var password = document.getElementById('password').value;
               var contact = document.getElementById('contact').value;
               var dob = document.getElementById('dob').value;
               var image = document.getElementById('takenImage').src;
               
               var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
               if(!regex.test(email))
               {
               alert("Invalid Email Address!");
               return false;
               }
               
               else if (email=='' || password=='' || contact=='' || dob =='')
               {
               alert("Please fill up all the fields");
               return false;
               }
               
               // Verify server has been entered
               server ='http://202.59.96.95/rest_customers/customer_signup?email='+email+'&password='+password+'&contact='+contact+'&DOB='+dob;
               
               if (server) {
               
               // Specify transfer options
               var options = new FileUploadOptions();
               options.fileKey="file";
               options.fileName="test1.jpg";
               options.mimeType="image/jpeg";
               options.chunkedMode = false;
               
               // Transfer picture to server
               var ft = new FileTransfer();
               ft.upload(image, server, function(result) {
                         //alert("Data successfully posted to server...");
                         //  alert(JSON.stringify(result));
                         var response = JSON.parse(result.response);
                       //  alert(typeof(response)+"======="+JSON.stringify(response));
                         if(response.Customer)
                         {
                         if (response.Customer.id )
                         {
                         alert("Register Successfully ...!");
                         window.localStorage.setItem('session',JSON.stringify(response));
                         }
                         
                         }
                         else
                         {
                             if (response.email && !response.contact){ alert("Email already exists!"); }
                             else if (response.contact && !response.email){ alert("Contact already exists!"); }
                             else if (response.email && response.contact) { alert("Email and Contact already exists!");}
                         }
                       
                         if(JSON.parse(window.localStorage.getItem('session'))!=null)
                         {
                                 //window.location.href="#products";
                                 if(Redirection_bit==0)
                                 {
                                 window.location.href="#/products";
                                 }
                                 else if(Redirection_bit==1)
                                 {
                                 window.location.href="#/special_products";
                                 }
                                 else if(Redirection_bit==2)
                                 {
                                 window.location.href="#/product_loyalty";
                                 }
                                 return false;
                         }
                         }, function(error) {
                         alert("Not able to Register Please try Again = "+error.code);
                         }, options);
               } // upload function end
     } // register user end here
              
               
}); // RegisterControllerEnd
app.controller('ShopController', function($scope, $http) {
    $http.get('http://202.59.96.95/rest_customers/storeTypes.json').then(function(result){
                    $scope.chooseShops = result.data;
     });
     
}); // ShopController


app.controller('CategoryController', function($scope, $http) {
	//$http.get('http://202.59.96.95/rest_stores/storeCategoryList/'+selected_store_name+'.json').then(function(result){
	$http.get('test2.json').then(function(result){
	$scope.categories = result.data;
	}); // CategoryController Ajax CAll end here
}); // CategoryController end
app.controller('infoController', function($rootScope, $location,$scope, $http){
              });

app.controller('ProductController', function($scope, $http) {
//	$http.get('z').then(function(result){
	$http.get('test.json').then(function(result){
	$scope.products = result.data;
	all_product= result.data;
    Redirection_bit=0;
	});
}); // ProductController
app.controller('LoyaltyProductController', function($scope, $http) {
             
               $http.get('http://202.59.96.95/rest_stores/productDetail/'+selected_productId+'.json').then(function(result){
                    $scope.loyalty = result.data.data;
                   all_product= result.data;
                    Redirection_bit=2;
             
                    });
}); // ProductController
app.controller('loyaltyPointController', function($scope, $http,$compile) {
               
              // $http.get('http://202.59.96.95/rest_stores/loyaltyListByStorename/'+selected_store_name+'.json').then(function(result){
                 $http.get('test_loyalty.json').then(function(result){
                 $scope.loyalty = result.data;
                 Redirection_bit=2;
                 });
               }); //  loyaltyPointController end here
app.controller('loyaltyController', function($scope, $http,$compile) {
	//$http.get('http://202.59.96.95/rest_stores/loyaltyListByStorename/'+selected_store_name+'.json').then(function(result){
	$http.get('test_loyalty.json').then(function(result){
          $scope.loyalty = result.data;
          if(result.data.data=="" || result.data.data==null)
          {
            $scope.loyaltytype=1;
          }
          else 
          {
            $scope.loyaltytype=2;
            $scope.isgeneral=0; // if this bit will be one then only will show button of general loyalty using ng-click on availbale_loyal
            $scope.isproduct=0; // if this bit will be one then only will show button of product loyalty using ng-click on availbale_loyal
              $.each(result.data.data,function(i,data)
              {
                    if(data.Loyalty.type=="general")
                     {

                        $scope.isgeneral=1;
                     }
                     if(data.Loyalty.type=="product")
                     {
                     $scope.isproduct=1;
                     }
                     
              });
          }
          Redirection_bit=2;
          $scope.getStar=function(classname,buyitem,getitem,id)
          {
                                                                                                        
             var html='';
              html+='<h4>Buy '+buyitem+ 'and get '+getitem+' free</h4>';
             html+='<div class="starRatings">';
                  var freeitem=getitem;
              for(var i=0;i<buyitem;i++){
                      var appendclass='';
                      if(freeitem>= 1)
                      {
                         html+='<div class="star dealitems"><i class="fa fa-star"></i></div>';
                      }
                      else
                      {
                      html+=' <div class="dealitems"></div>';
                      }
                    freeitem=freeitem-1;
              }
              html+=' </div>';
              html+=' <div class="loyaltydetails">';
              html+=' <p>Join this service to gain loyalty</p>';
              html+=' <p>you can redeem your point any time</p>';
              html+=' </div>';
              html+=' <div class="continueloyalty"><a href="#/product_loyalty" class="btn find_store btn-primary qr_code get_point continue_btn" ng-click="get_productId('+id+')"> Continue</a></div>';
              html=$compile(angular.element(html))($scope);
              $("."+classname).html(html);
            } // getStart function end here
    
                                                                                                  
      }); // ajax call of get loyalty end here
               
}); // loyaltyController


app.controller('SpecialProductController', function($scope, $http) {
  // $http.get('http://202.59.96.95/rest_stores/getSpecialsPublishedByStorename/'+selected_store_name+'.json').then(function(result){
    $http.get('test.json').then(function(result){
    $scope.products = result.data;
    all_product= result.data;
    Redirection_bit=1;
    });
}); // SpecialProductController


app.controller('previewController', function($scope,$location, $http,$compile) {
	
         var html='';
		var flag=0;
		var new_qty;
		//alert(JSON.parse(window.localStorage.getItem('session')));
              if(JSON.parse(window.localStorage.getItem('session'))==null)
		{
			$location.path("/login");
			return false;
		}
              
               
               $.each(all_product.data,function(i,data)
                      {
                      if(data['Product']['id']==selected_cart_id)
                      {
                      if(single_cart.data!="" && single_cart.data!=null)
                      {
                      $.each(single_cart.data,function(i,subdata)
                             {
                             if(subdata.id==selected_cart_id)
                             {
                             flag=1;
                             }
                             });
                      }
                      
                      $scope.cart_data = data;
                      if(flag==0)
                      {
                      var cartitem = {id: selected_cart_id,"storename":selected_store_name,sku:data["Product"]["sku"], name:data["Product"]["name"], qty:1,price:data["Product"]["price"]};
                      single_cart.data.push(cartitem);
                      
                      }
                      else
                      {
                      $.each(single_cart.data,function(i,subdata)
                             {
                             
                             if(subdata && subdata.id==selected_cart_id)
                             {
                             
                             new_qty=subdata.qty;
                             single_cart.data.splice(i,1);
                             }
                             });
                      var cartitem = {id: selected_cart_id,"storename":selected_store_name,sku:data["Product"]["sku"], name:data["Product"]["name"], qty:new_qty+1,price:data["Product"]["price"]};
                      single_cart.data.push(cartitem);
                      
                      }
                      }
                      }); // for each end here
               
               var cart_total=0;
               var qty=0;
               $.each(single_cart.data,function(i,subdata)
                      {
                      var price=parseFloat(subdata["qty"])*parseFloat(subdata["price"]);
                      price=(!Number(price) ? price : Number(price)%1 === 0 ? Number(price).toFixed(2) : price);
                      html+='<div class="scart_'+i+'"><div class="item_preorder border_right">'+subdata["name"]+'</div>';
                      html+='<div class="quantity_preorder border_right">'+subdata["qty"]+'</div>';
                      html+='<div class="amount_preorder border_right">'+price+'<i class="fa fa-minus-circle clear_order" ng-click="clearSinglecart(\'scart_'+i+'\',\''+subdata.id+'\')"></i></div></div>';
                      cart_total=(parseFloat(subdata["qty"])*parseFloat(subdata["price"]))+parseFloat(cart_total);
                      qty+=subdata["qty"];
                      });
               
               $.each(mastercart,function(i,data)
                      {	var productstring="";
                      var productmainprice=0;
                      var productextraprice=0;
                      var total_price=0;
                      var productqty=0;
                      var productname="";
                      
                      productmainprice=data.product_price;
                      productextraprice=parseFloat(data.productextraprice)
                      productqty=data.product_qty;
                      productstring=data.product_string;
                      productname=data.productname;			
                      
                      total_price=(parseFloat(productmainprice)+parseFloat(productextraprice)) * parseInt(productqty);
                      total_price = !Number(total_price) ? total_price : Number(total_price)%1 === 0 ? Number(total_price).toFixed(2) : total_price;
                      html+='<div class="mcart_'+i+'"><div class="item_preorder border_right">'+data.product_name+'<br>'+productstring+'</div>';
                      html+='<div class="quantity_preorder border_right">'+productqty+'</div>';
                      html+='<div class="amount_preorder border_right">'+total_price+'<i class="fa fa-minus-circle clear_order" ng-click="remove_multi(\'mcart_'+i+'\',\''+data.product_id+'\')"></i></div></div>';
                      cart_total=parseFloat(cart_total)+parseFloat(total_price);
                      qty+=parseInt(productqty);
                      });
               html=$compile(angular.element(html))($scope);
               $('#pre_Order .subrowsmaster').html(html);
               $('#pre_Order .subrowtotalmaster').html(!Number(cart_total) ? cart_total : Number(cart_total)%1 === 0 ? Number(cart_total).toFixed(2) : cart_total);
               $('#pre_Order .subrowqtymaster').html(qty);
               
               $scope.rearrange_count=function()
               {
                       var cart_total=0;
                       var qty=0;
                        html="";
                       $.each(single_cart.data,function(i,subdata)
                              {
                              var price=parseFloat(subdata["qty"])*parseFloat(subdata["price"]);
                              price=(!Number(price) ? price : Number(price)%1 === 0 ? Number(price).toFixed(2) : price);                              html+='<div class="scart_'+i+'"><div class="item_preorder border_right">'+subdata["name"]+'</div>';
                              html+='<div class="quantity_preorder border_right">'+subdata["qty"]+'</div>';
                              html+='<div class="amount_preorder border_right">'+price+'<i class="fa fa-minus-circle clear_order" ng-click="clearSinglecart(\'scart_'+i+'\',\''+subdata.id+'\')"></i></div></div>';
                              cart_total=(parseFloat(subdata["qty"])*parseFloat(subdata["price"]))+parseFloat(cart_total);
                              qty+=subdata["qty"];
                              });
                       
                       $.each(mastercart,function(i,data)
                              {	var productstring="";
                              var productmainprice=0;
                              var productextraprice=0;
                              var total_price=0;
                              var productqty=0;
                              var productname="";
                              
                              productmainprice=data.product_price;
                              productextraprice=parseFloat(data.productextraprice)
                              productqty=data.product_qty;
                              productstring=data.product_string;
                              productname=data.productname;
                              
                              total_price=(parseFloat(productmainprice)+parseFloat(productextraprice)) * parseInt(productqty);
                              total_price = !Number(total_price) ? total_price : Number(total_price)%1 === 0 ? Number(total_price).toFixed(2) : total_price;
                              html+='<div class="mcart_'+i+'"><div class="item_preorder border_right">'+data.product_name+'<br>'+productstring+'</div>';
                              html+='<div class="quantity_preorder border_right">'+productqty+'</div>';
                              html+='<div class="amount_preorder border_right">'+total_price+'<i class="fa fa-minus-circle clear_order" ng-click="remove_multi(\'mcart_'+i+'\',\''+data.product_id+'\')"></i></div></div>';
                              cart_total=parseFloat(cart_total)+parseFloat(total_price);
                              qty+=parseInt(productqty);
                              });
                       html=$compile(angular.element(html))($scope);
                       $('#pre_Order .subrowsmaster').html(html);
                       $('#pre_Order .subrowtotalmaster').html(!Number(cart_total) ? cart_total : Number(cart_total)%1 === 0 ? Number(cart_total).toFixed(2) : cart_total);
                       $('#pre_Order .subrowqtymaster').html(qty);
                       
               }
               
               $scope.remove_multi=function(cartclass,id)
               {
                   $.each(mastercart,function(i,data)
                          {
                              if(data.product_id==id)
                              {
                                mastercart.splice(i,1);
                                $("."+cartclass).remove();
                                $scope.rearrange_count();
                              }
                          });
                           if((mastercart=="[]" || mastercart=="") && (single_cart.data=="[]" || single_cart.data==""))
                           {
                            alert("Cart is Empty Please add item...")
                            window.location.href="#/products";
                           }
               } //remove_multi end here
               $scope.clearSinglecart=function(cartclass,id)
               {
                     $.each(single_cart.data,function(i,subdata)
                      {
                          if(subdata && subdata.id==id)
                          {
                            single_cart.data.splice(i,1);
                            $("."+cartclass).remove();
                            $scope.rearrange_count();

                          }
                      });
                          if((mastercart=="[]" || mastercart=="") && (single_cart.data=="[]" || single_cart.data==""))
                           {
                           alert("Cart is Empty Please add item...")
                           window.location.href="#/products";
                           }
               
               } // clearSinglecart end here
}); // previewController for single cart

app.controller('productController', function($scope,$location,$http,$compile) {
           //    alert(JSON.parse(window.localStorage.getItem('session')));
        if(JSON.parse(window.localStorage.getItem('session'))==null)
		{
			$location.path("/login");
			return false;
		}
		
		var html='';
		var flag=0;
		var new_qty;
		var main_product_price=0;
		detail_cart={"data":[]};
	
	$.each(all_product.data,function(i,data)
	{
		
		if(data['Product']['id']==selected_id)
		{
           //alert(data['Product']['id']);
			$('.productname').html(data['Product']['name']);
			$('.productdescription').html(data['Product']['description']);
			$('.productdetailprice span').html(data['Product']['price']);
			main_product_price=data['Product']['price'];
			$.each(data['Option'],function(i,subdata)
			{
					html+='<div class="product_detail_label">'+subdata["name"]+'</div><div class="masterClass'+i+'">';
					var cartitem = {id:selected_id,"storename":selected_store_name,sku:data["Product"]["sku"],productprice:data['Product']['price'],productname:data['Product']['name'],qty:1,name:subdata["name"], price:0,option:0};
					detail_cart.data.push(cartitem);
					$.each(subdata['OptionVariant'],function(k,option)
					{
						html+='<div class="size attrClass'+k+'" ng-click="updateCart(this,\''+data['Product']['price']+'\',\''+subdata["name"]+'\',\''+option["name"]+'\',\''+option["price"]+'\',\'attrClass'+k+'\',\'masterClass'+i+'\');">';
						html+='<div class="size_type">'+option["name"]+' </div>';
						html+='<div class="productDetail_price">'+option["price"]+'</div>';
						html+='<i class="fa fa-plus size_plus"></i>';
						html+='</div>';
					});
                    html+='</div>';
			});
			html=$compile(angular.element(html))($scope);	
			$('.mastervariant').html(html);
				
		}
	}); // for each end here
		$scope.updateCart=function(obj,product_price,name,attr,price,subclass,masterclass)
		{
                    var total_extra_price=0;
					$.each(detail_cart.data,function(i,subdata)
					{
						if(subdata.name==name)
						{
								subdata.price=price;
								subdata.option=attr;
						}
					    total_extra_price=parseFloat(total_extra_price)+parseFloat(subdata.price);
					});
					var cart_total=parseFloat($(".productdetailqty").html()) * (parseFloat(product_price)+parseFloat(total_extra_price));
					$('.productdetailprice span').html(!Number(cart_total) ? cart_total : Number(cart_total)%1 === 0 ? Number(cart_total).toFixed(2) : cart_total);
               $("."+masterclass+" .size").css("color","#606366");
               $("."+masterclass+" .size").css("background","#FFF");

               $("."+masterclass+" .size."+subclass).css("color","#FFF");
               $("."+masterclass+" .size."+subclass).css("background","#e36837");
               

		},	
		$scope.plusone=function($scope)
		{			var total_extra_price=0;
              // alert(selected_cart_id+"====="+selected_id);
					$.each(detail_cart.data,function(i,subdata)
					{
					total_extra_price=parseFloat(total_extra_price)+parseFloat(subdata.price);	
					subdata.qty=parseInt($(".productdetailqty").html())+parseInt(1);
					});
					
					$(".productdetailqty").html(parseInt($(".productdetailqty").html())+parseInt(1));
					var cart_total=parseFloat($(".productdetailqty").html()) * (parseFloat(main_product_price)+parseFloat(total_extra_price));
					$('.productdetailprice span').html(!Number(cart_total) ? cart_total : Number(cart_total)%1 === 0 ? Number(cart_total).toFixed(2) : cart_total);
		},
		$scope.minussone=function()
		{
			var total_extra_price=0;
					$.each(detail_cart.data,function(i,subdata)
					{
					total_extra_price=parseFloat(total_extra_price)+parseFloat(subdata.price);	
					subdata.qty=parseInt($(".productdetailqty").html())-parseInt(1);

					});
					
					if(parseInt($(".productdetailqty").html())>1){$(".productdetailqty").html(parseInt($(".productdetailqty").html())-parseInt(1));}
					var cart_total=parseInt($(".productdetailqty").html()) * (parseFloat(main_product_price)+parseFloat(total_extra_price));
					$('.productdetailprice span').html(!Number(cart_total) ? cart_total : Number(cart_total)%1 === 0 ? Number(cart_total).toFixed(2) : cart_total);
		}				
}); // productController
app.controller('GO_Search',function($scope,$http,$compile){
		
});


