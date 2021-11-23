const chai = require('chai');
const sinon = require('sinon');
const usersController = require('../controllers/users');
const usersService = require('../services/users');
const securityService = require('../services/security');

let mockedUsersService, mockedSecurityService;
let res, stubStatus, spyJson, spyNext, req;
const expectedEmail = 'test@test.com',
  expectedFirstName = 'test';

describe('test Users Controller', () => {
  beforeEach(() => {
    mockedUsersService = sinon.mock(usersService);
    mockedSecurityService = sinon.mock(securityService);
    stubStatus = sinon.stub();
    spyJson = sinon.spy();
    stubStatus.returns({ json: spyJson });
    spyNext = sinon.spy();

    res = { status: stubStatus };
  });

  afterEach(() => {
    mockedUsersService.verify();
    mockedSecurityService.verify();
  });

  it('getAll users success', async () => {
    const expectedUsers = [
      {
        id: 1,
        firstName: expectedFirstName,
        email: expectedEmail
      }
    ];

    mockedUsersService.expects('getAll').resolves(expectedUsers);

    await usersController.getAll(req, res, spyNext);

    chai.assert.isArray(spyJson.args[0][0], true, 'is a array of users');
    chai.assert.isObject(spyJson.args[0][0][0], true, 'is a object of an user');
    chai.assert.isNotEmpty(spyJson.args[0][0], 'length of array');
    chai.assert.equal(res.status.calledOnce, true, 'res.status');
    chai.assert.equal(spyNext.calledOnce, false, 'spyNext.calledOnce');
    chai.assert.equal(res.status.args[0], 200, 'status');
  });

  it('getAll users success', async () => {
    const expectedError = new Error('error getAllMembers');

    mockedUsersService.expects('getAll').rejects(expectedError);

    await usersController.getAll(req, res, spyNext);

    chai.assert.equal(spyNext.calledOnce, true, 'next error is called 1 time');
    chai.assert.equal(spyNext.args[0][0], expectedError, 'error msg');
  });

  it('create user success', async () => {
    req = {
      body: { email: expectedEmail, firstName: expectedFirstName }
    };
    const expectedCreatedUser = {
      id: 1,
      email: expectedEmail,
      firstName: expectedFirstName
    };
    const expectedToken = 'token';

    const expectedJsonResult = {
      success: true,
      msg: `${expectedCreatedUser.firstName} your user has been created`,
      user: expectedCreatedUser,
      token: expectedToken
    };

    mockedUsersService
      .expects('create')
      .withExactArgs(req.body)
      .resolves(expectedCreatedUser);

    mockedSecurityService
      .expects('generateToken')
      .withExactArgs(expectedCreatedUser)
      .returns(expectedToken);

    await usersController.create(req, res, spyNext);

    chai.assert.equal(
      res.status.calledOnce,
      true,
      'asserts status is called 1 time'
    );
    chai.assert.equal(
      res.status.args[0],
      200,
      'asserts status parameter is 200'
    );

    chai.assert.equal(
      spyJson.calledOnce,
      true,
      'asserts json is called 1 time'
    );

    chai.assert.isArray(spyJson.args[0], 'is array');
    chai.assert.isObject(spyJson.args[0][0], 'is an object');
    chai.assert.equal(spyJson.args[0][0].msg, expectedJsonResult.msg, 'msg');
    chai.assert.equal(
      spyJson.args[0][0].success,
      expectedJsonResult.success,
      'statusObject'
    );
    chai.assert.equal(
      spyJson.args[0][0].token,
      expectedJsonResult.token,
      'tokenObject'
    );
    chai.assert.equal(
      spyJson.args[0][0].user.id,
      expectedJsonResult.user.id,
      'idUserObject'
    );
    chai.assert.equal(
      spyJson.args[0][0].user.email,
      expectedJsonResult.user.email
    );
    chai.assert.equal(
      spyJson.args[0][0].user.firstName,
      expectedJsonResult.user.firstName
    );
  });

  it('create user error', async () => {
    req = {
      body: { email: expectedEmail, firstName: expectedFirstName }
    };
    const expectedError = new Error('test error');

    mockedUsersService
      .expects('create')
      .withExactArgs(req.body)
      .rejects(expectedError);

    await usersController.create(req, res, spyNext);

    chai.assert.equal(spyNext.calledOnce, true);
    chai.assert.equal(spyNext.args[0][0], expectedError);
  });

  it('crate user - token error', async () => {
    req = {
      body: { email: expectedEmail, firstName: expectedFirstName }
    };
    const expectedCreatedUser = {
      id: 1,
      email: expectedEmail,
      firstName: expectedFirstName
    };

    const expectedTokenError = new Error('token error');

    mockedUsersService
      .expects('create')
      .withExactArgs(req.body)
      .resolves(expectedCreatedUser);

    mockedSecurityService
      .expects('generateToken')
      .withExactArgs(expectedCreatedUser)
      .throws(expectedTokenError);

    await usersController.create(req, res, spyNext);

    chai.assert.equal(spyNext.calledOnce, true, 'error rejected!');
    chai.assert.equal(spyNext.args[0][0], expectedTokenError, 'error exist');
  });

  it('update user success', async () => {
    req = {
      body: { email: expectedEmail, firstName: expectedFirstName },
      params: { id: 1 }
    };
    const expectedUpdatedUser = {
      id: 1,
      email: expectedEmail,
      firstName: expectedFirstName
    };

    const expectedJsonResult = {
      success: true,
      msg: `User ${req.params.id} is updated succesfully`,
      user: expectedUpdatedUser
    };

    mockedUsersService
      .expects('update')
      .withExactArgs(req.params.id, req.body)
      .resolves(expectedUpdatedUser);

    await usersController.update(req, res, spyNext);

    chai.assert.equal(
      res.status.calledOnce,
      true,
      'asserts status is called 1 time'
    );
    chai.assert.equal(
      res.status.args[0],
      200,
      'asserts status parameter is 200'
    );

    chai.assert.equal(
      spyJson.calledOnce,
      true,
      'asserts json is called 1 time'
    );

    chai.assert.isArray(spyJson.args[0], 'is array');
    chai.assert.isObject(spyJson.args[0][0], 'is an object');
    chai.assert.equal(spyJson.args[0][0].msg, expectedJsonResult.msg, 'msg');
    chai.assert.equal(
      spyJson.args[0][0].success,
      expectedJsonResult.success,
      'statusObject'
    );
    chai.assert.equal(
      spyJson.args[0][0].user.id,
      expectedJsonResult.user.id,
      'idUserObject'
    );
    chai.assert.equal(
      spyJson.args[0][0].user.email,
      expectedJsonResult.user.email,
      'emailUserObject'
    );
    chai.assert.equal(
      spyJson.args[0][0].user.firstName,
      expectedJsonResult.user.firstName,
      'firstNameUserObject'
    );
  });

  it('update user error', async () => {
    req = {
      body: { email: expectedEmail, firstName: expectedFirstName },
      params: { id: 1 }
    };
    const expectedError = new Error('uptade user error');

    mockedUsersService
      .expects('update')
      .withExactArgs(req.params.id, req.body)
      .rejects(expectedError);

    await usersController.update(req, res, spyNext);

    chai.assert.equal(spyNext.calledOnce, true);
    chai.assert.equal(spyNext.args[0][0], expectedError);
  });
});
