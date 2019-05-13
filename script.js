var custom_api_url = "https://api.soundcloud.com/tracks?q=beyonce&client_id=5aa8e389ba4e24b6106af5159ab3e344";
// var api_key = ""
console.log(custom_api_url)

$("#search-button").click(function(){
    var searchTerm = $("#search-term").val();
    $.ajax({
        url: custom_api_url,// + searchTerm + api_key,
        method: "GET",
        success: function(response) {
            console.log(response)
            
           // $(".gallery").html("<img src='" + response.data[4].images.original.url + "'>" );
            
        }
    });
});