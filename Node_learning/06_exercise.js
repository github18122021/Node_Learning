let fs = require('fs');


// Synchronously  

// fs.writeFileSync("./txt.txt", 'Text written', 'utf8');

// let data;
// try {
//     data = fs.readFileSync("./txt.txt", 'utf-8')
//     console.log('Successfully File read sync!')
//     console.log(`Data: ${data}`)
// } catch(error) {
//     console.error(error);
// }

// Asynchronously

// fs.writeFile("text.txt", "This is written", "utf8", ((error, result) => {
//     if (error) {
//         console.error(error);
//     }
//     console.log("Written successfully");
// }));

fs.readFile("text.txt", 'utf8', ((error, result) => {
    if (error) return error;
    console.log("Result: ", result);
}))