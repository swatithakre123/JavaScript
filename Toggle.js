let str = "ThiS iS JaVa";
let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let letter = str.charCodeAt(i);
        if (letter >= 65 && letter <= 90) {
            newStr += String.fromCharCode(letter + 32); 
        } else if (letter >= 97 && letter <= 122) {
            newStr += String.fromCharCode(letter - 32); 
        } else {
            newStr += str[i]; 
        }
    }
    console.log("The Toggled String is : "+newStr);