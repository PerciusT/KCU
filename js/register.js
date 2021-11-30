$(document).ready(function()
{
    var numbers = /^\d+$/
	var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	var cnicn=/\d{5}-\d{7}-\d/
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
    $("#cnicd").keyup(passcnic);
    $("#cnicr").keyup(passcnicr);
    $("#dbirthday").change(passcheckage);
    $("#rbirthday").change(passcheckager);
    //$("#driverPH").keyup(passphone);
    // $("#selectType").on('change',passType);

    // function passphone()
    // {
    //     console.log("running phonpass");
    //     if($("#driverPH"))
    //     {
    //         console.log("working phonepass");
    //         $("#drivePH").removeClass("wrongpass");
    //         $("#btnRegisterID1").prop('disabled',false);
    //     }
    //     else 
    //     {
    //         console.log($("#driverPH").val());
    //         $("#drivePH").addClass("wrongpass");
    //         $("#btnRegisterID1").prop('disabled',true);
    //     }
    // }
    // function passType()
    // {
    //     console.log("running")
    //     if($("#selectType".val()=='none'))
    //     {
    //         console.log("running2")
    //         $("#selectType").addClass("wrongpass");
    //         $("#selectType").focus();
    //         $("#btnRegisterID1").prop('disabled',true);
    //     }
    //     else
    //     {
    //         console.log("running1")
    //         $("#selectType").removeClass("wrongpass");
    //         $("#btnRegisterID1").prop('disabled',false);
    //     }

    // }
    function isOver18(dateOfBirth) {
        // find the date 18 years ago
        const date18YrsAgo = new Date();
        date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
        // check if the date of birth is before that date
        return dateOfBirth <= date18YrsAgo;
        
      }
      function isOver10(dateOfBirth) {
        // find the date 18 years ago
        const date10YrsAgo = new Date();
        date10YrsAgo.setFullYear(date10YrsAgo.getFullYear() - 10);
        // check if the date of birth is before that date
        return dateOfBirth <= date10YrsAgo;
        
      }
    //   function isUnder50(dateOfBirth)
    //   {
    //     const date50YrsAgo = new Date();
    //     date50YrsAgo.setFullYear(date50YrsAgo.getFullYear() - 50);
    //     // check if the date of birth is before that date
    //     return dateOfBirth >= date50YrsAgo;
    //   }
    function passcheckage()
    {
        if(isOver18(new Date($("#dbirthday").val())))
        {
            $("#dbirthday").removeClass("wrongpass");
            $("#btnRegisterID1").prop('disabled',false);
            $("#btnRegisterID1").removeClass("btngrey");
        }
        else 
        {
            $("#dbirthday").addClass("wrongpass");
            $("#btnRegisterID1").prop('disabled',true);
            $("#btnRegisterID1").addClass("btngrey");
        }
    
    }
    function passcheckager()
    {
        if(isOver10(new Date($("#dbirthday").val())))
        {
            $("#dbirthday").removeClass("wrongpass");
            $("#btnRegisterID").prop('disabled',false);
            $("#btnRegisterID").removeClass("btngrey");
        }
        else 
        {
            $("#dbirthday").addClass("wrongpass");
            $("#btnRegisterID").prop('disabled',true);
            $("#btnRegisterID").addClass("btngrey");
        }
    
    }
    function passcnic()
    {
        if($("#cnicd").val().match(cnicn))
        {
            $("#cnicd").removeClass("wrongpass");
            $("#btnRegisterID1").prop('disabled',false);
            $("#btnRegisterID1").removeClass("btngrey");
        }
        else 
        {
            $("#cnicd").addClass("wrongpass");
            $("#btnRegisterID1").prop('disabled',true);
            $("#btnRegisterID1").addClass("btngrey");
            
        }
    }
    function passcnicr()
    {
        if($("#cnicr").val().match(cnicn))
        {
            $("#cnicr").removeClass("wrongpass");
            $("#btnRegisterID").prop('disabled',false);
            $("#btnRegisterID").removeClass("btngrey");
        }
        else 
        {
            $("#cnicr").addClass("wrongpass");
            $("#btnRegisterID").prop('disabled',true);
            $("#btnRegisterID").addClass("btngrey");
            
        }
    }
    function passcheckd()
    { 
        if($("#passdrive").val() == $("#passdrivec").val())
        {
            $("#passdrive").removeClass("wrongpass");
            $("#passdrivec").removeClass("wrongpass");
            $("#btnRegisterID1").prop('disabled',false);
            $("#btnRegisterID1").removeClass("btngrey");
        }
        else
        {
            $("#passdrivec").addClass("wrongpass");
            $("#passdrive").addClass("wrongpass");
            $("#btnRegisterID1").prop('disabled',true);
            $("#btnRegisterID1").addClass("btngrey");
        }

    }
    function passcheckr()
    {
        if($("#passride").val() == $("#passridec").val())
        {
            $("#passride").removeClass("wrongpass");
            $("#passridec").removeClass("wrongpass");
            $("#btnRegisterID").prop('disabled',false);
            $("#btnRegisterID").removeClass("btngrey");
        }
        else
        {
            $("#passride").addClass("wrongpass");
            $("#passridec").addClass("wrongpass");
            $("#btnRegisterID").prop('disabled',true);   
            $("#btnRegisterID").addClass("btngrey");
        }
    }
});