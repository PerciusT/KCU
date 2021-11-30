
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
          if(checkri(cnic,user))
          {
            console.log(cnic);
            firebase.database().ref(user+cnic).set({
            Birthday : $('input[name="birth"]').val(),
            cnic: $('input[name="cnic"]').val(),
            carnumber: $('input[name="carnumb"]').val(),
            email: $('input[name="email"]').val(),
            father : $('input[name="lname"]').val(),
            gender : $('input[name="gender"]').val(),
            name : $('input[name="fname"]').val(),
            password : $('input[name="pass"]').val(),
            phone : $('input[name="phone"]').val(),
            type : $('select[name="cartype"]').val(),
        });
        }
          
      }
        function insertdr()
        {
          var user= 'rider/';
          var cnic=$("#cnicr").val();
          if(checkri(cnic,user))
          {
            console.log(cnic);
            firebase.database().ref(user+cnic).set({
              Birthday : $('#rbirthday').val(),
              cnic: $('#cnicr').val(),
              email: $('#emailr').val(),
              father : $('#fnamer').val(),
              gender : $('input[name="genderr"]').val(),
              name : $('#namer').val(),
              password : $('#passride').val(),
              phone : $('#phoner').val(),
              occupation : $('#occupationr').val(),
              address : $('#addressr').val()
            });
        }   
      }
      function insertcontact()
      {
        console.log("working");
        var user= 'contact/';
        var phone= $('#phonenumc').val();
        if(checkri(phone,user))
        {
          console.log(phone);
          firebase.database().ref(user+phone).set({
            email: $('#emailc').val(),
            name : $('#namec').val(),
            number : phone,
            subject : $('#subjectc').val(),
            message : $('#messagec').val()
          }); 
        }
      }

      function checkri(cnic1,user)
          {
            var checker;
          firebase.database().ref(user+cnic1).on('value',function(data)
          {
            checker= data.val();
               
          });
          console.log(checker==null)
          return checker==null;
        }
        $("#btnRegisterID1").click(insertd);
        $("#btnRegisterID").click(insertdr);
        $("#btnContact").click(insertcontact);