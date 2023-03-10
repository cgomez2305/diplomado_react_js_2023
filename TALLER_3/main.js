



//primer ejercicio

//area del cuadrado1
let cuadradoLado=5
let operacion=0;

operacion=Math.pow(5,2)

//area del cuadrado2
cuadradoLado=12;
operacion=12*12;

//perimetro cuadrado 1

cuadradoLado=5
operacion=4*cuadradoLado
//perimetro cuadrado 2

cuadradoLado=12
operacion=cuadradoLado*4

//area del circulo 1

let radioCirculo=5 
operacion=Math.PI*Math.pow(5,2)
//area del circulo 2

radioCirculo=10
operacion=Math.PI*Math.pow(10,2)
//perimetro del circulo 1
operacion=(5*2)*Math.PI

//perimetro del circulo 2
operacion=(10*2)*Math.PI

//area rectangulo 1
let base1=5;
let altura1=7;

operacion=base1*altura1

//area rectangulo 2
let base2=10;
let altura2=6;

operacion=base2*altura2

//perimetro rectangulo 1
operacion=2*base1+2*altura1

//perimetro rectangulo 2
operacion=2*base2+2*altura2

//triangulo area 1
let trianbase1=5;
let trianaltura1=7;

operacion=(trianaltura1*trianbase1)/2

//triangulo area 2
let trianaltura2=7;
let trianbase2=10;

operacion=(trianaltura2*trianbase2)/2

//triangulo perimetro 1
let hipotenusa=0;
hipotenusa=Math.sqrt(Math.pow(2,(trianbase1/2))+Math.pow(2,trianaltura1))
operacion=(hipotenusa*2)+trianbase1

//triangulo perimetro 2
hipotenusa=Math.sqrt(Math.pow(2,(trianbase2/2))+Math.pow(2,trianaltura2))
operacion=(hipotenusa*2)+trianbase2

//ejercicio 2

let lista=['limon','aguacate','cebolla','vinagre'];

console.log(lista)

lista.push('tomate','aji')

console.log(lista)

lista.sort()

console.log(lista)

for(i=0;i<=lista.length;i++){
    if(lista[i]==='limon'){
        lista.splice(i,1)
    }
}

console.log(lista)

for(i=0;i<=lista.length;i++){
    if(lista[i]==='cebolla'){
        lista[i]='cebollita'
    }
}
console.log(lista)
console.log(lista.length)


//ejercicio 3

let valor_inmueble=230000000;
let gasto_escrituracion=8000000;
let tasa_interes=1.5;
let ahorro=50000000;
let cesantias=70000000;
let cuotas=0;
let total=0;
let total_intereses=0;
let valor_real=0;
let variacion=0;
let interes_final=0;

//parte 1

valor_real=(valor_inmueble+gasto_escrituracion)-(ahorro+cesantias)
cuotas=((valor_real/240)*0.015)+(valor_real/240)
total=cuotas*240
total_intereses=(((0.015*12)*(valor_real/20))*20)

console.log(cuotas)
console.log(total)
console.log(total_intereses)

//parte 2
console.log('-------------------------')
variacion=valor_real/5000000
interes_final=(valor_real*0.015)*24
console.log(variacion)
console.log(interes_final)
