const  mongoose = require("mongoose")

const courseDetailsSchema =({
    day_number:{
        type:String,
        required:true
    },
    video_link:{
        type:String,
        required:true
    },
    assignment_link:{
        type:String
    }
})
    
const courseSchema = ({
    course_name:{
        type:String,
        required:true
    },
    course_duration:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    course_details:{
        type:[courseDetailsSchema]
    }
})

const courseDetailSchema = new mongoose.Schema(courseSchema);
const courseModel = mongoose.model("coursedetailsUpskill",courseDetailSchema);

module.exports = courseModel