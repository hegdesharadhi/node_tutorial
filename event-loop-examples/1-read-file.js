const { readFile } = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('Completed first task')
})
console.log('Starting next task')
