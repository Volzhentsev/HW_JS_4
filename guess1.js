const rl = require('readline').createInterface(process.stdin, process.stdout);

let n = Math.floor(Math.random() * 1000);
console.log('Guess number: ', n);

function makeCounter() {
    let currentCount = 1;
    return function() {
        return currentCount++;
    };
}
  
let counter = makeCounter();

function question() {
    let i = counter();
    console.log('Try number:', i);
    rl.question('Enter number:', (cmd) => {  
        if (cmd == n) {
            console.log('You win!', 'Number of try:', i);
            rl.close();
            return;
        } else if (cmd > n) {
            console.log('Less');
        } else if (cmd < n) {
            console.log('Bigger');
        }
        question();
    })
}

question();

