const User = require("../models/user.model");

const createUser = async (req, res) => {
    try {
        const { email } = req.body;
        let isExists = await User.findOne({ eamil: email })
        if (isExists) {
            return res.send("user aleady exists");
        }

        else {
            let user = await User.create(req.body);
            return res.status(200).json(user)
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const getUser = async (req, res) => {
    try {
        let user = await User.findOne();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const getUserById = async (req, res) => {
    try {
        let { userId } = req.params;
        let user = await User.findById(userId)
        res.status(202).json(user)
    } catch (error) { 
        res.status(500).json({ error: error });
    }
}

const updateUser = async (req, res) => {
    try {
        let { userId } = re.params;
        let user = await User.findByIdAndUpdate(userId)
        res.status(202).json(user)
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const deleteUser = async (req, res) => {
    try {
        let { userId } = req.params;
        let user = await User.findByIdAndDelete(userId);
        res.status(202).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const Login = async (req, res) => {
    const { email, password } = req.body;
    let isExists = await User.findOne({ email: email })
    if (isExists) {
        return res.send("user not found")
    }
    if (isExists && isExists.password != password) {
        return res.send("password incorrrect")
    }
    return res.send("logged in")
}

const getLoginPage = (req, res) => {
    res.render("login")
}

const getSignupPage = (req, res) => {
    res.render("signup")
}
module.exports = {
    createUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser,
    getLoginPage,
    getSignupPage,
    Login
};