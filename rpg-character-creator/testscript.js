var char1 = new Character("Matt the Conqueror");
char1.giveMyselfStats();
console.log(char1);

//get a chest ready
var starting_chest = new NoobChest();

//have character pick out some gear
char1.pickOutSomeGear(starting_chest);

console.log(char1);