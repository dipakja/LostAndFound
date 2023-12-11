// npm init -y
//npm i express
//npm i mongoose
// for fs = npm i fs --save
//npm i multer


// const e = require("express");
// const express = require("express");
// const mongoose = require("mongoose")
// const fs = require("node:fs");
// User = require("./model/users")
// const app=express()

// const port=3000;
// app.use(express.urlencoded({extended:true}))

// mongoose.connect("mongodb://127.0.0.1:27017/LostFindDB").then(()=>
// {
//     console.log("Database is connected, lost and found")
// }).catch((e)=>{
//     console.log("database is can't coneceted")
// console.log(e)
// })


// app.get("/",(req,res)=>
// {

//     let a= fs.readFileSync("./pages/Report.js")
//     res.send(a.toString())

// })


// app.post("/",async(req,res)=>{

//     const userData = new User(req.body)


// await userData.save();

// let a = fs.readFileSync(console.log("Your data is saved"));

// res.send(a.toString())

// })


// app.post("/", async (req, res) => {
//     const userData = new User(req.body);

//     await userData.save();

    // Read the content of the file synchronously
    // let fileContent = fs.readFileSync('submitted.html'); // Change 'your_filename.txt' to the actual file name

//     console.log("Your data is saved");

//     res.send(fileContent.toString());
// });







// app.listen(port,()=>
// {
//     console.log("app is runnign on : ", port)
// })


// ...................................

const multer =require("multer");
// const upload = multer({dest:"uploads/"});

const storage = multer.memoryStorage({

destination: function (req,file,cb) {
    return cb(null,'./uploads');
},
filename: function (req,file,cb) {
    return cb(null,`${Date.now()}-${file.originalname}`);
},

});

// Multer setup for file upload


const upload = multer({storage});

const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const User = require("./model/users"); // Make sure the path to your User model is correct
const app = express();

const port = 4000;

app.use(express.json()); // Add this line before handling POST requests
// app.use(express.urlencoded({ extended: true }));

// app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Add this line to parse JSON in the request body

mongoose.connect("mongodb://127.0.0.1:27017/LostFindDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database is connected, lost and found");
    })
    .catch((e) => {
        console.log("Database can't be connected");
        console.log(e);
    });

app.get("/", (req, res) => {
    let a = fs.readFileSync("./pages/practice.html");
    res.send(a.toString());
});


// for the image upload

app.use(express.urlencoded({extended:false}));

app.post('/uploads',(req,res)=>{

    return res.send("homepage");

})

app.post("/uploads",upload.single("objectImage"),(req,res)=>{
  
    console.log(req.body)
    console.log(req.file);
    return res.redirect("/");
    
})










app.post("/", async (req, res) => {
    try {
        const userData = new User(req.body);
        await userData.save();

        // Read the content of the file synchronously
        let fileContent = fs.readFileSync("./model/submitted.html"); // Change 'submitted.html' to the actual file name

        console.log("Your data is saved");

        res.send(fileContent.toString());
    } catch (error) {
        console.error("Error saving user data:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log("App is running on port:", port);
});
