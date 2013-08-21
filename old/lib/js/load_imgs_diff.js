			$(function(){
                jQuery('#a-link').remove();
                
                jQuery('<img />').attr('id', 'loader').attr('src', 'http://cdn.kylerush.org/kr/images/flickr-ajax-loader.gif').appendTo('#image-container');
                
                //assign your api key equal to a variable
                var apiKey = '8a2b38f19de14d51336798a39b0173e3';
                var userID = '51978329%40N00';
                var portfolioID = '72157634029598807';
                
                //the initial json request to flickr
                //to get your latest public photos, use this request: http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=' + apiKey + '&user_id=51978329@N00&per_page=15&page=2&format=json&jsoncallback=?
	$.getJSON('http://api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=' + apiKey + '&photoset_id=' + portfolioID + '&format=json&jsoncallback=?',
 
                function(data){
                    
                    //loop through the results with the following function
                    $.each(data.photoset.photo, function(i,item){
                    
                        //build the url of the photo in order to link to it
                        var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_z.jpg';
                        
                        //turn the photo id into a variable
                        var photoID = item.id;
                        
                           
                            //use another ajax request to get the image
                            $.getJSON('http://api.flickr.com/services/rest/?&method=flickr.photos.getInfo&api_key=' + apiKey + '&photo_id=' + photoID + '&format=json&jsoncallback=?',
                            function(data){
                                
                                
                                
                            //create an imgCont string variable which will hold all the link location, title, author link, and author name into a text string
                            var imgCont = '<img height="425px" src="' + photoURL + '" />';
                            
                            
                            //append the 'imgCont' variable to the document
                            $(imgCont).appendTo('#gallery');
                            
                        });
                        
                  });
                });
			});
