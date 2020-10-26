// jquery for switching homepage image
$(document).ready(function(){
    $("img").click(function(){
        // Change src attribute of image
      	$("#homepage_img").attr("src", "images/plants-homepage-2.jpg");
    });
});

window.onload = function() { //event hooking being used to prevent style == null
    container();
    function container() {
      // Using JavaScript + JSON
      // Creating JSON objects with JSON data //
      var obj1 =
          '{ "allergy_relief_desc": "Researchers have found that rooms with plants have less dust and mold than rooms without any foliage. \
           Leaves and other parts of the plant act as natural filters to catch allergens and other airborne particles."}';

      var obj2 =
          '{ "air_purifiers_desc": "Extensive research by NASA has revealed that houseplants can remove up to 87%  of air toxins in 24 hours."}';

      var obj3 =
          '{ "mood_boosters_desc": "Studies have proven that indoor plants improve concentration and productivity, \
           reduce stress levels and boost mood. Keeping flowers and plants throughout the home and the workplace \
           vastly increases happiness and lowers the likelihood of depression."}';

      var obj4 =
          '{ "increasing_humidity_desc": "A study done by the Agricultural University of Norway, showed that houseplants, when grouped together, \
           decrease the likelihood of dry skin, common colds, and sore throats."}';

      // Parsing JSON data from obj //
      var text = JSON.parse(obj1);
      var text1 = JSON.parse(obj2);
      var text2 = JSON.parse(obj3);
      var text3 = JSON.parse(obj4);

      /* Displaying the JSON data by linking the #test paragraph tag and the JSON object*/
      document.getElementById("allergy-relief").innerHTML = text.allergy_relief_desc + "<br>";
      document.getElementById("air-purifiers").innerHTML = text1.air_purifiers_desc + "<br>";
      document.getElementById("mood-boosters").innerHTML = text2.mood_boosters_desc + "<br>";
      document.getElementById("increasing-humidity").innerHTML = text3.increasing_humidity_desc + "<br>";
  }
}
