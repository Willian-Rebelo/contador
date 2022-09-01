// estado da minha aplicação
let numero = 0
            
// alteradores de estados de aplicação
function aumentar() {
numero = numero + 1
mostrarNaTela()
}

function diminuir () {
numero = numero - 1
mostrarNaTela()
} 

function zerar() {
numero = numero = 0
mostrarNaTela()
    
}


// jogar o estado de aplicação na tela
function mostrarNaTela() {
  const p = document.querySelector("#resultado")
 p.innerText = numero
 }

//iniciar
mostrarNaTela()