 function  criacartao(categoria,pergunta,resposta){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    
    
    cartao.innerHTM =` 
    <div class="cartao__conteudo">
                    <h3>Geografia</h3>
                    <div class="cartao_conteudo_pergunta">
                       <p> Qual é a capital da França?</p>
                    </div>
                    <div class="cartao_conteudo_resposta">
                      <p> A capital da França é París.</p>
                    </div>
                </div>`

    let respostaEstaVisivel = false

    function viracartao (){
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
        
    }
    cartao.addEventListener('click', viracartao)


    container.appendChild(cartao)
 }