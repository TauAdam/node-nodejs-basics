import { writeFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const pathToFile = path.join(__dirname, 'files', 'fresh.txt')
const create = async content => {
  try {
    await writeFile(pathToFile, content, { flag: 'wx' })
  } catch (error) {
    throw new Error('FS operation failed')
  }
}

await create('I am fresh and young')
