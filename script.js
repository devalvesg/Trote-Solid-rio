const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('light')
})

function calculaIMC(){
    /*Recuperar os dados do usuario que estão nas caixas de texto */
    let peso = document.getElementById("peso").value;
    //Let é usado para criar uma variavel//
    let altura = document.getElementById("altura").value;

    let imc = (peso/(altura*altura));
    
    document.getElementById("total").innerHTML = "O Seu IMC é: " + imc
}
