

<script setup></script>

<template>
    <header>
            <nav>
                <ul class="navegacao">
                    <li><RouterLink to="/Guitarra">Guitarra </RouterLink></li>
                    <li><RouterLink to="/Baixo" id="amarelo">Baixo </RouterLink></li>
                    <li><RouterLink to="/Pedais">Pedais </RouterLink></li>
                    <li><RouterLink to="/Teclado" id="amarelo">Teclado </RouterLink></li>
                    <li><RouterLink to="/Violão">Violão </RouterLink></li>
                    <li><RouterLink to="/Bateria" id="amarelo">Bateria</RouterLink></li>
                   
                </ul>
            </nav>
            <RouterLink to="/">
                <img class="logo" src="@/assets/certa.png" alt="" />
            </RouterLink>

            
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="O que você precisa?..." aria-label="Search"
                    style=" background-color: #efefef; border: 1px solid #f48200; width: 17vw; border-radius: 300px;" />
            </form>
            <img src="@/assets/lupa.png" alt=""
                style="width: 1vw; display: flex; position: relative;  bottom: 1vh;">

            <div class="compra-e-coracao">
                 <RouterLink to="/Carrinho"><img src="@/assets/carrinho-de-compras.png" alt="" class="icones"   /></RouterLink>
                 <RouterLink to="/Favorito"><img src="@/assets/coracao.png" alt="" class="icones" /> </RouterLink>    
            </div>
        </header>
</template>


<style scoped>
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

.regiao{
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
    width: 32vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
}</style>