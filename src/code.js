let fs = require('fs');

try {
    let data = fs.readFileSync('./src/paperSize.txt', 'utf8');
    let splitData = data.split('\n');
    let count = 0;
    for(let i = 0; i < splitData.length; i++) {
        let dimensions = splitData[i].split('x');
        let smallest = Math.min(Number(dimensions[0]*dimensions[1]), 
            Number(dimensions[0]*dimensions[2]), Number(dimensions[2]*dimensions[1]));
        let paperSize = 2*(Number(dimensions[0]*dimensions[1]))
             + 2*(Number(dimensions[1]*dimensions[2])) + 2*(Number(dimensions[2]*dimensions[0]));
        count = count + (paperSize+smallest);
    }; console.log(count);
} catch (error) {
    console.log(`Error: ${error.stack}`);
};