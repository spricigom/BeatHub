<script setup>
import { ref } from 'vue';


const imagemExibida = ref('@/assets/teclado.png');
const imagensSecundarias = ['@/assets/teclado1-2.png', '@/assets/teclado1-3.png', '@/assets/teclado1-4.png'];

function pegarImagem(id) {
    const urlImagemExibida = imagemExibida.value;
    imagemExibida.value = imagensSecundarias[id]
    imagensSecundarias.push(urlImagemExibida)
}

</script>

<template>

    <body>
        <header>
            <nav>
                <ul class="navegacao">
                    <li><a href="#">Cordas</a></li>
                    <li><a href="#" id="amarelo">Caixas</a></li>
                    <li><a href="#">DJ</a></li>
                    <li><a href="#" id="amarelo">Efeitos</a></li>
                    <li><a href="#">Microfone</a></li>
                    <li><a href="#" id="amarelo">Teclados</a></li>
                    <li><a href="#">Pedais</a></li>
                </ul>
            </nav>
            <RouterLink to="/">
                <img class="logo" src="@/assets/certa.png" alt="" />
            </RouterLink>

            <p class="regiao"><img src="@/assets/lugar-colocar.png" alt="" class="icones"
                    style="opacity: .7; position: relative; bottom: .2vh;" />Selecione sua regiao</p>

            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="O que você precisa?..." aria-label="Search"
                    style=" background-color: #efefef; border: 1px solid #f48200; width: 17vw; border-radius: 300px;" />
            </form>
            <img src="@/assets/lupa.png" alt=""
                style="width: 1vw; display: flex; position: relative; left: 3vw; bottom: 1vh;">

            <div class="compra-e-coracao">
                <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
                <img src="@/assets/coracao.png" alt="" class="icones" />
            </div>
        </header>
        <hr class="hr" />

        <main>
            <div class="fundo">





                <div class="esquerda">
                    <div class="favoritos-compartilhe">
                        <img src="@/assets/coracao.png" alt="" class="icones">
                        <p>Favoritos</p>
                        <img src="@/assets/compartilhe.png" alt="" class="icones" style="margin-left: 1vw;">
                        <p>Compartilhe</p>
                    </div>


                    <div class="product-gallery">
                        <div class="img-produto">
                            <img id="main-image" src="@/assets/teclado.png" alt="">
                        </div>

                        <div class="mais">
                            
                            <img src="@/assets/teclado1-3.png" @click="pegarImagem(id)" class="mais-fotos">
                            <img src="@/assets/teclado1-2.png" alt="" class="mais-fotos">
                            <img src="@/assets/teclado1-4.png" alt="" class="mais-fotos">
                        </div>
                    </div>

                </div>





                <div class="centro">
                    <h4 class="titulo-produto">Teclado Piano Musical 61 Teclas 500 Ritmos E 80 Músicas - MXT</h4>

                    <div class="avaliacao">

                    </div>
                    <img id="direita" src="@/assets/estrelas.png" alt="">
                    <h6 id="esquerda">130 avaliações</h6>

                    <div class="descricao">
                        <p>O teclado musical MT-4500 é uma sinfonia de inovação e versatilidade. </p>
                        <p>61 teclas sensíveis à velocidade, proporciona uma experiência de toque expressiva. </p>
                        <p>Seu design elegante abriga uma biblioteca de 500 timbres e ritmos autênticos, de pianos a
                            sintetizadores, oferecendo possibilidades sonoras ilimitadas.</p>
                        <p>Possui 3 modos de aprendizagem e metrônomo.</p>
                    </div>

                </div>

                <div class="direita">
                    <div class="valor">
                        <h2 class="preco">R$45,00 por mês</h2>
                        <h5 class="forma_pagamento">No pix</h5>

                    </div>



                    <div class="cep">
                        <h5 class="frete">calcule seu cep</h5>
                        <form class="input_cep">
                            <input placeholder="Insira seu cep...">
                        </form>
                    </div>

                    <button>ALUGUE</button>


                </div>

            </div>
            <h1 id="interesse">itens que talvez você tenha interesse</h1>
            <div class="recomenda" style="display: flex; flex-direction: row;">

                <div class="produto">
                    <div class="compra-e-coracao_produto">
                        <img src="@/assets/coracao.png" alt="" class="icones">
                        <img src="@/assets/carrinho-de-compras.png" alt="" class="icones">
                    </div>
                    <div class="img-produtos">
                        <img src="@/assets/tambor2.png" alt="">
                    </div>
                    <div class="text-produto">
                        <p>Muslady tambor de percussão</p>
                    </div>

                    <div class="avaliacao_recomenda">
                        <img src="@/assets/estrelas.png" alt="" style=" display: flex; position: relative; bottom: 1vh">
                        <p style="color: rgb(105, 105, 105);">130 avaliações</p>
                    </div>
                    <div class="valor_recomenda">
                        <p>R$ 61,00 por mês</p>
                        <img src="@/assets/compartilhe.png" alt="" class="icones"
                            style=" display: flex; position: relative; bottom: 1vh;">
                    </div>
                </div>



                <div class="produto">
                    <div class="compra-e-coracao_produto">
                        <img src="@/assets/coracao.png" alt="" class="icones">
                        <img src="@/assets/carrinho-de-compras.png" alt="" class="icones">
                    </div>
                    <div class="img-produtos">
                        <img src="@/assets/trompete.png" alt="">
                    </div>
                    <div class="text-produto">
                        <p>Muslady tambor de percussão</p>
                    </div>

                    <div class="avaliacao_recomenda">
                        <img src="@/assets/estrelas.png" alt="" style=" display: flex; position: relative; bottom: 1vh">
                        <p style="color: rgb(105, 105, 105);">130 avaliações</p>
                    </div>
                    <div class="valor_recomenda">
                        <p>R$ 60,00 por mês</p>
                        <img src="@/assets/compartilhe.png" alt="" class="icones"
                            style=" display: flex; position: relative; bottom: 1vh">
                    </div>
                </div>
                <div class="produto">
                    <div class="compra-e-coracao_produto">
                        <img src="@/assets/coracao.png" alt="" class="icones">
                        <img src="@/assets/carrinho-de-compras.png" alt="" class="icones">
                    </div>
                    <div class="img-produtos">
                        <img src="@/assets/bateria.png" alt="">
                    </div>
                    <div class="text-produto">
                        <p>Muslady tambor de percussão</p>
                    </div>

                    <div class="avaliacao_recomenda">
                        <img src="@/assets/estrelas.png" alt="" style=" display: flex; position: relative; bottom: 1vh">
                        <p style="color: rgb(105, 105, 105);">130 avaliações</p>
                    </div>
                    <div class="valor_recomenda">
                        <p>R$ 60,00 por mês</p>
                        <img src="@/assets/compartilhe.png" alt="" class="icones"
                            style=" display: flex; position: relative; bottom: 1vh">
                    </div>
                </div>
                <div class="produto">
                    <div class="compra-e-coracao_produto">
                        <img src="@/assets/coracao.png" alt="" class="icones">
                        <img src="@/assets/carrinho-de-compras.png" alt="" class="icones">
                    </div>
                    <div class="img-produtos">
                        <img src="@/assets/prato.png" alt="">
                    </div>
                    <div class="text-produto">
                        <p>Muslady tambor de percussão</p>
                    </div>

                    <div class="avaliacao_recomenda">
                        <img src="@/assets/estrelas.png" alt="" style=" display: flex; position: relative; bottom: 1vh">
                        <p style="color: rgb(105, 105, 105);">130 avaliações</p>
                    </div>
                    <div class="valor_recomenda">
                        <p>R$ 60,00 por mês</p>
                        <img src="@/assets/compartilhe.png" alt="" class="icones"
                            style=" display: flex; position: relative; bottom: 1vh">
                    </div>
                </div>
                <div class="produto">
                    <div class="compra-e-coracao_produto">
                        <img src="@/assets/coracao.png" alt="" class="icones">
                        <img src="@/assets/carrinho-de-compras.png" alt="" class="icones">
                    </div>
                    <div class="img-produtos">
                        <img src="@/assets/gaitaBoca.png" alt="">
                    </div>
                    <div class="text-produto">
                        <p>Muslady tambor de percussão</p>
                    </div>

                    <div class="avaliacao_recomenda">
                        <img src="@/assets/estrelas.png" alt="" style=" display: flex; position: relative; bottom: 1vh">
                        <p style="color: rgb(105, 105, 105);">130 avaliações</p>
                    </div>
                    <div class="valor_recomenda">
                        <p>R$ 60,00 por mês</p>
                        <img src="@/assets/compartilhe.png" alt="" class="icones"
                            style=" display: flex; position: relative; bottom: 1vh">
                    </div>
                </div>
            </div>
        </main>


        <footer>
            <div class="footer">



                <div class="cima-footer">
                    <img src="@/assets/certa.png" alt="" class="logo-footer">
                    <div class="redes-sociais">
                        <img src="@/assets/facebook.png" alt="" class="icones-footer">
                        <img src="@/assets/instagram (1).png" alt="" class="icones-footer">
                        <img src="@/assets/twitter.png" alt="" class="icones-footer">
                        <img src="@/assets/whatsapp (1).png" alt="" class="icones-footer">
                        <img src="@/assets/youtube.png" alt="" class="icones-footer">
                    </div>
                </div>
                <hr style="border: 1px solid black; margin-top: 5vh;">
                <div class="baixo-footer">
                    <div class="colunas-footer">
                        <h2><strong>Categorias</strong></h2>
                        <ul>
                            <li>Mais vendidos</li>
                            <li>produtos</li>
                            <li>Promoções</li>
                        </ul>
                    </div>
                    <div class="colunas-footer">
                        <h2><strong>Empresa</strong></h2>
                        <ul>
                            <li>Quem somos?</li>
                            <li>Por que BeatHub?</li>
                            <li>Trabalhe conosco</li>
                        </ul>
                    </div>
                    <div class="colunas-footer">
                        <h2><strong>Guia de compras</strong></h2>
                        <ul>
                            <li>Meios de pagamentos</li>
                            <li>Compre com pontos</li>
                            <li>Cartão de crédito</li>
                        </ul>
                    </div>
                    <div class="colunas-footer">
                        <h2><strong>Ajuda</strong></h2>
                        <ul>
                            <li>Sua conta</li>
                            <li>Frete e prazo de entrega</li>
                            <li>Devolução e reembolso</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="Copyright">
                © 2024 Copyright:
                <a href="https://beathub.com/">BeatHub.com</a>
            </div>
        </footer>

    </body>
