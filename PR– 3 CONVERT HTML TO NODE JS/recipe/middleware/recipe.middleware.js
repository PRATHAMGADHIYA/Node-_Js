const valid = (req, res) => {
    const {
        name,
        description,
        preparationTime,
        cookingTime,
        imageUrl,
        country,
        veg,
    } = req.body;
    if (!name || !description || !preparationTime || !cookingTime || !imageUrl || !country || !veg) {
        return res.status(400).json({ message: "All fields are required" })
    } else {
        next();
    }
};

module.exports = valid;