$(document).ready(function()
{
    $("#home-tab").click(function()
    {
        console.log("clicked");
        $("#home").addClass("active");
        $("#home-tab").addClass("active");
        $("#profile").removeClass("active");
        $("#profile-tab").removeClass("active");
        
    }
    );
    $("#profile-tab").click(function()
    {
        console.log("clicked2");
        $("#profile").addClass("active");
        $("#profile-tab").addClass("active");
        $("#home").removeClass("active");
        $("#home-tab").removeClass("active");
        
    });
});