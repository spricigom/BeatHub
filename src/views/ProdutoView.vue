<script setup>

import HeaderComponente from '@/components/HeaderComponente.vue';
import NavFooter from '@/components/NavFooter.vue';




</script>

<template>

    <body>
        <HeaderComponente />

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


                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="@/assets/teclado.png" class="d-block w-100" alt="@/assets/teclado.png">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/teclado.png" class="d-block w-100" alt="@/assets/teclado.png">
                            </div>
                            <div class="carousel-item">
                                <img src="@/assets/teclado.png" class="d-block w-100" alt="@/assets/teclado.png">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
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

                    <RouterLink to="/FormaPagamento"> <button>ALUGUE</button>
                    </RouterLink>


                </div>

            </div>
            <h1 id="interesse">itens que talvez você tenha interesse</h1>
            <div class="fundoo">
                <div class="linha">
                    <div class="produtos">
                        <div class="compra-e-coracao_produto">
                            <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
                            <img src="@/assets/coracao.png" alt="" class="icones" />
                        </div>
                        <div class="img-produtos">
                            <img src="@/assets/guitarra1.png" alt="" />
                        </div>
                        <h2 class="texto-produtos">Masterbuilt John Frusciante Stratocaster®</h2>
                        <div class="preco-produtos">
                            <h5>R$ 42,00 por mes</h5>
                            <img src="@/assets/tres-pontinhos.png" alt="" class="compartilhe-produtos">
                        </div>
                    </div>

                    <div class="produtos">
                        <div class="compra-e-coracao_produto">
                            <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
                            <img src="@/assets/coracao.png" alt="" class="icones" />
                        </div>
                        <div class="img-produtos">
                            <img src="@/assets/guitarra2.jpg" alt="" />
                        </div>
                        <h2 class="texto-produtos">Fender® x Hello Kitty® Pink Stratocaster®</h2>
                        <div class="preco-produtos">
                            <h5>R$ 17,00 por mes</h5>
                            <img src="@/assets/tres-pontinhos.png" alt="" class="compartilhe-produtos">
                        </div>
                    </div>

                    <div class="produtos">
                        <div class="compra-e-coracao_produto">
                            <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
                            <img src="@/assets/coracao.png" alt="" class="icones" />
                        </div>
                        <div class="img-produtos">
                            <img src="@/assets/guitarra3.jpg" alt="" />
                        </div>
                        <h2 class="texto-produtos">Player II Jazzmaster®</h2>
                        <div class="preco-produtos">
                            <h5>R$ 32,00 por mes</h5>
                            <img src="@/assets/tres-pontinhos.png" alt="" class="compartilhe-produtos">
                        </div>
                    </div>

                    <div class="produtos">
                        <div class="compra-e-coracao_produto">
                            <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
                            <img src="@/assets/coracao.png" alt="" class="icones" />
                        </div>
                        <div class="img-produtos">
                            <img src="@/assets/guitarra4.jpg" alt="" />
                        </div>
                        <h2 class="texto-produtos">Jimmy Page Telecaster®</h2>
                        <div class="preco-produtos">
                            <h5>R$ 24,00 por mes</h5>
                            <img src="@/assets/tres-pontinhos.png" alt="" class="compartilhe-produtos">
                        </div>
                    </div>

                    <div class="produtos">
                        <div class="compra-e-coracao_produto">
                            <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
                            <img src="@/assets/coracao.png" alt="" class="icones" />
                        </div>
                        <div class="img-produtos">
                            <img src="@/assets/guitarra5.jpg" alt="" width="100%" />
                        </div>
                        <h2 class="texto-produtos">Kurt Cobain Jaguar® Left-Hand</h2>
                        <div class="preco-produtos">
                            <h5>R$ 32,00 por mes</h5>
                            <img src="@/assets/tres-pontinhos.png" alt="" class="compartilhe-produtos">
                        </div>
                    </div>
                </div>



            </div>




        </main>



        <NavFooter />
    </body>
</template>

<style scoped>
.esquerda{
    width: 30vw;
}
.carousel {
    margin-top: 5vh;
    padding: 2vw;
    width: 10vw;
   
}

.preco-produtos {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

}

.preco-produtos h5 {
    font-size: 1.1vw;
    font-weight: 400;
    margin-top: 1vh;
    justify-content: center;
    align-items: center;
    padding-bottom: 1vh
}

.texto-produtos {
    font-size: 1.1vw;
    margin-top: 4vh;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
}

.fundoo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20vh;
}

.produtos {
    background-color: white;
    height: 48vh;
    width: 15vw;
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 4vh;
    margin-bottom: 8vh;
    border-radius: 0.44rem;
    text-align: center;
    justify-content: center;
}


.linha {
    width: 88vw;
    display: flex;
    flex-direction: row;
    height: 50vh;
    justify-content: space-around;
}

.carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    min-width: 100%;
}

.indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
}

.indicator {
    width: 50px;
    height: 50px;
    opacity: 0.5;
    cursor: pointer;
    border-radius: 50%;
    transition: opacity 0.3s ease;
}

.indicator.active {
    opacity: 1;
    border: 2px solid #fff;
}

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

.direita button {
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
