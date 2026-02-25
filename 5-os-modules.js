const os = require('os')

console.log(`System uptime is ${os.uptime()}`)
const user = os.userInfo()
console.log(user)

const currentUser = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
}

console.log(currentUser)
