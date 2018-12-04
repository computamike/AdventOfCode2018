var SUT = require('../index').ManageMaterial
var Claim = require('../index').Claim
var assert = require('assert')

describe('Day 3 - tests', function(){
    it('2-2', function(){


        var c1 = new Claim('#1 @ 1,3: 4x4')
        var c2 = new Claim('#2 @ 3,1: 4x4')
        var c3 = new Claim('#3 @ 5,5: 2x2')
        
        var area = SUT.AreaOfIntersect(c1,c2)
        console.log(area)
        
        assert.equal(area,4); 

    })
})