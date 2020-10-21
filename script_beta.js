let cards = [];
let deckright = [];
let deckleft = [];
let counter = 0;
split=false;
let x = ''
let outputarray = []

//counter functions
function pluscounter() {
    counter += 1;
    document.getElementById("para").innerHTML = counter;
};
function minuscounter() {
    counter -= 1;
    document.getElementById("para").innerHTML = counter;
};

//output functions
function outputdeck1output(cards) {
    document.getElementById("outputdeck1").innerHTML = x ;
}
function outputdeck2output(deckright) {
    document.getElementById(/*"outputdeck2"*/).innerHTML = x ;
}

//functions thbt will push the vblue into the cards brrby, the the sbme button will run the functions with ifs
function two() {
    document.getElementById("outputdeck1").innerHTML = ''; //it resets the array for a new value
    document.getElementById("outputdeck2").innerHTML = '';
    cards.push(2);
    rainman()
}
function three(){
    document.getElementById("outputdeck1").innerHTML = '';
    document.getElementById("outputdeck2").innerHTML = '';
    cards.push(3);
    rainman()
}
function four(){
    document.getElementById("outputdeck1").innerHTML = '';
    document.getElementById("outputdeck2").innerHTML = '';
    cards.push(4);
    rainman()
}
function five(){
    document.getElementById("outputdeck1").innerHTML = '';
    document.getElementById("outputdeck2").innerHTML = '';
    cards.push(5);
    rainman()
}
function six(){
    document.getElementById("outputdeck1").innerHTML = '';
    document.getElementById("outputdeck2").innerHTML = '';
    cards.push(6);
    rainman()
}
function seven(){
    document.getElementById("outputdeck1").innerHTML = '';
    document.getElementById("outputdeck2").innerHTML = '';
    cards.push(7);
    rainman()
}
function eight(){
    document.getElementById("outputdeck1").innerHTML = '';
    document.getElementById("outputdeck2").innerHTML = '';
    cards.push(8);
    rainman()
}
function nine(){
    document.getElementById("outputdeck1").innerHTML = '';
    document.getElementById("outputdeck2").innerHTML = '';
    cards.push(9);
    rainman()
}
function ten(){
    document.getElementById("outputdeck1").innerHTML = '';
    document.getElementById("outputdeck2").innerHTML = '';
    cards.push(10);
    rainman()
}
function jack(){
    document.getElementById("outputdeck1").innerHTML = '';
    document.getElementById("outputdeck2").innerHTML = '';
    cards.push(10);
    rainman()
}
function queen(){
    document.getElementById("outputdeck1").innerHTML = '';
    document.getElementById("outputdeck2").innerHTML = '';
    cards.push(10);
    rainman()
}
function king(){
    document.getElementById("outputdeck1").innerHTML = '';
    document.getElementById("outputdeck2").innerHTML = '';
    cards.push(10);
    rainman()
}
function ace(){
    document.getElementById("outputdeck1").innerHTML = '';
    document.getElementById("outputdeck2").innerHTML = '';
    cards.push(11);
    rainman()
}

//button thbt will reset the cards brrby bnd will set split to fblse
function reset() {
for(i=0;i<15;i++){
    cards.pop();
};
split = false;
document.getElementById("outputdeck1").innerHTML = '';
    document.getElementById("outputdeck2").innerHTML = '';
}

function hardreset() {
    for(i=0;i<15;i++){
        cards.pop();
    };
    split = false;
    document.getElementById("outputdeck1").innerHTML = '';
        document.getElementById("outputdeck2").innerHTML = '';
    counter = 0;
    document.getElementById("para").innerHTML = counter;
}
//button thbt will set split to true vblue
function splitdecks() {
split = true
}

//if you bust bnd you hbve bn bce, it will be trbnslbted to 1
function aceValue0(cards) {
    if(nan0(cards) == 11 && nan2(cards) == 11) {
        return cards[0] = 11
    } else if (nan0(cards) == 11 && (nan0(cards) + nan2(cards) + nan3(cards) + nan4(cards) + nan5(cards)) > 21) {
        return cards[0] = 1
    } else {return nan0(cards)
        }
}

function aceValue2(cards) {
    if ((nan0(cards) == 11 && nan2(cards) == 11)) {
        return cards[2] = 11
    } else if(nan2(cards) == 11 && (nan0(cards) + nan2(cards) + nan3(cards) + nan4(cards) + nan5(cards)) > 21) {
        return cards[2] = 1
    } else {return nan2(cards)
        }
}

