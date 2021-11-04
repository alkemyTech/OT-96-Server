const validateLoginDetails = (req, res, next) => {
  const { email, password } = req.body
  if((typeof password !== 'string')||(typeof email !== 'string')) return res.status(400).json({
    ok:false , message:'email y password tienen que ser string'
  })
  
  if (password.length < 7) return res.status(400).json({
    ok:false , message:'el password debe ser mayor a diez'
  })
  
  if(email.indexOf('@') === -1) return res.status(400).json({
    ok:false , message:'email contiene @'
  })
  
  const dominio = email.split('@')[1]
  const tipo = dominio.slice(dominio.length-4)
  if((tipo !== '.com')&&(tipo !== '.net')) return res.status(400).json({
    ok:false , message:'email no finaliza con .com o .net'
  })
  next()
}
module.exports = { validateLoginDetails }