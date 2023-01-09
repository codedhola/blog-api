const Client = require("./config/db")
const app = require("./app")

Client.connect((err) => {
    if (err) {
      console.error('connection error', err.stack)
      return
    }
 
    app.listen(process.env.PORT, () => {
       console.log(`App connected to database running on port ${process.env.PORT}`)
    })
  })
 