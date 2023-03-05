function heroes() {
  let health = 100;
  let manaOrStamina = 100;
  const create = {
    fighter: (name) => {
      return (obj = {
        name,
        health,
        stamina: manaOrStamina,
        fight() {
          this.stamina--;
          console.log(`${name} slashes at the foe!`);
        },
      });
    },
    mage: (name) => {
      return (obj = {
        name,
        health,
        mana: manaOrStamina,
        cast(spell) {
          this.mana--;
          console.log(`${name} cast ${spell}`);
        },
      });
    },
  };
  return create;
}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);

    //class Mage {
        //constructor(name, health, mana){
            //this.name = name;
            //this.health = health;
            //this.mana = mana;
        //}
        //cast(spell){
            //this.mana--;
            //console.log(`${this.name} cast ${spell}`);
        //}
    //}
     //class Fighter {
        //constructor(name, health, stamina){
            //this.name = name;
            //this.health = health;
            //this.stamina = stamina;
        //}
        //fight(){
            //this.stamina--;
            //console.log(`${this.name} slashes at the foe!`);
        //}
    //}
    
    //const mage = new Mage('Devos', 100, 100);
    //mage.cast('fireball');
    //mage.cast(lightball')

    //const ragnar = new Fighter('Ragnar, 100, 100);
    //ragnar.fight()
    //ragnar.fight()