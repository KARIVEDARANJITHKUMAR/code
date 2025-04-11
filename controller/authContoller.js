const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../model/userModel");

const register = async function (req, res) {
    try {
        const { userName, password } = req.body;

        const existingUser = await user.findOne({ userName });
        if (existingUser) {
            return res.status(400).json({
                status: "failure",
                message: "Username already taken"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new user({ userName, password: hashedPassword });
        await newUser.save();

        res.status(200).json({
            status: "success",
            message: `User with username: ${userName} registered successfully`
        });
    } catch (e) {
        res.status(400).json({
            status: "failure",
            message: e.message
        });
    }
};

const login = async function (req, res) {
    try {
        const { userName, password } = req.body;
        const User = await user.findOne({ userName });

        if (!User) {
            return res.status(400).json({
                status: "failure",
                message: `User with username: ${userName} not found`
            });
        }

        const isMatch = await bcrypt.compare(password, User.password);
        if (!isMatch) {
            return res.status(400).json({
                status: "failure",
                message: `Invalid credentials`
            });
        }

        const token = jwt.sign({ id: User._id }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        });

        res.status(200).json({
            status: "success",
            message: "Login successful",
            token
        });
    } catch (e) {
        res.status(500).json({
            status: "failure",
            message: e.message
        });
    }
};

module.exports = {
    register,
    login
};
