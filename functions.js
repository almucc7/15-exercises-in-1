//6. Crea una función que imprima por consola el string 'Hello World':
function print(value){

    console.dir(value); //Imprime un valor igual que console.log
}

print('Hello World');


//7. Crea una función que calcule el resultado de la multiplicación de dos números introducidos como parámetros. Invócala e imprimie por consola el resultado usando la función
//del ejercicio 6:
function multi(a, b){

    return a * b;
}

print(multi(7,5)); //Utilizo la función print del ejercicio 6 para imprimir


//8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro. Invócala e imprime por consola el resultado usando la función
//del ejercicio 6:
function cube(num3){
    
    const result = (num3 ** 3);
    return result;
}

print(cube(3));


//9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro. (base, altura).Invócala e imprime por consola el resultado usando la función
//del ejercicio 6:
function rectangleArea(base, height){
    
    const area = (base * height);
    return area;
}

print(rectangleArea(2, 3));



// Área de un rectángulo o triángulo:
function areaRectangleOrTriangle(b, h, isRectangle){ //isRectangle es un boolean que si es false es un triángulo y si es true un rectángulo
   
    if(isRectangle){ //Si es true (por defecto es true)
   
        return  b * h; //Para eliminar el else, porque return corta la ejecución
                        //Si es true, es un rectángulo, multiplica base * altura
    }

    return (b * h) / 2; //Si isRectlangle es false, se ejecuta esto porque es un triángulo, multiplica base * altura /2        
}

//Comprobamos si funciona en ambos casos:
print(areaRectangleOrTriangle(3, 5, false));
print(areaRectangleOrTriangle(3, 5, true));


//Otra manera:
function areaRectangleOrTriangle(b, h, isRectangle){ //isRectangle es un boolean que si es false es un triángulo y si es true un rectángulo
    let areaBase = b * h;
    if(isRectangle){ //Si es true (por defecto es true)
   
        return areaBase;
    }

    return areaBase / 2; //Si isRectlangle es false, se ejecuta esto        
}

//Comprobamos si funciona en ambos casos:
print(areaRectangleOrTriangle(3, 5, false));
print(areaRectangleOrTriangle(3, 5, true));



////////OPERADOR TERNARIO//////////
function areaRectangleOrTriangle(b, h, isRectangle){ //isRectangle es un boolean que si es false es un triángulo y si es true un rectángulo
    
    return isRectangle ? b * h : (b * h) / 2;//Si se cumple la primera condición coge la primera multiplicación y si no, coge la segunda     
}

//Comprobamos si funciona en ambos casos:
print(areaRectangleOrTriangle(3, 5, false));
print(areaRectangleOrTriangle(3, 5, true));



//10. Crea una función que imprima por consola un número al azar entre 0 y 10.Invócala e imprime por consola el resultado usando la función del ejercicio 6.Invócala e imprime
//por consola el resultado usando la función del ejercicio 6. HAY QUE REDONDEAR:
function printRandomNumber(){

    //Math.random() genera un número aleatorio entre 0 y 0.9999
    //Math.trunc() lo redondea hacia abajo
    
    return Math.trunc(Math.random() * 9 + 1); //Multiplica el número aleatorio * 9 para generar un nº aleatorio entre 0 y 9
                                              //y para que el número esté entre 1 y 10 le suma 1, porque si lo multiplicaras * 10
                                              //no cogería nunca el 10   
}

print(printRandomNumber());


// 11. Adivina el número (Ejecútalo en la consola del navegador)
// Crea una función que primero guarde en una variable un número aleatorio del 1 al 10.
// Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola 
//un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.
// Mejora: utiliza una función independiente para el render

