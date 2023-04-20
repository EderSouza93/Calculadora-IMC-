
const calculate = document.querySelector("#calcular");


function imc () {
    const name = document.querySelector("#nome");
    const height = document.querySelector("#altura");
    const weight = document.querySelector("#peso");
    const result = document.querySelector("#resultado");

    if(nome.value !== ''){
        alert ('valor preenchido!');
    }
   
}

calculate.addEventListener('click', imc);