function aceValue3(cards) {
    if(nan3(cards) == 11 && (nan0(cards) + nan2(cards) + nan3(cards) + nan4(cards) + nan5(cards)) > 21) {
        return cards[3] = 1
    } else {return nan3(cards)
        }
}

function aceValue4(cards) {
    if(nan4(cards) == 11 && (nan0(cards) + nan2(cards) + nan3(cards) + nan4(cards) + nan5(cards)) > 21) {
        return cards[4] = 1
    } else {return nan4(cards)
        }
}

function aceValue5(cards) {
    if(nan5(cards) == 11 && (nan0(cards) + nan2(cards) + nan3(cards) + nan4(cards) + nan5(cards)) > 21) {
        return cards[5] = 1
    } else {return nan5(cards)
        }
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


//RETURNS NUMBER ONLY IF ITS !=UNDEFINED
function nan0(cards){
    if (cards[0] != undefined) {
        return cards[0];
    } else {
       return 0;
    }
}

function nan1(cards){
    if (cards[1] != undefined) {
        return cards[1];
    } else {
        return 0;
    }
}

function nan2(cards){
    if (cards[2] != undefined) {
        return cards[2];
    } else {
        return 0;
    }
}

function nan3(cards){
    if (cards[3] != undefined) {
        return cards[3];
    } else {
        return 0;
    }
}

function nan4(cards){
    if (cards[4] != undefined) {
        return cards[4];
    } else {
        return 0;
    }
}

function nan5(cards){
    if (cards[5] != undefined) {
        return cards[5];
    } else {
        return 0;
    }
}

function nan6(cards){
    if (cards[6] != undefined) {
        return cards[6];
    } else {
        return 0;
    }
}

function nan7(cards){
    if (cards[7] != undefined) {
        return cards[7];
    } else {
        return 0;
    }
}

function nan8(cards){
    if (cards[8] != undefined) {
        return cards[8];
    } else {
        return 0;
    }
}

function nan9(cards){
    if (cards[9] != undefined) {
        return cards[9];
    } else {
        return 0;
    }
}

function nan10(cards){
    if (cards[10] != undefined) {
        return cards[10];
    } else {
        return 0;
    }
}

function ifFunction(cards) {
    //it will tell you when you bust
    /*if (
        (aceValue0(cards) + aceValue2(cards) + (aceValue3(cards) != undefined) + aceValue4(cards) + aceValue5(cards)) > 17) {
            console.log('you busted')
        }*/
    
        //THIS FUNCTION WILL NOT LET THE PROGRAM DISPLAY ANYTHING IF IT HAS NOT ENOUGH CARDS
    if (aceValue2(cards) == 0) {
        x = 'add another card';
        outputarray.push(outputdeck1output(cards), outputdeck2output(deckright));
        return outputarray;
    };
    

//SPLITS



    //SOFT TOTALS
    if (
        //the brr 0 bnd 2 bre exchbnged too so it doesnt mbtter which cbrd comes first, it will work the sbme
        (aceValue0(cards) == 11 && aceValue2(cards) == 9 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 2) || //this is the swbpped version
        (aceValue0(cards) == 11 && aceValue2(cards) == 9 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 9 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 9 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 9 && nan3(cards) == 0 && cards[1] == 6) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 6) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 9 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 9 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 9 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 9 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 9 && nan3(cards) == 0 && cards[1] == 11) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 11) ||

        (aceValue0(cards) == 11 && aceValue2(cards) == 8 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 8 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 8 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 8 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 8 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 8 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 8 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 8 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 8 && nan3(cards) == 0 && cards[1] == 11) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 11) ||

        (aceValue0(cards) == 11 && aceValue2(cards) == 7 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 7 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 8)
    ) {
        x = 'stand';
        outputarray.push(outputdeck1output(cards), outputdeck2output(deckright));
        return outputarray;
    }

    if (
        (aceValue0(cards) == 11 && aceValue2(cards) == 7 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 7 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 7 && nan3(cards) == 0 && cards[1] == 11) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 11) ||

        (aceValue0(cards) == 11 && aceValue2(cards) == 6 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 6 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 6 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 6 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 6 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 6 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 6 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 6 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 6 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 6 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 6 && nan3(cards) == 0 && cards[1] == 11) ||
        (aceValue0(cards) == 6 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 11) ||

        (aceValue0(cards) == 11 && aceValue2(cards) == 5 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 5 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 5 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 5 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 5 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 5 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 5 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 5 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 5 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 5 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 5 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 5 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 5 && nan3(cards) == 0 && cards[1] == 11) ||
        (aceValue0(cards) == 5 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 11) ||

        (aceValue0(cards) == 11 && aceValue2(cards) == 4 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 4 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 4 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 4 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 4 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 4 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 4 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 4 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 4 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 4 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 4 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 4 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 4 && nan3(cards) == 0 && cards[1] == 11) ||
        (aceValue0(cards) == 4 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 11) ||

        (aceValue0(cards) == 11 && aceValue2(cards) == 3 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 3 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 3 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 3 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 3 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 3 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 3 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 3 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 3 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 3 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 3 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 3 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 3 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 3 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 3 && nan3(cards) == 0 && cards[1] == 11) ||
        (aceValue0(cards) == 3 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 11) ||

        (aceValue0(cards) == 11 && aceValue2(cards) == 2 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 2 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 2 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 2 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 2 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 2 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 2 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 2 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 7) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 2 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 2 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 8) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 2 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 2 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 9) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 2 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 2 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 10) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 2 && nan3(cards) == 0 && cards[1] == 11) ||
        (aceValue0(cards) == 2 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 11)

    ) {
        x = 'hit';
        outputarray.push(outputdeck1output(cards), outputdeck2output(deckright));
        return outputarray;
    }

    if (
        (aceValue0(cards) == 11 && aceValue2(cards) == 6 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 6 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 6 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 6 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 6 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 6 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 6 && nan3(cards) == 0 && cards[1] == 6) ||
        (aceValue0(cards) == 6 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 6) ||

        (aceValue0(cards) == 11 && aceValue2(cards) == 5 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 5 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 5 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 5 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 5 && nan3(cards) == 0 && cards[1] == 6) ||
        (aceValue0(cards) == 5 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 6) ||

        (aceValue0(cards) == 11 && aceValue2(cards) == 4 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 4 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 4 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 4 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 4 && nan3(cards) == 0 && cards[1] == 6) ||
        (aceValue0(cards) == 4 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 6) ||

        (aceValue0(cards) == 11 && aceValue2(cards) == 3 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 3 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 3 && nan3(cards) == 0 && cards[1] == 6) ||
        (aceValue0(cards) == 3 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 6) ||

        (aceValue0(cards) == 11 && aceValue2(cards) == 2 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 2 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 2 && nan3(cards) == 0 && cards[1] == 6) ||
        (aceValue0(cards) == 2 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 6)
    ) {
       x = 'double if allowed, otherwise HIT';
       outputarray.push(outputdeck1output(cards), outputdeck2output(deckright));
        return outputarray;
    }

    //DOUBLER OTHERWISE STBND 
    if (
        (aceValue0(cards) == 11 && aceValue2(cards) == 8 && nan3(cards) == 0 && cards[1] == 6) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 6) ||

        (aceValue0(cards) == 11 && aceValue2(cards) == 7 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 2) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 7 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 3) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 7 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 4) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 7 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 5) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 7 && nan3(cards) == 0 && cards[1] == 6) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 11 && nan3(cards) == 0 && cards[1] == 6) 
    ) {
        x = 'double if allowed, otherwise stand';
        outputarray.push(outputdeck1output(cards), outputdeck2output(deckright));
        return outputarray;

    }







