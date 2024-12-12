const {Router} = require("express");
const { getbook, getbookById, addbook, updatebook, deletebook } = require("../controllers/controller");

const booksRouter = Router();


// middleware

const validateBookData = (req, res, next) => {
    const { title, author, category, publicationYear, price, quantity, description, imageUrl } = req.body;
    if (!title || !author || !category || !publicationYear || !price || !quantity || !description || !imageUrl) {
        return res.status(400).send({ message: 'All fields are required' });
    }
    next();
};


booksRouter.get("/books",getbook)
booksRouter.get("/books/book/:id",getbookById)
booksRouter.post("/books/addbooks",validateBookData,addbook)
booksRouter.patch("/books/update/:id",updatebook)
booksRouter.delete("/book/delete/:id",deletebook)

module.exports = booksRouter;
