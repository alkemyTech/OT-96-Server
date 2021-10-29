const authenticationsService = require('../services/authentications')
const usersServices = require('../services/users')

const loginUser = async (req, res) => {
  try {
    // const { error } = authenticationsService.validateLoginDetails(req.body)
    // if (error) return res.status(400).json({ ok:false, message:'validation false'})
    const { email, password } = req.body
    const existingUser = await usersServices.existEmailUser(email)
    if (!existingUser) return res.status(400).json({ ok:false , message:'email dont exist'})
    
    const match = authenticationsService.comparePasswords(password, existingUser.dataValues.password)

    if (match) {
      const { id, firstName, lastName, email, roleId } = existingUser.dataValues
      const user = { id, firstName, lastName, email, roleId }
      
      const token = authenticationsService.createToken({firstName, email, roleId})
      res.status(200).json({
        accessToken: `Bearer ${token}`,
        user,
        expires_in: '24h'
      })
    } else {
      res.status(400).json({ok:false, message:'no hubo match'})
    }
    
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = { loginUser }
