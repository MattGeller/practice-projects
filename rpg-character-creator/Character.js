function Character(name) {
    var self = this;
    this.name = name;

    this.headSlot = null;
    this.chestSlot = null;
    this.handSlot = null;
    this.legSlot = null;
    this.neckSlot = null;
    this.ringSlot = null;

    this.mainHand = null;
    this.offHand = null;


    this.giveMyselfStats = function () {
        self.strength = rollDice(3,6);
        self.dexterity = rollDice(3,6);
        self.intelligence = rollDice(3,6);
        self.charisma = rollDice(3,6);
        self.constitution = rollDice(3,6);
        self.willpower = rollDice(3,6);
    };

    this.giveMyselfAName = function () {
        //TODO: do this
    };

    this.pickOutSomeGear = function (armory) {
        self.headSlot = armory.headwear_compartment[easyRand(0,armory.headwear_compartment.length-1)];
        self.chestSlot = armory.chestwear_compartment[easyRand(0,armory.chestwear_compartment.length-1)];

        self.mainHand = armory.weapons_compartment[easyRand(0,armory.weapons_compartment.length-1)];
        if (self.mainHand.isTwoHanded){
            self.offHand = self.mainHand;
        } else {
            self.offHand = armory.shields_compartment[easyRand(0,armory.shields_compartment.length-1)]
        }
    }
}