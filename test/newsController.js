const chai = require('chai');
const e = require('express');
const sinon = require('sinon');
const newsControllers = require('../controllers/news');
const newsServices = require('../services/news');

let mockedNewsService;

let res, stubStatus, spyJson, spyNext;

describe('test newsControllers', () => {
  const expectedName = 'test';
  const expectedContent = 'test-test-test';
  const expectedImage = 'test.jpg';
  const expectedCategoryId = '1';
  const expectedId = '1';
  const req = {
    params: {
      id: expectedId
    },
    body: {
      name: expectedName,
      content: expectedContent,
      image: expectedImage,
      categoryId: expectedCategoryId
    },
    query: {
      page: 2
    }
  };
  const expectedNews = {
    id: expectedId,
    name: expectedName,
    content: expectedContent,
    image: expectedImage,
    categoryId: expectedCategoryId
  };

  beforeEach(() => {
    mockedNewsService = sinon.mock(newsServices);

    stubStatus = sinon.stub();
    spyJson = sinon.spy();
    stubStatus.returns({ json: spyJson });

    spyNext = sinon.spy();

    res = { status: stubStatus };
  });
  afterEach(() => {
    mockedNewsService.verify();
  });

  it('List all News', async () => {
    const expectedPreviousPage = '1';
    const expectedNextPage = '3';
    const expectedNewsList = {
      data: [expectedNews, expectedNews],
      nextPage: expectedNextPage,
      previousPage: expectedPreviousPage
    };

    const expectedJsonResult = {
      status: 200,
      data: expectedNewsList.data,
      previousPage: expectedNewsList.previousPage,
      nextPage: expectedNewsList.nextPage
    };

    mockedNewsService
      .expects('getAll')
      .withExactArgs(req, req.query.page)
      .returns(expectedNewsList);
    await newsControllers.getAll(req, res, spyNext);

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
    console.log(spyJson.args[0]);
    chai.assert.isArray(spyJson.args[0], 'is an array');
    chai.assert.isObject(spyJson.args[0][0], 'is an object');
    chai.assert.equal(spyJson.args[0][0].status, expectedJsonResult.status);
    chai.assert.isArray(spyJson.args[0][0].data, 'is an array');
    chai.assert.isObject(spyJson.args[0][0].data[0], 'is a object');
    chai.assert.equal(
      spyJson.args[0][0].data[0].name,
      expectedJsonResult.data[0].name
    );
    chai.assert.equal(
      spyJson.args[0][0].previousPage,
      expectedJsonResult.previousPage
    );
    chai.assert.equal(spyJson.args[0][0].nextPage, expectedJsonResult.nextPage);
  });

  it('getAll News Error', async () => {
    const expectedError = new Error('test error');

    mockedNewsService
      .expects('getAll')
      .withExactArgs(req, req.query.page)
      .rejects(expectedError);

    await newsControllers.getAll(req, res, spyNext);

    chai.assert.equal(spyNext.calledOnce, true);
    chai.assert.equal(spyNext.args[0][0], expectedError);
  });

  it('get news by id', async () => {
    const expectedJsonResult = {
      status: 200,
      news: expectedNews
    };

    mockedNewsService
      .expects('getById')
      .withExactArgs(req.params.id)
      .resolves(expectedNews);
    await newsControllers.getById(req, res, spyNext);

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
    chai.assert.isArray(spyJson.args[0], 'is an array');
    chai.assert.isObject(spyJson.args[0][0], 'is an object');
    chai.assert.equal(spyJson.args[0][0].status, expectedJsonResult.status);
    chai.assert.equal(spyJson.args[0][0].news.id, expectedJsonResult.news.id);
    chai.assert.equal(
      spyJson.args[0][0].news.name,
      expectedJsonResult.news.name
    );
  }),
    it('News getById Error', async () => {
      const expectedError = new Error('test error');

      mockedNewsService
        .expects('getById')
        .withExactArgs(req.params.id)
        .rejects(expectedError);

      await newsControllers.getById(req, res, spyNext);

      chai.assert.equal(spyNext.calledOnce, true);
      chai.assert.equal(spyNext.args[0][0], expectedError);
    });

  it('get Comments by NewsId', async () => {
    const expectedComments = [
      {
        id: '1',
        body: 'test',
        userId: '1',
        newsId: '1'
      }
    ];
    const expectedJsonResult = {
      status: 200,
      comments: expectedComments
    };

    mockedNewsService
      .expects('getCommentsByNewsId')
      .withExactArgs(req.params.id)
      .resolves(expectedComments);

    await newsControllers.getCommentsByNewsId(req, res, spyNext);

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
    chai.assert.isArray(spyJson.args[0], 'is an array');
    chai.assert.isObject(spyJson.args[0][0], 'is an object');
    chai.assert.equal(spyJson.args[0][0].status, expectedJsonResult.status);
    chai.assert.isArray(spyJson.args[0][0].comments, 'is an array');
    chai.assert.equal(
      spyJson.args[0][0].comments[0].body,
      expectedJsonResult.comments[0].body
    );
  });

  it('get Comments by NewsId Error', async () => {
    const expectedError = new Error('test error');

    mockedNewsService

      .expects('getCommentsByNewsId')
      .withExactArgs(req.params.id)
      .rejects(expectedError);

    await newsControllers.getCommentsByNewsId(req, res, spyNext);

    chai.assert.equal(spyNext.calledOnce, true);
    chai.assert.equal(spyNext.args[0][0], expectedError);
  });

  it('create News success', async () => {
    const expectedJsonResult = {
      success: true,
      status: 200,
      msg: `news: ${expectedNews.name} has been created`,
      news: expectedNews
    };

    mockedNewsService
      .expects('create')
      .withExactArgs(req.body)
      .resolves(expectedNews);

    await newsControllers.create(req, res, spyNext);

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
    chai.assert.isArray(spyJson.args[0], 'is an array');
    chai.assert.isObject(spyJson.args[0][0], 'is an object');
    chai.assert.equal(spyJson.args[0][0].msg, expectedJsonResult.msg, 'msg');
    chai.assert.equal(spyJson.args[0][0].success, expectedJsonResult.success);
    chai.assert.equal(spyJson.args[0][0].status, expectedJsonResult.status);
    chai.assert.equal(
      spyJson.args[0][0].news.name,
      expectedJsonResult.news.name
    );
    chai.assert.equal(
      spyJson.args[0][0].news.content,
      expectedJsonResult.news.content
    );
  });

  it('create News error', async () => {
    const expectedError = new Error('test error');

    mockedNewsService
      .expects('create')
      .withExactArgs(req.body)
      .rejects(expectedError);

    await newsControllers.create(req, res, spyNext);

    chai.assert.equal(spyNext.calledOnce, true);
    chai.assert.equal(spyNext.args[0][0], expectedError);
  });

  it('Update a News', async () => {
    const expectedJsonResult = {
      success: true,
      status: 200,
      msg: `news: ${expectedNews.name} has been update succefully`,
      news: expectedNews
    };

    mockedNewsService
      .expects('update')
      .withExactArgs(req.body, req.params.id)
      .resolves(expectedNews);

    await newsControllers.update(req, res, spyNext);

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
    chai.assert.isArray(spyJson.args[0], 'is an array');
    chai.assert.isObject(spyJson.args[0][0], 'is an object');
    chai.assert.equal(spyJson.args[0][0].msg, expectedJsonResult.msg, 'msg');
    chai.assert.equal(spyJson.args[0][0].success, expectedJsonResult.success);
    chai.assert.equal(spyJson.args[0][0].status, expectedJsonResult.status);
    chai.assert.equal(spyJson.args[0][0].news.id, expectedJsonResult.news.id);
    chai.assert.equal(
      spyJson.args[0][0].news.name,
      expectedJsonResult.news.name
    );
    chai.assert.equal(
      spyJson.args[0][0].news.content,
      expectedJsonResult.news.content
    );
  });

  it('update Error', async () => {
    const expectedError = new Error('test error');

    mockedNewsService
      .expects('update')
      .withExactArgs(req.body, req.params.id)
      .rejects(expectedError);

    await newsControllers.update(req, res, spyNext);

    chai.assert.equal(spyNext.calledOnce, true);
    chai.assert.equal(spyNext.args[0][0], expectedError);
  });

  it('remove a news', async () => {
    const expectedJsonResult = {
      success: true,
      message: 'the news was delete succesfully!'
    };

    mockedNewsService
      .expects('remove')
      .withExactArgs(req.params.id)
      .resolves(expectedNews);
    await newsControllers.remove(req, res, spyNext);

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

    chai.assert.isArray(spyJson.args[0], 'is an array');
    chai.assert.isObject(spyJson.args[0][0], 'is an object');
    chai.assert.equal(spyJson.args[0][0].status, expectedJsonResult.status);
    chai.assert.equal(spyJson.args[0][0].message, expectedJsonResult.message);
  });

  it('remove News Error', async () => {
    const expectedError = new Error('test error');

    mockedNewsService
      .expects('remove')
      .withExactArgs(req.params.id)
      .rejects(expectedError);

    await newsControllers.remove(req, res, spyNext);

    chai.assert.equal(spyNext.calledOnce, true);
    chai.assert.equal(spyNext.args[0][0], expectedError);
  });
});
