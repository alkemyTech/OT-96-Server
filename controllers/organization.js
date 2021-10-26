const organizationModel = require('../models').organization;

// GET ALL ORGANIZATIONS
async function getAll(req, res, next) {
  try {
    const organizationList = await organizationModel.findAll({});
    res.send(organizationList);
  } catch (error) {
    next(error);
  }
}

//AND GET ONE ORGANIZATION BY ID
async function getById(req, res, next) {
  try {
    const requestOrganization = await organizationModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!requestOrganization) {
      res.status(404).json({
        succes: true,
        msg: 'Organization not found',
      });
    } else {
      res.send(requestOrganization);
    }
  } catch (error) {
    next(error);
  }
}

// CREATE ORGANIZATION
async function create(req, res, next) {
  try {
    const newOrganization = await organizationModel.create({
      name: req.body.name,
      image: req.body.image,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      welcomeText: req.body.welcomeText,
      aboutUsText: req.body.aboutUsText,
    });
    res.status(200).json({
      success: true,
      msg: `your Organization ${newOrganization.title} has been created`,
      organization: newOrganization,
    });
  } catch (err) {
    next(error);
  }
}

// UPDATE ORGANIZATION
async function update(req, res, next) {
  try {
    const options = { multi: true };
    const values = {
      name: req.body.name,
      image: req.body.image,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      welcomeText: req.body.welcomeText,
      aboutUsText: req.body.aboutUsText,
    };
    const condition = {
      where: {
        id: req.params.id,
      },
    };
    const organizationUpdated = await organizationModel.update(values, {
      ...condition,
      ...options,
    });
    res.send.json({
      success: true,
      msg: `your organization ${req.body.name} has been updated`,
      organization: organizationUpdated,
    });
  } catch (err) {
    next(error);
  }
}

// DELETE ORGANIZATION BY ID
async function remove(req, res, next) {
  try {
    const deleteOrganization = await organizationModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      success: true,
      msg: `organization ${req.params.id} is deleted succesfully`,
      organization: deleteOrganization,
    });
  } catch (err) {
    next(error);
  }
}

module.exports = { getAll, getById, create, update, remove };
