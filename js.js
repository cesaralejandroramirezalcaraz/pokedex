//consulta de un servicio rest 
const consulta = () => {

    const nombre = document.getElementById('nombre').value.toLowerCase();
    const url = 'https://pokeapi.co/api/v2/pokemon/' + nombre;
    fetch(url).then((res) => {
        if (res.estatus == 404) {
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
        var tipo = data.types[0].type.name;
        var movimiento = data.moves[0].move.name;
        var movimiento1 = data.moves[1].move.name;
        var movimiento2 = data.moves[2].move.name;
        var movimiento3 = data.moves[3].move.name;
        var movimiento4 = data.moves[4].move.name;
        var movimiento5 = data.moves[5].move.name;
        var skiln = data.stats[0].base_stat;
        var skil = data.stats[0].stat.name;
        var skiln1 = data.stats[1].base_stat;
        var skil1 = data.stats[1].stat.name;
        var skiln2 = data.stats[2].base_stat;
        var skil2 = data.stats[2].stat.name;
        var skiln3 = data.stats[3].base_stat;
        var skil3 = data.stats[3].stat.name;
        var skiln4 = data.stats[4].base_stat;
        var skil4 = data.stats[4].stat.name;
        var skiln5 = data.stats[5].base_stat;
        var skil5 = data.stats[5].stat.name;
        var datos = document.getElementById('datos');
        datos.value = (data.name + ':\n tipo:' + tipo + '\n Movimientos:'
            + '\n movimiento: ' + movimiento
            + '\n movimiento: ' + movimiento1
            + '\n movimiento: ' + movimiento2
            + '\n movimiento: ' + movimiento3
            + '\n movimiento: ' + movimiento4
            + '\n movimiento: ' + movimiento5
            + 'graficas'
            + '\n' + skil + ': ' + skiln
            + '\n' + skil1 + ': ' + skiln1
            + '\n' + skil2 + ': ' + skiln2
            + '\n' + skil3 + ': ' + skiln3
            + '\n' + skil4 + ': ' + skiln4
            + '\n' + skil5 + ': ' + skiln5
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
const datos = () => {
    var datos = document.getElementById('datos');
    datos.value = 'nuevo valor';

}
datos();


//img('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png');