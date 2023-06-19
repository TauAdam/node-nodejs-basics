import os from 'os'
import path from 'path'
import { fileURLToPath } from 'url'
import { Worker } from 'worker_threads'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const fileName = path.join(__dirname, './worker.js')

const performCalculations = async () => {
  const promisesArray = Array.from({ length: os.cpus().length }, (_, i) => {
    return new Promise(resolve => {
      const worker = new Worker(fileName)
      worker.on('message', data => {
        resolve({ status: 'resolved', data })
      })
      worker.on('error', () => {
        resolve({ status: 'error', data: null })
      })
      worker.postMessage(i + 10)
    })
  })
  const promiseResult = await Promise.allSettled(promisesArray)
  return promiseResult.map(el => console.log(el.value))
}

await performCalculations()
