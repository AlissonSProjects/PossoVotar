    var idade = document.getElementById('idade')
    var resultado = document.getElementById('resultado')

    var calcIDADE = document.getElementById("calcIDADE")

    calcIDADE.addEventListener("click", function () {
        
        if(idade.value < 16){
            resultado.innerText = "Não pode votar!"
          } else if(idade.value >= 16 && idade.value < 18){
            resultado.innerText = "Voto opcional!"
          } else if(idade.value >= 18 && idade.value < 70){
            resultado.innerText = "Voto obrigatório!"
          } else {
            resultado.innerText = "Voto opcional!"
          } 
        
    
    })

    