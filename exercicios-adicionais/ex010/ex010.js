const hitchefSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let qntMaiorQue9 = hitchefSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})


let engatePendente = hitchefSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let spaceshipName = hitchefSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = 'Espaçonave com mais de 9 tripulantes: ' + qntMaiorQue9.join(', ')
message += '\nLocalização da próxima nave com engate pendente: plataforma nº ' + engatePendente
message += '\nNome de todas as naves: ' + spaceshipName.join(', ') 

alert(message)