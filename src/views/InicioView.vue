<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useProdutoStore } from '@/stores/produto';
import NavFooter from '@/components/NavFooter.vue';
import ListHome from '@/components/ListHome.vue';
import HeaderComponente from '@/components/HeaderComponente.vue';

const produtoStore = useProdutoStore();
const mostrarLocalizacao = ref(false);

onMounted(() => {
    produtoStore.buscarTodosOsProdutos();
});

const mostrarDivLocalizacao = () => {
  mostrarLocalizacao.value = true;
};

const esconderDivLocalizacao = () => {
  mostrarLocalizacao.value = false;
};
</script>

<template>
  <body>
    <HeaderComponente />

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
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col categorias">
            <div class="texto-categoria">
              <h5>Faça seu Login</h5>
            </div>
            <RouterLink to="/Login">
              <img src="@/assets/user.png" alt="" />
            </RouterLink>
          </div>

          <div class="col categorias">
            <div class="texto-categoria">
              <h5>Mais alugados</h5>
              <a href="#mais-alugados"><img src="@/assets/item.png" alt="" /></a>
            </div>
          </div>

          <div class="col categorias">
            <div class="texto-categoria">
              <h5>Membros</h5>
              <RouterLink to="/Membros"><img src="@/assets/membros.png" alt="" /></RouterLink>
            </div>
          </div>

          <div class="col categorias">
            <div class="texto-categoria">
              <h5>Localização</h5>
            </div>
            <img
              src="@/assets/local.png"
              alt="Localização"
              @click="mostrarDivLocalizacao" 
            />
          </div>
        </div>
      </div>

      <div v-if="mostrarLocalizacao" class="localizacao-modal">
        <div class="modal-overlay" @click="esconderDivLocalizacao"></div> <!-- Fecha ao clicar no fundo -->
        <div class="localizacao-content">
          <h2>Endereço</h2>
          <p>Rua dos Sonhos, 42, Centro - Joinville</p>
          <h6 id="amarelo" >RETIRADA APENAS NA LOJA!</h6>
        </div>
      </div>

      <h2 id="amarelo" style="margin-left: 10vw;position: relative;bottom: 1vh;">Os mais alugados</h2>
      <div class="campo">
        <div class="mais-alugados text-center">
          <div class="compra-e-coracao2">
            <img src="@/assets/coracao.png" alt="" class="icones" />
            <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
          </div>

          <img src="@/assets/ukulele.png" alt="" class="produtos-MaisAlugados" />
          <h2>Ukulele Concert Us23 Spring</h2>

          <div class="conteudo1">
            <img src="@/assets/estrelas.png" alt="" class="estrelas" />
            <div class="avaliacao">
              <h6>130 avaliações</h6>
            </div>
          </div>

          <div class="conteudo2">
            <div class="preco">
              <h5>R$ 17,00 por mês</h5>
            </div>
            <img src="@/assets/compartilhe.png" alt="" class="compartilhe" />
          </div>
        </div>

        <div class="mais-alugados text-center">
          <div class="compra-e-coracao2">
            <img src="@/assets/coracao.png" alt="" class="icones" />
            <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
          </div>

          <img src="@/assets/violao.png" alt="" class="produtos-MaisAlugados" />
          <h2>Violão Di Giorgio Master</h2>

          <div class="conteudo1">
            <img src="@/assets/estrelas.png" alt="" class="estrelas" />
            <div class="avaliacao">
              <h6>130 avaliações</h6>
            </div>
          </div>

          <div class="conteudo2">
            <div class="preco">
              <h5>R$ 17,00 por mês</h5>
            </div>
            <img src="@/assets/compartilhe.png" alt="" class="compartilhe" />
          </div>
        </div>

        <div class="mais-alugados text-center">
          <div class="compra-e-coracao2">
            <img src="@/assets/coracao.png" alt="" class="icones" />
            <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
          </div>

          <img src="@/assets/guitarra.png" alt="" class="produtos-MaisAlugados" />
          <h2>Guitarra elétrica SG</h2>

          <div class="conteudo1">
            <img src="@/assets/estrelas.png" alt="" class="estrelas" />
            <div class="avaliacao">
              <h6>130 avaliações</h6>
            </div>
          </div>

          <div class="conteudo2">
            <div class="preco">
              <h5>R$ 17,00 por mês</h5>
            </div>
            <img src="@/assets/compartilhe.png" alt="" class="compartilhe" />
          </div>
        </div>

        <div class="mais-alugados text-center">
          <div class="compra-e-coracao2">
            <img src="@/assets/coracao.png" alt="" class="icones" />
            <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
          </div>

          <img src="@/assets/baixo.png" alt="" class="produtos-MaisAlugados" />
          <h2>Baixo Strinberg JBS50</h2>

          <div class="conteudo1">
            <img src="@/assets/estrelas.png" alt="" class="estrelas" />
            <div class="avaliacao">
              <h6>130 avaliações</h6>
            </div>
          </div>

          <div class="conteudo2">
            <div class="preco">
              <h5>R$ 17,00 por mês</h5>
            </div>
            <img src="@/assets/compartilhe.png" alt="" class="compartilhe" />
          </div>
        </div>
      </div>
      <ListHome :produtos="produtoStore.produtos" tipo="home"/>  
    </main>

    <NavFooter />
  </body>
