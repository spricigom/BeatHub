<script setup></script>

<template>
    <header>
        <div class="esquerda">
            <RouterLink to="/">
                <img class="logo" src="@/assets/certa.png" alt="" />
            </RouterLink>

            <nav>
                <ul class="navegacao">
                    <li>
                        <RouterLink to="/Guitarra">Guitarra </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Baixo" id="amarelo">Baixo </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Pedais">Pedais </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Teclado" id="amarelo">Teclado </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Violão">Violão </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Bateria" id="amarelo">Bateria</RouterLink>
                    </li>

                </ul>
            </nav>
        </div>


        <div class="direita">
            <div class="login">
                <h6 id="amarelo">login</h6>
                <span class="pi pi-user" style="font-size: 1.5vw; color: #f48200;"></span>
            </div>
            <div class="busca">
                <input class="busca-texto" type="text" placeholder="Pesquise">
                <a class="busca-botao" href="#">
                    <span class="pi pi-search"></span>

                </a>
            </div>
            <!--
            <div class="compra-e-coracao">
                <RouterLink to="/Carrinho"><span class="pi pi-shopping-cart"></span> </RouterLink>
                <RouterLink to="/Favorito"><span class="pi pi-heart"></span> </RouterLink>

            </div>
            -->
        </div>


    </header>
</template>


<style scoped>
.busca {
background: #efefef;
border-radius: 40px;
height: 42px;
border: 1px solid #f48200;
padding-left: 1vw;
}

.busca-botao {
color: #f48200;
height: 40px;
width: 40px;
float: right;
border-radius: 50%;
background: #efefef;
display: flex;
justify-content: center;
align-items: center;
}

.busca-texto {
border: none;
background: none;
outline: none;
float: left;
padding: 0;
color: #f48200;
font-size: 16px;
line-height: 40px;
width: 6vw;
}
.busca ::placeholder{
    color: #f48200;
}
.login{    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 5.5vw;
}
.login h6{
    font-weight: 500;
    font-family: 'Josefin Sans', sans-serif;
    display: flex;
    position: relative;
    top: .5vh;
}
.direita{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 18vw;
    margin-right: 2vw;
    text-align: center;
    position: relative;
    bottom: 1vh;
}
.esquerda {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 38vw;
    margin-left: 3vw;
}

.logo {
    width: 5.5vw;
    cursor: pointer;
    bottom: 15px;
    position: relative;
    bottom: 1.5vh;
}





header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20vh;
    background-color: #efefef;
}

.navegacao {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.navegacao li {
    display: inline-block;
    padding: 0px 20px;
}

a {
    text-decoration: none;
    color: #000;
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



.compra-e-coracao .icones {
    margin-right: 1.5vw;
}
</style>