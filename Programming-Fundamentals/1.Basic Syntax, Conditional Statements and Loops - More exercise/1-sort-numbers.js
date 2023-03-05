function solve(firstN, secondN, thirdN){
    
   let order = [firstN, secondN, thirdN].sort((a,b)=>b-a);
   //console.log(order[0]);
  // console.log(order[1]);
 //  console.log(order[2]);
 for (i = 0; i <= order.length - 1; i++){
    console.log(order[i]);
 }
 
}

solve(2, 1, 3);
solve(-2, 1, 3);
solve(0, 0, 2);