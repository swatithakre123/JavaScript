// WAP to merge 3 array which stores marks of 3 students for 5 subject use spread operator 
// and for of loops to print all marks


let  arr =[{ Hindi:85 , English:74, Maths: 91,SScience: 86,Science:80}]
let  arr1 =[{ Hindi:82 , English:76, Maths: 81,SScience: 84,Science:70}]
let  arr2 =[{ Hindi:85 , English:74, Maths: 91,SScience: 86,Science:80}]

let c=[...arr,...arr1,...arr2]
console.log(c);
for(let i=0;i<c.length;i++)
{
    console.log(c[i]);
}