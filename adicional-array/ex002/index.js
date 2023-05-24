let array = []
let inverse = []

let qnt = prompt('Informe quantos números deseja inserir no array: ')

for (let i = 0; i < qnt; i++) {
    let n = prompt('Informe um número: ')
    array.push(n)
}

alert('O array é igual a '+ array.join(', '))

for (i = array.length - 1; i >= 0; i--){
    inverse.push(array[i])
}

alert('O array invertido é igual a: ' + inverse.join(', '))