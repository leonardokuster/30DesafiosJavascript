const spaceshipName = prompt('Informe o nome da nave: ')
let spaceshipSpeed = 0
let option = ''

function menu() {
    return prompt('Selecione uma das opcões abaixo: \n\n1- Acelerar a nave em 5 km/s \n2- Desacelerar em 5 km/s \n3- Imprimir dados de bordo \n4- Sair do programa')
}

function speed() {
    spaceshipSpeed += 5
    return alert(`A velocidade de ${spaceshipName} é de ${spaceshipSpeed} km/s`)
}

function unspeed() {
    if (spaceshipSpeed >= 5) {
        spaceshipSpeed -= 5
    } else {
        spaceshipSpeed = 0
    }
    return alert(`A velocidade de ${spaceshipName} é de ${spaceshipSpeed} km/s`)
}

function showData() {
    return alert(`A velocidade atual da nave ${spaceshipName} é de ${spaceshipSpeed} km/s`)
}

do {

    option = menu()

    switch(option) {
        case '1':
            speed()
            break

        case '2':
            unspeed()
            break

        case '3':
            showData()
            break

        case '4':
            alert('Encerrando sistema.')
            break

        default:
            alert('Opção inválida.')
    }

} while (option !== '4')



