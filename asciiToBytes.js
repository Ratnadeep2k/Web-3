function asciiToBytes(str) {
    return new Uint8Array([...str].map(c=>c.charCodeAt(0)));
}
const ascii = 'Hello World';
const bytes = asciiToBytes(ascii);
console.log(bytes);