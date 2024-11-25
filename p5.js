const input = "Every developer likes to mix kubernetes and javascript";
let short= (sent)=> sent.split(' ').map(word=>{
    if(word.length<4){
        return word;
    }else
    {
        return word[0]+(word.length-2)+word[word.length-1];
    }
}).reduce((sum,num)=>sum+num+' ',' ');
console.log(short(input));

