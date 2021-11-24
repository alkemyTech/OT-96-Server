const chai = require('chai');
const sinon = require('sinon');
const testimonialsController = require('../controllers/testimonials');
const testimonialsService = require('../services/testimonials');

let mockedTestimonialsService;
let res, stubStatus, spyJson, spyNext, req;

describe('test testimonialsControllers', () => {
  const expectedName = 'testimonial test';
  const expectedContent = 'test testimonial content';
  const expectedImage = 'testimonial-test.jpg';
  const expectedId = 1;
  const req = {
    params: {
      id: expectedId
    },
    body: {
      name: expectedName,
      content: expectedContent,
      image: expectedImage
    },
    query: {
      page: 1
    }
  };
  const expectedTestimonial = {
    id: expectedId,
    name: expectedName,
    content: expectedContent,
    image: expectedImage
  };

  beforeEach(() => {
    mockedTestimonialsService = sinon.mock(testimonialsService);

    stubStatus = sinon.stub();
    spyJson = sinon.spy();
    stubStatus.returns({ json: spyJson });

    spyNext = sinon.spy();

    res = { status: stubStatus };
  });
  afterEach(() => {
    mockedTestimonialsService.verify();
  });

  it('get testimonial by id', async () => {
    const expectedJsonResult = {
      status: 201,
      data: expectedTestimonial
    };

    mockedTestimonialsService
      .expects('getById')
      .withExactArgs(req.params.id)
      .resolves(expectedTestimonial);
    await testimonialsController.getById(req, res, spyNext);

    chai.assert.equal(
      res.status.calledOnce,
      true,
      'asserts status is called 1 time'
    );
    chai.assert.equal(
      res.status.args[0],
      201,
      'asserts status parameter is 201'
    );
    chai.assert.equal(
      spyJson.calledOnce,
      true,
      'asserts json is called 1 time'
    );
    chai.assert.isArray(spyJson.args[0], 'is an array');
    chai.assert.isObject(spyJson.args[0][0], 'is an object');
    chai.assert.isObject(spyJson.args[0][0].data, 'is an object');
    chai.assert.equal(spyJson.args[0][0].data.id, expectedJsonResult.data.id);
    chai.assert.equal(
      spyJson.args[0][0].data.name,
      expectedJsonResult.data.name
    );
  });
  it('Testimonials getById Error', async () => {
    const expectedError = new Error('test error');

    mockedTestimonialsService
      .expects('getById')
      .withExactArgs(req.params.id)
      .rejects(expectedError);

    await testimonialsController.getById(req, res, spyNext);

    chai.assert.equal(spyNext.calledOnce, true);
    chai.assert.equal(spyNext.args[0][0], expectedError);
  });
});
