


const jwtExpired = (err, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    message: "Please login to continue"
  })
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
    message: 'Something went very wrong!'
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
    
    if(error.name === "JsonWebTokenError") error = handleJwtError()
    if(error.name === "TokenExpiredError") error = handleJwtExpires()

    production(error, req, res)
  }
}