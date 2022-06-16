
// 01
console.log("EJERCICIO 01");
var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};
console.log(student.name);
console.log(student["age"]);
student["name"] = "Steve Jobs"
console.log(student.name)
// 1. Muestra en pantalla el valor de la propiedad name mediante dot notation
// 2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
// 3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"


// 02
// Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
// Objeto de muestra:
console.log("EJERCICIO 02");
var student2 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
for (const property in student2) {
    console.log(property)
}
console.log(Object.keys(student2));
console.log(student2);



// 03.- Verifica si la propiedad name se encuentra dentro del siguiente objeto: 
console.log("EJERCICIO 03");
var student3 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(student3.name);

console.log(Object.getOwnPropertyNames(student3));





// 04.-Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto.
// Imprima también el objeto antes o después de eliminar la propiedad. Objeto para usar:
console.log("EJERCICIO 04");
   var student4 = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    delete student4.rollno;
    console.log(student4);







    // 05.- Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
    console.log("EJERCICIO 05");
   var student5 = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
// La nueva edad debe ser 35.
student5.age=35;
console.log(student5);





// 06.- Escriba un programa para añadir una nueva propiedad al siguiente objeto:
console.log("EJERCICIO 06");
 var student6 = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
    Object.defineProperty(student6,"pet", {
        value: "dog",
        enumerable: true
    })

    // opcion 2
    student6.pet2="cat"



console.log(student6);
    // La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.






    // 07.- Crea un código para llenar un objecto vacio:
    console.log("EJERCICIO 07");

  const objeto = {
      color: "blue",
      tamaño: "small",
      weight: "20kg",
      quantity: 2
  }
console.log(objeto)

// Con las siguiente propiedades:
// color
// tamaño
// peso
// cantidad





// JS Scoping exercises
// What’s the result of executing this code and why.
// function test() {
//    console.log(a);
//    console.log(foo());
   
//    var a = 1;
//    function foo() {
//       return 2;
//    }
// }
// test();
// undefined primero porque la funcion foo todavia no esta declarada, y luego da 2 porque estra regresando ese valor



// What is result?
// var a = 1; 
// function someFunction(number) {
//   function otherFunction(input) {
//     return a;
//   }
  
//   a = 5;
  
//   return otherFunction;
// }

// var firstResult = someFunction(9);
// var result = firstResult(2);
// nada porque no esta escrita correctamente la sintaxis de las funciones, tanto como para llamarlas y a la hora de darle return se lo da a la funcion y no algun parametro.




// What is the result of the following code? Explain your answer.
// var a = 1
// function foo() {
//   var a = 2;

//   function bar() {
//     console.log( a );
//   }

//   return bar;
// }
// var baz = foo();
// baz();

// resultado=2, ya que esta imprimiendo la variable a que se declara con un valor de 2




//  What will you see in the console for the following example?
var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 

// Nada ya que no esta regresando ningun valor con la palabra return







