<script setup></script>

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
                style="width: 1vw; display: flex; position: relative; left: 4vw; bottom: 1vh;">

            <div class="compra-e-coracao">
                <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
                <img src="@/assets/coracao.png" alt="" class="icones" />
            </div>
        </header>
        <hr class="hr" />


        <main>
            <div class="img-cima">
                <img src="@/assets/instrumentos.png" alt="">
            </div>
            <div>
                <img src="@/assets/sombraMusical.png" alt="">
                <button><a href="#quem-somos">quem somos?</a></button>
            </div>



            <div class="quem-somos" id="quem-somos">
                <div class="texto-grupo">
                    <div class="titulo-grupo">
                        <h1><strong>Quem somos?</strong></h1>
                    </div>
                    <div class="descricao-grupo">
                        <p>No Beathub, nossa missão é promover o desenvolvimento de jovens músicos que enfrentam
                            dificuldades para adquirir seus próprios instrumentos. Nosso site é especialmente voltado
                            para aqueles que desejam crescer profissionalmente na música, oferecendo suporte e
                            oportunidades para alcançar seus objetivos.</p>
                    </div>

                </div>
                <div class="img-grupo">
                    <img src="@/assets/grupo.jpeg" alt="">
                </div>
            </div>

            <h1 class="conheca"> Conheça nossos colaboradores</h1>

            <div class="pessoas-cima">
                <div class="card-pessoa">
                    <div class="img-pessoa">
                        <img src="@/assets/helo.jpeg" alt="">
                    </div>
                    <div class="nome_e_funcao-pessoa">
                        <h2><strong>Emili Spricigo</strong></h2>
                        <h6>Script e Componentes</h6>
                    </div>
                </div>
                <div class="card-pessoa">
                    <div class="img-pessoa">
                        <img src="@/assets/helo.jpeg" alt="">
                    </div>
                   <div class="nome_e_funcao-pessoa">
                        <h2><strong>Heloísa</strong></h2>
                        <h6>Banco de Dados</h6>
                   </div>
                </div>
                <div class="card-pessoa">
                    <div class="img-pessoa">
                        <img src="@/assets/helo.jpeg" alt="">
                    </div>
                   <div class="nome_e_funcao-pessoa">
                        <h2><strong>Francisco Vargas</strong></h2>
                        <h6>Script e Componentes</h6>
                   </div>
                </div>
                <div class="card-pessoa">
                    <div class="img-pessoa">
                        <img src="@/assets/helo.jpeg" alt="">
                    </div>
                   <div class="nome_e_funcao-pessoa">
                        <h2><strong>Luiz Eduardo</strong></h2>
                        <h6>Telas no Vue</h6>
                   </div>
                </div>
            </div>

            <div class="pessoas-baixo">
                <div class="card-pessoa">
                    <div class="img-pessoa">
                        <img src="@/assets/helo.jpeg" alt="">
                    </div>
                   <div class="nome_e_funcao-pessoa">
                        <h2><strong>Luna</strong></h2>
                        <h6>Telas no Figma</h6>
                   </div>
                </div>
                <div class="card-pessoa">
                    <div class="img-pessoa">
                        <img src="@/assets/helo.jpeg" alt="">
                    </div>
                   <div class="nome_e_funcao-pessoa">
                        <h2><strong>Sara</strong></h2>
                        <h6>Requisitos</h6>
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
button{
    position: relative;
    bottom: 10vh;
    height: 6vh;
    width: 17vw;
    background-color: #2C2B2B;
    border: 0;
    cursor: pointer;
    border-radius: 40px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.3vw;
    z-index: 1;
}

button a{
    color: #f48200;
}

.nome_e_funcao-pessoa {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1vh;

}

.nome_e_funcao-pessoa h2 {
    font-family: 'Inter', sans-serif;
    color: black;
    font-size: 1.8vw;
}

.nome_e_funcao-pessoa h6 {
    font-family: 'Inter', sans-serif;
    color: #f48200;
    font-size: 1vw;
}

.pessoas-cima {
    margin-top: 10vh;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;


}

.pessoas-baixo {
    margin-top: 10vh;
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20vh;
}

.img-pessoa {
    background-color: black;
    height: 210px;
    width: 210px;
    display: flex;
    border-radius: 100%;
    margin-top: 5vh;
}

.img-pessoa img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 100%;
}

.card-pessoa {
    background-color: #D9D9D9;
    height: 48vh;
    width: 18vw;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.conheca {
    color: #f48200;
    font-size: 3vw;
}

.texto-grupo {
    width: 55%;
    height: 40vh;
    display: flex;
    float: left;
    flex-direction: column;
}

.texto-grupo .titulo-grupo {
    font-size: 4vw;
    color: black;
    text-align: left;
    margin-top: 5vh;
    margin-left: 2vw;
}

.texto-grupo .descricao-grupo {
    margin-left: 2vw;
    margin-right: 13vw;
    margin-top: 10vh;
    text-align: left;
}

.texto-grupo .descricao-grupo p {
    color: black;
}

.quem-somos {
    margin-top: 30vh;
    margin-bottom: 10vh;
    height: 70vh;
    width: 90%;
    background-color: #fcbb72;
}

.img-grupo {
    background-color: black;
    width: 45%;
    height: 70vh;
    display: flex;
    float: right;
}

.img-grupo img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.img-cima {
    position: relative;
    /* Para permitir que o gradiente fique sobre a imagem */
    height: 70vh;
    /* Defina a altura desejada */
    width: 100%;
    overflow: hidden;
    /* Para evitar que o conteúdo transborde */
}

.img-cima::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 25%, #efefef);
    z-index: 1;
    /* Coloca o gradiente acima da imagem */
}

.img-cima img {
    width: 100%;
    height: 100%;
    /* Use 100% para preencher a área da div */
    object-fit: cover;
    /* Mantém a proporção da imagem */
    z-index: 0;
    /* Coloca a imagem atrás do gradiente */
    position: relative;
    /* Para garantir que fique atrás do gradiente */
}


main {
    background-color: #efefef;
    display: flex;
    align-items: center;
    flex-direction: column;
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

/*estilos do carrossel */
body {
    background-color: rgb(240, 240, 240);
}


#carouselExample .carousel-item::before {
    content: '';
    background: linear-gradient(0deg, rgb(240, 240, 240) 50%, transparent 69%);
    display: block;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 120vh;
}
</style>
