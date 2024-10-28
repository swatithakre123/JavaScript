const { log } = require("console");

function binary(arr,search){
    let s =0;
    let e= arr.length-1;
    let flag=0;

    for(let i=0;i<arr.length;i++){
        let m= (s+e)/2;
        if(search==arr[m])
        {
            flag=1;
            break;
        }
        else if(search > arr[m])
            s=m+1
        else
         e=m-1;
    }
    if (flag==1)
    {
        console.log(`No. is present`);
    }
    else
    console.log(`No. is not present`);
}
 const arr=[23,34,45,56,67,78,89];
 let search= 90;
 console.log(binary(arr,search));