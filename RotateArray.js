function rotate(arr,positions){
    positions = positions% arr.length;
    const result=[];
for(let i=arr.length-positions;i<arr.length;i++){
    result.push(arr[i]);
}
for(let i=0;i<arr.length-positions;i++){
    result.push(arr[i])
}
return result;
}

const arr= [1,2,3,4,5,6,7,8,9]
console.log(rotate(arr,4));
