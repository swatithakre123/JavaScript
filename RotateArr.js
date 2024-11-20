var arr = [1,2,3,4,5,6,7,8,9];
var k = 2;  // Rotation Index 
var newarr = [];

for(var i=arr.length-k;i<arr.length;i++){
    newarr.push(arr[i]);
}
for(var j= 0;j<arr.length-k;j++){
    newarr.push(arr[j]);
}
console.log(newarr);
