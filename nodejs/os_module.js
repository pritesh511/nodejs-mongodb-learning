const os = require("os");

console.log(os.hostname());

console.log(os.arch());

console.log(os.version());

console.log(`${os.freemem()} bytes`);
console.log(`${os.freemem() / 1024} kilo bytes`);
console.log(`${os.freemem() / 1024 / 1024} mega bytes`);
console.log(`${os.freemem() / 1024 / 1024 / 1024} giga bytes`);

console.log(`${os.totalmem()} bytes`);
console.log(`${os.totalmem() / 1024} kilo bytes`);
console.log(`${os.totalmem() / 1024 / 1024} mega bytes`);
console.log(`${os.totalmem() / 1024 / 1024 / 1024} giga bytes`);
