 const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];
  let arr = input.map((a)=>a.age);
  let young = Math.min(...arr);
  let old =Math.max(...arr);
  let diff= old - young;
 console.log('['+young+','+old+','+diff+']');
 
   
  