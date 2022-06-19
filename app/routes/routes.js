//import express
import express from 'express';
import { getCategories, saveCategory, updateCategory } from '../controllers/category.controller.js';

//express router
const route = express.Router();

//get all categories
route.get('/category',getCategories);

//create a category
route.post('/category',saveCategory);

//update category
route.put('/category',updateCategory);

//export route
export default route;