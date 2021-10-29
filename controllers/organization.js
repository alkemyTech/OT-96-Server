const organizationsService = require('../services/organizations');

//AND GET ONE ORGANIZATION BY ID
async function getOrganizationPublic(req, res, next) {
  try {
    const id = req.params.id;
    const requestOrganization = await organizationsService.getOrganizationPublic(id);
    res.send(requestOrganization);
  } catch (error) {
    next(error);
  }
}



//////////CRUD//////7

// GET ALL ORGANIZATIONS
async function getAll(req, res, next) {
  try {
    const organizationList = await organizationsService.getAll();
    res.send(organizationList);
  } catch (error) {
    next(error);
  }
}

//AND GET ONE ORGANIZATION BY ID
async function getById(req, res, next) {
  try {
    const requestOrganization = await organizationsService.getById(
      req.params.id
    );

    res.send(requestOrganization);
  } catch (error) {
    next(error);
  }
}

// CREATE ORGANIZATION
async function create(req, res, next) {
  try {
    const newOrganization = await organizationsService.create(req.body);
    res.status(200).json({
      success: true,
      msg: `your Organization ${newOrganization.title} has been created`,
      organization: newOrganization,
    });
  } catch (err) {
    next(err);
  }
}

// UPDATE ORGANIZATION
async function update(req, res, next) {
  try {
    const updateOrganization = await organizationsService.update(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      msg: `organization ${req.params.id} is updated succesfully`,
      organization: updateOrganization,
    });
  } catch (err) {
    next(error);
  }
}

//ORGANIZATION SOFT DELETE
async function remove(req, res, next) {
  try {
    const softDeleteOrganization = await organizationsService.remove(
      req.params.id
    );
    res.status(201).json({
      success: true,
      msg: `your organization ${req.body.name} has been deleted`,
      organization: softDeleteOrganization,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, update, remove, getOrganizationPublic };
