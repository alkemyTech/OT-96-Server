const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const server = require('../app');

chai.use(chaiHttp);

describe('Auth Users', () => {
  it.only('debería crear un usuario', async () => {
    const res = await chai
      .request(server)
      .post('/auth/register')
      .send({
        firstName: 'Alexis',
        lastName: 'Zacre',
        email: 'alexis10893@hotmail.com',
        password: 'Indec123'
      });

    expect(res).to.have.status(200);
    expect(res.body).to.have.property('user');
    expect(res.body.user.roleId).to.equal(2);

    console.log({ token: res.body.token });
  });
  after(async () => {
    //remover el usuario anterior para dejar la db como estaba.
  });

  it('debería loguear un usuario', (done) => {
    chai
      .request(server)
      .post('/auth/login')
      .send({ email: 'alexis10893@hotmail.com', password: 'Indec123' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('debería devolver los datos del Usuario', (done) => {
    chai
      .request(server)
      .get('/auth/me')
      .set(
        'authorization',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. eyJpZCI6MiwiZmlyc3ROYW1lIjoiQWxleGlzIiwibGFzdE5hbWUiOiJaYWNyZSIsInJvbGVJZCI6MiwiaWF0IjoxNjM3MDE1OTYxLCJleHAiOjE2MzcwNTE5NjF9.qwasqL9VsmjD7IRKhXkCghDTswyZFvxURxNdtLswH7I'
      )
      .end((err, res) => {
        expect(res).to.have.header('authorization');
        expect(res).to.have.status(200);
        console.log(res.body);
        done();
      });
  });
});
