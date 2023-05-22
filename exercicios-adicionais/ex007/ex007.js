let nomeNave = prompt('Informe o nome da espaçonave:')

console.log(nomeNave.length)

let novoNome = ''

while(nomeNave !== 'e'){
    for (let i = nomeNave.length - 1; i >= 0; i--) {
    
        novoNome += nomeNave[i]
    }
}

alert(`Nome antigo: ${nomeNave} \nNome atual: ${novoNome}`)