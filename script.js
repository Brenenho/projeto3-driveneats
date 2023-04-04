let nomecomida = ""

let nomebebida = ""

let nomesobremesa = ""


function verificaselecao() {
  if (nomecomida !== "") {
    if (nomebebida !== "") {
      if (nomesobremesa !== "") {
        const botaoFinalizar = document.querySelector('.botaomeio');
                botaoFinalizar.classList.add('avancar');               
                botaoFinalizar.innerHTML = 'Fechar Pedido';
                botaoFinalizar.removeAttribute('disabled');
        }
      }
    }
  }




function selecionarpedidop(prato) {
            
    const botaoanterior = document.querySelector(".prato .selecionado");
if (botaoanterior !== null) {
  botaoanterior.classList.remove("selecionado");
}
    
    
    prato.classList.add("selecionado");

    
  nomecomida = prato.querySelector('.nomeprato').innerHTML;
  
  
  
  verificaselecao()
   

}

function selecionarpedidob(bebida) {
    
    const botaoanterior = document.querySelector(".bebida .selecionado");
if (botaoanterior !== null) {
  botaoanterior.classList.remove("selecionado");
}
    
    
    bebida.classList.add("selecionado");

    nomebebida = bebida.querySelector('.nomebebida').innerHTML;

    verificaselecao();
}

function selecionarpedidos(sobremesa) {
    
    const botaoanterior = document.querySelector(".sobremesa .selecionado");
if (botaoanterior !== null) {
  botaoanterior.classList.remove("selecionado");
}
    sobremesa.classList.add("selecionado");

    nomesobremesa = sobremesa.querySelector('.nomesobremesa').innerHTML;

    verificaselecao();
}