$(document).ready(function(){
    putCircleInARandomSquare();
});

function putCircleInARandomSquare(numToNotPutCircleIn){
    // debugger;
    let allTheSquares = $('.square');
    let numSquares = allTheSquares.length;
    console.log('adding a circle to a random square out of ' + numSquares + ' squares');

    do {
        var chosenSquareNumber = easyRand(0, numSquares - 1);
    } while (chosenSquareNumber === numToNotPutCircleIn);

    console.log('your chosen square is',chosenSquareNumber);
    let chosenSquare = $(allTheSquares[chosenSquareNumber]);
    chosenSquare.append($('<div>').attr('id','target'));
    chosenSquare.on('click',"", chosenSquareNumber ,clickHandler);
    console.log('btw this is currently', this);
}

function clickHandler(e){
    console.log(e.data);
    $(this).empty();
    $(this).unbind('click');
    // putCircleInARandomSquare().bind(this);
    putCircleInARandomSquare(e.data);
}

function easyRand(lowNum, highNum) {
    return Math.floor(Math.random() * (highNum - lowNum + 1) + lowNum);
}