function createCatalogue(input){

    let catalogue = {}
    for (let line of input) {
        let [product, price] = line.split(" : ");
        price = Number(price);
        catalogue[product] = price;
    }
    let sortedCatalog = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    let firstLetter = '';
    for (let product of sortedCatalog) {
        let currentFirstLetter = product[0];
        if (currentFirstLetter !== firstLetter) {
            firstLetter = currentFirstLetter;
            console.log(firstLetter);
        }
        console.log(`  ${product}: ${catalogue[product]}`);
    }
}
createCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);