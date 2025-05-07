const express = require("express");
const authenticate = require("../middleware/authmiddleware");
const {
    getAllCourses,
    getCoursesById,
    postCourses,
    updateCourse,
    deleteCourse
} = require("../controller/courseController");

const CourseRouter = express.Router();



CourseRouter.get("/", authenticate, getAllCourses);
CourseRouter.get("/:elementId", authenticate, getCoursesById);
CourseRouter.post("/", authenticate, postCourses);
CourseRouter.put("/:elementId", authenticate, updateCourse);
CourseRouter.delete("/:elementId", authenticate, deleteCourse);

module.exports = CourseRouter;
