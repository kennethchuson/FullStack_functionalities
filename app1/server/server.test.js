const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./server');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Server', () => {
    it('should be running', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
    it('should return 404 for non-existent routes', (done) => {
        chai.request(app)
            .get('/route-does-not-exist')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });


});
