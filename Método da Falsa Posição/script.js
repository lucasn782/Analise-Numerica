var E = 2.718281828459045235360287;
var PI = 3.14159265359;
var casas = 6;

function POW(x, y){
    var n = x;
    for(i = 1; i < y; ++i){
        n *= x;  
    }
    return n;
}

function LOG(x, base){
    return Math.log(x) / Math.log(base);
}

function LN(x){
    return LOG(x, E);
}

function roundValue(value){
    return parseFloat(value.toFixed(casas));
}

function exeExpressao(expressao, X){
    return eval(expressao.trim().toUpperCase());
}

var resultTxt = document.getElementById('restxt');


function calcular(){


    casas = parseInt(document.getElementById("casas").value);
    
    var expressao = document.getElementById("expressao").value;

    var xA = parseFloat(document.getElementById("valmna").value);
    var xB = parseFloat(document.getElementById("valmnb").value);

    var precisao = parseFloat(document.getElementById("precisao").value);

    var fxReal = parseInt(document.getElementById("valfx").value);

    var execucao = 1;
    var maiorErro = true;


    var resultado = "";

    do {
            var fXA = roundValue(exeExpressao(expressao, xA));
            var fXB = roundValue(exeExpressao(expressao, xB));
            var xN = roundValue((xA*fXB - xB*fXA) / (fXB - fXA));
            var fXN = roundValue(exeExpressao(expressao, xN));

            if(fXN == fxReal || Math.abs(fXN) < precisao){
                maiorErro = false;
                resultado = "<hr/><p><strong>" +
                            "Resultado: " + xN + "<br/>" +
                            "Erro: " + (xB - xA) + "<br/>" +
                            "Iterações: " + execucao + "<br/>" +
                            "</strong></p>";

                resultTxt.innerHTML = resultado;
            }

        
            xA = ((fXA > fxReal && fXN > fxReal) || (fXA < fxReal && fXN < fxReal)) ? xN : xA;
            xB = ((fXB > fxReal && fXN > fxReal) || (fXB < fxReal && fXN < fxReal)) ? xN : xB;  
            
            execucao++;
        
        } while(maiorErro);

}