<script setup>

import HeaderComponente from '@/components/HeaderComponente.vue';

</script>

<template>
 
<HeaderComponente/>
    <main>

        <div class="esquerda">
            <form class="cadastro">
                <div class="campo_cadastro nome">
                    <p class="titulo_cadastro" id="cabecalho">Nome completo</p>
                    <input class="input" type="text" placeholder="insira seu nome">
                </div>

                <div class="campo_cadastro data">
                    <p class="titulo_cadastro">Data de nascimento</p>
                    <input class="input" type="date">
                </div>

                <div class="campo_cadastro">
                    <p class="titulo_cadastro">CPF</p>
                    <input class="input" type="number" placeholder="___.___.___-__">
                </div>
                <div class="campo_cadastro">
                    <p class="titulo_cadastro">Telefone</p>
                    <input class="input" type="number" placeholder="(__) _____-____">
                </div>
                <div class="campo_cadastro">
                    <p class="titulo_cadastro">E-mail</p>
                    <input class="input" type="email" placeholder="Ex: joaozinho@gmail.com">
                </div>
                <div class="campo_cadastro">
                    <p class="titulo_cadastro">Senha</p>
                    <input class="input" type="password">
                </div>
                <div class="campo_cadastro">
                    <p class="titulo_cadastro">CTPS</p>
                    <input class="input" type="text" placeholder="Carteira de trabalho">
                </div>
                <div class="campo_cadastro">
                    <p class="titulo_cadastro">Código da empresa</p>
                    <input class="input" type="text">
                </div>
                <button>Criar Conta</button>
            </form>
        </div>

        <div class="direita">
                <h1 class="titulo">LOGIN FUNCIONÁRIO</h1>           

            <p class="subtitulo">(Apenas pessoas autorizadas)</p>

            <img src="@/assets/Funcionarios.png" alt="" id="funcionaria">
            

        </div>
    </main>
       
</template>

<style scoped>
body {
    background: #efefef;
}

main {
    margin-top: -4vh;
    display: flex;
    background: #efefef;

}

/*estilos da direita */
.direita {
    background-color: #efefef;
    width: 55%;
    margin-top: 5vh;
    text-align: center;
}



.titulo {    
    margin-top: 6vh;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 1000;
    font-size: 3vw;
    color: black;
}
.subtitulo{
    color: black;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 1000;
    font-size: 1.2vw;
}
#funcionaria {
    width: 50vw;
}

/*estilos da direita */



/*estilos da esquerda */
.esquerda {
    background: #f8bb75;
    width: 45%;
    border-radius: 1vw;
    margin-top: 5vh;
}

.cadastro {
    margin-left: 6vw;
    display: flex;
    flex-direction: column;
}

.esquerda .input {
    border: none;
    height: 8vh;
    width: 15vw;
    border-radius: .7vw;
}

.esquerda ::placeholder {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.1vw;
    font-weight: light;
    padding-left: 1vw;
}

.esquerda p {
    font-family: 'Josefin Sans', sans-serif;
    color: black;
    margin-bottom: -.1vh;
    font-weight: 650;
    font-size: 1.2vw;
}

.campo_cadastro {
    margin-bottom: 2vh;
}

#cabecalho {
    margin-top: 3vh;
}

.nome .input {
    width: 33vw;
}

.data .input {
    width: 8vw;
}

.genero {
    width: 70%;
    display: flex;
    flex-direction: row;
    margin-bottom: 2vh;
    justify-content: space-between;
}

.genero input {
    background-color: #D9D9D9;
}

.genero :checked {
    background-color: #f48200;
    border: #f8bb75;
}

label {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
}

button {
    border: 0;
    background-color: #2C2B2B;
    color: #f48200;
    width: 20vw;
    height: 6vh;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    border-radius: 3vw;
    margin-top:1vh;
    margin-left: 5vw;
    margin-bottom: 5vh;
}

/*estilos da esquerda */




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