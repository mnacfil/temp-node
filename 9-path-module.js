const path = require('path')


console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt')

console.log(filePath);

// return the inside file of the filePath
const base = path.basename(filePath)
console.log(base);

// return abosolute path directory
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);