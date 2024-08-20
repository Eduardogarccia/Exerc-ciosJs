// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
} /* nesse caso aqui a função já irá imprimir no 
   * console o valor pois dentro da função está o termo 'console.log'
   */

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7)
imprimirSoma()

// Função com retorno
function soma(a, b = 1, c = 0) {
    return a + b + c
}
/* Para nao dar NaN (= 0) a função so armazena o valor desejado para 
 * ser usado quando for requisitado, sendo necessario utilizar o
 * termo 'console.log' para impressão do valor
 */

console.log(soma(2, 3))
console.log(soma(2))
