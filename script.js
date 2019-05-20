var custom_api_url = "https://api.soundcloud.com/tracks?q=" + "searchTerm" + "&client_id=5aa8e389ba4e24b6106af5159ab3e344";
// var api_key = ""
console.log(custom_api_url)

$("#searchButton").click(function() {
    var searchTerm = $("#searchTerm").val();
    $.ajax({
        url: custom_api_url,
        method: "GET",
        success: function(response) {
            
        var songTitle= response[0].title;
        var songDes = response[0].user;
        //console.log(songTitle)
        //console.log(songDes)
        
         //var imgUrl = response[0].artwork_url;
        //var songPic = <img src = ' + imgUrl +' >
        
            
           //(".gallery").html("<img src='" + response.data[4].images.original.url + "'>" );
            
          $("body").append(songTitle)
          //$("body").append(songDes)
        }
    });
});