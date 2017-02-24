$("#contact").submit(function() {
    event.preventDefault();
    $.post("contactValidate.php", { 
        fullname: $("#fullName").val(), 
        email: $("#email").val(), 
        message: $("#message").val()
    }, function(data) {
        $(".pagename h2").html("Thanks for your message!").fadeIn();
        $("#contactWrap").html(data).fadeIn();
    });
});      