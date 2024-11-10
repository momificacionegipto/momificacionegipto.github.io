let menu = true;
function nav () {
    if (menu) {
        document.querySelector("#nav").style.left = "0";
        document.querySelector("#nav__img").src = "row2.png";
        menu = false;
    }
    else {
        document.querySelector("#nav").style.left = "calc(-100% + 50px)";
        document.querySelector("#nav__img").src = "row.png";
        document.querySelector(".header__parts").style.top = "-300px";
        menu = true;
        part = true;
    }
}

let part = true;
function parts () {
    if (part) {
        document.querySelector(".header__parts").style.top = "60px";
        part = false;
    }
    else {
        document.querySelector(".header__parts").style.top = "-150px";
        part = true;
    }
}

function display (select,condition) {
    if (condition) {
        document.querySelector(select).style.display = "none";
    }
    else {
        document.querySelector(select).style.display = "block";
    }
}

function opacity (select) {
    document.querySelector(select).style.opacity = "1";
}

function erase (select) {
    document.querySelector(select).style.opacity = "0";
    setTimeout(display,1000,select,true);
}

function show (select) {
    setTimeout(display,1000,select);
    setTimeout(opacity,1100,select);
}

let order = [];
let correctOrder = false;
let used = "";
let game1Result = 0;
function select (num) {
    if (!used.includes(num)) {
        document.querySelector("#step" + num).style.opacity = ".5";
        document.querySelector("#steps" + num).style.height = "180px";
        order.push(num);
        used = used + num + "";
    }
    if (order.length == 5) {
        document.querySelector("#return").style.background = "url(row3.png)";
        document.querySelector("#return").style.backgroundSize = "75px 75px";
        for (let i = 0; i < 5; i++) {
            if (order[i] == i+1) {
                correctOrder = true;
            }
            else {
                correctOrder = false;
                break;
            }
        }
        if (correctOrder) {
            document.querySelector("#res").innerHTML = "CORRECTO";
            document.querySelector("#res").style.color = "#0f0";
            document.querySelector("#res").style.opacity = "1";
            game1Result = 1;
        }
        else {
            document.querySelector("#res").innerHTML = "INCORRECTO";
            document.querySelector("#res").style.color = "#f00";
            document.querySelector("#res").style.opacity = "1";
            document.querySelector("#return").style.background = "url(row2.png)";
            document.querySelector("#return").style.backgroundSize = "75px 75px";
            for (let i = 1; i <= 5; i++) {
                document.querySelector("#step" + i).style.opacity = "1";
                document.querySelector("#steps" + i).style.height = "200px";
                order.pop();
                used = "";
            }
            game1Result = 0;
        }
    }
    else {
        document.querySelector("#return").style.background = "url(row2.png)";
        document.querySelector("#return").style.backgroundSize = "75px 75px";
    }
}

function _return () {
    if (order.length < 5) {
    try {
    document.querySelector("#step" + order[order.length - 1]).style.opacity = "1";
    document.querySelector("#steps" + order[order.length - 1]).style.height = "200px";
    used = used.substring(0,used.length-1);
    order.pop();
    }catch {}
    }
    else {
        document.querySelector("#res").innerHTML = "";
        document.querySelector("#return").style.background = "url(row2.png)";
        document.querySelector("#return").style.backgroundSize = "75px 75px";
        for (let i = 1; i <= 5; i++) {
            document.querySelector("#step" + i).style.opacity = "1";
            document.querySelector("#steps" + i).style.height = "200px";
            order.pop();
            used = "";
        }
        game1Result = 0;
    }
}

function resetQuestions () {
    document.querySelector("#opc1").style.boxShadow = "0 0 20px 0 #111";
    document.querySelector("#opc2").style.boxShadow = "0 0 20px 0 #111";
    document.querySelector("#opc3").style.boxShadow = "0 0 20px 0 #111";
    findOut = true;
}
function findOutQuestion () {
    if (trueAnswer == 2) {
        document.querySelector("#game2__question").innerHTML = "Sarcófago significa etimológicamente:";
        document.querySelector("#opc1").innerHTML = "Devorador de carne";
        document.querySelector("#opc2").innerHTML = "Casa del viviente";
        document.querySelector("#opc3").innerHTML = "Todas las anteriores";
        trueAnswer = 3;
    }
    else if (trueAnswer == 3) {
        document.querySelector("#game2__question").innerHTML = "¿Por cuántas partes estaba compuesta el alma?";
        document.querySelector("#opc1").innerHTML = "9";
        document.querySelector("#opc2").innerHTML = "5";
        document.querySelector("#opc3").innerHTML = "7";
        trueAnswer = 1;
    }
    else {
        trueAnswer = 0;
        document.querySelector("#opc1").style.opacity = ".5";
        document.querySelector("#opc2").style.opacity = ".5";
        document.querySelector("#opc3").style.opacity = ".5";
        document.querySelector("#game2__points").innerHTML = correctAnswers + "/3 preguntas respondidas correctamente";
        document.querySelector("#game2__points").style.opacity = "1";
    }
}
let trueAnswer = 2;
let correctAnswers = 0;
let findOut = true;
function answer (opc) {
    if (findOut) {
        if (trueAnswer != 0) {
            document.querySelector("#opc1").style.boxShadow = "0 0 35px 0 #f00";
            document.querySelector("#opc2").style.boxShadow = "0 0 35px 0 #f00";
            document.querySelector("#opc3").style.boxShadow = "0 0 35px 0 #f00";
            document.querySelector("#opc" + trueAnswer).style.boxShadow = "0 0 35px 0 #0c0";
            findOut = false;
            if (opc == trueAnswer) {
                correctAnswers++;
            }
            setTimeout(findOutQuestion,3000);
            setTimeout(resetQuestions,3000);
        }
    }
}

