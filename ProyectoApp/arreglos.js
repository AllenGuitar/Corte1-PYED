let animales =["Gato","Perro","Leon","Mapache","Zorro","Oso","Panda","Rana","Tigre","Pinguino","Mariposa","Zorrillo","Cocodrilo","Aguila","Bandicot","Elefante","Hipopotamo","Jirafa","Panda Rojo","Salamandra"];

function mostrarAnimales(){
    let cont=document.querySelector('#animalescont');
    for(let i=0; i<animales.length; i++){
        let animal=animales[i];
        let li =document.createElement('li');
        li.textContent=animal;
        cont.appendChild(li);
    }
}

mostrarAnimales();

let animales2=[
    {
        Nombre:"Gato",
        Imagen:"https://static.wikia.nocookie.net/gatopedia/images/3/32/Turco2.jpg/revision/latest?cb=20120405223144&path-prefix=es",
        PesoPromedio:"5 Kg",
        NPatas:4,
        ColorPredominante:"Blanco",
        Alimentacion:"Carnivoro",
        Habitat:"Urbano"
    },

    {
        Nombre:"Conejo",
        Imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ6G_66LvldhRPQtHMZ6Itp4aGsHQGYDG-rQ&usqp=CAU",
        PesoPromedio:"1.5 Kg",
        NPatas:4,
        ColorPredominante:"Gris",
        Alimentacion:"Herviboro",
        Habitat:"Urbano"
    },

    {
        Nombre:"Canario",
        Imagen:"https://www.tiendanimal.es/articulos/wp-content/uploads/2010/05/pig-1200x900.jpg",
        PesoPromedio:"24 g",
        NPatas:2,
        ColorPredominante:"Amarillo",
        Alimentacion:"Granivoro",
        Habitat:"Bosque"
    },
    
    {
        Nombre:"Perro",
        Imagen:"https://www.bunko.pet/__export/1628715632919/sites/debate/img/2021/08/11/cachorro_cocker_spaniel_crop1628715561051.jpeg_1753094345.jpeg",
        PesoPromedio:"15 Kg",
        NPatas:4,
        ColorPredominante:"Cafe",
        Alimentacion:"Carnivoro",
        Habitat:"Urbano"
    },
    
    {
        Nombre:"Leon",
        Imagen:"https://okdiario.com/img/2019/08/10/-por-que-el-leon-es-el-rey-de-la-selva_-1.jpg",
        PesoPromedio:"190 Kg",
        NPatas:4,
        ColorPredominante:"Amarillo",
        Alimentacion:"Carnivoro",
        Habitat:"Sabana"
    },
    
    {
        Nombre:"Zorro",
        Imagen:"https://www.nationalgeographic.com.es/medio/2021/10/27/sussex-inglaterra_90d7c941_2000x1333.jpg",
        PesoPromedio:"14 Kg",
        NPatas:4,
        ColorPredominante:"Naranja",
        Alimentacion:"Omnivoro",
        Habitat:"Bosque"
    },
    
    {
        Nombre:"Oso",
        Imagen:"https://as01.epimg.net/deportes_accion/imagenes/2021/08/02/mas_accion/1627893833_553537_1627894568_noticia_normal_recorte1.jpg",
        PesoPromedio:"600 Kg",
        NPatas:4,
        ColorPredominante:"Cafe",
        Alimentacion:"Piscivoros",
        Habitat:"Bosques"
    },
    
    {
        Nombre:"Rana",
        Imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Cochranella_spinosa.jpg/1200px-Cochranella_spinosa.jpg",
        PesoPromedio:"0.5 g",
        NPatas:4,
        ColorPredominante:"Verde",
        Alimentacion:"Insectivoros",
        Habitat:"Selva"
    },
    
    {
        Nombre:"Pinguino",
        Imagen:"https://t2.ea.ltmcdn.com/es/posts/8/2/2/tipos_de_pinguinos_21228_600_square.jpg",
        PesoPromedio:"43 Kg",
        NPatas:2,
        ColorPredominante:"Negrp",
        Alimentacion:"Piscivoros",
        Habitat:"Antartida"
    },
    
    {
        Nombre:"Mapache",
        Imagen:"https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/YVE6AJERGZHVTBFPMRJ26K2HUQ.png",
        PesoPromedio:"9 Kg",
        NPatas:4,
        ColorPredominante:"Gris",
        Alimentacion:"Uvas",
        Habitat:"Urbano"
    },

];

function buscaranimales(){
    let contenedor=document.querySelector('#animalesbusqueda');
    let txtbusqueda=document.querySelector('#buscador').value;

    

    let acumulador="";
    animales2.forEach(animal=>{
        if(animal.Nombre.toLowerCase().startsWith(txtbusqueda) && txtbusqueda.toLowerCase()!==""){
            // interpolacion de strings xdd
            acumulador=acumulador+`<img src="${animal.Imagen}" width="400"/><h3>${animal.Nombre}</h3>
            
            
            <h2>Peso Promedio: </h2><h3>${animal.PesoPromedio}</h3>
            
            <h2>Numero de Patas: </h2><h3>${animal.NPatas}</h3>
            
            <h2>Color Predominante: </h2><h3>${animal.ColorPredominante}</h3>
            
            <h2>Habitat: </h2><h3>${animal.Habitat}</h3>
            `
        }
    });

    contenedor.innerHTML=acumulador;
}

