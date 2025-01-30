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

    function challenge1(width, height) { 
        let rectangleString = ''; 
            // Your code 
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 4; j++){
                    console.log("*");
                }
            }
            return rectangleString; 
        } 
        