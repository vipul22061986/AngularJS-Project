/** 
  Some functions

*/

// Define my functions on the 'document ready' call to ensure the events (like on click) are binded after the document is loaded
$(document).ready(function(){
	
	// Disable autocorrect on search fields
	$('input[data-type=search]').attr('autocorrect', 'off');
	
	
	// Track the index of the selected list view item (the menu on the left side)
	$('#listview').on('click','li',function(){
			
		var index = $(this).index();
		
		switch (index)
		{
		case 0:
			// Home	
			// $.mobile.changePage("#home",null,true,true);
			window.location.href="index.html";
			break;	
		case 1:
			// About
			// $.mobile.changePage("restaurants.html",null,true,true);
			window.location.href="about.html";		
			break;
		case 2:
			// Contact	
			// $.mobile.changePage("perks.html",null,true,true);
			window.location.href="contact.html";
			
			break;	
		}
			
	});
	
	// Other events
	// ....	
	
});

function followProductWithId(id){
	
	// alert('you are now following this product'+id);
	// Check if user is already signed in, if so, localStorage should had the user id, otherwise, the user id would be null
	$userId = window.localStorage.getItem('user_id');
	if (!$userId)
		// alert ('you should sign in');
		// $.mobile.changePage('UserProfile.html',{transition:'slide'});
		window.location.href="UserProfile.html";
	else
		alert ('you are signed in with id'+$userId);
}




