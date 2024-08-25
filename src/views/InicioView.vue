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

            <p><img src="@/assets/lugar-colocar.png" alt="" class="icones" />Selecione sua regiao</p>

            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="O que você precisa?..."
                    aria-label="Search" />
            </form>

            <div class="compra-e-coracao">
                <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
                <img src="@/assets/coracao.png" alt="" class="icones" />
            </div>
        </header>
        <hr class="hr" />

        <main>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="@/assets/instrumentos.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/instrumentos.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/instrumentos.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col categorias ">
                        <div class="texto-categoria">
                            <h5>Faça seu Login</h5>
                        </div>
                        <img src="@/assets/user.png" alt="">
                    </div>

                    <div class="col categorias ">
                        <div class="texto-categoria">
                            <h5>Mais alugados</h5>
                            <img src="@/assets/item.png" alt="">
                        </div>
                    </div>

                    <div class="col categorias ">
                        <div class="texto-categoria">
                            <h5>Sua localização</h5>
                            <img src="@/assets/local.png" alt="">
                        </div>
                        
                    </div>

                    <div class="col categorias ">
                        <div class="texto-categoria">
                            <h5>Categorias</h5>
                        </div>
                        <img src="@/assets/categoria.png" alt="">
                    </div>
                </div>
            </div>
            <div class="campo">


            </div>
        </main>

        <footer></footer>
    </body>
</template>

<style scoped>
* {
    padding: 0;
}

/*estilos do header */
.logo {
    width: 8vw;
    cursor: pointer;
}

input {
    background-color: #efefef;
    border: 1px solid #f48200;
    width: 17vw;
    border-radius: 3vw;
    position: relative;
    left: 7vw;
}

p {
    position: relative;
    left: 5vw;
    font-family: 'Inter', sans-serif;
    color: #595959;
    font-size: 2vh;
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
    color: #000000;
    position: relative;
    bottom: 5vh;
}

.icones {
    width: 1.5vw;
}

.compra-e-coracao {
    position: relative;
    left: 7vw;
}

.compra-e-coracao .icones {
    margin-right: 1.5vw;
}

/*estilos do carrossel */
body {
    background-color: rgb(240, 240, 240);
}
.carousel {
    margin-top: -5vh;
}

#carouselExample .carousel-item::before {
    content: "";
    background: linear-gradient(0deg, rgb(240, 240, 240) 50%, transparent 69%);
    display: block;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 120vh;
}


/*Categorias em cima do carrossel*/
.categorias {
    height: 35vh;
    width: 10vw;
    margin-left: 4vw;
    margin-right: 4vw;
    background-color: white;
    border-radius: 1vw;
    padding: 1vw;
    cursor: pointer;
    display: flex;
    display: inline-block;
    position: relative;
    bottom: 25vh;
    margin-bottom: -10vw;
    box-shadow: 1px 1px 5px 5px rgb(150, 146, 146);
    justify-content: center;
}

.categorias img{
    width: 10vw;
    height: 10vw;
    margin-top: .5vw;
    align-items: center;
}

.texto-categoria {
    margin-top: 1vw;
    font-family: "Josefin Sans", sans-serif;
    color: #f48200;
    font-size: 1.8vh;
}

</style>
