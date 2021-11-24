const chai = require('chai');
const sinon = require('sinon');
const activitiesController = require('../controllers/activities');
const activitiesService = require('../services/activities');

let mockedActivitiesService;
let res, stubStatus, spyJson, spyNext, req;
const expectedFirstName = 'test';

describe('test Activities Controller', () => {
  beforeEach(() => {
    mockedActivitiesService = sinon.mock(activitiesService);
    stubStatus = sinon.stub();
    spyJson = sinon.spy();
    stubStatus.returns({ json: spyJson });
    spyNext = sinon.spy();

    res = { status: stubStatus };
  });

  afterEach(() => {
    mockedActivitiesService.verify();
  });

  it('create Activity success', async () => {
    req = { body: { name: expectedFirstName } };
    const expectedActivity = [
      {
        id: 1,
        firstName: expectedFirstName
      }
    ];

    const expectedJson = {
      success: true,
      msg: `Activity ${req.body.name} is created succesfully`,
      activity: expectedActivity
    };

    mockedActivitiesService.expects('create').resolves(expectedActivity);

    await activitiesController.create(req, res, spyNext);

    chai.assert.equal(res.status.calledOnce, true, 'res.status');
    chai.assert.equal(res.status.args[0], 200, 'status');
    chai.assert.equal(spyJson.calledOnce, true, 'json called 1 time');
    chai.assert.equal(
      spyJson.args[0][0].success,
      expectedJson.success,
      'property success'
    );
    chai.assert.equal(spyJson.args[0][0].msg, expectedJson.msg, 'property msg');
    chai.assert.isObject(spyJson.args[0][0], true, 'object of activity');

    chai.assert.equal(spyNext.calledOnce, false, 'spyNext.calledOnce');
  });

  it('create Activity error', async () => {
    req = { body: { name: expectedFirstName } };
    const expectedError = new Error('test error');

    mockedActivitiesService
      .expects('create')
      .withExactArgs(req.body)
      .rejects(expectedError);

    await activitiesController.create(req, res, spyNext);

    chai.assert.equal(spyNext.calledOnce, true);
    chai.assert.equal(spyNext.args[0][0], expectedError);
  });

  it('update Activity success', async () => {
    req = {
      body: { name: expectedFirstName },
      params: { id: 1 }
    };
    const expectedUpdateActivity = {
      id: 1,
      name: expectedFirstName
    };

    const expectedJsonResult = {
      success: true,
      msg: `Activity ${req.body.name} was updated succesfully`,
      activity: expectedUpdateActivity
    };

    mockedActivitiesService
      .expects('update')
      .withExactArgs(req.params.id, req.body)
      .resolves(expectedUpdateActivity);

    await activitiesController.update(req, res, spyNext);

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
      spyJson.args[0][0].activity.id,
      expectedJsonResult.activity.id,
      'idActivityObject'
    );
    chai.assert.equal(
      spyJson.args[0][0].activity.name,
      expectedJsonResult.activity.name,
      'NameActivityObject'
    );
  });

  it('update Activity error', async () => {
    req = {
      body: { name: expectedFirstName },
      params: { id: 1 }
    };
    const expectedError = new Error('test error');

    mockedActivitiesService
      .expects('update')
      .withExactArgs(req.params.id, req.body)
      .rejects(expectedError);

    await activitiesController.update(req, res, spyNext);

    chai.assert.equal(spyNext.calledOnce, true);
    chai.assert.equal(spyNext.args[0][0], expectedError);
  });
});
