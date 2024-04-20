import { fork } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const modulePath = path.join(__dirname, 'files', 'script.js')

const spawnChildProcess = async args => {
  fork(modulePath, args)
}

// Put your arguments in function call to test this functionality
spawnChildProcess(['a', 'b', 'c'])
