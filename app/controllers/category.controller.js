//import model
import { Router } from "express";
import Category from "../models/category.model.js";

//get all categories 
export const getCategories = async (req,res)=>{
    try{
        const categories = await Category.find();
        res.json(categories);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

//create a categories
export const saveCategory = async(req,res)=>{
    const categories = new Category(req.body);
    try{
        const savedCategory = await categories.save();
        res.status(201).json(saveCategory);

    }
    catch(error){
        res.status(400).json({message: error.message});

    }
}
//update a category
export const updateCategory = async(req,res)=>{
    const categories = new Category(req.body);
    try{
        const updatedCategory = await categories.updateOne();
        res.status(201).json(updateCategory);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
}