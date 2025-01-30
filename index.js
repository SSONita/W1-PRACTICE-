const coursName = "Web Develobment";
console.log("Welcome to " + coursName + "!");
function calculateSum(array) { 
        let sum = 0; 
     
        for (let i = 0; i < array.length; i++) { 
            // Add here the calculation logic 
            sum +=(i+1);
        } 
        return sum; 
    } 


let arr = [1, 2, 3, 4, 5]; 
console.log(calculateSum(arr)); 


//Exercise 1
function challenge1(width, height) { 
    let rectangleString = ''; 
        // Your code 
        for(let i = 0; i < height; i++){
            for(let j = 0; j < width; j++){
                rectangleString += "*";
            }
            rectangleString += "\n";
        }
    return rectangleString; 
} 
var width = 3;
var height = 4;
console.log(challenge1(width, height));
        
//Excercise 2
function reverseArray(array){
    let arrReverse = [];
    for(let i = array.length-1; i >= 0; i--){
        arrReverse.push(array[i]);
    }
    return arrReverse;
}
let arr1 = [14, 15, 16, 20];
console.log(reverseArray(arr1));

//Excercise 3
function avarageGrade(array){
    let avg = 0;
    let total = 0;
    for(let i = 0; i<array.length; i++){
        total += array[i];
    }
    avg = total / array.length;
    return avg;
}
let avgArr =[85, 90, 78, 92];
console.log(avarageGrade(avgArr));

//Excercise 4
function challenge4(str, char){
    let count = 0;
    for(let i =0; i<str.length; i++){
        if(str[i] == char){
            count++;
        }
    }
    return count;
}
let text = "hello world";
let char = 'o';
console.log(challenge4(text, char));

//Excercise 5
function challenge5(text1){
    let count = 0;
    let inWord = false;
    for(let i = 0; i <text1.length; i++){
        if(text1[i] != ' ' && !inWord){
            inWord = true;
            count++;
        }else if(text1[i] == ' '){
            inWord = false
        }
    }
    return count;
}
let text1 = "hello world";
console.log(challenge5(text1));

//Exercise 6
function challenge6(array) {
    if (array.length === 0) {
        console.log("No votes cast");
        return;
    }
    let count = { A: 0, B: 0, C: 0 };
    array.forEach(vote => {
        if (count[vote] !== undefined) {
            count[vote]++;
        }
    });
    let maxVotes = 0;
    for (let key in count) {
        if (count[key] > maxVotes) {
            maxVotes = count[key];
        }
    }
    let winners = [];
    for (let key in count) {
        if (count[key] === maxVotes) {
            winners.push(key);
        }
    }
    if (winners.length === 1) {
        console.log(winners + " is the winner");
    } else {
        console.log(winners.join(" and ") + " are the winners");
    }
}
let votes = ["A", "B", "A", "C", "A"];
let votes1 = ["A", "B", "B", "C", "A"];
let votes2 = [];
challenge6(votes);  
challenge6(votes1); 
challenge6(votes2); 
