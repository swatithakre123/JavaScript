let str = "This is JAVA";
let newstr = "";
for(let i=0;i<str.length;i++){
    let letter = str.charCodeAt(i);
    if(letter >=65 && letter <=90)
    {
        newstr += String.fromCharCode(letter + 32);
    }
    else
    {
         newstr = newstr + str[i];
}    
}
console.log("The string in lowercase is : "+ newstr);


