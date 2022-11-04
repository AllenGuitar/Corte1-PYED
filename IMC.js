function calcularIMC() {
    let estatura=document.querySelector("#estat").value;
    console.log("Texto");

    let peso = document.querySelector("#pes").value;
    

    let cal=peso/(estatura*estatura);

    let result = document.querySelector("#result");

   
    result.innerHTML=cal;

}

