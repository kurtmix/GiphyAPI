
$(document).ready(function() { 
    
$("button").click(function(){
   var name = $("#act").val();
    console.log(name);
        var z = 0;
            for (; z < 5; z++) {
                console.log(z);
}  
   $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q="+name+"&api_key=dc6zaTOxFJmzC",
    
      function(response) {
        console.log(response);
        $("#gif").append("<img src=" + response.data[z].images.fixed_width_downsampled.url + ">");
      
          
   
          
      });
  });
});