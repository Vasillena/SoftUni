function sort(array){

    let sortedArray = array.sort((a,b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    console.log(sortedArray.join('\n'));
}
sort(['alpha', 'beta', 'gamma']);