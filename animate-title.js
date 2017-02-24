$(document).ready(function() {
    
    function fadeIn(el, dur, del) {
        $(el).velocity("fadeIn", {
        duration: dur,
        delay: del
        })
    }
    
    $(".aline")
        .velocity({
        translateX: "1200px"
    }, {
        duration: 520
    }, {
        easing: "easeOutCirc"
    });

    $(".bline")
        .velocity({
         translateX: "-1200px"
    }, {
        duration: 520
    }, {
        easing: "easeOutCirc"
    });
    
    $("h1, h2").velocity("fadeIn", {
        duration: 400,
        delay: 500
    });
    
    fadeIn("#sub", 800, 1200);
  
}); // End of document ready