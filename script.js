
function calc () {

    var largura = document.getElementById("largura").value;
    var altura = document.getElementById("altura").value;
    var comprimento = document.getElementById("comprimento").value;
    var quantidade = document.getElementById("quantidade");
    var resultado = document.getElementById("resultado");

    const pe = 0.0328084
    
    var larguraPe = largura * pe
    var alturaPe = altura * pe
    var comprimentoPe = comprimento * pe
    
    var tamanhoGaiola = larguraPe * alturaPe * comprimentoPe

    var qntTwister = Math.floor(tamanhoGaiola/2.5)

    var resposta = ("Nessa gaiola cabem até: " + qntTwister + " ratos")
    var gaiolaInadequada = "Essa gaiola é inadequada"
    var informacaoFaltando = "Preencha todos os campos"

    if (largura <= 0 || altura <= 0 || comprimento <= 0) {
        resultado.classList.remove("hide");
        quantidade.innerHTML = informacaoFaltando;

    
    } else if (largura <= 39 || altura <= 59 || comprimento <= 59){
        resultado.classList.remove("hide");
        quantidade.innerHTML = gaiolaInadequada;
    
    } else {
        resultado.classList.remove("hide");
        quantidade.innerHTML = resposta;
    }
}