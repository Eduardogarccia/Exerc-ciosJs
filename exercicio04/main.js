function meuEscopo() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')
  
  function dias() {
    let select = document.querySelector(".dia");
  
    for (var i = 1; i <= 31; i++) {
      var option = document.createElement("option");
      option.value = i;
      option.text = i;
      select.appendChild(option);
    }
  }
  
  function meses() {
    var select = document.querySelector(".mes");
  
    var meses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
  
    for (var i = 0; i < meses.length; i++) {
      var option = document.createElement("option");
      option.value = i + 1;
      option.text = meses[i];
      select.appendChild(option);
    }
  }
  
  function anos() {
    var select = document.querySelector(".ano");
  
    var anoAtual = new Date().getFullYear();
    var anoInicial = 1900; // Define o ano inicial
  
    for (var i = anoAtual; i >= anoInicial; i--) {
      var option = document.createElement("option");
      option.value = i;
      option.text = i;
      select.appendChild(option);
    }
  }
  
  dias();
  meses();
  anos();
  
  function recebeEventoForm (evento) {
     evento.preventDefault()

     let dia = form.querySelector('.dia').value
        let mes = form.querySelector('.mes').value - 1
        let ano = form.querySelector('.ano').value

        let data = new Date(ano, mes, dia)
        console.log(data)

        let diaSemana = data.getDay()

        let listDias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']

        if (diaSemana == 0) {
            resultado.innerHTML = listDias[0]
        } else if (diaSemana == 1) {
            resultado.innerHTML = listDias[1]
        } else if (diaSemana == 2) {
            resultado.innerHTML = listDias[2]
        } else if (diaSemana == 3) {
            resultado.innerHTML = listDias[3]
        } else if (diaSemana == 4) {
            resultado.innerHTML = listDias[4]
        } else if (diaSemana == 5) {
            resultado.innerHTML = listDias[5]
        } else if (diaSemana == 6) {
            resultado.innerHTML = listDias[6]
        }
        
        if (diaSemana == 0) {
          alert(listDias[0])
      } else if (diaSemana == 1) {
          alert(listDias[1])
      } else if (diaSemana == 2) {
          alert(listDias[2])
      } else if (diaSemana == 3) {
          alert(listDias[3])
      } else if (diaSemana == 4) {
          alert(listDias[4])
      } else if (diaSemana == 5) {
          alert(listDias[5])
      } else if (diaSemana == 6) {
          alert(listDias[6])
      }


     
     
            
  }
  
  form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()