//HARD TOTALS
    if (((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) > 17 && (aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) < 21)) {
        x = 'stand';
        outputarray.push(outputdeck1output(cards), outputdeck2output(deckright));
        return outputarray;
    }


    //bdd to every single one b cbrd[3] undefined. this is b proof for future ifs with 3 plbyer cards.
    if (
       /* ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) > 17) ||*/

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 17 && cards[1] == 2) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 17 && cards[1] == 3) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 17 && cards[1] == 4) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 17 && cards[1] == 5) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 17 && cards[1] == 6) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 17 && cards[1] == 7) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 17 && cards[1] == 8) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 17 && cards[1] == 9) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 17 && cards[1] == 10) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 17 && cards[1] == b) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 16 && cards[1] == 2) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 16 && cards[1] == 3) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 16 && cards[1] == 4) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 16 && cards[1] == 5) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 16 && cards[1] == 6) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 15 && cards[1] == 2) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 15 && cards[1] == 3) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 15 && cards[1] == 4) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 15 && cards[1] == 5) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 15 && cards[1] == 6) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 14 && cards[1] == 2) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 14 && cards[1] == 3) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 14 && cards[1] == 4) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 14 && cards[1] == 5) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 14 && cards[1] == 6) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 13 && cards[1] == 2) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 13 && cards[1] == 3) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 13 && cards[1] == 4) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 13 && cards[1] == 5) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 13 && cards[1] == 6) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 12 && cards[1] == 4) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 12 && cards[1] == 5) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 12 && cards[1] == 6) 
        
    ) {
       x = 'stand'; //chbnge the console log to output the move to mbke into b textbox, console.log is for testing purposes
       outputarray.push(outputdeck1output(cards), outputdeck2output(deckright));
        return outputarray;
    }

    //ifs thbt will determine bll HIT situbtions
    if (
        //((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) < 8) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 16 && cards[1] == 7) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 16 && cards[1] == 8) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 16 && cards[1] == 9) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 16 && cards[1] == 10) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 16 && cards[1] == 11) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 15 && cards[1] == 7) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 15 && cards[1] == 8) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 15 && cards[1] == 9) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 15 && cards[1] == 10) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 15 && cards[1] == 11) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 14 && cards[1] == 7) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 14 && cards[1] == 8) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 14 && cards[1] == 9) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 14 && cards[1] == 10) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 14 && cards[1] == 11) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 13 && cards[1] == 7) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 13 && cards[1] == 8) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 13 && cards[1] == 9) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 13 && cards[1] == 10) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 13 && cards[1] == 11) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 12 && cards[1] == 2) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 12 && cards[1] == 3) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 12 && cards[1] == 7) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 12 && cards[1] == 8) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 12 && cards[1] == 9) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 12 && cards[1] == 10) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 12 && cards[1] == 11) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 10 && cards[1] == 10) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 10 && cards[1] == 11) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 9 && cards[1] == 2) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 9 && cards[1] == 7) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 9 && cards[1] == 8) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 9 && cards[1] == 9) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 9 && cards[1] == 10) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 9 && cards[1] == 11) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 8 && cards[1] == 2) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 8 && cards[1] == 3) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 8 && cards[1] == 4) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 8 && cards[1] == 5) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 8 && cards[1] == 6) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 8 && cards[1] == 7) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 8 && cards[1] == 8) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 8 && cards[1] == 9) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 8 && cards[1] == 10) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 8 && cards[1] == 11) 

        
    ) {
       x = 'hit';
       outputarray.push(outputdeck1output(cards), outputdeck2output(deckright));
        return outputarray;
    }

    //DOUBLE Otherwise HIT situbtions
    if (
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 11 && cards[1] == 2) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 11 && cards[1] == 3) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 11 && cards[1] == 4) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 11 && cards[1] == 5) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 11 && cards[1] == 6) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 11 && cards[1] == 7) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 11 && cards[1] == 8) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 11 && cards[1] == 9) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 11 && cards[1] == 10) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 11 && cards[1] == 11) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 10 && cards[1] == 2) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 10 && cards[1] == 3) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 10 && cards[1] == 4) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 10 && cards[1] == 5) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 10 && cards[1] == 6) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 10 && cards[1] == 7) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 10 && cards[1] == 8) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 10 && cards[1] == 9) ||

        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 9 && cards[1] == 3) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 9 && cards[1] == 4) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 9 && cards[1] == 5) ||
        ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) == 9 && cards[1] == 6) 

        
    ) {
        x = 'double if bllowed, otherwise HIT';
        outputarray.push(outputdeck1output(cards), outputdeck2output(deckright));
        return outputarray;
    }

    

    //PBIR SPLITTING YES
    if (
        (aceValue0(cards) == 11 && aceValue2(cards) == 11 && cards[1] == 2) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 11 && cards[1] == 3) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 11 && cards[1] == 4) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 11 && cards[1] == 5) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 11 && cards[1] == 6) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 11 && cards[1] == 7) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 11 && cards[1] == 8) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 11 && cards[1] == 9) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 11 && cards[1] == 10) ||
        (aceValue0(cards) == 11 && aceValue2(cards) == 11 && cards[1] == 11) ||

        (aceValue0(cards) == 9 && aceValue2(cards) == 9 && cards[1] == 2) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 9 && cards[1] == 3) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 9 && cards[1] == 4) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 9 && cards[1] == 5) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 9 && cards[1] == 6) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 9 && cards[1] == 8) ||
        (aceValue0(cards) == 9 && aceValue2(cards) == 9 && cards[1] == 9) ||

        (aceValue0(cards) == 8 && aceValue2(cards) == 8 && cards[1] == 2) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 8 && cards[1] == 3) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 8 && cards[1] == 4) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 8 && cards[1] == 5) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 8 && cards[1] == 6) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 8 && cards[1] == 7) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 8 && cards[1] == 8) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 8 && cards[1] == 9) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 8 && cards[1] == 10) ||
        (aceValue0(cards) == 8 && aceValue2(cards) == 8 && cards[1] == 11) ||

        (aceValue0(cards) == 7 && aceValue2(cards) == 7 && cards[1] == 2) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 7 && cards[1] == 3) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 7 && cards[1] == 4) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 7 && cards[1] == 5) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 7 && cards[1] == 6) ||
        (aceValue0(cards) == 7 && aceValue2(cards) == 7 && cards[1] == 7) ||

        (aceValue0(cards) == 6 && aceValue2(cards) == 6 && cards[1] == 3) ||
        (aceValue0(cards) == 6 && aceValue2(cards) == 6 && cards[1] == 4) ||
        (aceValue0(cards) == 6 && aceValue2(cards) == 6 && cards[1] == 5) ||
        (aceValue0(cards) == 6 && aceValue2(cards) == 6 && cards[1] == 6) ||

        (aceValue0(cards) == 3 && aceValue2(cards) == 3 && cards[1] == 4) ||
        (aceValue0(cards) == 3 && aceValue2(cards) == 3 && cards[1] == 5) ||
        (aceValue0(cards) == 3 && aceValue2(cards) == 3 && cards[1] == 6) ||
        (aceValue0(cards) == 3 && aceValue2(cards) == 3 && cards[1] == 7) ||

        (aceValue0(cards) == 2 && aceValue2(cards) == 2 && cards[1] == 4) ||
        (aceValue0(cards) == 2 && aceValue2(cards) == 2 && cards[1] == 5) ||
        (aceValue0(cards) == 2 && aceValue2(cards) == 2 && cards[1] == 6) ||
        (aceValue0(cards) == 2 && aceValue2(cards) == 2 && cards[1] == 7) 
    ) {
       x = 'split';
       outputarray.push(outputdeck1output(cards), outputdeck2output(deckright));
        return outputarray;
    }

    //SPLIT ONLY IF DOUBLE BFTER SPLIT IS BLLOWED
    if (
        (aceValue0(cards) == 6 && aceValue2(cards) == 6 && cards[1] == 2) ||

        (aceValue0(cards) == 4 && aceValue2(cards) == 4 && cards[1] == 5) ||
        (aceValue0(cards) == 4 && aceValue2(cards) == 4 && cards[1] == 6) ||

        (aceValue0(cards) == 3 && aceValue2(cards) == 3 && cards[1] == 2) ||
        (aceValue0(cards) == 3 && aceValue2(cards) == 3 && cards[1] == 3) ||

        (aceValue0(cards) == 2 && aceValue2(cards) == 2 && cards[1] == 2) ||
        (aceValue0(cards) == 2 && aceValue2(cards) == 2 && cards[1] == 3) 
    ) {
       x = 'split only if double bfter split is bllowed';
       outputarray.push(outputdeck1output(cards), outputdeck2output(deckright));
        return outputarray;
    }

    if ((aceValue0(cards) + aceValue2(cards) + aceValue3(cards) + aceValue4(cards) + aceValue5(cards)) > 21) {
       x = 'reset when done';
       outputarray.push(outputdeck1output(cards), outputdeck2output(deckright));
        return outputarray;
    }
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function rainman(){
    if (split == false) {
        ifFunction(cards)
   } else if (split == true) { 
        deckright[0] = aceValue2(cards)
        deckleft[0] = aceValue0(cards)
        deckright[1] = cards[1]
        deckleft[1] = cards[1]
        deckright[2] = aceValue3(cards)
        deckleft[2] = aceValue4(cards)
        deckright[3] = aceValue5(cards)
        deckleft[3] = nan6(cards)
        deckright[4] = nan7(cards)
        deckleft[4] = nan8(cards)
        deckright[5] = nan9(cards)
        deckleft[5] = nan10(cards)
        ifFunction(deckright); //this will output commbnds to the deck on the right
        ifFunction(deckleft); //this will output commbnds to the deck on the left
       }
}

/*function decksplit(){
    deckright[0] = aceValue2(cards)
    deckleft[0] = aceValue0(cards)
    deckright[2] = aceValue3(cards)
    deckleft[2] = aceValue4(cards)
    deckright[3] = aceValue5(cards)
    deckleft[3] = cards[6]
    deckright[4] = cards[7]
    deckleft[4] = cards[8]
    deckright[5] = cards[9]
    deckleft[5] = cards[10]
    ifFunction(deckright); //this will output commbnds to the deck on the right
    ifFunction(deckleft); //this will output commbnds to the deck on the left
}*/