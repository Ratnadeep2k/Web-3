const crypto = require('crypto');
function generateHashWithPrefixZero(prefix){
    let input=0;
    while(true){
        let inputstr = 'github'+input.toString();
        let hash =crypto.createHash('sha256').update(inputstr).digest('hex');
        if(hash.startsWith(prefix)){
            return {input : inputstr, hash : hash};
        }
        input++;
    }
}
const result = generateHashWithPrefixZero('00000');
console.log(`Input : ${result.input} , Hash : ${result.hash}`);