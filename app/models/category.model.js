//import mongoose
import mongoose from 'mongoose';

//create a schema
const Category = mongoose.Schema(
    {
        category_name: {
            type: String,
            required: true,
        }
    }
);

//export model
export default mongoose.model('Category',Category);