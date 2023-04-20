
const calcular = document.querySelector("#calcular");


function imc () {
    const nome = document.querySelector("#nome").value
    const altura = document.querySelector("#altura").value;
    const peso = document.querySelector("#peso").value;
    const resultado = document.querySelector("#resultado");

    if(nome !== '' ) {
        alert ('valor preenchido!');
    }
    
   
}

calculate.addEventListener('click', imc);