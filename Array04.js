// WAP to pass an array of 10 elements into a function & store only multiple of 5 into a new array 

let arr= [25,46,58,50,45,47,70,73,85,94];
let arr1=[]

for(let i=0;i<arr.length;i++){
     if(arr[i]%5==0)
     {
            arr1.push(arr[i])       }
     }

console.log(arr1);