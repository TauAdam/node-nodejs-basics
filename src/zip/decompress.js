import { createReadStream, createWriteStream } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createGunzip } from 'zlib'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const decompress = async fileName => {
  const sourceFile = path.join(__dirname, 'files', fileName)
  const stream = createReadStream(sourceFile)

  const destFile = path.join(__dirname, 'files', 'fileToCompress.txt')
  const writableStream = createWriteStream(destFile)

  stream.pipe(createGunzip()).pipe(writableStream)
}

await decompress('archive.gz')
