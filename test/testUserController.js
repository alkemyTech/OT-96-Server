const chai = require('chai');
const sinon = require('sinon');
const usersController = require('../controllers/users');
const usersService = require('../services/users');
const securityService = require('../services/security');

let mockedUsersService;
let mockedSecurityService;

let res, stubStatus, spyJson, spyNext;

describe('test usersController', () => {

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

  it('create success', async () => {
    const expectedEmail = 'test@test.com';
    const expectedFirstName = 'test';
    const req = {
      body: { email: expectedEmail, firstName: expectedFirstName }
    };
    const expectedCreatedUser = {
      id: 1,
      email: expectedEmail,
      firstName: expectedFirstName
    };
    const expectedToken = 'token';

    const expectedJsonResult = {
      status: 200,
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
    chai.assert.equal(spyJson.args[0][0].status, expectedJsonResult.status);
    chai.assert.equal(spyJson.args[0][0].token, expectedJsonResult.token);
    chai.assert.equal(spyJson.args[0][0].user.id, expectedJsonResult.user.id);
    chai.assert.equal(
      spyJson.args[0][0].user.email,
      expectedJsonResult.user.email
    );
    chai.assert.equal(
      spyJson.args[0][0].user.firstName,
      expectedJsonResult.user.firstName
    );
  });


  it('create error - service create error', async () => {
    const expectedEmail = 'test@test.com';
    const expectedFirstName = 'test';
    const req = {
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
});



