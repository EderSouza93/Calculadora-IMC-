
const calcular = document.querySelector("#calcular");


function imc () {
    const nome = document.querySelector("#nome").value;
    const altura = document.querySelector("#altura").value;
    const peso = document.querySelector("#peso").value;
    const resultado = document.querySelector("#resultado").value;

    if(nome !== '' && altura !== '' && peso !== '') {
        alert ('valor preenchido!');
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
   
}

calculate.addEventListener('click', imc);