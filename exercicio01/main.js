function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    
    function recebeEventoForm (evento) {
       evento.preventDefault()
       
       const input = Number(form.querySelector('.input').value)
       const resto = input - Math.round(input)
       
       if (Number.isInteger(input)) {
        resultado.innerHTML = `<p> é inteiro <p>`
       } else if (Number.isNaN(input)) {
        resultado.innerHTML = `<p> é string <p>`
       } else if (resto != 0) {
        resultado.innerHTML = `<p> é float <p>`
       }
              
    }
    
    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()