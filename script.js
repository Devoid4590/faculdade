let camp1 = document.querySelector("#c1");
let camp2 = document.querySelector("#c2");
let op= document.querySelector("#op");
let eB= document.querySelector("#b1");
let result= document.querySelector("#answer");

eB.addEventListener("clcik", calcular);
op.addEventListener("change", calcular);
camp1.addEventListener("keyup", calcular);
camp2.addEventListener("keyup", calcular);

function calcular () {

    let value1 = parseInt(camp1.value);
    let value2 = parseInt(camp2.value);
    let operation = op.value;

    if (camp1.value === '' || camp2.value === '') {

        result.innerHTML = "Por favor, insira outro algarismo.";

    } else if (operation === "Somar") {

        result.innerHTML = value1 + value2;

    } else if (operation === "Subtrair") {

        result.innerHTML = value1 - value2;

    } else if (operation === "Multiplicar") {

        result.innerHTML = value1 * value2;

    } else if (operation === "Dividir") {

        result.innerHTML = value1 / value2;

    }


}