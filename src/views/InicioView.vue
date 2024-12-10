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

  
    <main>
      <h2 id="amarelo" style="margin-left: 10vw;position: relative;bottom: 1vh;">Os mais alugados</h2>
      <div class="campo">
        <div class="mais-alugados text-center" id="mais-alugados">
          <div class="compra-e-coracao2">
            <img src="@/assets/coracao.png" alt="" class="icones" />
            <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
          </div>

          <img src="@/assets/ukulele.png" alt="" class="produtos-MaisAlugados" />
          <h2>Ukulele Concert Us23 Spring</h2>

          <div class="conteudo2">
            <div class="preco">
              <h5>R$ 20,00 por mês</h5>
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

          <div class="conteudo2">
            <div class="preco">
              <h5>R$ 25,00 por mês</h5>
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

          <div class="conteudo2">
            <div class="preco">
              <h5>R$ 38,00 por mês</h5>
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

          <div class="conteudo2">
            <div class="preco">
              <h5>R$ 27,00 por mês</h5>
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
  padding: 4vw;
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
    margin-top: 2vh;
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

    border-radius: 1vw;

}

* {
    padding: 0;
}

/*estilos do header */





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