function resetGame2 () {
    correctAnswers = 0;
    trueAnswer = 2;
    document.querySelector("#game2__question").innerHTML = "¿Para qué se usa el natrón?";
    document.querySelector("#game2__points").style.opacity = "0";
    document.querySelector("#opc1").style.opacity = "1";
    document.querySelector("#opc2").style.opacity = "1";
    document.querySelector("#opc3").style.opacity = "1";
    document.querySelector("#opc1").innerHTML = "Vendaje del cuerpo";
    document.querySelector("#opc2").innerHTML = "Secado del cuerpo";
    document.querySelector("#opc3").innerHTML = "Ninguna de las anteriores";
}

let selected = null;
let amount = 0;
let game3CorrectAnswers = 0;
let images = [true,true,true];
let reSelect = true;
function selectImage (num) {
    if (reSelect) {
        selected = num;
        document.querySelector("#game3__image" + num).style.height = "180px";
        document.querySelector("#game3__image" + num).style.opacity = ".5";
        reSelect = false;
    }
}
function assign (num) {
    if (images[selected - 1]) {
        if (amount < 3) {
            document.querySelector("#game3__opc" + num).style.opacity = ".5";
            amount++;
            if (selected == num) {
                game3CorrectAnswers++;
            }
            if (amount == 3) {
                document.querySelector("#game3__points").innerHTML = game3CorrectAnswers + "/3 respuestas correctas";
                document.querySelector("#game3__points").style.opacity = "1";
            }
        }
        images[selected - 1] = false;
        reSelect = true;
    }
}

function resetGame3 () {
    selected = null;
    amount = 0;
    game3CorrectAnswers = 0;
    images = [true,true,true];
    reSelect = true;
    document.querySelector("#game3__image1").style.height = "200px";
    document.querySelector("#game3__image1").style.opacity = "1";
    document.querySelector("#game3__image2").style.height = "200px";
    document.querySelector("#game3__image2").style.opacity = "1";
    document.querySelector("#game3__image3").style.height = "200px";
    document.querySelector("#game3__image3").style.opacity = "1";
    document.querySelector("#game3__opc1").style.opacity = "1";
    document.querySelector("#game3__opc2").style.opacity = "1";
    document.querySelector("#game3__opc3").style.opacity = "1";
    document.querySelector("#game3__points").style.opacity = "0";
}

function results () {
    document.querySelector("#results").style.left = "0";
    document.querySelector("#result1").innerHTML = "Actividad 1: " + game1Result;
    document.querySelector("#result2").innerHTML = "Actividad 2: " + correctAnswers + "/3";
    document.querySelector("#result3").innerHTML = "Actividad 3: " + game3CorrectAnswers + "/3";
    document.querySelector("#result4").innerHTML = "Actividad 4: " + game4Result;
    document.querySelector("#result").innerHTML = "RESULTADO FINAL: " + ((correctAnswers + game3CorrectAnswers + game1Result + game4Result) / 8 * 10);
}

function quit () {
    document.querySelector("#results").style.left = "-100%";
}

let position = 1;
let letters = [true,true,true,true,true,true];
let word = "";
let game4Result = 0;
function letter (letter,num) {
    if (position <= 6) {
        if (letters[num]) {
            document.querySelector("#game4__letter" + position).innerHTML = letter;
            document.querySelector("#game4__options" + (num + 1)).style.display = "none";
            letters[num] = false;
            position++;
            word = word + letter;
        }
    }
    if (position == 7) {
        document.querySelector("#game4__points").style.opacity = "1";
        if (word == "NATRÓN") {
            document.querySelector("#game4__points").style.color = "#0f0";
            document.querySelector("#game4__points").innerHTML = "CORRECTO";
            game4Result = 1;
        }
        else {
            document.querySelector("#game4__points").style.color = "#f00";
            document.querySelector("#game4__points").innerHTML = "INCORRECTO";
            game4Result = 0;
        }
    }
}

function resetGame4 () {
    for (let i = 0; i < 6; i++) {
        document.querySelector("#game4__letter" + (i + 1)).innerHTML = ".";
        document.querySelector("#game4__options" + (i + 1)).style.display = "inline-block";
        letters[i] = true;
    }
    position = 1;
    word = "";
    document.querySelector("#game4__points").style.opacity = "0";
    game4Result = 0;
}