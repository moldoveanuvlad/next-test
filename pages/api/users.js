import fs from 'fs'
import csv from 'csv-parser'
import withLogger from '../../middleware/logger'

const handler = (req, res) => {
  console.log(req.headers)
  console.log(req.query)
  console.log(req.cookies)

  const { method } = req

  // access env variables
  // console.log(process.env.API_HOST)
  // EX 1
  // allow only POST requests
  if (method === 'GET') {
    res.status(501).json({ error: 'not implemented' })
  } else {
    res.status(200).json({ name: 'John Doe', ...req.query, method })
  }

  // EX 2s
  // read a csv file
  // if (method === 'GET') {
  //   res.status(501).json({ error: 'not implemented' })
  // } else {
  //   const csvStream = fs.createReadStream('./pages/api/mockdata.csv')
  //     .pipe(csv())
  //     .on('data', (row) => {
  //       console.log(row.id, req.body.userID)
  //       if (row.id === req.body.userID.toString()) {
  //         res.status(200).json({ name: `${row.first_name} ${row.last_name}`, email: row.email, gender: row.gender })
  //         csvStream.destroy()
  //       }
  //     })
  //     .on('end', () => {
  //       res.status(200).json({ response: 'User not found' })
  //       console.log('CSV file successfully processed')
  //     })
  // }
}

export default withLogger(handler)
