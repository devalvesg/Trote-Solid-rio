function Condicional(){
    let kits = Number(document.getElementById("kits").value);
    let pontos
    
    if(kits >= 80){
        pontos = 5000;
    }
    else if((kits < 80) && (kits >= 64)){
        pontos = 4000;
    }
    else if((kits < 64) && (kits >= 40)){
        pontos = 2500;
    }
    else if((kits < 40) && (kits >= 16)){
        pontos = 1000;
    }
    else if((kits < 16) && (kits >= 0)){
        pontos = 0;
    }
    else{
        pontos = -1; //a quantidade de pontos é negativa
    }
    if(pontos == -1){
        document.getElementById("pontos").innerHTML = "Impossivel calcular pontos"
    }
    else{
        document.getElementById("pontos").innerHTML = "A pontuação da equipe é: " + pontos
    }
}