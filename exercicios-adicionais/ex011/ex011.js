let spaceship = {name, type, maxVelocity}

let initialVelocity = 0

let option = ''

function menu() {
    option = prompt('Selecione uma das opções abaixo: \n\n1 - Acelerar \n2 - Parar')
    if (option === '1') {
        let value = prompt('Informe quanto deseja acelerar:')
    } else if (option === '2' {
        alert(`A nave ${spaceship.name} de tipi ${spaceship.type} estava a ${spaceship.maxVelocity} km/s antes de parar.`)
    })
}