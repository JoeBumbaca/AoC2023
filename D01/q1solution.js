const fs = require('fs');
const text = fs.readFileSync('./input.txt', 'utf-8');
let input = text.split('\n');

// console.log(input);


const calibrationSum = (codes) => {
    let sum = 0;
    let nums = ['0','1','2','3','4','5','6','7','8','9'];
    codes.forEach(code => {
        let subSum = '';
        for (start = 0; start != code.length; start += 1){
            let current = code[start]
            if (nums.includes(current)) {
                subSum += current;
                break;
            }
        }

        for (end = code.length - 1; end >= 0; end -= 1){
            let current = code[end]
            if (nums.includes(current)) {
                subSum += current;
                break;
            }
        }
        console.log({sum, subSum});
        sum += parseInt(subSum);
    })
    return sum;
}

// console.log(calibrationSum(['1abc2','pqr3stu8vwx','a1b2c3d4e5f','treb7uchet']))
console.log(calibrationSum(input));