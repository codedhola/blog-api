const mongoose = require("mongoose")
const app = require("../app")

const PORT = process.env.PORT || 80
async function Connection(){
   await mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING, { })
   
   app.listen(PORT, () => {
    console.log(`Database Connection successful... server running on port ${PORT}`)
   })
}

module.exports = Connection