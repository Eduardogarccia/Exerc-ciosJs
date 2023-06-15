function meuEscopo() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')
  
  function recebeEventoForm (evento) {
     evento.preventDefault()
     
     const input = form.querySelector('.input').value
     const input2 = form.querySelector('.input2').value

     resultado.innerHTML = `<p> Seu nome é:  ${input} ${input2} <p>`

     
     
            
  }
  
  form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()