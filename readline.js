// forma de requerir el paquete, constante porque eso no cambia! y se usa en la constante el mismo nombre del paquete.
const readlineSync = require('readline-sync'); /*requiere lo que instalamos*/
/* permite ejecutar de forma interactiva una conversacion con el usuario a traves de una consola (guardamos el dato para poder usar)*/
let alturaPersona = readlineSync.question("Indique la altura de la persona: ");
console.log(alturaPersona);
let nombrePersona= readlineSync.question("indique el nombre de la persona");

if(Number(alturaPersona)>178){
    console.log(nombrePersona,"Es mayor que el promedio");
} else{
    console.log(nombrePersona ,"es menor que el promedio");
}
