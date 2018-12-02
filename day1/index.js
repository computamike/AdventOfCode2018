class day1{
    constructor(){
       this.total = 0
    } 
    Process(line){
        const operator = line.substring(0, 1);
        const operand =  parseInt(line.substring(1), 10)

        switch (operator) {
            case '+':
                this.total = this.total + operand
                break;
            case '-':
                this.total = this.total - operand
                break;
            default:
                break;
        }
    }
    result(){return this.total}
}

module.exports = day1

const readline = require('readline');
const fs = require('fs');
const t = new day1()

const rl = readline.createInterface({
    input: fs.createReadStream('input'),
    crlfDelay: Infinity
  });
  
  rl.on('line', (line) => {
    t.Process(line)
  },
  rl.on('close',()=>{
    console.log('❄️ Advent of Code 2018 - ')
    console.log('Resulting Frequency : '+ t.result())
    })
  );