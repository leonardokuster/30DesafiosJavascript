let spaceshipSpeed = 150

function unspeed(){
    
    while (spaceshipSpeed > 0) {
        alert(`A velocidade atual é de ${spaceshipSpeed} km/s`)
        spaceshipSpeed -= 20
    }
    
    alert('Nave parada. As comportas podem ser abertas.')
}

unspeed() 