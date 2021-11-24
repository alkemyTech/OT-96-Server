const chai = require('chai');
const sinon = require('sinon');
const membersController = require('../controllers/members');
const membersService = require('../services/members');

let mockedMembersService;
let res, stubStatus, spyJson, spyNext;
const expectedName = 'member',
expectedDescription = 'description';
const req = {
  body: { name: expectedName, description: expectedDescription },
  params: { id: 1 },
  query: { page: 1 }
};

describe('test membersController', () => {

    beforeEach(() => {
        mockedMembersService = sinon.mock(membersService);
        stubStatus = sinon.stub();
        spyJson = sinon.spy();
        stubStatus.returns({ json: spyJson});

        spyNext = sinon.spy();
        res = { status: stubStatus};
    });
    afterEach(() => {
        mockedMembersService.verify();
    });

    it('create member success', async () => {
        const expectedCreatedMember = {
            id: 1,
            name: expectedName,
            description: expectedDescription
        };

        const expectedJsonResult = {
            success: true,
            msg: `member: ${expectedCreatedMember.name} has been created`,
            member: expectedCreatedMember
        };

        mockedMembersService
          .expects('create')
          .withExactArgs(req.body)
          .resolves(expectedCreatedMember)

        await membersController.create(req, res, spyNext);

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
        chai.assert.equal(spyJson.args[0][0].success, expectedJsonResult.success);
        chai.assert.equal(spyJson.args[0][0].member.name, expectedJsonResult.member.name);
        chai.assert.equal(spyJson.args[0][0].member.description, expectedJsonResult.member.description);
    });

    it('create member error', async () => {
        const expectedError = new Error('there was an error in member creation');

        mockedMembersService
          .expects('create')
          .withExactArgs(req.body)
          .rejects(expectedError)

        await membersController.create(req, res, spyNext);

        chai.assert.equal(spyNext.calledOnce, true);
        chai.assert.equal(spyNext.args[0][0], expectedError);
    });

    it('getAll members success', async () => {
      const expectedgetAllMember = [ 
        {
          id: 1,
          name: expectedName,
          description: expectedDescription
        }
      ];

      const expectedJsonResult = {
          status: 200,
          response: expectedgetAllMember
      };

      mockedMembersService
        .expects('getAll')
        .withExactArgs(req)
        .resolves(expectedgetAllMember)

      await membersController.getAll(req, res, spyNext);
        
      chai.assert.equal(res.status.calledOnce, true, 'asserts status is called 1 time');
      chai.assert.equal(res.status.args[0], 200, 'asserts status parameter is 200');
      chai.assert.equal(spyJson.calledOnce, true, 'asserts json is called 1 time');
      chai.assert.isArray(spyJson.args[0], 'is array');
      chai.assert.isObject(spyJson.args[0][0], 'is an object');
      chai.assert.isArray(spyJson.args[0][0].response, 'is array');
      chai.assert.isObject(spyJson.args[0][0].response[0], 'is object');
      chai.assert.equal(spyJson.args[0][0].status, expectedJsonResult.status);
      chai.assert.equal(spyJson.args[0][0].response[0].id,expectedJsonResult.response[0].id);
      chai.assert.equal(spyJson.args[0][0].response[0].name,expectedJsonResult.response[0].name);
      chai.assert.equal(spyJson.args[0][0].response[0].name,expectedJsonResult.response[0].name);
    });

    it('getAll members error', async () => {
      const expectedError = new Error('there was an error in getAll members');

      mockedMembersService
        .expects('getAll')
        .withExactArgs(req)
        .rejects(expectedError)
      
      await membersController.getAll(req, res, spyNext);
      chai.assert.equal(spyNext.calledOnce, true);
      chai.assert.equal(spyNext.args[0][0], expectedError);
    });

    it('update members success', async () => {
      const expectedUpdateMember = {
        id: 1,
        name: expectedName,
        description: expectedDescription
      };

      const expectedJsonResult = {
        success: true,
        msg: `member ${expectedUpdateMember.id} is updated succesfully`,
        member: expectedUpdateMember
      };

      mockedMembersService
        .expects('update')
        .withExactArgs(req.params.id, req.body)
        .resolves(expectedUpdateMember)

      await membersController.update(req, res, spyNext);

      chai.assert.equal(res.status.calledOnce, true, 'asserts status is called 1 time');
      chai.assert.equal(res.status.args[0], 200, 'asserts status parameter is 200');
      chai.assert.equal(spyJson.calledOnce, true, 'asserts json is called 1 time');
      chai.assert.isArray(spyJson.args[0], 'is array');
      chai.assert.isObject(spyJson.args[0][0], 'is an object');
      chai.assert.equal(spyJson.args[0][0].success, expectedJsonResult.success);
      chai.assert.equal(spyJson.args[0][0].msg, expectedJsonResult.msg);
      chai.assert.isObject(spyJson.args[0][0].member, 'is an object');
      chai.assert.equal(spyJson.args[0][0].member.id, expectedJsonResult.member.id);
      chai.assert.equal(spyJson.args[0][0].member.name, expectedJsonResult.member.name);
      chai.assert.equal(spyJson.args[0][0].member.description, expectedJsonResult.member.description);
    });

    it('update members error', async () => {    
      const expectedError = new Error('there was an error in member update');

      mockedMembersService
        .expects('update')
        .withExactArgs(req.params.id, req.body)
        .rejects(expectedError)
  
      await membersController.update(req, res, spyNext);
  
      chai.assert.equal(spyNext.calledOnce, true);
      chai.assert.equal(spyNext.args[0][0], expectedError);
        
    });

    it('remove members success', async () => {
      const expectedResult = {
        msg: 'the member was delete succesfully!',
      };

      mockedMembersService
        .expects('remove')
        .withExactArgs(req.params.id)
        .resolves(expectedResult)

      await membersController.remove(req, res, spyNext);

      chai.assert.equal(res.status.calledOnce, true, 'asserts status is called 1 time');
      chai.assert.equal(res.status.args[0], 200, 'asserts status parameter is 200');
      chai.assert.equal(spyJson.calledOnce, true, 'asserts json is called 1 time');
      chai.assert.isArray(spyJson.args[0], 'is array');
      chai.assert.isObject(spyJson.args[0][0], 'is an object');
      chai.assert.equal(spyJson.args[0][0].msg, expectedResult.msg);
    });

    it('remove members error', async () => {
      const expectedError = new Error('there was an error in member remove');

      mockedMembersService
        .expects('remove')
        .withExactArgs(req.params.id)
        .rejects(expectedError)
  
      await membersController.remove(req, res, spyNext);
  
      chai.assert.equal(spyNext.calledOnce, true);
      chai.assert.equal(spyNext.args[0][0], expectedError);
    });
});



