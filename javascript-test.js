/*
Variables y operaciones

1️⃣ 
- ¿Qué es una variable y para qué sirve? 
R/ Es un espacio reservado en memoria que cuenta con su propio nombre. Allí podemos guardar un dato como por ejemplo un número, un texto e incluso una colección de datos, entre muchos otros. En palabras simples, es como una cajita donde podemos guardar cosas para luego usarlas más adelante.

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
R/ Declarar una variable es cuando la creamos con su nombre únicamente sin asignarle ningún valor, es decir, solo preparamos el espacio en memoria pero no introducimos ningún dato. Por su parte, inicializar una variable es cuando le asignamos un valor a esa cajita o espacio en memoria, ya sea un número, un texto, un booleano, etc.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
R/ La diferencia es que cuando sumo números con "+" obtengo un valor completamente nuevo a partir de la suma de los números, en cambio cuando concateno strings obtengo la unión de ambos strings en un solo string.

- ¿Cuál operador me permite sumar o concatenar?
R/ El operador "+". En el caso de sumar números este operador funciona como en matemáticas, simplemente hace la operación de suma, pero en el caso de concatenar strings, lo que hace es unir los strings. Por ejemplo:
*/

// Suma de números:

let number1 = 2;
let number2 = 5;
console.log(number1 + number2); // 7

// Concatenación de strings:

let string1 = "Hi";
let string2 = "JavaScript";
console.log(string1 + " " + string2); // 'Hi JavaScript'

/*
2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
- Nombre -> string
- Apellido -> string
- Nombre de usuario en Platzi -> string
- Edad -> number
- Correo electrónico -> string
- Mayor de edad -> boolean
- Dinero ahorrado -> number
- Deudas -> object
*/

// 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
let name = "Johan";
let lastName = "Rodriguez";
let platziUserName = "johandavid.jdr";
let age = 19;
let email = "johandavid.jdr@mail.com";
let isAdult = true;
let savedMoney = 5500000;
const debts = [
  { name: "University", value: 2100000 },
  { name: "Internet", value: 101000 },
  { name: "Platzi", value: 899000 },
];

/* 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)
*/

const fullName = name + " " + lastName;
let realMoney = savedMoney - debts[0].value - debts[1].value - debts[2].value;
console.log(fullName); // Johan Rodriguez
console.log(realMoney); // 2400000

/*
Funciones

1️⃣
- ¿Qué es una función?
R/ Una función es una porción lógica de código que realiza alguna tarea específica y podemos reutilizar repetidas veces en otras partes de nuestro código.

- ¿Cuándo me sirve usar una función en mi código?
R/ Cuando hayan partes del código repetidas. En esos casos podemos tomar esa lógica y meterla en una función. De esa manera, podemos ahorrar código. También nos puede servir usar funciones para organizar el código y que se vea limpio y entendible.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
R/ Los párametros son los valores que espera recibir una función, estos los definimos cuando estamos creando la función. En cambio, los argumentos son los valores que le pasamos a la función ya creada cuando la llamamos en alguna parte del código, por ejemplo:

*/

function greet(userName) {
  // userName es el parámetro
  console.log("Hi " + userName);
}

greet("jdrodriguez2707"); // jdrodriguez2707 es el argumento

// 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

/*
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
*/

function showName(name, lastname, nickname = "random") {
  const completeName = name + " " + lastname;
  console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

showName("Juan David", "Castro Gallego", "juandc");

// Podemos poner valores predeterminados a los parámetros en caso de que no se pasen argumentos.

/*
Condicionales

1️⃣
- ¿Qué es un condicional?
R/ Es una estructura que permite que el programa decida qué hacer en base a una condición, esta puede ser verdadera o falsa

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
R/ En JavaScript existe el condicional if, else, else if y el switch. La diferencia es que con el if y el else if podemos evaluar más de una condición y en general jugar un poco más con ellas y a partir de ahí ejecutar cierto código, en cambio con el switch solo podemos evaluar una sola expresión y a partir de ella ejecutar uno de n cantidad de casos posibles que creemos. Por otra parte, con el else no ponemos condición si no que este va enlazado a un if o un else if y en caso de que la condición no se cumpla en estos bloques, entonces se ejecuta lo del bloque del else.

- ¿Puedo combinar funciones y condicionales? 
R/ Sí, es muy común que necesitemos hacerlo. Podemos usar condicionales dentro una función o ejecutar funciones dentro de condicionales.

*/

// 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

/*
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertDuo":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
*/

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertDuo") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

// 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
  return;
}
if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  return;
}
if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  return;
}
if (tipoDeSuscripcion === "ExpertDuo") {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  return;
}

console.warn("Ese tipo de suscripción no existe");


