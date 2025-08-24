import Product from '../models/Product.js'
import FileService from './FileService.js'

class PostService {
	async getAll() {
		const products = await Product.find()
		return products
	}
	async getOne(id) {
		if (!id) {
			throw new Error('id - не указан')
		}
		const product = await Product.findById(id)
		return product
	}
	async post(product, picture) {
		const fileName = FileService.saveFile(picture)
		const post__product = await Product.create({
			...product,
			picture: fileName,
		})
		return post__product
	}
	async put(product) {
		if (!product._id) {
			res.status(400).json({ error: 'id - не указан' })
		}
		const put__product = await Product.findByIdAndUpdate(product._id, product, {
			new: true,
		})
		return put__product
	}
	async delete(id) {
		if (!id) {
			res.status(400).json({ error: 'id - не указан' })
		}
		const product = await Product.findByIdAndDelete(id)
		return product
	}
}

export default new PostService()
