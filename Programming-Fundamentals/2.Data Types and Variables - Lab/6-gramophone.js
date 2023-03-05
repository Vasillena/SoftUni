function solve(band, album, song) {
    
    songDuration = (album.length * band.length) * song.length / 2;
    const fullRotation = 2.5;
    plateRotations = songDuration / fullRotation;
    console.log(`The plate was rotated ${Math.ceil(plateRotations)} times.`); 

}

solve('Black Sabbath', 'Paranoid', 'War Pigs');
solve('Rammstein', 'Sehnsucht', 'Engel');