// Bonus
const suscripcionDelUsuario = "ExpertDuo";

const tiposDeSuscripciones = [
  {
    nombre: "Free",
    descripcion: "Solo puedes tomar los cursos gratis",
  },
  {
    nombre: "Basic",
    descripcion: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  },
  {
    nombre: "Expert",
    descripcion: "Puedes tomar casi todos los cursos de Platzi durante un año",
  },
  {
    nombre: "ExpertDuo",
    descripcion:
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
  },
];

const suscripcionEncontrada = tiposDeSuscripciones.find((tipoDeSuscripcion) => suscripcionDelUsuario === tipoDeSuscripcion.nombre);

if (suscripcionEncontrada) {
  console.log(suscripcionEncontrada.descripcion);
  return;
} 

console.log("Al parecer no tienes suscripción");

/*
Ciclos

1️⃣
- ¿Qué es un ciclo?
R/ Es cuando una pieza de código se ejecuta repetidas veces siempre y cuando se cumpla una condición. Cuando esta condición ya no se cumple, se termina el ciclo, de lo contrario podría ser un ciclo infinito.

- ¿Qué tipos de ciclos existen en JavaScript?
R/ En JavaScript tenemos el ciclo for, for...of, for...in, do-while, while y el forEach.

- ¿Qué es un ciclo infinito y por qué es un problema?
R/ Es un ciclo en el cual la condición siempre termina siendo verdadera. Esto es un problema porque el programa se podría bloquear, no solo eso, si no que podría hacer que nuestro navegador colapse.

- ¿Puedo mezclar ciclos y condicionales?
R/ Sí, es común hacerlo. Podemos meter condicionales dentro de ciclos y viceversa.

*/

// 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

/*
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}
*/

let i = 0;

while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

let j = 10;

while (j >= 2) {
  console.log("El valor de j es: " + j);
  j--;
}

// 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

// let isItCorrect = false;

// do {
//   let response = prompt("¿Cuánto es 2 + 2?");
//   isItCorrect = response == 4;
//   alert(isItCorrect ? "Felicidades, la respuesta es correcta." : "Respuesta incorrecta, intenta de nuevo.");
// } while (!isItCorrect);

/*
Listas

1️⃣
- ¿Qué es un array?
R/ Es una colección o estructura de datos que puede contener datos del mismo o diferente tipo. Podemos guardar esa colección de datos en una misma variable. En palabras más simples, es como una cajita donde guardamos más de un dato. Esa cajita se guarda en un solo lugar.

- ¿Qué es un objeto?
R/ Es una estructura de datos que contiene datos en pares propiedad-valor donde cada propiedad está asociada a un valor. También puede contener métodos o acciones, por ejemplo un carro que tiene atributos como color, marca, kilometraje, etc. Y también tiene métodos o acciones como arrancar, frenar, poner música, etc.

- ¿Cuándo es mejor usar objetos o arrays?
R/ Es mejor usar objetos cuando tenemos datos que tienen sus propios atributos y métodos. Los arrays deberíamos usarlos cuando trabajamos datos del mismo tipo y queremos que todos pertenezcan como a una misma categoría por así decirlo y esten organizados.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
R/ Sí, es totalmente válido. De hecho, es muy común combinar ambos elementos.

*/

// 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function imprimirPrimerElemento(array) {
  console.log(array[0]);
}

const frutas = ["🍏", "🍌", "🍓", "🍍"];

imprimirPrimerElemento(frutas); // '🍏'

// 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function imprimirElementos(array) {
  array.forEach((elemento) => console.log(elemento));
}

const verduras = ["🥕", "🥦", "🧅", "🍅"];

imprimirElementos(verduras);

// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

function imprimirObjeto(objeto) {
  for (let [clave, valor] of Object.entries(objeto)) {
    console.log(`${clave}: ${valor}`);
  }
}

// function imprimirArray(obj) {
//   for (let key in obj) {
//       console.log(key + ': '+ obj[key]);
//   };
// }

const persona = {
  nombre: "Johan",
  edad: 19,
  rol: "frontend"
};

imprimirObjeto(persona);

/*
En general me fue muy bien con la prueba. Hubo preguntas que aunque sabía la respuesta no sabía como redactar, pero bueno, al final lo importante es que pude consultar la definición en la web y mi respuesta no estaba tan lejos de parecerse. También se me complicó el último ejercicio porque no sabía como iterar sobre objetos, pero al consultarlo me quedé sorprendido y aprendí algo nuevo. Así que con este test puede repasar y aprender cositas nuevas. Muchas gracias. Te deseo éxitos y un feliz aprendizaje para ti que estás leyendo esto y estás o ya terminaste el test.
*/

