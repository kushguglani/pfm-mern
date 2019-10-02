const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
	productName: { type: String, required: true },
	productDescription: { type: String},
	productPrice: { type: Number, required: true },
	active: { type: Boolean, required: true, default: true },
	
}, { timestamps: true })

const Product = mongoose.model('productModel', productSchema);
module.exports = { Product }
