const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1+1} + ${2+2} ${'tá errado!'}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('tu é gay')}`)
console.log(`Opa eu me chamo: ${up('josé eduardo dutra ribeiro garcia')}`)