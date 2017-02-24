$(document).ready( function() {
    
// Hide percentages with JS so it's displayed with non JS browsers    
//$(".percentage").width("0%");

// Create waypoint
var waypoint = new Waypoint({
  element: document.querySelector("dl"),
  handler: function(direction) {
    console.log("triggered");
    console.log(direction);
    if (direction === "down") {
        $(".percentage").velocity({
         width: "380px"
          }, { 
             duration: 1200 
          }, "easeInExpo");
    }
     
  },
  offset: "50%"
  
});
       
});