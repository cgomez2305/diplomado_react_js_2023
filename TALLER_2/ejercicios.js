/* 
Si Camila tiene 7 años, y Martina tiene 10 años cuantos años tienen en total las niña?
Si marcos tiene 11, gabriel 12, y lucas 8, cual es el promedio de las edades de los niños

juan recibe las siguientes notas en su clase de matematicas
	Examen 1: 50
	Examen 2: 80
	Examen 3: 30
cual es el promedio de Juan?
Si es necesario una nota de 60 para pasar la materia cuanto es lo minimo que debe sacar juan en su proximo examen para pasar?
*/

let camila=7;
let martina=10;
let operacion=0;

operacion=camila+martina;
console.log(operacion)

//ejercicio 2

let marcos=11;
let gabriel=12;
let lucas=8;
let promedio=0;

promedio=(marcos+gabriel+lucas)/3;
console.log(promedio)

//ejercicio 3

let notas=[50,80,30];
let promedioNotas=0;
let contador=0;
let a=0;
for(i=0;i<notas.length;i++){
    promedioNotas+=notas[i]
    contador++;
}
console.log(promedioNotas/contador)
while(a>=0){
    let numeroAleatorio=Math.floor(Math.random() * 101);
    let resultado=0;
    resultado=((numeroAleatorio*0.25)+promedioNotas*0.75);
    if(resultado===60){
        console.log(numeroAleatorio)
        break
    }
}


