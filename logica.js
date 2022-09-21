function validar(){

    let checkboxP= document.getElementById("p").checked;
    let checkboxQ=document.getElementById("q").checked;

    console.log(checkboxP);
    console.log(checkboxQ);

    let resultado="p AND q es: "+(checkboxP&&checkboxQ)+"<br>";

    resultado=resultado+"p OR q es: "+(checkboxP||checkboxQ)+"<br>";

    resultado=resultado+"La negacion de p es: "+(!checkboxP)+"<br>";

    resultado=resultado+"La negacion de q es: "+(!checkboxQ)+"<br>";

    document.getElementById("mensaje").innerHTML=resultado;

}