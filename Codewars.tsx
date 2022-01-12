

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