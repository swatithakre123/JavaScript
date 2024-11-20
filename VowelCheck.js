let str = "This is java";
let newstr = str.toLowerCase();
let vowels=0, consonant= 0  ;

for(let i=0;i<newstr.length;i++){
   let ch = newstr.charAt(i);
    if((ch=='a')||(ch=='i')||(ch=='o')||(ch=='u')||(ch=='e')){
      vowels++;  
    }
    else if(ch >='a'&& ch <='z'){
         consonant++;
    }
}
console.log(" The number of vowels are " +vowels + "    The number of consonants are "+consonant);