/*************************** 
   Author: Antonio Candela 
   AKA: Delinet
   Twitter: @Delinet
   License: MIT            
***************************/


getVideoId = function(video_url){
			idx = video_url.indexOf('v=');
			if (idx != -1 ){
  				video_id = video_url.substring(idx+2);	
			}
			else{
  				idx = video_url.indexOf('youtu.be/');
  				if (idx != -1 ){
    			  	video_id = video_url.substring(idx+9);
  				}
			}
			idx = video_id.indexOf('&');
			if (idx != -1){
  				video_id = video_id.substring(0,idx);
			}
			return video_id
	   };
