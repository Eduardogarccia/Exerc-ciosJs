// par nome/valor

const saudacao = 'opa' // contexto léxico 1

function exec() {
    const saudacao = 'falaa' // contexto léxico 2
    return saudacao
}

// objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua tal',
        numero: 14
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)

