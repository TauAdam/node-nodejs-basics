import { readFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const read = async fileName => {
  const pathToFile = path.join(__dirname, 'files', fileName)
  try {
    const content = await readFile(pathToFile, 'utf8')
    console.log(content)
  } catch (error) {
    throw new Error('FS operation failed')
  }
}

await read('fileToRead.txt')
