const HandleError = require("../utils/handleError");

const jwtExpired = () => {
  return new HandleError("Please Login to perform this operation", 401)
}

const JwtError = () => {
  return new HandleError("Token Invalid, please login again", 400)
}


const production = (err, res) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
}
  return res.status(500).json({
    status: 'error',
    message: 'Something went wrong! Please check back'
});
}
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "Error"

  if(process.env.NODE_ENV === 'development'){

    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  }else{
    let error = {...err}
    
    if(error.name === "JsonWebTokenError") error = JwtError()
    if(error.name === "TokenExpiredError") error = jwtExpired()

    production(error, res)
  }
}