</template>

<style scoped>
.avaliacao_recomenda {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    bottom: 1vh;

}

.valor_recomenda {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    bottom: 2.5vh;

}

.valor_recomenda p {
    color: black;
    font-size: 1.2vw;
}

.text-produto {
    text-align: center;
}

.text-produto p {
    color: #2C2B2B;
    font-size: 1.3vw;
    font-weight: 500;
}

.recomenda {
    width: 85%;
    display: flex;
    justify-content: space-around;
}

.produto {
    background-color: white;
    height: 50vh;
    width: 14.5vw;
    border-radius: 20px;
    margin-bottom: 10vh;
    box-shadow: 1px 1px 3px 3px rgb(150, 146, 146);
    border-radius: 1vw;
}

#interesse {
    color: #f48200;
    margin-top: 5vh
}

.valor {
    margin-top: 1vh;
}

.cep {
    margin-top: 18vh;
}

.input_cep {
    display: flex;
    position: relative;
    right: 3.5vw;
}

.input_cep input {
    border: 1px solid white;
    border-radius: .5vw;
    padding: 2px 2px;

}

.frete {
    font-size: 1.1vw;
    color: #555151;
    font-family: 'Josefin Sans', sans-serif;
    position: relative;
    bottom: .5vh;
    margin-top: 10vh;
}

