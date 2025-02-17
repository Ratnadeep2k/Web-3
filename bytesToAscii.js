function bytesToAscii(byteArray){
    return new TextDecoder().decode(byteArray);
}
const bytes = new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]);
const ascii = bytesToAscii(bytes);
console.log(ascii);