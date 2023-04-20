
const calcular = document.querySelector("#calcular");


function imc () {
    const nome = document.querySelector("#nome");
    const altura = document.querySelector("#altura");
    const peso = document.querySelector("#peso");
    const resultado = document.querySelector("#resultado");

    if(nome.value !== "" && altura.value !== "" && peso.value !== "") {
        alert ('valor preenchido!');
    }else {
        alert('Preencha todos os campos!!');
    }
   
}

calculate.addEventListener('click', imc);