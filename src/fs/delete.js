import { rm } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const remove = async fileName => {
  const pathToFile = path.join(__dirname, 'files', fileName)
  try {
    await rm(pathToFile)
  } catch (error) {
    throw new Error('FS operation failed')
  }
}

await remove('fileToRemove.txt')
