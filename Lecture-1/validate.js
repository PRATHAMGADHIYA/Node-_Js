const isvalid = (req, res) => {
    let { email, password, username } = req.body

    if (!email || !password || !username) {
        res.send("Please enter a valid data")
    }
    else {
        next();
    }

}
module.exports = isvalid