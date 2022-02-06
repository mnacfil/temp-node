// Modules
// CommonJS, every file is module by default
// Modules - Encapsulated Code (only share minimum)
// as parameter where the module is located
const {john, peter} = require('./4-names') 
const sayHi = require('./5-utils') 
const data = require('./6-alternative-flavor')
// when you import the module you actually call it
require('./7-mind-grenade')
sayHi('susan')
sayHi(john)
sayHi(peter)
console.log(data);