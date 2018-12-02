class thing{

    characterCount(input,count ){
        var dict = []
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            dict[element] = dict[element]?dict[element]+1: 1
        }

        var filtered = Object.keys(dict).reduce(function (filtered, key) {
            if (dict[key] === count ){
                filtered[key] = dict[key];
            } 
            return filtered;
        }, {});

        
        return  Object.keys(filtered).length > 0?1:0
    }
}

module.exports = thing
const readline = require('readline');
const fs = require('fs');
const t = new thing()
var res2=0
var res3=0

const rl = readline.createInterface({
    input: fs.createReadStream('input'),
    crlfDelay: Infinity
  });
  
  rl.on('line', (line) => {
    res2 = res2 +t.characterCount(line,2)
    res3 = res3 +t.characterCount(line,3)
  },
  rl.on('close',()=>{
    console.log('❄️ Advent of Code 2018 - ')
    console.log('Checksum : ' + res2*res3)
    })
  );