</template>

<style scoped>
body {
  position: relative;
}

.localizacao-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);  
  z-index: -1;
}

.localizacao-content {
  background-color: rgb(202, 202, 202);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  z-index: 1;
  font-family: 'Josefin Sans', sans-serif;
}
.localizacao-content p{
    color: black;
}
.container {
    position: relative;
    bottom: 17vh;
}
.compra-e-coracao2 {
    display: flex;
    justify-content: space-between;
    margin-left: 1vw;
    margin-top: 3vh;
    margin-right: 1vw;
}
.conteudo2 {
    margin-top: 5vh;
}.icones {
    width: 1.5vw;
}
.compra-e-coracao2 {
    display: flex;
    justify-content: space-between;
    margin-left: 1vw;
    margin-top: 3vh;
    margin-right: 1vw;
}

.preco {
    display: flex;
    float: left;
    margin-left: 3vw;
    font-family: 'Inter', 'sans serif';
}



.compartilhe {
    display: flex;
    float: right;
    margin-right: 3vw;
    width: 1.2vw;
}




.estrelas {
    display: flex;
    float: left;
    margin-left: 2.5vw;
}



.avaliacao {
    display: flex;
    float: right;
    margin-right: 2.5vw;
}


.produtos-MaisAlugados {
    width: 130px;
    height: 321px;
}

.mais-alugados {
    height: 64vh;
    width: 19vw;
    background-color: white;
    border-radius: 1vw;

}

.mais-alugados h2 {
    margin-top: 2vh;
    font-size: 1.3vw;
    font-family: 'Inter', 'sans-serif';
}

.campo {
    background-color: white;
    height: 66vh;
    width: 80vw;
    transform: translate(-50%, -50%);
    margin-top: 33vh;
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 50%;
    box-shadow: 1px 1px 5px 5px rgb(150, 146, 146);
    border-radius: 1vw;

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

.carousel {
    margin-top: -5vh;
}

#carouselExample .carousel-item::before {
    content: '';
    background: linear-gradient(0deg, rgb(240, 240, 240) 50%, transparent 69%);
    display: block;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 120vh;
}

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
    bottom: 6.5vh;
    box-shadow: 1px 1px 5px 5px rgb(150, 146, 146);
    justify-content: center;
}

.categorias img {
    width: 10vw;
    height: 10vw;
    margin-top: 0.5vw;
    align-items: center;
}

.texto-categoria {
    margin-top: 1vw;
    font-family: 'Josefin Sans', sans-serif;
    color: #f48200;
    font-size: 1.8vh;
}
</style>