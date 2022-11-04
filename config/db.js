const mongoose = require("mongoose")
const app = require("../app")

const connectionParams = {
   useNewUrlParser: true,
   useUnifiedTopology: true 
}
const PORT = process.env.PORT || 3000
async function Connection(){
   try{

      await mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING, connectionParams)
      
      app.listen(PORT, () => {
       console.log(`Database Connection successful... server running on port ${PORT}`)
      })
   }catch(err){
      console.log(err);
   }
}

module.exports = Connection