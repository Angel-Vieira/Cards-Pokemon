const btnAvançar = document.getElementById('btn-avançar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll(".card");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoselecionado = document.querySelector('.selecionado');
    cartaoselecionado.classList.remove('selecionado')
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvançar.addEventListener('click', function(){
    if(cartaoAtual === cartoes.length -1){
        
        esconderCartaoSelecionado()
        cartaoAtual = 0;
        mostrarCartao(cartaoAtual)
        return
    }
    
    esconderCartaoSelecionado()
    cartaoAtual++;
    mostrarCartao(cartaoAtual)
});


btnVoltar.addEventListener('click', function(){
    if (cartaoAtual === 0){

        esconderCartaoSelecionado()
        cartaoAtual = cartoes.length-1;
        cartoes[cartaoAtual].classList.add('selecionado');
        return
    }

    esconderCartaoSelecionado()
    cartaoAtual--;
    mostrarCartao(cartaoAtual)
   
});