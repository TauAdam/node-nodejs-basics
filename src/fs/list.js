import { readdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const list = async folderName => {
  const pathToFolder = path.join(__dirname, folderName)
  try {
    const files = await readdir(pathToFolder)
    console.log(files)
  } catch (error) {
    throw new Error('FS operation failed')
  }
}

await list('files')
