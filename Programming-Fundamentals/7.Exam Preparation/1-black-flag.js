function blackFlag(input){
    const days = Number(input.shift());
    const dailyGain = Number(input.shift());
    const target = Number(input.shift());

    let totalPlunder = 0;

    for (let i = 1; i <= days; i++){
    totalPlunder += dailyGain;

        if (i % 3 == 0){
            totalPlunder += dailyGain / 2;
        }
        if (i % 5 == 0){
            totalPlunder = totalPlunder * 0.7; //30% lower 
            // totalPlunder *= 0.7;
        }
       
    }

    if(totalPlunder >= target){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }else{
        const percentageLeft = (totalPlunder / target) * 100;
        console.log(`Collected only ${percentageLeft.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(['5', '40', '100']);