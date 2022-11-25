function clickBtGerar(){
    let limitInf = document.getElementById("limitInf").value;

    let limitSup = document.getElementById("limitSup").value;

    let numAleatorio = gerarNumeroAleatorio(limitInf, limitSup);

    document.getElementById("resultado").textContent= `O número gerado foi ${numAleatorio}.`;
}

function gerarNumeroAleatorio(limitInf, limitSup) {

    limitInf = limitInf == "0" || limitInf == null ? 0 : limitInf;
    limitSup = limitSup == "0" || limitSup == null ? 0 : limitSup;

    if(limitInf == limitSup){
        return limitInf;
    }
    if(limitInf > limitSup){
        let temp = limitInf;
        limitInf = limitSup;
        limitSup = temp;
    }

    let qtdNum = limitSup - limitInf;

    let numAleatorio = Math.floor(Math.random() * qtdNum);
    return numAleatorio;
}

module.exports = {
    gerarNumeroAleatorio
}