const mongoose=require("mongoose")

const bookSchema=({
    title:String,
    author:String,
    category:String,
    publicationYear:Number,
    price:Number,
    quantity:Number,
    description:String,
    imageUrl:String,
});
// { timestamps: true});

const Books=mongoose.model("Book",bookSchema);

module.exports=Books;