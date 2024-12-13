const Books = require("../models/model")

const getbook=async(req,res)=>{
   try {
     let book=await Books.find()
     res.stauts(200).json(book)
   } catch (error) {
    res.stauts(500).json()
   }
}
const getbookById=async(req,res)=>{
   try {
     const {bookId}=req.params;
     let book = await Books.findById(bookId)
     if(!book){
       return res.status(404).json({message:"Book not found"})
     }
    else{
      res.stauts(200).json(book)
    }
   } catch (error) {
    res.stauts(500).json()
   }
  
};

const deletebook=async(req,res)=>{
    try {
        const {bookId}=req.params;
        let book = await Books.findByIdAndDelete(bookId)
        if(!book){
          return res.status(404).json({message:"Book not deleted"})
        }
        else{
          res.stauts(200).json(book)
        }
    } catch (error) {
        res.stauts(500).json()
    }
}

const addbook=async(req,res)=>{
   try {
     let book = await Books.create(req.body)
     res.stauts(200).json(book)
   } catch (error) {
    res.stauts(500).json()
   }
}

const updatebook=async(req,res)=>{
    try {
        const {bookId}=req.params;
        let book = await Books.findByIdAndUpdate(bookId,req.body,{new:true})
        if(!book){
          return res.status(404).json({message:"Book not updated"})
        }
        else{
          res.stauts(200).json(book)
        }
    } catch (error) {
        res.stauts(500).json()
    }
}
module.exports={getbook,getbookById,deletebook,addbook,updatebook}