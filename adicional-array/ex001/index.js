/*
Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
Modifique os elementos do array de modo a a sequência de números ficar do contrário.
Ou seja, se digitou: 1,2,3
Vai aparecer: 3,2,1
*/

let array = []
let inverse = []

let n1 = prompt('Informe um número: ')
let n2 = prompt('Informe um segundo número: ')
let n3 = prompt('Informe um terceiro número: ')

array.push(n1)
array.push(n2)
array.push(n3)

alert(`O array digitado é ${array.join(', ')}`)

for (let i = array.length - 1; i >= 0 ; i--) {
    inverse.push(array[i])
}

alert(`O array atual é ${inverse.join(', ')}`)