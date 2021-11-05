const validateOrganization = (req, res, next) => {
  const { name, image, email, welcomeText } = req.body;

  if (typeof name !== 'string')
    return res.status(400).json({
      ok: false,
      message: 'El nombre de la organizacion es incorrecto',
    });

  var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(image);
  if (!valid)
    return res.status(400).json({
      ok: false,
      message: 'El nombre de la organizacion es incorrecto',
    });

  if (typeof welcomeText !== 'string')
    return res
      .status(400)
      .json({ ok: false, message: 'EL texto de la organizacon es incorrecto' });

  const dominio = email.split('@')[1];
  const tipo = dominio.slice(dominio.length - 4);
  if (tipo !== '.com' && tipo !== '.net')
    return res.status(400).json({
      ok: false,
      message: 'email no finaliza con .com o .net',
    });
  next();
};
module.exports = validateOrganization;
