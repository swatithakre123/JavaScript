// function f1(a,b,callbackFirst,callbackSecond){
//     var result= a+b;
//     console.log(" Addition : "+result);
//     callbackFirst(result);
//     callbackSecond(result);
// }
// f1(-20,11,function(x){
//  x % 2 ==0? console.log("000"):console.log("EVEN");

// },
//  function(x){
//     if(x>0)
//         console.log("positive")
//     else if(x<0)
//         console.log("negative")
//     else
//          console.log("Neutral")
// }
// );
function f1(a){
    console.log("<br>Inside F1|F1 executed...");
    console.log("<br>a : "+a);
    return function f2(b){
        console.log("<br>Inside F2|F2 executed....");
        console.log("<br> a : "+a+" b : "+b);
      return function f3(c){
        console.log("<br>Inside F3|F3 executed...");
        console.log("<br>a : "+a+" b : "+b+" c : "+c);
         return a * b * c;
      }
    }
 }

 let result = f1(2)(3)(4); // Javascript currying
 document.write("<br>Result : "+result);
 /*
 let f2 = f1(1);
 let f3 = f2(2);
 f3(3);*/
