import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
    item: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true }
}, { timestamps: true });

let Product;
try {
    Product = mongoose.model('Product');
} catch (error) {
    Product = mongoose.model('Product', productSchema);
}

export default Product;
