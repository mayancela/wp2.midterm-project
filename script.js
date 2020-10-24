// window.onload = function() { //event hooking being used to prevent style == null
//     container();
//     function container() {
//     }
// }

$(document).ready(function(){
    $("img").click(function(){
        // Change src attribute of image
      	$("#homepage_img").attr("src", "images/plants-homepage-2.jpg");
    });
});
