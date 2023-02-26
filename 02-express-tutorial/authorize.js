const authorize = (req,res,next) =>{
  const {user} = req.query;
  if(user === 'Rohmah')
  {
    req.user = {name:'Rohmah',id:30}
    console.log('authorize')
    next()
  }
  else{
    res.status(401).send("Unauthorized")
    console.log('Unauthorized')
  }
}

module.exports = authorize;