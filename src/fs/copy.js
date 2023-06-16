import { cp } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const copy = async (source, destination) => {
  const pathToSourceFolder = path.join(__dirname, source)
  const pathToDestinationFolder = path.join(__dirname, destination)

  try {
    await cp(pathToSourceFolder, pathToDestinationFolder, {
      force: false,
      errorOnExist: true,
      recursive: true,
    })
  } catch (error) {
    throw new Error('FS operation failed')
  }
}

await copy('files', 'files_copy')
