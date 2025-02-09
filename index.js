const crypto = require('crypto');
function generateHashWithPrefixZero(){
    let input=0;
    while(true){
        let inputstr = input.toString();
        let hash =crypto.createHash('sha256').update(inputstr).digest('hex');
        if(hash.startsWith('00000')){
            return {input : inputstr, hash : hash};
        }
        input++;
    }
}
const result = generateHashWithPrefixZero();
console.log(`Input : ${result.input} , Hash : ${result.hash}`);