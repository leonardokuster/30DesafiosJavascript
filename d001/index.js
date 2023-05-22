/*
    Escreva uma função que recebe um número qualquer de números inteiros como argumentos e retorne a média aritmética entre eles
*/

const valores = []


function calcMedia() {
    const qntNumero = parseFloat(prompt('Informe a quantidade de números que vão ser calculados:'))

    valores = parseFloat(prompt('Informe os valores que deseja calcular:'))

    for (let i = 0; i < qntNumero ; i++) {
        soma += valores
        valores.push(soma)
    }
    return valores / qntNumero
}

calcMedia()

