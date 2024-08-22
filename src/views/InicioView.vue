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
.carousel{
    margin-top: -5vh;
}
#carouselExample .carousel-item::before{
    content: "";
    background-image: linear-gradient( to top, white 40%,transparent); 

    display: block;
    position:absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
}
</style>

