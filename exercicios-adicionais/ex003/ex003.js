const name = prompt('Informe o nome do piloto:')
let speed = 0

speed = prompt('A que velocidade gostaria de acelerar a nave?')
let confirmation = confirm('Por favor, confirme que a velocidade está indo para ' + speed + ' km/s.') 

if (confirmation == true && speed <= 0) {
    alert('Nave está parada. Considere partir e aumentar a velocidade.')
} else if (confirmation == true && speed > 0 && speed < 40) { 
    alert('Você está devagar, podemos aumentar mais.')
} else if (confirmation == true && speed >= 40 && speed < 80) {
    alert('Parece uma boa velocidade para manter.')
} else if (confirmation == true && speed >= 80 && speed < 100) {
    alert('Velocidade alta. Considere diminuir')
} else if (confirmation == true && speed >= 100) {
    alert('Velocidade perigosa. Controle automático forçado.')
} else {alert('Informe uma nova velocidade.')}