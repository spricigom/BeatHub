<script setup>
import HeaderComponente from '@/components/HeaderComponente.vue'
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'

//------------------------criação variaveis reativas------------------------//

const novoUsuario = reactive({
    cpf: '',
    name: '',
    gender: '',
    email: '',
    datebirth: '',
    password: '',
    passwordconfirmation:'',
    message: '',
})

const telefoneUsuario = reactive({
DDD: '',
DDI: '',
numero: '',

})

const insertData = async () => {
    if (
        !name.value ||
        !cpf.value ||
        !gender.value ||
        !email.value ||
        !datebirth.value ||
        !password.value ||
        !passwordconfirmation.value
    ) {
        message.value = 'Por favor, preencha todos os campos.'
        return
    }

    const { error: clientError } = await supabase.from('cliente').insert([
        {
            cpf: cpf.value,
            name: name.value,
            gender: gender.value,
            email: email.value,
            datebirth: datebirth.value,
            password: password.value,
            passwordconfirmation: passwordconfirmation.value,
        }
    ])
    if (clientError) {
        console.error('Erro ao cadastrar cliente:', clientError.message)
        message.value = `Erro ao cadastrar cliente: ${clientError.message}`
        return
    }

    const { error: telefoneError } = await supabase.from(telefone).insert([
        {
            id: id.value,
            ddi: ddi.value,
            ddd: ddd.value,
            telefone: telefone.value
        }
    ])

    if (telefoneError) {
        console.error('Erro ao cadastrar telefone:', telefoneError.message)
        message.value = `Erro ao cadastrar telefone: ${telefoneError.message}`
        return
    }

    if (!id.value || !ddi.value || !ddd.value || !telefone.value) {
        message.value = 'Por favor, preencha todos os campos.'
        return
    }

    if (!CEP.value || !rua.value || !num.value || !bairro.value || !cidade.value) {
        message.value = 'Por favor, preencha todos os campos.'
        return
    }

    const { error: enderecoError } = await supabase.from('endereco').insert([
        {
            CEP: CEP.value,
            rua: rua.value,
            num: num.value,
            bairro: bairro.value,
            cidade: cidade.value
        }
    ])

    if (!CEP.value || !rua.value || !num.value || !bairro.value || !cidade.value) {
        message.value = 'Por favor, preencha todos os campos.'
        return
    }

    if (enderecoError) {
        console.error('Erro ao cadastrar endereço:', enderecoError.message)
        message.value = `Erro ao cadastrar endereço: ${enderecoError.message}`
        return
    }
}
</script>

<template>
    <HeaderComponente />

    <main>
        <div class="esquerda">
            <div class="titulo">
                <h1>FAÇA O SEU CADASTRO!</h1>
            </div>
            <img src="@/assets/banda.png" alt="" id="banda" />
            <div class="Beat">
                <h1>BEAT</h1>
            </div>
            <div class="Hub">
                <h1>HUB</h1>
            </div>
        </div>

        <div class="direita">
            <form class="cadastro" @submit="insertData">
                <div class="campo_cadastro nome">
                    <p class="titulo_cadastro" id="cabecalho">Nome completo</p>
                    <input class="input" type="text" v-model="novoUsuario.name" placeholder="insira seu nome" />
                </div>

                <div class="campo_cadastro data">
                    <p class="titulo_cadastro">Data de nascimento</p>
                    <input class="input" type="date" v-model="datebirth" placeholder="insira sua data de nascimento" />
                </div>

                <p>Genero</p>

                <div class="genero">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="gender" name="flexRadioDefault"
                            id="flexRadioDefault1" />
                        <label class="form-check-label" value="masculino" for="flexRadioDefault1">
                            Masculino
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="gender" name="flexRadioDefault"
                            id="flexRadioDefault2" />
                        <label class="form-check-label" value="feminino" for="flexRadioDefault2">
                            Feminino
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="gender" name="flexRadioDefault"
                            id="flexRadioDefault2" checked />
                        <label class="form-check-label" value="prefiro não informar" for="flexRadioDefault2">
                            Prefiro não informar
                        </label>
                    </div>
                </div>

                <div class="campo_cadastro">
                    <p class="titulo_cadastro">CPF</p>
                    <input class="input" type="number" v-model="cpf" placeholder="___.___.___-__" />
                </div>
                <div class="campo_cadastro">
                    <p class="titulo_cadastro">E-mail</p>
                    <input class="input" type="email" v-model="email" placeholder="Ex: joaozinho@gmail.com" />
                </div>
                <div class="campo_cadastro">
                    <p class="titulo_cadastro">Senha</p>
                    <input class="input" type="password" v-model="password" />
                </div>
                <div class="campo_cadastro">
                    <p class="titulo_cadastro">Confirmação de Senha</p>
                    <input class="input" type="password" v-model="passwordconfirmation" />
                </div>

                <div class="campo_cadastro nome">
                    <p class="titulo_cadastro">DDD</p>
                    <input class="input" type="number" v-model="ddd" placeholder="informe seu DDD" />
                </div>

                <div class="campo_cadastro nome">
                    <p class="titulo_cadastro">DDI</p>
                    <input class="input" type="number" v-model="ddi" placeholder="informe seu DDI" />
                </div>

                <div class="campo_cadastro nome">
                    <p class="titulo_cadastro">Telefone</p>
                    <input class="input" type="number" v-model="telefone" placeholder="informe seu telefone" />
                </div>

                <div class="campo_cadastro nome">
                    <p class="titulo_cadastro">CEP</p>
                    <input class="input" type="number" v-model="CEP" placeholder="informe seu CEP" />
                </div>

                <div class="campo_cadastro nome">
                    <p class="titulo_cadastro">Rua</p>
                    <input class="input" type="text" v-model="rua" placeholder="informe sua rua" />
                </div>

                <div class="campo_cadastro nome">
                    <p class="titulo_cadastro">Número</p>
                    <input class="input" type="number" v-model="num" placeholder="informe seu número" />
                </div>

                <div class="campo_cadastro nome">
                    <p class="titulo_cadastro">Bairro</p>
                    <input class="input" type="text" v-model="bairro" placeholder="informe seu bairro" />
                </div>

                <div class="campo_cadastro nome">
                    <p class="titulo_cadastro">Cidade</p>
                    <input class="input" type="text" v-model="cidade" placeholder="informe seu município" />
                </div>

                <button type="submit">Criar Conta</button>
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
    border-radius: 0.7vw;
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
    margin-bottom: -0.1vh;
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
    background-color: #d9d9d9;
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
    background-color: #2c2b2b;
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
    bottom: 15px;
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
