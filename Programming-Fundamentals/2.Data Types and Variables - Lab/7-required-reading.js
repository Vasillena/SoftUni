function solve(totalPages, pagesPerHour, days) {
    
    let time = totalPages / pagesPerHour;
    let timePerDay = time / days;
    console.log(timePerDay);
}

solve(212, 20, 2);