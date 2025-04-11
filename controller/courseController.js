const courseModel = require("../model/courseModel");

const {
    getAllFactory,
    getByIdFactory,
    postFactory,
    deleteFactory,
    updateFactory
} = require("../utility/crudFactory");

const getAllCourses = getAllFactory(courseModel);
const getCoursesById = getByIdFactory(courseModel);
const postCourses = postFactory(courseModel);
const updateCourse = updateFactory(courseModel);
const deleteCourse = deleteFactory(courseModel);

module.exports = {
    getAllCourses,
    getCoursesById,
    postCourses,
    updateCourse,
    deleteCourse
}