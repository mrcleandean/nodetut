// GLOBALS - NO WINDOW !!!!
// __direname - path to current directory
// __filename - file name
// require    - function to use modules (Common JS)
// module     - info about current module (file)
// process    - info about env where the program is being executed
console.log(__dirname + ' ' + __filename);
setInterval(() => {
    console.log('hello')
}, 1000)