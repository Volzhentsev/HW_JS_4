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

function question(quest) {
    return new Promise((resolve, reject) => {
        rl.question(quest, (data) => {
            resolve(data);
        })
    })
}

async function input() {
    while (true) {
        let i = counter();
        console.log('Try number:', i);
        const data = await question('Enter number:');
        if (data == n) {
            console.log('You win!', 'Number of try:', i);
            rl.close();
            break;
        } else if (data > n) {
            console.log('Less');
        } else if (data < n) {
            console.log('Bigger');
        }
    }
}

input();

