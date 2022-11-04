function convertirTexto() {
    let texto=document.querySelector("#Texto").value;
    console.log("Texto");

    let contenedor = document.querySelector("#contenedor");
    console.log("contenedor");

    contenedor.innerHTML=mayusculas(texto);
    console.log("Longitud: ",contarLongitud(texto));
    console.log("Tercer Caracter: ",obtenerCaracter(texto,2));
    console.log("Extraccion: ",extraer(texto))
    console.log(reemplazar(texto))
    console.log("Palabras: ",dividir(texto))
}

function mayusculas(txt){

    return txt.toUpperCase();
}

function contarLongitud(text){

    return text.length;
}

function obtenerCaracter(textt,posicion){

     if(textt.charAt(posicion)==""){
        return "No existe"
     }else{
        return textt.charAt(posicion);
     }
}

function extraer(txt){

    return txt.substring(2,5);
}

function reemplazar(txt){

    return txt.replace("walker","yuu");
}

function dividir(txt){

    return txt.split(" ")
}