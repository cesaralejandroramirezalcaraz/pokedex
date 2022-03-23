//consulta de un servicio rest 
const consulta = () => {

    const nombre = document.getElementById('nombre').value.toLowerCase();
    const url = 'https://pokeapi.co/api/v2/pokemon/'+nombre;
    fetch(url).then((res) => {
        if(res.estatus == 404) {
            alert('nombre de pokemon erroneo');
            
          
        }
             return res.json();
        

        // console.log(res);
       
    }).then((data) => {
        console.log(data);
        let pokeimg = data.sprites.front_default;
        console.log(pokeimg);
        img(pokeimg);
        console.log(data.name)
        var tipo =data.types[0].type.name;
        var movimiento = data.moves[0].move.name;
        var movimiento1 = data.moves[1].move.name;
        var movimiento2 = data.moves[2].move.name;
        var movimiento3 = data.moves[3].move.name;
        var movimiento4 = data.moves[4].move.name;
        var movimiento5 = data.moves[5].move.name;
        var datos= document.getElementById('datos');
        datos.value =(data.name+':\n tipo:'+tipo+'\nEstadisticas:'
        +'\n movimiento: '+movimiento
        +'\n movimiento: '+movimiento1
        +'\n movimiento: '+movimiento2
        +'\n movimiento: '+movimiento3
        +'\n movimiento: '+movimiento4
        +'\n movimiento: '+movimiento5
        
        );
    

    })
}


function prueba() {

    const nombre = document.getElementById('nombre').value;
    console.log('prueba solamente' + nombre);
}

const img = (url) => {
    const pokeball = document.getElementById('pokeball');
    pokeball.src = url;

}
const datos= () => {
   var datos= document.getElementById('datos');
    datos.value ='nuevo valor';

}
datos();


//img('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png');