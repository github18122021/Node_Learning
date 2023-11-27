let os = require('os');

console.log(os.type()); // returns the type of operating system such as windows, Linux, Mac
console.log(os.homedir()); // returns the home directory 
console.log(os.arch()); // returns architecture 
console.log(os.release()); // release date
console.log(os.cpus()); // core cpu info
console.log(os.totalmem()); // total memory in bytes
console.log(os.userInfo()); // user information
console.log(os.networkInterfaces()); // networkInterfaces 