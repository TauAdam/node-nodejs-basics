import { createWriteStream } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const write = async fileName => {
  const filePath = path.join(__dirname, 'files', fileName)
  const writableStream = createWriteStream(filePath)

  process.stdin.on('data', data => {
    writableStream.write(data)
  })
}

await write('fileToWrite.txt')
