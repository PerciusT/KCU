const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const ejs = require('ejs');
const app = express();
var favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname,'public','img','head-logo.png')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

const db=admin.firestore();
app.post("/contact", function(req,res)
{
    console.log(req.body);
    const obj = req.body;
        
        db.collection('contacts').doc(obj.email).get().then(doc => {
        if(!doc.exists)
        {
            const userData= {
                Name: obj.name,
                Email: obj.email,
                Subject: obj.subject,
                Phone: obj.numberphone,
                BirthDate: obj.message,
                }
            res.redirect('/');
            return db.collection('contacts').doc(obj.email).set(userData);
        }
        else 
        {
            res.redirect('/#contact');
            console.log("The user already exists");
        }
    })
})
app.post("/server", function(req,res){
    console.log(req.body);
    const obj = req.body;
    if(obj.btn == 'Join')
    {
    db.collection('drivers').doc(obj.cnic).get().then(doc => {
        if(!doc.exists)
        {
            
            const userData= {
                Name: obj.fname,
                Father: obj.lname,
                Gender: obj.gender,
                Email: obj.email,
                Password: obj.pass,
                Phone: obj.txtEmpPhone,
                CarNumber: obj.carnumb,
                BirthDate: obj.birth,
                CNIC: obj.cnic,
                Type: obj.cartype,
            }
            res.render(path.join(__dirname,'views', 'success.ejs'));
            return db.collection('drivers').doc(obj.cnic).set(userData);
    
            
            }
            else 
            {
            console.log("The user already exists");
            res.render(path.join(__dirname,'views', 'fail.ejs'));
            }
        })
        .catch( err => 
        {
            console.error("This is the error chief = "+err);
        }); 
    }
    else if(obj.btn == 'Register')
            {
            db.collection('users').doc(obj.cnic).get().then(doc => {
                if(!doc.exists)
                {
                const userData= {
                Name: obj.fname,
                Father: obj.lname,
                Gender: obj.gender,
                Email: obj.email,
                Password: obj.pass,
                Phone: obj.phone,
                BirthDate: obj.birth,
                Occupation: obj.occupation,
                Adress: obj.address,
                }
            res.render(path.join(__dirname,'views', 'success.ejs'));
            return db.collection('users').doc(obj.cnic).set(userData);
            }
        }).catch( err => 
            {
                console.error("This is the error chief = "+err);
            }); 

    }
    
    // console.log(req.body);
    // const obj = req.body;
    // db.collection('drivers').doc(obj.cnic).get().then(doc => {
    //     if(!doc.exists)
    //     {
    //         if(obj.btn == 'Join')
    //         {
    //         const userData= {
    //             Name: obj.fname,
    //             Father: obj.lname,
    //             Gender: obj.gender,
    //             Email: obj.email,
    //             Password: obj.pass,
    //             Phone: obj.txtEmpPhone,
    //             CarNumber: obj.carnumb,
    //             BirthDate: obj.birth,
    //             CNIC: obj.cnic,
    //             Type: obj.cartype,
    //         }
    //         res.render(path.join(__dirname,'views', 'success.ejs'));
    //         return db.collection('drivers').doc(obj.cnic).set(userData);
    //         }
    //         else if(obj.btn == 'Register')
    //         {
    //             const userData= {
    //             Name: obj.fname,
    //             Father: obj.lname,
    //             Gender: obj.gender,
    //             Email: obj.email,
    //             Password: obj.pass,
    //             Phone: obj.phone,
    //             BirthDate: obj.birth,
    //             Occupation: obj.occupation,
    //             Adress: obj.address,
            
    
    //         }
    //         res.render(path.join(__dirname,'views', 'success.ejs'));
    //         return db.collection('users').doc(obj.cnic).set(userData);
    //         }
    //     }
    //     else 
    //     {
    //         console.log("The user already exists");
    //         res.render(path.join(__dirname,'views', 'fail.ejs'));
    //     }
    // })
    // .catch( err => 
    // {
    //     console.error("This is the error chief = "+err);
    // }); 
    
})
app.get("/",function(req,res){
    
    res.render(path.join(__dirname,'views', 'index.ejs'));
})

app.get("/register",function(req,res){
    res.render(path.join(__dirname,'views',  'register.ejs'));
})
app.get("/privacy",function(req,res){
    res.render(path.join(__dirname,'views', 'privacy.ejs'));
})
app.get("/team",function(req,res){
    res.render(path.join(__dirname,'views', 'team.ejs'));
})
const fr=3000
app.listen(3000, function(){
    console.log(path.join(__dirname,'public', 'css', 'style.css'));
    console.log("running on "+fr);
});