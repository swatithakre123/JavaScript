function duplicate(arr){
    let duplicates = [];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]&&  ! duplicates.includes(arr[i])){
              duplicates.push(arr[i]) ;
                }

        }
    }
    return duplicates;
}
function remDup(arr){
    let result= [];
    for(let i=0;i<arr.length;i++){
        if(! result.includes(arr[i]))
        {
            result.push(arr[i])
        }
    }
    return result;
}
const arr = [1,2,3,4,2,7,8,8,3]
console.log(duplicate(arr));
console.log(remDup(arr));
