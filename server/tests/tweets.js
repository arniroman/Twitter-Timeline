const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);
describe("/Fetch users", () => {
  it("tests trends Twitter API", done => {
    chai
      .request(app)
      .post("/tweets")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
