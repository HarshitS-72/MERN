const obj= require('./script2.js');
// sum(2,3);
obj.fn2(2,4);
console.log(obj.name);

const {sum, name} = require('./script2.js');
sum(2,4);
console.log(sum);