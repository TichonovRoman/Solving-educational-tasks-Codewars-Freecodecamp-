

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

<>?????????? ?? ??????????</>

const evensAndOdds = (num) => {
    if (num%2 === 0) return num.toString(2)
    else if (num%2 !== 0) return num.toString(16)
}

<>Is n divisible by x and y?</>
const isDivisible = (n, x, y) => {
    if (n%x === 0 && n%y === 0) return true
    else return false
}

<>Friend or Foe?</>
function friend(friends){
    return friends.filter(el => el.length === 4)
}

<>Sum without highest and lowest number</>

function sumArray(array) {
    return !array || array.length == 0 ? 0 : array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((res, n) => res + n,0);
}

<>Convert a Number to a String!</>

function numberToString(num) {
    return num.toString()
}



<>Nth power rules them all!</>

const modifiedSum = (a: Array<number>, n: number)=> {

    return a.reduce((acc, c) => { return acc + c**n }, 0) - a.reduce((acc, c) => {return acc + c}, 0)
}


<>    Four/Seven</>

function fourSeven(n){
    let a = []
    a.push(n)
    return a.map(n => n===4 ? 7 : ((n != 4 && n != 7) ? 0 : 4))
}

<> Sum of Minimums! </>
function sumOfMinimums(arr) {
    let c = arr.map( a => Math.min.apply(null, a))
    return c.reduce((acc, c)=>acc + c, 0)
}

<>USD => CNY</>
function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)}${" Chinese Yuan"}`
}

<>List Filtering</>
function filter_list(l) {
    return l.filter(n => typeof(n) != "string")
}

<>Responsible Drinking</>
function hydrate(s) {
    const numbers = s.replace(/[^0-9]/g,"");
    let sum = 0;

    for (let i = 0; i < numbers.length ; i++) {
        sum = sum + Number(numbers[i])
    }
    if (sum === 1) return `${sum} glass of water`
    else return `${sum} glasses of water`
}

<>Merge two sorted arrays into one</>
function mergeArrays(arr1, arr2) {
    const a = arr1.concat(arr2).sort((a,b) => a-b)


    let arr_1 = new Set(a)
    return  [...arr_1]
}

<>Function 3 - multiplying two numbers</>
const multiply = (a,b) => a*b

<>Opposites Attract</>
function lovefunc(flower1, flower2){
    return (flower1%2==0 && flower2%2!=0) || (flower1%2!=0 && flower2%2==0)
}

<>Case Swapping</>
function swap(str){
    let a= ""
    for (let i = 0; i < str.length; i++) {
        if(str[i] ===  str[i].toUpperCase()) {
            a = a + str[i].toLowerCase()
        } else {
            a = a + str[i].toUpperCase()
        }



    }
    return a
}