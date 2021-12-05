$(document).ready(function()
{

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
    // $("#passdrivec").keyup(passcheckd);
    // $("#passridec").keyup(passcheckr);
    // $("#passride").keyup(passcheckr);
    // $("#passdrive").keyup(passcheckd);
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
    function disabler()
    {
        $("#btnRegisterID").prop('disabled',true);
        $("#btnRegisterID").addClass("btngrey");
    }
    function enabler()
    {
        $("#btnRegisterID").prop('disabled',false);
        $("#btnRegisterID").removeClass("btngrey");
    }
    function disabled()
    {
        $("#btnRegisterID1").prop('disabled',true);
        $("#btnRegisterID1").addClass("btngrey");
    }
    function enabled()
    {
        $("#btnRegisterID1").prop('disabled',false);
        $("#btnRegisterID1").removeClass("btngrey");
    }
    function validateall()
    {
        if($("#fname").val()==""||$("#lname").val()==""||$("#emaild").val()==""||$("#driverPH").val()==""||$("#carnumb").val()==""||$("#selectType").val()=="")
        {
            
            console.log("disabled");
            disabled();
        }
        else 
        {
            enabled(); 
        }
        if($("#fnamer").val()==""||$("#namer").val()==""||$("#emailr").val()==""||$("#phoner").val()==""||$("#occupation").val()==""||$("#addressr").val()=="")
        {
            console.log("disabler");
            disabler();
        }
        else
        {
            enabler();
        }
    }
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
        }
        else 
        {
            $("#dbirthday").addClass("wrongpass");
        }
    
    }
    
    function passcheckager()
    {
        if(isOver10(new Date($("#rbirthday").val())))
        {
            $("#rbirthday").removeClass("wrongpass");
        }
        else 
        {
            $("#rbirthday").addClass("wrongpass");
        }
    
    }
    function passcnic()
    {
        if($("#cnicd").val().match(cnicn))
        {
           
            $("#cnicd").removeClass("wrongpass");
        }
        else 
        {
            $("#cnicd").addClass("wrongpass");
            
        }
    }
    function passcnicr()
    {
        if($("#cnicr").val().match(cnicn))
        {
            $("#cnicr").removeClass("wrongpass");
        }
        else 
        {
            $("#cnicr").addClass("wrongpass");
            
        }
    }
    // function passcheckd()
    // { 
    //     if($("#passdrive").val() == $("#passdrivec").val())
    //     {
    //         $("#passdrive").removeClass("wrongpass");
    //         $("#passdrivec").removeClass("wrongpass");
    //     }
    //     else
    //     {
            
    //         $("#passdrivec").addClass("wrongpass");
    //         $("#passdrive").addClass("wrongpass");
    //     }

    // }
    // function passcheckr()
    // {
    //     if($("#passride").val() == $("#passridec").val())
    //     {
        
    //         $("#passride").removeClass("wrongpass");
    //         $("#passridec").removeClass("wrongpass");
    //     }
    //     else
    //     {
    //         $("#passride").addClass("wrongpass");
    //         $("#passridec").addClass("wrongpass");
    //     }
    // }
    $(document).keyup(function (event) {
        // if($("#passdrive").val() == $("#passdrivec").val())
        //{
            // if($("#cnicd").val().match(cnicn))
            // {
            //     if(isOver18(new Date($("#dbirthday").val())))
            //     {
            //             enabled();
            //     }
            //     else
            //     {
            //         disabled();
            //     }
            // }
            // else
            // {
            //     disabled();
            // }
        //}
        // else 
        // {
        //     disabled();
        // }
        //if($("#passride").val() == $("#passridec").val())
        //{
            if($("#cnicd").val().match(cnicn))
            {
                if(isOver10(new Date($("#dbirthday").val())))
                {
                    enabler();
                }
                else
                {
                   disabler();
                }
            }
            else
            {
                disabler();
            }
            if($("#cnicr").val().match(cnicn))
            {
                if(isOver10(new Date($("#rbirthday").val())))
                {
                    enabler();
                }
                else
                {
                   disabler();
                }
            }
            else
            {
                disabler();
            }
        //}
        // else
        // {
        //     disabler();
        // }
        
    });
    
});