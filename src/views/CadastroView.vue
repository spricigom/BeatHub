<script setup>
import { ref } from "vue";
import { supabase } from "../lib/supabaseClient";
//------------------------criação variaveis reativas------------------------//
const cpf = ref([]);
const name = ref([]);
const gender = ref([]);
const email = ref([]);
const datebirth = ref('');
const phonenumber = ref('');
const password = ref([]);
const passwordconfirmation = ref([]);
const message = ref('');

const insertData = async () => {
    if (!name.value || !cpf.value || !gender.value || !email.value ||
        !datebirth.value || !phonenumber.value || !password.value || !passwordconfirmation.value) {
        message.value = "Por favor, preencha todos os campos."
        return;
    }

    const { error: clientError } = await supabase
        .from('cadastro_cliente')
        .insert([{
            cpf: cpf.value,
            name: name.value,
            gender: gender.value,
            email: email.value,
            datebirth: datebirth.value,
            password: password.value,
            passwordconfirmation: passwordconfirmation.value,
            phonenumber: phonenumber.value
        }])
    if (clientError) {
        console.error('Erro ao cadastrar cliente:', clientError.message)
        message.value = `Erro ao cadastrar cliente: ${clientError.message}`
        return
    }
}


</script>

<template>

<HeaderComponente/>

    <main>
        <div class="esquerda">
            <div class="titulo">
                <h1>FAÇA O SEU CADASTRO!</h1>
            </div>
            <img src="@/assets/banda.png" alt="" id="banda">
            <div class="Beat">
                <h1>BEAT</h1>
            </div>
            <div class="Hub">
                <h1>HUB</h1>
            </div>
        </div>
        <div class="direita">
            <form @submit.prevent="insertData" class="cadastro">
                <div class="campo_cadastro nome">
                    <p class="titulo_cadastro" id="cabecalho">Nome completo</p>
                    <input class="input" type="text" v-model="name" placeholder="insira seu nome">
                </div>

                <div class="campo_cadastro data">
                    <p class="titulo_cadastro">Data de nascimento</p>
                    <input class="input" type="date" v-model="datebirth">
                </div>

                <p>Genero</p>

                <div class="genero">

                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="gender" name="flexRadioDefault"
                            id="flexRadioDefault1" value="Masculino">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Masculino
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="gender" name="flexRadioDefault"
                            id="flexRadioDefault2" value="Feminino">
                        <label class="form-check-label" for="flexRadioDefault2">
                            Feminino
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="gender" name="flexRadioDefault"
                            id="flexRadioDefault2" checked value="Prefiro nao informar">
                        <label class="form-check-label" for="flexRadioDefault2">
                            Prefiro não informar
                        </label>
                    </div>
                </div>

                <div class="campo_cadastro">
                    <p class="titulo_cadastro">CPF</p>
                    <input class="input" type="cpf" v-model="cpf" placeholder="___.___.___-__">
                </div>
                <div class="campo_cadastro">
                    <p class="titulo_cadastro">Telefone</p>
                    <input class="input" type="phonenumber" v-model="phonenumber" placeholder="(__) _____-____">
                </div>
                <div class="campo_cadastro">
                    <p class="titulo_cadastro">E-mail</p>
                    <input class="input" type="email" v-model="email" placeholder="Ex: joaozinho@gmail.com">
                </div>
                <div class="campo_cadastro">
                    <p class="titulo_cadastro">Senha</p>
                    <input class="input" type="password" v-model="password">
                </div>
                <div class="campo_cadastro">
                    <p class="titulo_cadastro">Confirmação de Senha</p>
                    <input class="input" type="password" v-model="passwordConfirmation">
                </div>

                <button type="submit">Criar Conta</button>

                <p>{{ message }}</p>

            </form>
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

/*estilos da esquerda */
.esquerda {
    background-color: #efefef;
    width: 55%;
    margin-top: 5vh;
}

.titulo {
    background: none;
    display: flex;
    justify-content: center;
    margin-top: 6vh;
}

.Beat {
    display: flex;
    justify-content: center;
    margin-top: 15vh;
    color: black;
    font-family: 'Josefin Sans', sans-serif;
}

.Beat h1 {
    font-size: 3vw;
    font-weight: 500;
}

.Hub {
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 2vh;
    color: #f48200;
    font-family: 'Josefin Sans', sans-serif;
}

.Hub h1 {
    font-size: 3vw;
    font-weight: 500;
}

.titulo h1 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 1000;
    font-size: 3vw;
    color: black;
}

#banda {
    width: 58vw;
    position: relative;
    margin-top: 2vh;
}

/*estilos da esquerda */



/*estilos da direita */
.direita {
    background: #f8bb75;
    width: 45%;
    border-radius: 1vw;
    margin-top: 5vh;
}

.cadastro {
    margin-left: 8vw;
    display: flex;
    flex-direction: column;
}

.direita .input {
    border: none;
    height: 8vh;
    width: 15vw;
    border-radius: .7vw;
}

.direita ::placeholder {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.1vw;
    font-weight: light;
    padding-left: 1vw;
}

.direita p {
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
    width: 6vw;
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
    margin-top: 7vh;
    margin-left: 5vw;
    margin-bottom: 5vh;
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