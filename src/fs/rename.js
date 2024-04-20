import { rename as renameFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt')
const newPath = path.join(__dirname, 'files', 'properFilename.md')

const rename = async () => {
  try {
    await renameFile(oldPath, newPath)
  } catch (error) {
    throw new Error('FS operation failed')
  }
}

await rename()
