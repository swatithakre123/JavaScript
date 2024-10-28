const { console } = require("inspector");

function bi(arr,search){
    let s=0, e= arr.length-1,flag=0;
   // let n= document.getElementById("Input").nodeValue; 
    for(let i=0;i<arr.length;i++){
        let m=(s+e)/2;
        if(search==arr[m]){
            flag==1;
            break;
        }
        else if(search > arr[m]){
            s=m+1;
        }
        else{
            e=m-1;
        }
    }
    if(flag==1){
        console.log(`No. is found`)
    }
    else{
        console.log(`no is not found`)
    }
}
const arr= [23,43,45,65,67,78];
let search = 67;
console.log(bi(arr,search));