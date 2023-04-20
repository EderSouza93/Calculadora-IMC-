const name = document.querySelector("#nome");
const height = document.querySelector("#altura");
const weight = document.querySelector("#peso");
const calculate = document.querySelector("#calcular");
const result = document.querySelector("#resultado");

function imc () {
    alert('test click');
}

calculate.addEventListener('click', imc);