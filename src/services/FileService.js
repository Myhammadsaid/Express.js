import * as path from 'path'
import * as uuid from 'uuid'

class FileService {
	saveFile(file) {
		try {
			const fileName = uuid.v4() + path.extname(file.name)
			const filePath = path.resolve('public', fileName)
			file.mv(filePath)
			return fileName
		} catch (error) {
			console.log(error)
		}
	}
}

export default new FileService()
