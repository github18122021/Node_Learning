let fs = require('fs');

fs.readFile('./writtenByNode.txt', 'utf8', ((error, result) => {
    if(error) {
        console.error("Error reading: ", error);
    } 
    console.log("Result: ", result);
}))


fs.writeFile('writtenByNode.txt', "written async by node", 'utf8', ((error) => {
    if (error) {
        console.error(error);
    }
    console.log("written successfully")
}))