function app(){

    const expected = printRandomNumber(); //Llamo a la función que genera un número aleatorio entre 1 y 10
    const userOption = prompt('Dime un número del 1 al 10'); //Ojo que esto es un String

    //HACEMOS LA COMPARACIÓN:
    const isCorrect = expected === Number(userOption); //Convierto el userOption string del prompt a Number, comparo y hago la asignación
    //Evaluamos si el numero aleatorio(expected) es estrictamente igual que el numero que introduce el usuario(userOption).Si es el mismo,
    //en isCorrect se guarda true y si no, se guarda false


    if(isCorrect){ //Si el número aleatorio y el que ha introducido el usuario es el mismo

        print('Has acertado');

    }else{

        print(`No has acertado. El número era ${expected}`);
    }
}



/******CON TERNARIO*****/
function app(){

    const expected = printRandomNumber();
    const userOption = prompt('Dime un número del 1 al 10'); //Ojo que esto es un String

    const isCorrect = expected === Number(userOption); //Convierto el userOption string del prompt a Number, comparo y hago la asignación
    const result = isCorrect ? 'Has acertado' : `No has acertado. El número era ${expected}`;
    //Si has acertado el numero muestro 'Has acertado' y si no lo has acertado, muestro la otra opción (No has acertado, el número es...)

    print(result);
}


// 12. Crea una función que reciba un número como parámetro y devuelva de alguna manera si el número dado es par o impar.
// Invócala e imprime por consola el resultado usando la función del ejercicio 6:
function evaluateNumber(num4){    

    const isEven = num4 % 2 === 0; //Si el número es par guardo en la variable isEven true
    const result = isEven ? 'El número es par' : 'El número es impar'; //Si el número es par (true)muestro el número es par, y si es false, impar
    print(result); //Imprimo si el número es par o impar
   
}

evaluateNumber(5);

// 13. Crea una función que reciba un parámetro de tipo string y devuelva  el string revertido. (ejemplo: 'casa' => 'asac).
// Invócala e imprime por consola el resultado usando la función del ejercicio 6:
function printString(text){ 
    
     //Si se cumple la primera condición coge la primera multiplicación y si no, coge la segunda     
}

//Comprobamos si funciona en ambos casos:
print(printString('Casa'));

// 14. Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.
// Mejora: utiliza una función independiente para el render

// 15. Crea una función que reciba un número por parámetros e y devuelva de alguna manera si el número recibido es un número primo.
//Numero primo: número entero mayor que 1 que solo tiene dos divisores: 1 y él mismo (2,3,5,7,11...)
// Invócala e imprime por consola el resultado usando la función del ejercicio 6:
function checkNumber(num5){

    if (num5 <= 1) {
        return false; // Los números menores o iguales a 1 no son primos
    }

    if (num5 === 2) { //Compruebo si es 2
        return true; // 2 es el único número primo par
    }

    if (num5 % 2 === 0) { //Compruebo si es par y mayor a 2
        return false; // Todos los números pares mayores que 2 no son primos
    }

    //Buscamos divisores de un numero impar a traves de i (los pares ya estan descartados):
    for (let i = 3; i <= num5 / 2; i += 2) { // Empezamos desde 3 y avanzamos de 2 en 2 (i=i+2)
        if (num5 % i === 0) {
            return false; // Si encuentra un divisor exacto, no es primo
        }
    }

    return true; // Si no encuentra divisores, es primo
}

const numero = 7;
const resultado = checkNumber(numero);
print(`¿El número ${numero} es primo? ${resultado ? 'Sí' : 'No'}`);
















/*************************************** EJEMPLOS CLASE ********************************************************/
//Declaración de una función:

function add(a,b){

    //Parámetros: a y b

    console.log(a+b) // Efecto
    return a+b; // Resultado (lo que la función devuelve)
}

add(2,4); //Argumentos: 2 y 4

const w= 12;
const k= 15;
debugger;
add(w,k); //Los argumentos son 12 y 15 (no w y k. A la función le llegan los valores, no las variables)


//Esto es erróneo, porque la variable que se devuelve está declarada fuera y eso no debe hacerse:
const f = 2;
function foo(){

    return f;
}

console.log(foo()); //Devuelve 2


