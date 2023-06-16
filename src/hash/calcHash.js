import { readFile } from 'fs/promises'
import { createHash } from 'node:crypto'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const calculateHash = async fileName => {
  const pathToFile = path.join(__dirname, 'files', fileName)

  const data = await readFile(pathToFile)
  const hash = createHash('sha256').update(data).digest('hex')

  console.log(hash)
}

await calculateHash('fileToCalculateHashFor.txt')
