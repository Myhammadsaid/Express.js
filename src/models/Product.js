import mongoose from 'mongoose'

const Product = new mongoose.Schema({
	title: { type: String, required: true },
	desc: { type: String, required: true },
	price: { type: Number, required: true },
	picture: { type: String },
})

export default mongoose.model('Product', Product)
