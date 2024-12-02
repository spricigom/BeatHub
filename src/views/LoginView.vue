<script setup>
import HeaderComponente from '@/components/HeaderComponente.vue';
import NavFooter from '@/components/NavFooter.vue';

</script>

<template>

    <body>
        <HeaderComponente/>
        
        <hr class="hr" />
        <main>
            <div class="pintura">
                <img src="@/assets/pintura.jpg" alt="">
            </div>
            <div class="gradiente1">

            </div>
            <div class="gradiente2">

            </div>

            <div class="login">
                <h2>Fazer Login</h2>
                <div class="email_e_senha">
                    <form>
                        <input type="email" placeholder="e-mail" class="input-underline">
                        <input type="password" placeholder="senha" class="input-underline">
                    </form>
                </div>
                <div class="pergunta">
                    <p>Não é nosso cliente ainda? <br>Faça seu <RouterLink to="/Cadastro">cadastro! </RouterLink></p>
                    
                   
                </div>
                <button>Entrar</button>


            </div>
        </main>



       
<NavFooter/>
    </body>
</template>


<style scoped>

.login button{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 10vw;
    margin-top: 2vh;
}
.pergunta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}

.pergunta p {
    text-align: center;
    color: #000;
    font-family: 'Josefin Sans', sans-serif;
    margin-bottom: 0;
}

.pergunta a {
    color: #f48200;
    margin-top: 1vh;
}

.login h2 {
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    margin-top: 3vh;
    font-size: 1.2vw;

}

.email_e_senha {
    margin-top: 5vh;
    display: flex;
    text-align: center;
}

.input-underline {
    border: none;
    border-bottom: 1px solid #858585;
    outline: none;
    padding: 5px;
    width: 29vw;
    font-size: 16px;
    transition: .2s ease;
    background-color: #c9c9c9;
    margin-bottom: 5vh;

}

.input-underline:focus {
    border-bottom: 1px solid #f48200;

}

.login {
    background-color: #c9c9c9;
    width: 35vw;
    height: 50vh;
    display: flex;
    position: relative;
    bottom: 230vh;
    left: 25vw;
    z-index: 1;
    border-radius: 1.3vw;
    flex-direction: column;
    margin-bottom: -230vh;

}

.login ::placeholder {
    color: #000;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.4vw;

}






.gradiente1 {
    position: relative;
    /* Para permitir que o gradiente fique sobre a imagem */
    height: 80vh;
    /* Defina a altura desejada */
    width: 70%;
    overflow: hidden;
    /* Para evitar que o conteúdo transborde */
    position: relative;
    bottom: 60vh;
    right: 15vw;
    

}

.gradiente1::before {
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

.gradiente2 {
    position: relative;
    /* Para permitir que o gradiente fique sobre a imagem */
    height: 80vh;
    /* Defina a altura desejada */
    width: 70%;
    overflow: hidden;
    /* Para evitar que o conteúdo transborde */
    position: relative;
    bottom: 160vh;
    right: 15vw;

}

.gradiente2::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, transparent 25%, #efefef);
    z-index: 1;
    /* Coloca o gradiente acima da imagem */
}




.pintura {
    position: relative;
    /* Para permitir que o gradiente fique sobre a imagem */
    height: 80vh;
    /* Defina a altura desejada */
    width: 70%;
    overflow: hidden;
    /* Para evitar que o conteúdo transborde */
    position: relative;
    right: 15vw;
}

.pintura::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent 25%, #efefef);
    z-index: 1;
    /* Coloca o gradiente acima da imagem */
}

.pintura img {
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


#texto_botao {
    color: #f48200;
    font-size: 1.2vw;
    position: relative;
    top: 1vh;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
}

button {
    height: 5vh;
    width: 15vw;
    background-color: #2C2B2B;
    color: white;
    border: 0;
    cursor: pointer;
    border-radius: 40px;
    font-family: 'Josefin Sans', sans-serif;

}

.carrinho-e-texto {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-top: 10vh;
}

.carrinho-e-texto p {
    color: #000000;
    font-weight: 700;
    font-size: 1.8vw;
    font-family: 'Josefin Sans', sans-serif;
}

#carrinho {
    width: 16vw;
    opacity: 0.8;
}

main {
    height: 320vh;
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

header input {

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
</style>
