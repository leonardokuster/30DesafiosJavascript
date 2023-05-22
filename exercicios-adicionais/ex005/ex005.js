const name = prompt('Informe o nome da nave:')

let opcao = ''
let qntDobra = 0

opcao = prompt('Deseja entrar em dobra espacial? \n1- Sim \n2- Não')

while (opcao !== '2') {
    qntDobra ++
    opcao = prompt('Deseja realizar a próxima dobra? \n1- Sim \n2- Não')
}

alert(`A nave ${name} realizou ${qntDobra} dobras espaciais.`)