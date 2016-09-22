$(document).ready(function(e) {
		 
		 $.ajax({
				type:"GET", 
	        	 dataType: "json",
				 url:"http://isweting.com/restaurant/ws/advertise/list", 
 				beforeSend: function(xhr){
					xhr.setRequestHeader('X-API-KEY','6d9f729b765aae27f45e5ef9150fa073f8a61b94');
					},
				success: function(data) {
						var html = '';
						if(data!="" && data!="[]" && data.length!=0)
						{	
								AdData = data.DATA;
								adcounter=0;
								html+='<a onclick="window.plugins.ChildBrowser.showWebPage(\''+data.DATA[adcounter].vUrl+'\',{ showLocationBar: true });"><img src="'+data.DATA[adcounter].vImage+'"></a>';
                
						}
						$('.footer .subdiv').html(html).toggle("slide");
		
					}, 
					error: function(e) {
						//alert("Not Able to List Data Please check Network Connection...");
					}
			});
});
function changeads()
{
		
		if(AdData.length<=(adcounter+1))
		{
			adcounter=0;	
		}
		else
		{
			adcounter++;	
		}
		$('.footer .subdiv').html('<a onclick="window.plugins.ChildBrowser.showWebPage(\''+AdData[adcounter].vUrl+'\',{ showLocationBar: true });"><img src="'+AdData[adcounter].vImage+'">').toggle( "slide" );
		
}
setInterval(changeads,8000);