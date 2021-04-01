import fs from 'fs'
import csv from 'csv-parser'
import withLogger from '../../middleware/logger'

const handler =  (req, res) => {

  const { method } = req

  // EX 2s
  // read a csv file
  if (method === 'POST') {
    res.status(501).json({ error: 'not implemented' })
  } else {
    const csvStream = fs.createReadStream('./pages/api/mockdata.csv')
      .pipe(csv())
      .on('data', (row) => {
        if (row.id === req.query.users.toString()) {
          res.status(200).json({ name: `${row.first_name} ${row.last_name}`, email: row.email, gender: row.gender })
          csvStream.destroy()
        }
      })
      .on('end', () => {
        res.status(200).json({ response: 'User not found' })
        console.log('CSV file successfully processed')
      })
  }
}
export default withLogger(handler)
