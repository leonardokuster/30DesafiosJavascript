let spaceship = prompt('Informe o nome da espaçonave: ')
let inverse = ''

for (let i = spaceship.length - 1; i >= 0; i--){
    if (spaceship[i] !== 'e') {
        inverse += spaceship[i] 
    } else {break}
}

alert(`O nome informado é: ${spaceship} \nSeu inverso é: ${inverse}`)