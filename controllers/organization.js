const organizationsService = require('../services/organizations');

const getOrganizationPublic = async (req, res, next) => {
  try {
    const id = req.params.id;
    const requestOrganization =
      await organizationsService.getOrganizationPublic(id);
    res.send(requestOrganization);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const organizationList = await organizationsService.getAll();
    res.status(200).json(organizationList);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const requestOrganization = await organizationsService.getById(
      req.params.id
    );
    res.send(requestOrganization);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const newOrganization = await organizationsService.create(req.body);
    res.status(200).json({
      success: true,
      msg: `your Organization ${newOrganization.title} has been created`,
      organization: newOrganization
    });
  } catch (error) {
    next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const updatedOrganization = await organizationsService.update(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      msg: `organization ${req.params.id} is updated succesfully`,
      organization: updatedOrganization,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const softDeleteOrganization = await organizationsService.remove(
      req.params.id
    );
    res.status(201).json({
      success: true,
      msg: `your organization ${req.body.name} has been deleted`,
      organization: softDeleteOrganization
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getOrganizationPublic
};
