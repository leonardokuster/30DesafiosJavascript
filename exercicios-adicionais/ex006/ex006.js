let nomeNave = prompt('Informe o nome da espaçonave:')

let caractereSubstituido = prompt(`Qual caractere deseja substituir em ${nomeNave}?`)

let caractereNovo = prompt(`Por qual caractere deseja substituir "${caractereSubstituido}"`)

let novaNave = ''

for (let i = 0; i < nomeNave.length; i++) {
    if (nomeNave[i] == caractereSubstituido) {
        novaNave += caractereNovo
    } else {
        novaNave += nomeNave[i]
    }
}

alert(`O novo nome da espaçonave é ${novaNave}`)
