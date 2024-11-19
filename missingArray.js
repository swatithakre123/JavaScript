function missing(arr){
    let arr1 =[];
    for(let i=1;i<arr.length+1;i++){
        if(! arr.includes(i)){
           arr1.push(i);
        }
    }
    return arr1;
}
const arr= [1,2,3,5,6,8,9];
console.log(missing(arr));