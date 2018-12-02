var assert = require('assert');
var SUT = require('../index')
describe('Day 1 - tests', function(){
    it('assert \'+1 +1 +1\' increments in 3', function(){
        const sut = new SUT()
        const list = ['+1','+1','+1']
        list.forEach(element => {
            sut.Process(element)
        });
        assert.equal(sut.result(),3); 
    })

    it('assert \'+1 +1 -2\' results in 0', function(){
        const sut = new SUT()
        const list = ['+1','+1','-2']
        list.forEach(element => {
            sut.Process(element)
        });
        assert.equal(sut.result(),0); 
    })

    it('assert \'-1 -2 -3\' results in-6', function(){
        const sut = new SUT()
        const list = ['-1','-2','-3']
        list.forEach(element => {
            sut.Process(element)
        });
        assert.equal(sut.result(),-6); 
    })
})