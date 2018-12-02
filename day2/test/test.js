var SUT = require('../index')
var assert = require('assert');

describe('Day 2 - tests', function(){
    it('With Source : abcdef returns 0 (for 2\'s & 3\'s)', function(){
        const t = new SUT()
        const result = t.characterCount('abcde',3)
        const result2 = t.characterCount('abcde',3)
        assert.equal(result,0,); 
        assert.equal(result2,0,); 
    })

    it('With Source : bababc returns 1 (for 2\'s & 3\'s)', function(){
        const t = new SUT()
        const result = t.characterCount('bababc',3)
        const result2 = t.characterCount('bababc',2)
        assert.equal(result,1); 
        assert.equal(result2,1); 
    })

    it('With Source : abbcde returns 1 (for 2\'s) and 0 (for 3\'s)', function(){
        const t = new SUT()
        const result = t.characterCount('abbcde',3)
        const result2 = t.characterCount('abbcde',2)
        assert.equal(result,0); 
        assert.equal(result2,1); 
    })

    it('With Source : abcccd returns 0 (for 2\'s) and 1 (for 3\'s)', function(){
        const t = new SUT()
        const testInput = 'abcccd'
        const result = t.characterCount(testInput,3)
        const result2 = t.characterCount(testInput,2)
        assert.equal(result,1); 
        assert.equal(result2,0); 
    })

    it('With Source : abcccd returns 1 (for 2\'s) and 0 (for 3\'s)', function(){
        const t = new SUT()
        const testInput = 'aabcdd'
        const result = t.characterCount(testInput,3)
        const result2 = t.characterCount(testInput,2)
        assert.equal(result,0); 
        assert.equal(result2,1); 
    })
    
    it('With Source : abcdee returns 1 (for 2\'s) and 0 (for 3\'s)', function(){
        const t = new SUT()
        const testInput = 'abcdee'
        const result = t.characterCount(testInput,3)
        const result2 = t.characterCount(testInput,2)
        assert.equal(result,0); 
        assert.equal(result2,1); 
    })
    

    it('With Source : ababab returns 1 (for 2\'s) and 0 (for 3\'s)', function(){
        const t = new SUT()
        const testInput = 'ababab'
        const result = t.characterCount(testInput,3)
        const result2 = t.characterCount(testInput,2)
        assert.equal(result,1); 
        assert.equal(result2,0); 
    })
})