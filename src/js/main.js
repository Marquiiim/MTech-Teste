const inputQuantidade = document.querySelector('#input_quantidade')
const numerosGeradosResultado = document.querySelector('#numeros_gerados')
const mediaNumerosResultado = document.querySelector('#media_resultado')
const maiorNumeroResultado = document.querySelector('#maior_numero')
const menorNumeroResultado = document.querySelector('#menor_numero')
const numerosParesResultados = document.querySelector('#numeros_pares')
const numerosImparesResultados = document.querySelector('#numeros_impares')

// =================== VARIÁVEL DE CONTROLE ===================
const numeros = []

// =================== FUNÇÕES AUXILIARES ===================
function media(numeros) {
    let soma = 0

    for (let i = 0; i < numeros.length; i++) soma += numeros[i]

    const resultado = soma / numeros.length
    mediaNumerosResultado.textContent = `${resultado}`
}

function maiorNumero(numeros) {
    let maiorNumero = numeros[0]

    for (let i = 1; i < numeros.length; i++) numeros[i] > maiorNumero && (maiorNumero = numeros[i])

    maiorNumeroResultado.textContent = `${maiorNumero}`
}

function menorNumero(numeros) {
    let menorNumero = numeros[0]

    for (let i = 1; i < numeros.length; i++) numeros[i] < menorNumero && (menorNumero = numeros[i])

    menorNumeroResultado.textContent = `${menorNumero}`
}

function numerosParesImpar(numeros) {
    let numerosPares = []
    let numerosImpares = []

    for (let i = 0; i < numeros.length; i++) numeros[i] % 2 == 0 ? numerosPares.push(numeros[i]) : numerosImpares.push(numeros[i])

    numerosParesResultados.textContent = `${numerosPares}`
    numerosImparesResultados.textContent = `${numerosImpares}`
}

// =================== EVENTOS ===================

document.querySelector('#button_gerar').addEventListener('click', () => {
    numeros.length = 0

    if (inputQuantidade.value === '') {
        window.alert('Quantidade não pode ser gerada!')
    } else {
        const quantidade = inputQuantidade.value

        for (let i = 0; i < quantidade; i++) {
            const numeroAleatorio = Math.trunc(Math.random() * quantidade)
            numeros.push(numeroAleatorio)
        }

        numerosGeradosResultado.textContent = `${numeros.map(numero => `${numero}`).join(', ')}`
    }
})

document.querySelector('#button_analisar').addEventListener('click', () => {

    if (inputQuantidade.value === '') {
        window.alert('Quantidade não pode ser gerada!')
    } else {
        media(numeros)
        maiorNumero(numeros)
        menorNumero(numeros)
        numerosParesImpar(numeros)
    }
})


