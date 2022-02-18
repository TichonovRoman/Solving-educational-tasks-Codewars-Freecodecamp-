

<>Calculate BMI (8kyu)</>

function bmi(weight, height) {
    let ibm = weight/(height*height)
    if (ibm <= 18.5) return "Underweight"
    else if (ibm <= 25) return "Normal"
    else if (ibm <= 30) return "Overweight"
    else if (ibm > 30) return "Obese"};


<>8 kyu Thinkful - Logic Drills: Traffic light</>

function updateLight(current) {

    if (current==="green") {return "yellow"}
    else if (current==="yellow") {return "red"}
    else if (current==="red") {return "green"}

}

<>Well of Ideas - Easy Version</>
function well(x) {
    switch (x.filter(i => i === 'good').length) {
        case 0:
            return 'Fail!'
        case 1:
        case 2:
            return 'Publish!'
        default:
            return 'I smell a series!'
    }
}

<>Sentence Smash</>

function smash (words) {

    return words.join(" ")

};


<>Fake Binary</>

function fakeBin(x){
    let a = ''
    for (let i=0; i<= x.length -1; i++) {
        if (x[i] < 5) {a += '0'}
        else if (x[i] >= 5) {a+='1'}

    }
    return a
}

<>Vowel remover</>
function shortcut(string){
    const vowels = /[aeiou]+/g;
    return string.replace(vowels, "");
}
}


function sixToast(num) {
    if (num >= 6) {return num - 6}
    else if (num < 6)  {return 6 - num}
}

<>BASIC: Making Six Toast.</>


function sixToast(num) {
    if (num >= 6) {return num - 6}
    else if (num < 6)  {return 6 - num}
}

<>MakeUpperCase</>

function makeUpperCase(str) {
    return str.toUpperCase()
}

<>Find the Remainder</>

function remainder(a, b){

    return (a > b ? a % b : b % a)

}


<>Counting sheep...</>

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(t => t === true).length
}


<>Reversed sequence</>

const reverseSeq = n => {
    const result = [];

    for(let i = n; i > 0; i -= 1) {
        result.push(i);
    }

    return result;
};


<>A Needle in the Haystack</>

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++){
        if (haystack[i] === 'needle'){
            return `found the needle at position ${i}`;
        }
    }
}

<>Get the Middle Character</>
function getMiddle(s)
{

    if (s.length === 1) {return s}
    else if (s.length % 2 === 0) {return `${s[s.length/2-1]}${s[s.length/2]}`}
    else if (s.length % 2 != 0) {return  s[Math.floor(s.length/2)]}
}


<>Area or Perimeter</>

const areaOrPerimeter = function(l , w) {
    return l===w ? l*w : (l+w)*2
};

<>Эвены и шансы</>

const evensAndOdds = (num) => {
    if (num%2 === 0) return num.toString(2)
    else if (num%2 !== 0) return num.toString(16)
}

<>Is n divisible by x and y?</>
const isDivisible = (n, x, y) => {
    if (n%x === 0 && n%y === 0) return true
    else return false
}
