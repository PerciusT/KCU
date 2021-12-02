
  // // // Import the functions you need from the SDKs you need
  // import { initializeApp } from "firebase/app";
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries
  // import { getFirestore   } from "firebase/firestore";
  // // Your web app's Firebase configuration
  // // Import the functions you need from the SDKs you need
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries

  // // Your web app's Firebase configuration
  // const firebaseConfig = {
  //   apiKey: "AIzaSyAoFg6Hf6UrrwTT4cmOOahzOLdiTYq3h4Y",
  //   authDomain: "garikar-39b0f.firebaseapp.com",
  //   projectId: "garikar-39b0f",
  //   storageBucket: "garikar-39b0f.appspot.com",
  //   messagingSenderId: "515003222323",
  //   appId: "1:515003222323:web:ffed3bbf2b716432bd1646"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);

  // const db=getDatabase();
  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  
  // function Insertd()
  // {
  //   console.log("running");
  //   set(ref(db, field +"/"+ cnic.val()),{
      // Birthday = $('td[name="birth"]').val(),
      // cnic= $('td[name="cnic"]').val(),
      // carnumber= $('td[name="carnumb'),
      // email = $('td[name="email"]'),
      // father = $('td[name="lname"]'),
      // gender = $('td[name="gender"]'),
      // name = $('td[name="fname"]'),
      // password = $('td[name="pass"]'),
      // phone = $('td[name="phone"]'),
      // type = $('td[name="cartype"]'),
  //   }).then(() => {
  //     alert("You have successfully registered");
  //   }).catch((error) => {
  //     alert("Something went wrong "+error);
  //   });
  // }
  // $("#btnRegisterID1").click(insertd);






  
        // const firebaseConfig = {
        // apiKey: "AIzaSyB4DdIKX0q_Y0aXmeV9B0VxqiWErvGrQ-o",
        // authDomain: "challan-details.firebaseapp.com",
        // databaseURL: "https://challan-details-default-rtdb.firebaseio.com",
        // projectId: "challan-details",
        // storageBucket: "challan-details.appspot.com",
        // messagingSenderId: "649720161268",
        // appId: "1:649720161268:web:7cb88008f281efa6318fa1"
        // };

        // // Initialize Firebase
        // firebase.initializeApp(firebaseConfig);
        // $("#btnRegisterID1").click(Tester);
        // function Tester()
        // {
        //        firebase.database().ref('drivers/'+$('td[name="cnic"]').val() ).set({
                    // Birthday = $('td[name="birth"]').val(),
                    // cnic= $('td[name="cnic"]').val(),
                    // carnumber= $('td[name="carnumb'),
                    // email = $('td[name="email"]'),
                    // father = $('td[name="lname"]'),
                    // gender = $('td[name="gender"]'),
                    // name = $('td[name="fname"]'),
                    // password = $('td[name="pass"]'),
                    // phone = $('td[name="phone"]'),
                    // type = $('td[name="cartype"]'),
        //     });
        // }





        // const firebase = require("firebase");
        // // Required for side-effects
        // require("firebase/firestore");
        var numbers = /^\d+$/
        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        function validated()
        {
          //$("#fname").val()==""||$("#emaild").val()==""||
            if($("#lname").val()==""||$("#driverPH").val()==""||$("#carnumb").val()==""||$("#selectType").val()=="")
            {
                
                console.log("disabled");
                return false;
            }
            else
            {
              // if($("#emaild").val().match(email))
              {
                if($("#driverPH").val().match(numbers))
                {
                  return true;
                }
                else
                {
                  return false
                }
              }
              // else
              // {
              //   return false;
              // }
            }
        }
        function validater()
        {
          //$("#fnamer").val()==""||$("#emailr").val()==""||$("#occupation").val()==""||$("#addressr").val()==""
          if($("#namer").val()==""||$("#phoner").val()=="")
          {
              console.log("disabler");
              return false;
          }
          else
          {
              //if($("#emailr").val().match(email))
              {
                if($("#phoner").val().match(numbers))
                {
                  return true;
                }
                else
                {
                  return false
                }
              }
              // else
              // {
              //   return false;
              // }
          }
        }









        const firebaseConfig = {
          apiKey: "AIzaSyDUwczbLoMdhW7FezPD2CQaainvrrzM6zc",
          authDomain: "driver-bce25.firebaseapp.com",
          databaseURL: "https://driver-bce25-default-rtdb.firebaseio.com",
          projectId: "driver-bce25",
          storageBucket: "driver-bce25.appspot.com",
          messagingSenderId: "638605663314",
          appId: "1:638605663314:web:fcfb008c17940e0266d38b"
        };
        
        firebase.initializeApp(firebaseConfig);
        var database = firebase.database();
          
        function insertd()
        {
          var user= 'driver/';
          var cnic=$('input[name="cnic"]').val();
          var genderd="male";
          if ($("input[name='gender'][value='female']").prop("checked"))
          {
            genderd="female"
          }
          firebase.database().ref(user+cnic).on('value',function(data)
          {
            if(data.exists()==false)
            {
              if(validated())
              {
                console.log(cnic);
                firebase.database().ref(user+cnic).set({
                Birthday : $('input[name="birth"]').val(),
                cnic: $('input[name="cnic"]').val(),
                carnumber: $('input[name="carnumb"]').val(),
                email: $('input[name="email"]').val(),
                father : $('input[name="lname"]').val(),
                gender : genderd,
                name : $('input[name="fname"]').val(),
                // password : $('input[name="pass"]').val(),
                phone : $('input[name="phone"]').val(),
                type : $('select[name="cartype"]').val(),
                });
              }
            }
          });
          
        }
      function insertdr()
        {
          var user= 'rider/';
          var cnic=$("#cnicr").val();
          var genderr="male";
          if ($("input[name='genderr'][value='female']").prop("checked"))
          {
            genderr="female";
          }
          firebase.database().ref(user+cnic).on('value',function(data)
          {
            if(data.exists()==false)
            {
              console.log("didnt exist");
              if(validater())
              {
              console.log(cnic);
              firebase.database().ref(user+cnic).set({
                Birthday : $('#rbirthday').val(),
                cnic: $('#cnicr').val(),
                email: $('#emailr').val(),
                father : $('#fnamer').val(),
                gender : genderr,
                name : $('#namer').val(),
                // password : $('#passride').val(),
                phone : $('#phoner').val(),
                occupation : $('#occupationr').val(),
                address : $('#addressr').val()
              });
              ("#successmsg")
              }
            }
          });

        }
      function insertcontact()
      {
        console.log("working");
        var user= 'contact/';
        var phone= $('#phonenumc').val();
        firebase.database().ref(user+phone).on('value',function(data)
          {
            if(data.exists()==false)
            {
             
              console.log(cnic);
              firebase.database().ref(user+phone).set({
                email: $('#emailc').val(),
                name : $('#namec').val(),
                number : phone,
                subject : $('#subjectc').val(),
                message : $('#messagec').val()
              }); 
              return 1;
            }
          });
      }

        $("#btnRegisterID1").click(insertd);
        $("#btnRegisterID").click(insertdr);
        $("#btnContact").click(insertcontact);