import ProductService from '../services/ProductService.js'

class ProductController {
	async getAll(req, res) {
		try {
			const products = await ProductService.getAll()
			return res.status(200).json(products)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	async getOne(req, res) {
		try {
			const product = await ProductService.getOne(req.params.id)
			return res.status(200).json(product)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	async post(req, res) {
		try {
			const product = await ProductService.post(req.body, req.files.picture)
			res.status(201).json({ message: 'Успешно создан', product })
		} catch (error) {
			res.status(500).json(error)
		}
	}
	async put(req, res) {
		try {
			const product = await ProductService.put(req.body)
			return res.status(200).json(product)
		} catch (error) {
			res.status(500).json(error)
		}
	}
	async delete(req, res) {
		try {
			const product = await ProductService.delete(req.params.id)
			return res.status(200).json(product)
		} catch (error) {
			res.status(500).json(error)
		}
	}
}

export default new ProductController()
