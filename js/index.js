/**
 * 
 * FUNCION ENCARGADA DE RETORNAR EL VALOR DEL DADO
 */

function valorDado(){
    return Math.floor(Math.random() * 6) + 1;   
}

let cartas = ["Recibe doble daño R", "Recibe doble daño V", "Ruleta Rusa R", "Ruleta Rusa V", "Perdes una vida R", "Perdes una vida V",
            "Perdes el siguiente turno R", "Perdes el siguiente turno V", "Perdes la visibilidad de tus cartas R", 
            "Perdes la visibilidad de tus cartas V", "Perdes carta al azar R", "Perdes carta al azar V", "Ganas una vida R", 
            "Ganas una vida V", "Proteccion R", "Proteccion V"];

let baraja1 = [];
let baraja2 = [];

function repartirCartas(cartas, maso){

    let posiciones = posicionDeCartasSinRepetir(cartas);

    for(let i = 0; i<5; i++){
        maso[i] = cartas[posiciones[i]];
    }
}

function posicionDeCartasSinRepetir(cartas){
    let barajaAux = [];
    let cont = 1;
    let num ;
    let flag = false;

    while(cont <= 5){
        num = Math.floor(Math.random() * cartas.length);       
        for(let i = 0; i < cont; i++){ 
            if(barajaAux[i] === num){
                flag = true;
                break;
            } else{
                flag = false;
            }
        }

        if(!(flag == true)){
            barajaAux[cont-1] = num;
            cont++;
        }
    }
    return barajaAux;
}

function escribir(baraja){
    for(carta of baraja){
        document.write(carta + "<br>");
    }
}

repartirCartas(cartas, baraja1);
console.log(baraja1);

repartirCartas(cartas, baraja2);
console.log(baraja2);

document.write("Cartas del jugador N°1: <br> <br>")
escribir(baraja1);
document.write("<br>Dado del jugador N°1: &nbsp;", valorDado() + "<br>");

document.write("<br>Cartas del jugador N°2: <br> <br>")
escribir(baraja2);
document.write("<br>Dado del jugador N°2: &nbsp;", valorDado() + "<br>");