button {
    height: 5vh;
    width: 17vw;
    background-color: #2C2B2B;
    color: white;
    border: 0;
    margin-top: 20vh;
    cursor: pointer;
    border-radius: 15px;
    font-family: 'Josefin Sans', sans-serif
}

.forma_pagamento {
    font-size: 1.5vw;
    color: #555151;
    font-family: 'Josefin Sans', sans-serif;
    text-decoration: underline;
    position: relative;
    bottom: 2vh;

}

.preco {
    color: #f48200;
    font-family: 'Josefin Sans', sans-serif;
}

.direita {
    position: relative;
    top: 6vh;
    width: 20vw;
    text-align: center;
    align-items: center;
}

.descricao {
    margin-top: 7vh;
}

#direita {
    float: left;
    position: relative;
    left: 2vw;
}

#esquerda {
    float: right;
    position: relative;
    right: 2vw;
    color: #bebbbb;
}

.centro {
    width: 22vw;
    position: relative;
    top: 4vh;
}

.centro h4 {
    text-align: center;
    font-size: 1.49vw;
    margin-top: 5vh;
    color: #3C3C3C;
    font-family: 'Josefin Sans', sans-serif;
}

.centro p {
    font-size: .8vw;
    color: #3C3C3C;
    margin-top: 1vh;
    font-family: 'Josefin Sans', sans-serif;
    justify-content: center;
    align-items: center;
}

