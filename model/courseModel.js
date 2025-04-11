const  mongoose = require("mongoose")

const courseDetailsSchema =({
    dayNumber:{
        type:String,
        required:true
    },
    videoLink:{
        type:String,
        required:true
    },
    assignmentLink:{
        type:String
    }
})
    
const courseSchema = ({
    courseName:{
        type:String,
        required:true
    },
    courseDuration:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    courseDetails:{
        type:[courseDetailsSchema]
    }
})

const courseDetailSchema = new mongoose.Schema(courseSchema);
const courseModel = mongoose.model("coursedetailsUpskill",courseDetailSchema);

module.exports = courseModel