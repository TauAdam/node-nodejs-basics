import { createReadStream } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const read = async fileName => {
  const filePath = path.join(__dirname, 'files', fileName)
  const stream = createReadStream(filePath)
  stream.pipe(process.stdout)
}

await read('fileToRead.txt')
