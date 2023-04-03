let nomebebida = "";

let nomecomida = "";

let nomesobremesa = "";


function verificaselecao() {
  if (nomecomida !== "") {
    if (nomebebida !== "") {
      if (nomesobremesa !== "") {
        const botaoselecionado = document.querySelector('.menuinferior')

        botaoselecionado.classList.add('avancar')
        
      }
    }
  }
}



function selecionarpedidop(seletor) {
            
    const botaoanterior = document.querySelector(".prato .selecionado");
if (botaoanterior !== null) {
  botaoanterior.classList.remove("selecionado");
}
    
    
    const selecionado = document.querySelector(seletor);
    selecionado.classList.add("selecionado");

   
  nomecomida = nomepedido.innerHTML
  console.log(nomecomida)
   

}

function selecionarpedidob(seletor) {
    
    const botaoanterior = document.querySelector(".bebida .selecionado");
if (botaoanterior !== null) {
  botaoanterior.classList.remove("selecionado");
}
    
    
    const selecionado = document.querySelector(seletor);
    selecionado.classList.add("selecionado");

    nomebebida = seletor.innerHTML

    verificaselecao();
}

function selecionarpedidos(seletor) {
    
    const botaoanterior = document.querySelector(".sobremesa .selecionado");
if (botaoanterior !== null) {
  botaoanterior.classList.remove("selecionado");
}
    
    
    const selecionado = document.querySelector(seletor);
    selecionado.classList.add("selecionado");

    nomesobrememsa = seletor.innerHTML

    verificaselecao();
}