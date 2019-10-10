
require('../server')
const expect = require('chai').expect;
const request = require('request');


//test if an array is taken in
describe('products test', () => {
    it('takes in an array', function (done) {
        request(
            'http://localhost:3002/api/products',
            (error, response, body) => {
                expect(response).to.equal('[]')
                done();
            }
        )
    })
})
