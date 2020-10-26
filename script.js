

// jquery for switching homepage image
$(document).ready(function(){
    $("img").click(function(){
        // Change src attribute of image
      	$("#homepage_img").attr("src", "images/plants-homepage-2.jpg");
    });
});
