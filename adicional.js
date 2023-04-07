function calcularPont() {
     
    let qtdpadrao = document.getElementById("qtdPadrao").value;
    let qtdkit = document.getElementById("qtdKits").value;
    let qtdsuplemento = document.getElementById("qtdSuplementos").value;
    let qtdarroz = document.getElementById("qtdArroz").value;
    let qtdfeijao = document.getElementById("qtdFeijao").value;
    let qtdmacarrao = document.getElementById("qtdMacarrao").value;
    let qtdoleo = document.getElementById("qtdOleo").value;

    let padrao = 50
    let kit = 25
    let suplemento = 10
    let arroz = 1
    let feijao = 1
    let macarrao = 1
    let oleo = 1;

    let calc = (qtdpadrao*padrao)+(qtdkit*kit)+(qtdsuplemento*suplemento)+(qtdarroz*arroz)+(qtdfeijao*feijao)+(qtdmacarrao*macarrao)+(qtdoleo*oleo);

    document.getElementById("total").innerHTML = "O total de pontos adicionais é: " + calc;
}

function Checked(text){
    if (text == 'padrao'){
        document.getElementById("qtdPadrao").disabled =
        !document.getElementById("qtdPadrao").disabled
    }
    if (text == 'kits'){
        document.getElementById("qtdKits").disabled =
        !document.getElementById("qtdKits").disabled
    }
    if (text == 'suplementos'){
        document.getElementById("qtdSuplementos").disabled =
        !document.getElementById("qtdSuplementos").disabled
    }
    if (text == 'arroz'){
        document.getElementById("qtdArroz").disabled =
        !document.getElementById("qtdArroz").disabled
    }
    if (text == 'feijao'){
        document.getElementById("qtdFeijao").disabled =
        !document.getElementById("qtdFeijao").disabled
    }
    if (text == 'macarrao'){
        document.getElementById("qtdMacarrao").disabled =
        !document.getElementById("qtdMacarrao").disabled
    }
    if (text == 'oleo'){
        document.getElementById("qtdOleo").disabled =
        !document.getElementById("qtdOleo").disabled
    }

}