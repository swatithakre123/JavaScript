const input = [1, -4, 12, 0, -3, 29, -150];

let arr = input.filter(num => num>0).reduce((sum,num)=> sum+num ,0);
console.log(arr);

