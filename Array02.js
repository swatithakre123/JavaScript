// js pg to read array element and get sum of even no. and sum of odd no. 

let arr= [1,2,3,4,5,6,7,8,9,10];
let sum=0;
let sum2=0;
for(let i=0;i<arr.length;i++)
{
    if(i%2==0)
    {
        sum=sum+arr[i];
    }
    if(i%2!=0)
    {
        sum2= sum2+arr[i];
    }
}
console.log("The total even number is : " + sum);
console.log("The total odd number is : " + sum2);
