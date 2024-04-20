import { Transform } from 'stream'

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split('').reverse().join('')
      callback(null, reversedChunk)
    },
  })

  try {
    process.stdin.pipe(reverseTransform).pipe(process.stdout)
  } catch (error) {
    console.log(error)
  }
}

await transform()
