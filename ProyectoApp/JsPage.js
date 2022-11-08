let rutas = [
    {
        Nombre: "Coomofu",
        Paradero: "La virgen",
        Destino:"Portal 80",
        Horario:"4 a 22:30",
        
    },
    {
        Nombre: "Transoriente",
        Paradero: "La Virgen",
        Destino:"Calle 13",
        Horario:"4 a 22:30",

    },
    {
        Nombre: "Cootransmosquera",
        Paradero: "La Armonia",
        Destino:"Parque Principal De Mosquera",
        Horario:"4 a 17",
    },
    {
        Nombre: "Teusaca",
        Paradero: "Auditorio",
        Destino:"Calle 13",
        Horario:"4 a 17",
    },
    {
        Nombre: "Cootranscota",
        Paradero: "Parque Principal",
        Destino:"Cota",
        Horario:"9 a 22",
    },
    {
        Nombre: "Cootranrosal",
        Paradero: "Parque Principal",
        Destino:"El rosal",
        Horario:"7 a 20",
    },
    {
        Nombre: "Coomofu municipal",
        Paradero: "La virgen",
        Destino:"Coolsubsidio",
        Horario:"6 a 18",
    },
    {
        Nombre: "Teusaca poblado",
        Paradero: "Parque Principal",
        Destino:"Poblado",
        Horario:"9 a 20",
    }
]

//accordion principal

var acc = document.getElementsByClassName("btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activa");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

let coom=document.getElementById("coom");
let exp=document.getElementById("exp");
let teus=document.getElementById("teus");
let imgcamb=document.getElementById("imgcamb");

coom.onclick=function(){
 imgcamb.src="coomofu.png";
 }

 exp.onclick=function(){
  imgcamb.src="expresodelsol.png";
}

teus.onclick=function(){
  imgcamb.src="teusaca.png";
}


