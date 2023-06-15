function meuEscopo() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')
  
  function recebeEventoForm (evento) {
     evento.preventDefault()
     
     const input = Number(form.querySelector('.input').value)
     const input2 = Number(form.querySelector('.input2').value)

     const soma = input + input2
     const sub = input - input2
     const mul = input * input2
     const divs = input / input2

     resultado.innerHTML = `<p> Soma:  ${soma} <br>
     Subtração:  ${sub} <br>
     Multiplicação:  ${mul} <br>
     Divisão:  ${divs} <p>`

     
            
  }
  
  form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()