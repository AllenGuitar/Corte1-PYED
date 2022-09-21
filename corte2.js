// alert("Eres Genial xdd");

document.write("Alleen, Escuela de artes y letras");

console.log("Martes 13 2022");

let name="Allen Guitar";

document.getElementById("cuadro1").innerHTML=name;

let name2=prompt("Por favor escriba su nombre waaaaa");

var age=Number(prompt("Ingrese su edad xdd:"));

let pip="";
let may="";

if((age%2)==0){
    pip="su edad es par";
}
else{
    pip="su edad es impar";
}

if(age>=22){
    may="usted es mayor de 22 años, o tiene 22 años";
}
else{
    may="usted es menor de 22 años";
}

alert("Hola, señor locutor: "+name2+" su edad en 10 años sera de: "+(age+10)+". Hace 5 años era: "+(age-5)+", el triple de su edad es: "+(age*3)+" Y la mitad de su edad es: "+(age/2)+" "+pip+" y "+may+".");




