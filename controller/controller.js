const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user")

// Create User
const Signup = async (req, res) => {
    try {
        const { username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const NewUser = new User({ username, password: hashedPassword })
        await NewUser.save()
        res.status(201).json({ message: "user created succesfully" })
    } catch (err) {
        res.status(500).json({ message: "NO created" })
    }
}

// Login User
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const isPassword = bcrypt.compare(password, user.password)
        if (!isPassword) {
            return res.status(404).json({ message: "Invalid Ceredential" })
        }
        const token = jwt.sign({ userId: user._id }, "Welcome")
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "User not found" })
    }
}
// User find
const GetUser = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.find()
        res.json(user)
    } catch (err) {
        res.json({ message: "NO created" })
    }
}

// User find by id
const getUserbyId = async (req, res) => {
    try {
        const _id = req.params.id
        const user = await User.findById(_id)
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "User Id Not Exist" })
    }
}
 // update User
const getUserandUpdate = async (req, res) => {
    try {
        const _id = req.params.id
        const userUpdate = await User.findByIdAndUpdate(_id, req.body, { new: true })
        res.json(userUpdate);
    } catch (error) {
        res.status(500).json({ message: "User Id Not Exist" })
    }
}
 

// Delete User
const getUserandDelete = async (req, res) => {
    try {
        const _id = req.params.id
        const userDelete = await User.findByIdAndDelete(_id)
        res.json(userDelete);
    } catch (error) {
        res.status(500).json({ message: "User Id Not Exist" })
    }
}


module.exports = {
    Signup,
    GetUser,
    login,
    getUserbyId,
    getUserandUpdate,
    getUserandDelete
}