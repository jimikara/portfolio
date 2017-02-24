var loopCount = 0;
// Container 

var pageHeight = window.innerHeight;
var container = $("#wrapper");

$.fn.velocity.defaults.easing = "easeOutSine";

// create random number

function r(min, max) {
  return Math.floor(Math.random() * (max + min + 1)) + min;
}

// move element function

function moveto(offset) {
	var m = (r(0, pageHeight)) - offset;
  return m;
}

var animateBg = window.setInterval(function() {
    

    // Create squares 

    var squaresCount = 100;
    var squaresHTML = [];

    for (var i = 0; i < squaresCount; i++) {
       squaresHTML.push("<div class='square'></div>");
    }

    // append elements to page at random coordinates (within range (window inner height, window inner width.  Create container for this)

    if (loopCount < 4) {
    
        for (var j = 0; j < squaresHTML.length; j++) {
          $(squaresHTML[j])
          .css("top", (pageHeight))
          .css("left", ((( j- 20) + 10) * 20))
          .css("opacity", r(0.5, 1))
          .appendTo(container);
        }
    }
    // move elements in random directions accross x and y axes
    
    var icons = $("div.square");
    
    // function, pagew/h minus current offset
    
    if (loopCount < 4 ) {
      
      var d = 0;
      icons.each(function() {
        $(this).velocity({
          translateY: (moveto(this.offsetTop))
        }, {
          duration: 8000,
          delay: d,
          loop: true
        });
      });
      loopCount ++;
    } else {
        clearInterval(animateBg);
    }
    
    
    
    
    // Fade out wrapper element (white bg layer)
    
}, 2600);

// Terminate animation and fade out elements after set time to avoid hoggin users cpu

window.setTimeout(function() {
//                alert("timeout called");
               $(".velocity-animating").velocity("stop", true);
               $(".square").velocity("fadeOut", 3000);
            }, 75000);




    