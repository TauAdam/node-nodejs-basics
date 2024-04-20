import { createReadStream } from 'fs'
import { createHash } from 'crypto'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const calculateHash = async fileName => {
  const pathToFile = path.join(__dirname, 'files', fileName)

  const hash = createHash('sha256')
  const input = createReadStream(pathToFile)

  input.on('readable', () => {
    const data = input.read()
    if (data)
      hash.update(data)
    else {
      console.log(hash.digest('hex'))
    }
  })
}

await calculateHash('fileToCalculateHashFor.txt')
