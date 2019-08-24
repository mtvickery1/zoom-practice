// Tracking if key has been pressed
var fired = false;

// Run function on key press
document.onkeydown = function (event) {

  // Determines which key was pressed.
  var keydown = event.key;

  // If the addition key is pressed
  if (keydown === "+" && fired === false) {

    // Find Bottom Row
    var bottomRow = $(".main").find(".row:nth-child(2)");
    console.log('bottom row:', bottomRow)

    // Traverse to .target
    var target = bottomRow.find(".target");
    console.log('target:', target)

    // Find the Fruit
    var fruit = target.find(".fruit")
    console.log('fruit:', fruit)

    // Find the Strawberry
    var strawberry = fruit[3];
    console.log('strawberry:', strawberry)

    // set img source to a var
    var imgSrc = strawberry.src;
    console.log('imgSrc:', imgSrc)

    // create new image
    var newImg = $("<img>")

    // set source for the new image
    newImg.attr("src", imgSrc)

    // add class to new image
    newImg.addClass("zoom");

    // append new image to html
    $("#new").append(newImg);


    // Set to true so function doesnt continue to run
    fired = true;
    console.log('fired:', fired)

    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////

    // // $("._31ad:first-child div div div div div div div div span img").removeAttr("style");
    // // $('._31ad:first-child div div div div div div div div span img').addClass('zoom');

    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////

  }
};

// Empty #new div on key up
document.onkeyup = function (event) {

  // Determines which key was pressed.
  var kepUp = event.key;

  // If the addition key is lifted
  if (kepUp === "+") {

    // Empty the div
    $("#new").empty()

    // Set fired to false so we can zoom again
    fired = false;
    console.log('fired:', fired)
  }
}

///////////////////////////////////////////////////////////////
// CSS
///////////////////////////////////////////////////////////////
// Append style to body (should be head technically)
$('body').append(`
  <style>
  .zoom {
      height: 700px !important;
      width: auto !important;
      position: fixed;
      left: 0;
      bottom: 0;
  }
  .bg {
      border: purple 2px solid;
  }
  
  </style>`)