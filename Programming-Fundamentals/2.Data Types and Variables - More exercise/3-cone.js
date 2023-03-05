function solve(radius, height) {
    let volume = 1/3 * Math.PI * radius**2 * height;
    let baseSurface = Math.PI * radius**2;
    let slantHeigth =  Math.sqrt((height**2 + radius**2));
    let lateralSurface = Math.PI * radius * slantHeigth;
    let totalSurface =  baseSurface + lateralSurface;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurface.toFixed(4)}`);
}

solve(3, 5);