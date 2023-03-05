function solve(pounds){
    
    const poundValue = 1.31;
    let  poundsToDollars = pounds * poundValue;
    console.log(poundsToDollars.toFixed(3));
}

solve(80);