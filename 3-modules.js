// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum) (only share what we want to)

const names = require('./4-names');
const sayHi = require('./5-utils');
const items = require('./6-alternative-flavor')
require('./7-mind-grenade')


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
