const Maso = [

    {
        Valor: 1,
        Palo: "Oro",
        Figura: "Numerica"
    },

    {
        Valor: 1,
        Palo: "Espada",
        Figura: "Numerica"
    },

    {
        Valor: 1,
        Palo: "Basto",
        Figura: "Numerica"
    },

    {
        Valor: 1,
        Palo: "Copa",
        Figura: "Numerica"
    },

    {
        Valor: 10,
        Palo: "Oro",
        Figura: "Sota"
    },

    {
        Valor: 10,
        Palo: "Espada",
        Figura: "Sota"
    },

    {
        Valor: 10,
        Palo: "Basto",
        Figura: "Sota"
    },

    {
        Valor: 10,
        Palo: "Copa",
        Figura: "Sota"
    },

    {
        Valor: 11,
        Palo: "Oro",
        Figura: "Caballo"
    },

    {
        Valor: 11,
        Palo: "Espada",
        Figura: "Caballo"
    },
    
    {
        Valor: 11,
        Palo: "Basto",
        Figura: "Caballo"
    },
    
    {
        Valor: 11,
        Palo: "Copa",
        Figura: "Caballo"
    },
    
    {
        Valor: 12,
        Palo: "Oro",
        Figura: "Rey"
    },
    
    {
        Valor: 12,
        Palo: "Espada",
        Figura: "Rey"
    },
    
    {
        Valor: 12,
        Palo: "Basto",
        Figura: "Rey"
    },
    
    {
        Valor: 12,
        Palo: "Copa",
        Figura: "Rey"
    },

    {
        Valor: 0,
        Palo: "Comodin",
        Figura: "Comodin"
    },

    {
        Valor: 0,
        Palo: "Comodin",
        Figura: "Comodin"
    }

]

const figuraDeCartas = ["Numerica", "Sota", "Caballo", "Rey", "Comodin"];

class Jugador{

    constructor(nombre, vidas, baraja){
        this.nombre = nombre;
        this.vidas = vidas;
        this.baraja = baraja;
    }

    verCartas(){
        console.log(`\nCartas de ${this.nombre}`)
        this.baraja.forEach(element => {
            console.log(`${element.Valor} de ${element.Palo}`)
        });
    }

    imprimirCartas(){
        let cadena = "";
        this.baraja.forEach(element => {
            cadena += `${element.Valor} de ${element.Palo}\n`
        });
        return cadena;
    }

}

function repartirCartas(jugador1, jugador2, Maso){

    let posiciones = posicionDeCartasSinRepetir(Maso);
    let arrayAux = [];
    let arrayAux2 = [];

    for(let i = 0; i<10; i++){
        arrayAux[i] = Maso[posiciones[i]];
        i+=1;                                   // 'I' se incrementa para dar esa efecto de repartir una carta a la vez para cada uno
        arrayAux2[i] = Maso[posiciones[i]];    
    }

    jugador1.baraja= arrayAux;
    jugador2.baraja= arrayAux2;
}

function posicionDeCartasSinRepetir(maso){
    let barajaAux = [];
    let cont = 1;
    let num ;
    let flag = false;

    while(cont <= 10){
        num = Math.floor(Math.random() * maso.length);       
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

const seleccionDeFigura = (figuraDeCartas) => figuraDeCartas[Math.floor(Math.random() * (figuraDeCartas.length-1))];


function mentiroso(){

    let jugador1 = new Jugador("Santiago", 3);
    let jugador2 = new Jugador("Pedro", 3);
    repartirCartas(jugador1, jugador2, Maso);
    jugador1.verCartas();
    jugador2.verCartas();

    let ronda =seleccionDeFigura(figuraDeCartas);

    alert("En esta ronda se podran tirar solamente figuras de: " + ronda);
    
    while(true){
        alert("Jugador " + jugador1.nombre + " tus cartas son\n" + jugador1.imprimirCartas())
        console.log(jugador1.imprimirCartas())
        break;
    }

    


}

mentiroso();