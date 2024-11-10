// 1. Imprime por consola el string 'Hello World':
// Manera 1:
const saludo = 'Hello World';
console.log(saludo);

// Manera 2:
console.log('Hello World');


// 2. Declara una variable de las dos formas posibles, e imprime por consola los dos valores:
let sinInicializar;
console.log(sinInicializar); //Se imprime undefined

let inicializada = 'Variable inicializada';
console.log(inicializada);


//3. Cambia ahora el valor de una de las dos variables e imprime por consola:
console.log(sinInicializar = 'Variable recién inicializada ');


//4.Crea dos variable numéricas e imprime el resultado de sumarlas por consola:
let num1= 5;
let num2= 2;
console.log(num1 + num2);


//5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas:
//Manera 1:
let text1 = 'Hola';
let text2 = 'Almu';
console.log('Esta es la primera concatenación:', text1, text2); //Solo es posible concatenar así en console.log

//Manera 2:
console.log(`Esta es la segunda concatenación: ${text1} ${text2}`);

//Manera 3:
console.log('Esta es la tercera concatenación: ' + text1 + ' ' + text2);


//6. Crea una función que imprima por consola el string 'Hello World':
function greeting(){

    console.log('Hello World');
}

greeting();


//7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros:
function multiplication(){

    let firstNumber = Number(prompt('Introduce un número')); //Parseo a Number porque prompt siempre devuelve un String
    let secondNumber = Number(prompt('Introduce otro número')); //Parseo a Number porque prompt siempre devuelve un String
    
    console.log('El resultado de la multiplicación es ' + firstNumber * secondNumber);
}

multiplication();


//8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro:
function powerOfThree(){

    let otherNumber = Number(prompt('Introduce un número para elevarlo al cubo')); //Parseo a Number porque prompt siempre devuelve un String
    let cubeTheNumber = (otherNumber**3);

    console.log(`${otherNumber} elevado al cubo es: ${cubeTheNumber}`);
}

powerOfThree();


//9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro. (base, altura):
function triangleArea(){

    let base = Number(prompt('Dime la base del triángulo')); //Parseo a Number porque prompt siempre devuelve un String
    let height = Number(prompt('Dime la altura del triángulo')); //Parseo a Number porque prompt siempre devuelve un String
    let area = (base * height) / 2;
    
    console.log('El área del triángulo es: ' + area);
}

triangleArea();


//10. Crea una función que imprima por consola un número al azar entre 0 y 10:

/*11. Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. 
/Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que 
el usuario ha fallado seguido del número correcto: */

//12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar:
function evenOddNumber(){

    const randomNumber = Number(prompt('Introduce un número para averiguar si es par o impar')); //Parseo a Number porque prompt siempre devuelve un String

    if(randomNumber % 2 === 0){ //Si divido el número introducido entre 2 y el resultado es 0, el número es par

        console.log(`El número ${randomNumber} es par`);
    
    }else{

        console.log(`El número ${randomNumber} es impar`);
    }
}

evenOddNumber();

//13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac):

//14. Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro:

//15. Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo:

