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
    </body>
    <main>
        <div class="esquerda">
            <div class="titulo">
                <h1>FAÇA O SEU CADASTRO!</h1>
            </div>
            <img src="@/assets/banda.png" alt="" id="banda">
        </div>
        <div class="direita">
            <form class="cadastro">
                <input type="text" placeholder="insira seu nome">
            </form>
        </div>
    </main>
</template>

<style scoped>
body{
    background: #efefef;
}
main{
  margin-top: -4vh;
  display: flex;
  background: #efefef;

}

/*estilos da esquerda */
.esquerda{
    background-color: #efefef;
    height: 100vh;
    width: 55%;
    margin-top: 5vh;
}

.titulo{
background: none;
display: flex;
justify-content: center;
margin-top: 6vh;
}
.titulo h1{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
    font-size: 3vw;
    color: black;
}
#banda{
    width: 58vw;
    position: relative;
    margin-top: 5vh;
}
/*estilos da esquerda */



/*estilos da direita */
.direita{
    background: #f8bb75;
    height: 100vh;
    width: 45%;
    border-radius: 1vw ;
    margin-top: 5vh;
}
.cadastro{
    margin-top: 5vh;
    position: relative;
    left: 8vw;
}
.direita input{
    border: none;
    height: 6vh;
    width: 20vw;
    border-radius: .7vw;
}
.direita ::placeholder{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1vw;
    font-weight: light;
}
/*estilos da direita */




/*estilos do header */
.logo {
    width: 8vw;
    cursor: pointer;
    position: relative;
    bottom: 15px
}

header input {

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

header ::placeholder {
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