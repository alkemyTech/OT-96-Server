const { validateLoginDetails, comparePasswords, existEmailUser, createToken } = require('../services/authService');

const loginUser = async (req, res) => {
  try {
    const { error } = validateLoginDetails(req.body)
    if (error) return res.status(400).json({ ok:false, mes:'validation false'})
    const { email, password } = req.body
    const existingUser = await existEmailUser(email)
    if (!existingUser) return res.status(400).json({ ok:false , mes:'email dont exist'})
    
    const match = comparePasswords(password, existingUser.dataValues.password)

    if (match) {
      const { id, firstName, lastName, email, roleId } = existingUser.dataValues
      const user = { id, firstName, lastName, email, roleId }
      
      const token = createToken({firstName, email, roleId})
      res.status(200).json({
        accessToken: `Bearer ${token}`,
        user,
        expires_in: '24h'
      })
    } else {
      res.status(400).json({ok:false, mes:'no hubo match'})
    }
    
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = { loginUser }
