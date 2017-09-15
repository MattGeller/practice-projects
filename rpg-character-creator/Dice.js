function rollDice(howManyDice, howManySides) {
    var total = 0;
    for (var i = 1; i <= howManyDice; i++) {
        total += easyRand(1, howManySides);
    }
    return total;
}

function easyRand(lowNum, highNum) {
    return Math.floor(Math.random() * (highNum - lowNum + 1) + lowNum);
}
