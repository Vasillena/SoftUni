let map = new Map();

map.set('name', 'Pesho');
map.set('age', 20);
map.set('isMale', true);

console.log(map);
console.log(map.get('name'));

map.set(1, 'One');

console.log(map);

//Set object as key
let obj = {name: 'Gosho'};
map.set(obj,'naGoshoObekta');
console.log(map.get(obj));

for (const kvp of map){
    console.log(kvp[0]);
}