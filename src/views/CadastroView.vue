<script setup>
import { reactive } from 'vue';
import HeaderComponente from '@/components/HeaderComponente.vue';
import { supabase } from '../lib/supabaseClient';

const novoUsuario = reactive({
  cpf: '',
  name: '',
  gender: '',
  email: '',
  number: '',
  datebirth: '',
  password: '',
  passwordconfirmation: '',
  message: '',
  cep: '',
  rua: '',
  numero: '',
  bairro: '',
  cidade: '',
});

function validarCPF(cpf) {
  const cpfNumeros = cpf.replace(/\D/g, ''); 
  return cpfNumeros.length === 11;
}

function validarTelefone(telefone) {
  const telefoneNumeros = telefone.replace(/\D/g, ''); 
  return telefoneNumeros.length >= 10 && telefoneNumeros.length <= 11; 
}

async function buscarEnderecoPorCEP() {
  if (novoUsuario.cep.length === 8) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${novoUsuario.cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        alert('CEP não encontrado!');
        return;
      }
      console.log(data);

      novoUsuario.rua = data.logradouro || '';
      novoUsuario.bairro = data.bairro || '';
      novoUsuario.cidade = data.localidade || '';
    } catch (error) {
      console.error('Erro ao buscar o endereço:', error);
      alert('Ocorreu um erro ao buscar o CEP');
    }
  }
}

async function cadastrarUsuario() {
  if (!validarCPF(novoUsuario.cpf)) {
    alert('CPF inválido! Certifique-se de que contém 11 dígitos numéricos.');
    return;
  }

  if (!validarTelefone(novoUsuario.number)) {
    alert('Número de telefone inválido! Certifique-se de que contém entre 10 e 11 dígitos.');
    return;
  }

  if (novoUsuario.password !== novoUsuario.passwordconfirmation) {
    alert('As senhas não coincidem!');
    return;
  }

  const { data: userData, error: userError } = await supabase
    .from('usuarios')
    .insert([
      {
        cpf: novoUsuario.cpf,
        name: novoUsuario.name,
        gender: novoUsuario.gender,
        email: novoUsuario.email,
        number: novoUsuario.number,
        datebirth: novoUsuario.datebirth,
        password: novoUsuario.password,
        message: novoUsuario.message,
        cep: novoUsuario.cep,
        rua: novoUsuario.rua,
        numero: novoUsuario.numero,
        bairro: novoUsuario.bairro,
        cidade: novoUsuario.cidade,
      },
    ]);

  if (userError) {
    alert('Erro ao cadastrar usuário!');
    return;
  }
  alert('Usuário cadastrado com sucesso!');
}
</script>

<template>
  <HeaderComponente />

  <main>
    <div class="left">
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

    <div class="right">
      <form class="cadastro" @submit.prevent="cadastrarUsuario">
        <div class="campo_cadastro nome">
          <p class="titulo_cadastro" id="cabecalho">Nome completo</p>
          <input class="input" type="text" v-model="novoUsuario.name" placeholder="insira seu nome" />
        </div>

        <div class="campo_cadastro data">
          <p class="titulo_cadastro">Data de nascimento</p>
          <input class="input" type="date" v-model="novoUsuario.datebirth"
            placeholder="insira sua data de nascimento" />
        </div>

        <p>Gênero</p>

        <div class="genero">
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="novoUsuario.gender" value="masculino"
              id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault1">Masculino</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="novoUsuario.gender" value="feminino"
              id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2">Feminino</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" v-model="novoUsuario.gender" value="prefiro não informar"
              id="flexRadioDefault3" />
            <label class="form-check-label" for="flexRadioDefault3">Prefiro não informar</label>
          </div>
        </div>

        <div class="campo_cadastro">
          <p class="titulo_cadastro">CPF</p>
          <input class="input" type="text" v-model="novoUsuario.cpf" placeholder="___.___.___-__" />
        </div>
        <div class="campo_cadastro">
          <p class="titulo_cadastro">E-mail</p>
          <input class="input" type="email" v-model="novoUsuario.email" placeholder="Ex: joaozinho@gmail.com" />
        </div>
        <div class="campo_cadastro">
          <p class="titulo_cadastro">Telefone</p>
          <input class="input" type="phonenumber" v-model="novoUsuario.number" placeholder="Digite seu telefone" />
        </div>
        <div class="campo_cadastro">
          <p class="titulo_cadastro">Senha</p>
          <input class="input" type="password" v-model="novoUsuario.password" />
        </div>
        <div class="campo_cadastro">
          <p class="titulo_cadastro">Confirmação de Senha</p>
          <input class="input" type="password" v-model="novoUsuario.passwordconfirmation" />
        </div>
        <div>
          <p class="titulo_cadastro">CEP</p>
          <input class="input" type="text" v-model="novoUsuario.cep" @blur="buscarEnderecoPorCEP"
            placeholder="Digite o CEP" />
        </div>
        <div class="campo_cadastro">
          <p class="titulo_cadastro">Rua</p>
          <input class="input" type="text" v-model="novoUsuario.rua" />
        </div>
        <div class="campo_cadastro">
          <p class="titulo_cadastro">Número e/ou bloco</p>
          <input class="input" type="text" v-model="novoUsuario.numero" />
        </div>
        <div class="campo_cadastro">
          <p class="titulo_cadastro">Bairro</p>
          <input class="input" type="text" v-model="novoUsuario.bairro" />
        </div>
        <div class="campo_cadastro">
          <p class="titulo_cadastro">Cidade</p>
          <input class="input" type="text" v-model="novoUsuario.cidade" />
        </div>

        <button type="submit">Criar Conta</button>
      </form>
    </div>
  </main>
</template>


<style scoped></style>

<style scooped>
body {
  background: white;
  font-family: 'Josefin Sans', sans-serif;
}

main {
  display: flex;
  background: white;
}

@media (max-width:1087px){
    .right .input{
      width:20vh;
    }
}
@media (max-width:799px){

  .right .input{
    width:13vh;
    box-sizing: border-box;
    padding: 3px;
  }
  }
.left {
  background-color: white;
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

.right {
  background: #f8bb75;
  width: 45%;
}

.cadastro {
  margin-left: 8vw;
  display: flex;
  flex-direction: column;
}

.right .input {
  border: none;
  height: 8vh;
  width: 15vw;
  border-radius: 0.7vw;
  padding-left: 1vw;
}

.right ::placeholder {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.1vw;
  font-weight: light;
}

.right p {
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

#amarelo {
  color: #f48200;
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