.mais {
    display: flex;
    flex-wrap: wrap;
    width: 22vw;
    margin-left: 2vw;
    justify-content: space-around;
}

.mais-fotos {
    height: 100px;
    width: 100px;
    background-color: white;
}

.img-produto {
    height: 40vh;
    width: 18vw;
    margin-left: 7vh;
}

.img-produto img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.favoritos-compartilhe p {
    color: #f48200;
    margin: 1vw;
    text-decoration: underline;
    font-size: 1.4vw;
}

.favoritos-compartilhe {
    display: flex;
    align-items: center;
    margin-top: 5vh;
    margin-left: 2vw;

}

body {
    background-color: rgb(240, 240, 240);
}

main {
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.fundo {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    height: 75vh;
    background-color: #e9e9e9;
    border-radius: 20px;
}

.Copyright {
    background-color: rgb(95, 95, 95);
    color: white;
    height: 7vh;
    display: flex;
    padding-top: 2.3vh;
    justify-content: center;
}

.Copyright a {
    color: white;
}

.icones-footer {
    width: 2.5vw;
    margin-top: 5vh;
    margin-left: 1vw
}

.redes-sociais {
    width: 20vw;
    height: 10vh;
}

.colunas-footer {
    height: 10vh;
    width: 10vw;
    display: inline-block;
    margin-top: 5vh;
    margin-bottom: 15vh;

}

.colunas-footer ul li {
    list-style: none;
    color: white;
    font-family: 'Inter', 'sans serif';
    font-size: 1vw;
    text-align: center;
    margin-top: 1vh;
    width: 12vw;
    position: relative;
    right: 1vw;

}

.colunas-footer h2 {
    font-size: 1.2vw;
    font-family: 'Inter', 'sans serif';
    color: white;
    text-align: center
}

.cima-footer {
    display: flex;
    justify-content: space-around;
    padding-top: 5vh
}

.logo-footer {
    width: 8vw;
}

.baixo-footer {
    display: flex;
    justify-content: space-around;
}

.footer {
    width: 100%;
    background-color: #9b9a9a;
}

.container {
    position: relative;
    bottom: 17vh;
}

.esq1 {
    float: left;
    position: relative;
    width: 6.5vw;
    left: 1vw;
}

.dir1 {
    float: right;
    position: relative;
    right: 1vw;
}

.esq2 {
    float: left;
    width: 10vw;
    position: relative;
    left: 1.3vw;
}

.esq2 h5 {
    font-size: 1.1vw;
}

.dir2 {
    float: right;
    position: relative;
    right: 2.5vw;
    margin-top: .5vh;
}

.compartilhe-produtos {
    width: 1.3vw;
}

.compra-e-coracao_produto {
    margin-top: 1vw;
    display: flex;
    justify-content: space-between;
}

.compra-e-coracao_produto .icones {
    margin-left: 2vw;
    margin-right: 2vw;
    width: 2vw;
}

.texto-produtos {
    font-size: 1.2vw;
    margin-top: 2vh;
}

.img-produtos {
    height: 27vh;

}

.img-produtos img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}











































* {
    padding: 0;
}

/*estilos do header */
.logo {
    width: 8vw;
    cursor: pointer;
    position: relative;
    bottom: 15px
}

input {

    display: flex;
    position: relative;
    left: 7vw;
    bottom: 1.1vh;

}

.regiao {
    position: relative;
    left: 5vw;
    font-family: 'Inter', sans-serif;
    color: #595959;
    font-size: 1vw;
}

::placeholder {
    padding-left: 20px;
    font-family: 'Inter', sans-serif;
    font-size: 1.8vh;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
    height: 20vh;
    background-color: #efefef;
}

.navegacao {
    list-style: none;
    position: relative;
    right: 8vw;
}

.navegacao li {
    display: inline-block;
    padding: 0px 10px;
}

a {
    text-decoration: none;
    color: #595959;
    font-family: 'Josefin Sans', sans-serif;
}

#amarelo {
    color: #f48200;
}

.hr {
    position: relative;
    bottom: 5vh;
    border: 1px solid black;
}

.icones {
    width: 1.5vw;
}

.compra-e-coracao {
    position: relative;
    left: 7vw;
    bottom: 1.3vh;
}

.compra-e-coracao .icones {
    margin-right: 1.5vw;
}
</style>