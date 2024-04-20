import { createReadStream, createWriteStream } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createGzip } from 'zlib'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const compress = async fileName => {
  const sourceFile = path.join(__dirname, 'files', fileName)
  const stream = createReadStream(sourceFile)

  const destFile = path.join(__dirname, 'files', 'archive.gz')
  const writableStream = createWriteStream(destFile)

  stream.pipe(createGzip()).pipe(writableStream)
}

await compress('fileToCompress.txt')
