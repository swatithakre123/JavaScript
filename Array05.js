// WAP to pass array of salary of 5 employees into a function and their calculated
// bonus of 10% on it and return a new array with salary + bonus

function calbonus(salary){
    const salarywithbonus= [];
    for(let i=0;i<salary.length;i++){
        let bonus= salary[i]*0.1;
        
        salarywithbonus.push(salary[i]+bonus )
       
    }
    return salarywithbonus ; 
}
 const salary= [40000,45000,50000,45000,40000]
const salarywithbonus =calbonus(salary);

console.log(salarywithbonus);

