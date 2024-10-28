function sorting(arr){
    let n= arr.length;

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(arr[j]>arr[j+1])
            {
                let temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1]= temp;
            }              

        }
    }
    return arr;
}
const arr= [1,3,2,5,7,4,6,9                 ];
console.log(sorting(arr));