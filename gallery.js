$(document).ready(function() {
    
    $(".project")
        .hover(function(){
            $(this).children(".overlay").fadeIn("fast"); 
            $(this).children(".overlay").children(".caption").slideDown("fast"); 
        
        }, function(){
            $(this).children(".overlay").fadeOut("fast");  
            $(this).children(".overlay").children(".caption").slideUp("fast");
        
        });
    
});