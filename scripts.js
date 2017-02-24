$(document).ready(function() {
   
    // Nav overlay menu open/close controls
    $("#navIconWrap").click(function() {
        $("#navOverlay").velocity("fadeIn", { duration: 600 });
    });
    $("#closeIcon").click(function() {
        $("#navOverlay").velocity("fadeOut", { duration: 600 });
    });  

});
