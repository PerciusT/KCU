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
    $("#passdrivec").keyup(passcheckd);
    $("#passridec").keyup(passcheckr);
    $("#passride").keyup(passcheckr);
    $("#passdrive").keyup(passcheckd);
    function passcheckd()
    { 
        
        if($("#passdrive").val() == $("#passdrivec").val())
        {
            $("#passdrive").removeClass("wrongpass");
            $("#passdrivec").removeClass("wrongpass");
            $("#btnRegisterID1").prop('disabled',false);
        }
        else
        {
            $("#passdrivec").addClass("wrongpass");
            $("#passdrive").addClass("wrongpass");
            $("#btnRegisterID1").prop('disabled',true);
        }

    }
    function passcheckr()
    {
        if($("#passride").val() == $("#passridec").val())
        {
            $("#passride").removeClass("wrongpass");
            $("#passridec").removeClass("wrongpass");
            $("#btnRegisterID").prop('disabled',false);
            
        }
        else
        {
            $("passride").addClass("wrongpass");
            $("#passridec").addClass("wrongpass");
            $("#btnRegisterID").prop('disabled',true);   
        }
    }
    
});