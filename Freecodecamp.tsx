<>Iterate with JavaScript Do...While Loops</>

const myArray = [];
let i = 10;
do {myArray.push(i);
    i++}
while (i < 5)



<>Use the parseInt Function</>
function convertToInteger(str) {
    return parseInt(str)
}

convertToInteger("56");


<>Use the parseInt Function with a Radix</>
function convertToInteger(str) {
    return parseInt(str,2)
}

convertToInteger("10011");