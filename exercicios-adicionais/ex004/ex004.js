function lista() {
    return prompt(`Selecione a opção abaixo: \na) Parsec(pc) \nb) Unidade astronômica (AU) \nc) Quilômetros (km)`)
}

function pc() {
    return dist * 0.306601
}

function au() {
    return dist * 63241.1
}

function km() {
    return dist * 9.5 * Math.pow(10,12)
}


const dist = prompt('Informe a distância em anos-luz:')

let opcao = lista()

switch(opcao){
    case 'a':
        pc()
        alert(`A distância em anos-luz é ${dist}. \nEm parsec é ${pc()}`)
        break
    
    case 'b':
        au()
        alert(`A distância em anos-luz é ${dist}. \nEm unidade astronômica é ${au()}`)
        break
    
    case 'c':
        km()
        alert(`A distância em anos-luz é ${dist}. \nEm quilômetros é ${km()}`)
        break
    
    default:
        alert(`A distância em anos-luz é ${dist}. \nUnidade não identificada. \nConversão fora do escopo.`)
}
