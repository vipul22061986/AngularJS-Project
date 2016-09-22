var store_name='';
var selected_store_name ='';
var selected_productId = '';
var app = angular.module('MobileAngularUiExamples', [
  "ngRoute",
  "ngTouch",
  "mobile-angular-ui"
]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/',          {templateUrl: "home.html"});
  //$routeProvider.when('/search_store',    {templateUrl: "search_store.html"}); 
  //$routeProvider.when('/scan',    {templateUrl: "scan.html"}); 
  $routeProvider.when('/category_name',      {templateUrl: "category_name.html"});
  //$routeProvider.when('/store_listing', {templateUrl: "store_listing.html"}); 
  $routeProvider.when('/preview_order',   {templateUrl: "preview_order.html"}); 
  $routeProvider.when('/products',     {templateUrl: "products.html"});
  $routeProvider.when('/product_details',  {templateUrl: "product_details.html"});
  $routeProvider.when('/store_name',  {templateUrl: "store_name.html"});
  $routeProvider.when('/login',  {templateUrl: "login.html"});
  $routeProvider.when('/register',  {templateUrl: "register.html"});
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

app.controller('MainController', function($rootScope, $scope, $location, $http, analytics){


  $rootScope.$on("$routeChangeStart", function(){
    $rootScope.loading = true;
  });
	
  $rootScope.$on("$routeChangeSuccess", function(){
    $rootScope.loading = false;
  });
  
  $rootScope.getImage=function(){
				alert("inside image captured fxn...");
				navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
				destinationType: Camera.DestinationType.FILE_URI,
				sourceType : navigator.camera.PictureSourceType.SAVEDPHOTOALBUM,
				correctOrientation : true });
			
				function onSuccess(imageURI) {
					var image = imageURI;
					alert(image + "image URI");
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
	 
	 	$scope.get_category=function(name, $scope)
		{
			selected_store_name = name;
			//alert(selected_store_name + " : selected name");
			
			}
		
		$scope.get_productId=function(id, $scope)
		{
			selected_productId = id;
			//alert(selected_productId + " : selected id");
			
			}

		$scope.register_user=function(hash)
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
					alert("Data successfully posted to server...");
                   //   alert(JSON.stringify(result));
                      if(result.Customer)
					{
							if (result.Customer.id )
								{
									alert("Successfully logged in!");
									$location.path(hash);
								}
						
					}
					else
					{
							if (result.email && !result.contact){ alert("Email already exists!"); }
							else if (result.contact && !result.email){ alert("Contact already exists!"); }
							else if (result.email && result.contact) { alert("Email and Contact already exists!");}	
					}
            }, function(error) {
               alert("Upload failed: Code = "+error.code);
            	}, options);
        } // upload fxn end
	}
			
		$scope.login=function(hash)
			{
				
				var email = document.getElementById('login_email').value;
				var password = document.getElementById('login_password').value;
			//	alert(email +";;"+ password);
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

						$location.path(hash);
					}
				else { alert("Incorrect password or Email Id!"); }
				}).
				error(function(error){
					alert("Error : " + JSON.stringify(error));
				});
		 
			}
	
});  // controller end here;


app.controller('StoreController', function($scope,$location,$http) {
	if(store_name=="")
	{
		alert("No Store Found with blank store name....");
		
	}
	else
	{
			//	$http.get('http://202.59.96.95/rest_stores/searchStoreList/'+store_name+'.json').then(function(result){
				$http.get('test1.json').then(function(result){
			//	alert(JSON.stringify(result));
				$scope.entries = result.data;
				});
	
	}
	
	
}); // StoreController End here	

app.controller('CategoryController', function($scope, $http) {
//	$http.get('http://202.59.96.95/rest_stores/storeCategoryList/'+selected_store_name+'.json').then(function(result){
	$http.get('test2.json').then(function(result){
//	alert(JSON.stringify(result));
	$scope.categories = result.data;
	}); // 
}); // CategoryController end

app.controller('ProductController', function($scope, $http) {
//	$http.get('http://202.59.96.95/rest_stores/productListByCatID/'+selected_productId+'.json').then(function(result){
	$http.get('test.json').then(function(result){
//	alert(JSON.stringify(result));
	$scope.products = result.data;
	}); // 
}); // ProductController


app.controller('GO_Search',function($scope,$http){
		$scope.search_go=function(hash)
			{
				store_name = document.getElementById('suburb').value;
			//	alert(store_name + " : Store name");
				
			}
});


