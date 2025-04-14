const express  =  require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const {PORT,DB_USER,DB_PASSWORD} = process.env
const router = require("./routes/authRouter");
const app = express()
app.use(express.json())
const cors = require('cors');
app.use(cors());const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");


app.use(serveStatic(path.join(__dirname, "build")));




const CourseRouter = require("./routes/courseRouter");

const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.wo8qv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(dbURL).then(function(){
    console.log("Connection Success")
}).catch(e => console.log(e.message))

app.listen(PORT, function(){
    console.log(`Server running at ${PORT}`)
})

app.use(express.json())
app.use("/api/course",CourseRouter);
app.use("/api/authorization",router);