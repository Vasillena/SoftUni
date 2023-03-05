function objectCopy(){

    let person = {
        name: 'Ivo',
        age: 29,
        isMale: true,
    };

    let personTwo =JSON.parse(JSON.stringify(person));

    person['email'] = 'testmail@test.bg';

    console.log(person);
    console.log(personTwo);

}
objectCopy();