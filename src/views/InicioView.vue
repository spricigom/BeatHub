<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useProdutoStore } from '@/stores/produto';
import NavFooter from '@/components/NavFooter.vue';
import ListHome from '@/components/ListHome.vue';
import HeaderComponente from '@/components/HeaderComponente.vue';


const produtoStore = useProdutoStore();
const selectedImage = ref('image1'); // Armazena qual imagem está selecionada


onMounted(() => {
  produtoStore.buscarTodosOsProdutos();
});


// Função para selecionar a imagem
const selectImage = (image) => {
  console.log("Selected image:", image); // Log para depuração
  selectedImage.value = image;
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




      <div class="fundo-v-if">

        <div class="right">
          <!-- Exibição condicional das imagens -->
          <div class="v-if-cima" v-if="selectedImage === 'image1'">
            <div class="texto-v-if">
              <div class="titulo-v-iv">
                <h2>PAGAMENTOS</h2>
              </div>

              <p class="descricao-v-if">Nossas formas de pagamento variam em pix e cartão em nossa loja fisica.</p>
              <p class="descricao-v-if">Sem taxas por venda!</p>
            </div>

            <div class="img-v-if">
              <img src="@/assets/logo.png" alt="Imagem 1" style="max-height: 150px; border-radius: 10px;">
            </div>
          </div>

          <div class="v-if-cima"  v-if="selectedImage === 'image2'">
            <div class="texto-v-if">
              <div class="titulo-v-iv">
                <h2>PAGAMENTOS</h2>
              </div>

              <p class="descricao-v-if">Nossas formas de pagamento variam em pix e cartão em nossa loja fisica.</p>
              <p class="descricao-v-if">Sem taxas por venda!</p>
            </div>

            <div class="img-v-if">
              <img src="@/assets/teclado.png" alt="Imagem 2" style="max-height: 150px; border-radius: 10px;">            </div>
          </div>

          <div class="v-if-cima" v-if="selectedImage === 'image3'" >
            <div class="texto-v-if">
              <div class="titulo-v-iv">
                <h2>PAGAMENTOS</h2>
              </div>

              <p class="descricao-v-if">Nossas formas de pagamento variam em pix e cartão em nossa loja fisica.</p>
              <p class="descricao-v-if">Sem taxas por venda!</p>
            </div>

            <div class="img-v-if">
              <img src="@/assets/teclado1-2.png" alt="Imagem 3"
            style="max-height: 150px; border-radius: 10px;">
            </div>
          </div>


          
          
          
        </div>
        <div class="left">
          <div class="buttons">
            <!-- Botões que alteram a imagem exibida -->
            <button @click="selectImage('image1')">Imagem 1</button>
            <button @click="selectImage('image2')">Imagem 2</button>
            <button @click="selectImage('image3')">Imagem 3</button>
          </div>
        </div>
      </div>


      <ListHome :produtos="produtoStore.produtos" tipo="home" />


    </main>


    <NavFooter />
  </body>
</template>


<style scoped>


.img-v-if{
  background-color: red;
  width: 12vw;
  height: 26vh;
  position: relative;
  top: 13vh;
  right: 15vw;
  z-index: 9999;
}
.img-v-if img {
  width: 100%; /* A largura da imagem será igual à largura da div */
  height: 100%; /* A altura da imagem será igual à altura da div */
  object-fit: contain; /* A imagem será redimensionada para caber completamente na div sem distorção */
  border-radius: 10px; /* Mantém o arredondamento */
}
.descricao-v-if {
  width: 45vw;
  font-weight: 400;
  font-family: 'Kanit', sans-serif;
  font-size: 1.3vw;
  color: black;
}

.titulo-v-iv {
  margin-top: 5vh;
  margin-bottom: 12vh;
}

.titulo-v-iv h2 {
  font-family: 'Kameron', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 2vw;
}

.v-if-cima {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90vw;
  height: 30vh;
  padding: 2vw;
}

.fundo-v-if {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faad56;
  width: 100%;
  height: 70vh;
  padding-left: 20vw;
  padding-right: 20vw;
  box-sizing: border-box;
}


.left {
  color: white;
  position: relative;
  right: 34vw;
  top: 10vh;
}


.left p {
  margin: 0 0 10px;
  font-size: 18px;
}


.left .buttons {
  display: flex;
  gap: 10px;
}


.left button {
  background-color: #E7E7E7;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: .3s;
}


.left button:hover {
  background-color: #ff6f00;
  color: white;
}


.right img {
  max-height: 150px;
  border-radius: 10px;
}


body {
  margin: 0;
  font-family: Arial, sans-serif;
}

main {
  margin: 0;
  padding: 0
}


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


.localizacao-content p {
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
}


.icones {
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
