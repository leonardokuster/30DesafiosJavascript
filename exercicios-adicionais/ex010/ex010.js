const hitchefSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

// Nesa lista, a plataforma de engate que a nave está parada é o [indice da nave no array + 1]
// nome da nave, qnt tripulantes, se o processo de engate já foi concluido

// Queremos:
// 1 - Filtrar o nome das naves que tem mais de 9 tripulantes
// 2 - Informar o número da plataforma em que está na primeira nave que ainda está com engate pendente (função findIndex)
// 3 - Destacar o nome de todas as naves colando-as em caixa alta e exibindo
// 4 - Exibir um alerta com todas estas informações