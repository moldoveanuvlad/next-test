import date from 'date-and-time'
import fs from 'fs'

const demoLogger = handler => {
  return (req, res) => {
    const now = new Date()
    const formattedDate = date.format(now, 'YYYY/MM/DD HH:mm:ss')
    const method = req.method
    const url = req.url
    const ip = req.connection.remoteAddress
    console.log(res)
    const log = `[${formattedDate}] ${method}:${url}: ${ip}`

    fs.appendFile('request_logs.txt', log + '\n', err => {
      if (err) {
        console.log(err)
      }
    })

    console.log(log)
    return handler(req, res)
  }
}

export default demoLogger
