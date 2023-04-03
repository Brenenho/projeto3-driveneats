let nomebebida = "";

let nomecomida = "";

let nomesobremesa = "";


function verificaselecao() {
  if (nomecomida !== "") {
    if (nomebebida !== "") {
      if (nomesobremesa !== "") {
        let botaoselecionado = document.querySelector('.botaomeio')

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

    
  nomecomida = document.querySelector(seletor)
  
  verificaselecao();
  
  console.log(nomecomida)
   

}

function selecionarpedidob(seletor) {
    
    const botaoanterior = document.querySelector(".bebida .selecionado");
if (botaoanterior !== null) {
  botaoanterior.classList.remove("selecionado");
}
    
    
    const selecionado = document.querySelector(seletor);
    selecionado.classList.add("selecionado");

    nomebebida = document.querySelector(seletor)

    verificaselecao();
}

function selecionarpedidos(seletor) {
    
    const botaoanterior = document.querySelector(".sobremesa .selecionado");
if (botaoanterior !== null) {
  botaoanterior.classList.remove("selecionado");
}
    
    
    const selecionado = document.querySelector(seletor);
    selecionado.classList.add("selecionado");

    nomesobrememsa = document.querySelector(seletor)

    verificaselecao();
}