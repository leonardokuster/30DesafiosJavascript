const name1 = prompt('Informe o nome da pessoa mais velha: ') 
const age1 = prompt('Informe sua idade: ')
const name2 = prompt('Informe o nome da pessoa mais nova:')
const age2 = prompt('Informe sua idade:')

function calculaIdade() {
    return age1 - age2
}

calculaIdade()

alert(`${name1} possui ${age1} anos. \n${name2} possui ${age2} anos. \nPor isso, ${name1} é ${calculaIdade()} ano(s) mais velho(a) que ${name2}.`)