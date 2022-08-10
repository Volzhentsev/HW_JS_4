function getPasswordChecker(password) {
    return function pass(meaning) {
        return (password === meaning); 
    }
}

const pw = getPasswordChecker('33333');

console.log(pw('11111'));
console.log(pw('33333'));
console.log(pw('ccccc'));