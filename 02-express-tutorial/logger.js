const logger = (req,res,next) =>{
  const method = req.method;
  const URL = req.url;
  const time = new Date().getFullYear()
  console.log(method,URL,time)
  // res.send("Middleware")
  next()
}

module.exports = logger;