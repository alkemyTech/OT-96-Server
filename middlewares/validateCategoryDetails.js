const validateCategoryDetails = (req, res, next) => {
  const { name } = req.body

  if(name === undefined) return res.status(400).json({
    ok:false , message:'tiene que existir el parametro name'
  })

  if((typeof name !== 'string')) return res.status(400).json({
    ok:false , message:'name tienen que ser string'
  })
  next()
}
module.exports = { validateCategoryDetails }