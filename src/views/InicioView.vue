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

      <div class="background-container">
        <img src="@/assets/violinos.jpeg" alt="Background Image" class="background-image" />
        <div class="overlay">
          <div class="overlay-text">
            <h1>BEM VINDO A <br><span id="amarelo">Beat Hub</span></h1>
            <h4>Alugue os melhores produtos por preços baixissimos</h4>
            <button>
              <h4><RouterLink to="/Login">iniciar sessão</RouterLink> </h4>
            </button>
          </div>
        </div>
      </div>

      <div class="passos">
        <div class="esquerda">
          <div class="img-passos">
            <img src="@/assets/baixista.avif" alt="">
          </div>
        </div>
        <hr id="vertical">
        <div class="direita">
          <div class="texto-passos">
            <h2>
              Siga os passos a seguir e alugue seu instrumento
            </h2>
            
            <ul>
              <li><span class="numeros">1</span> Escolha seu  instrumento selecionado e adicione em seu carrinho.</li>
              <li><span class="numeros">2</span>Faça o seu login na Beathub.</li>
              <li><span class="numeros">3</span>Confira a forma de pagamento.</li>
              <li><span class="numeros">4</span>Confira o endereço da loja.</li>
              <li><span class="numeros">5</span>Pronto, agora você já pode retirar seu instrumento!</li>
            </ul>
          </div>
        </div>


      </div>

      <h2 id="amarelo" style="margin-left: 7vw; margin-top: 5vh;">Os mais alugados</h2>
      

      <ListHome :produtos="produtoStore.produtos" tipo="home" />


      <div class="categorias">
        <h2>Categorias:</h2>
          <div class="botoes-categorias">
          <button> <RouterLink to="/Guitarra">Guitarra</RouterLink> </button>
          <button> <RouterLink to="/Baixo">Baixos</RouterLink> </button>
          <button> <RouterLink to="/Pedais">Pedais</RouterLink> </button>
          <button> <RouterLink to="/Teclado">Teclado</RouterLink> </button>
          <button> <RouterLink to="/Violao">Violao</RouterLink> </button>
          <button> <RouterLink to="/Bateria">Bateria</RouterLink> </button>
          </div>
         
      </div>

      <div class="fundo-marcas">
        <div class="titulo-marcas">
          <h2>CONHEÇA NOSSAS MARCAS PARCEIRAS</h2>   
        </div>
        <div class="imagens-marcas">
          <div  class="marcas">
          <img  src="@/assets/tagima.png" alt="">
        </div>
        <div  class="marcas">
          <img  src="@/assets/yamaha.png" alt="">
        </div>
        <div  class="marcas">
          <img  src="@/assets/fender.png" alt="">
        </div>
        <div  class="marcas">
          <img  src="@/assets/giannini.svg" alt="">
        </div>
        <div  class="marcas">
          <img  src="@/assets/casio.png" alt="">
        </div>
        <div  class="marcas">
          <img src="@/assets/boss.png" alt="">
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

              <p class="descricao-v-if"><span class="pi pi-credit-card" style="color: #f48200;"></span> Nossas formas de
                pagamento variam em pix e cartão em nossa loja fisica.</p>
              <p class="descricao-v-if"><span class="pi pi-exclamation-triangle" style="color: #f48200;"></span> Sem
                taxas por venda!</p>
            </div>

            <div class="img-v-if">
              <img src="@/assets/forma.png" alt="Imagem 1">
            </div>
          </div>

          <div class="v-if-cima" v-if="selectedImage === 'image2'">
            <div class="texto-v-if">
              <div class="titulo-v-iv">
                <h2>SOBRE NÓS</h2>
              </div>

              <p class="descricao-v-if">Conheça um pouco da nossa equipe
                e como a Beathub se desenvolveu.</p>
              <h4 class="descricao-v-if">
                <RouterLink to="/Membros">Clique aqui</RouterLink>
              </h4>
            </div>

            <div class="img-v-if">
              <img src="@/assets/equipe.png" alt="Imagem 2">
            </div>
          </div>

          <div class="v-if-cima" v-if="selectedImage === 'image3'">
            <div class="texto-v-if">
              <div class="titulo-v-iv-endereco">
                <h2>ENDEREÇO</h2>
              </div>

              <p class="descricao-v-if">Nossas lojas</p>
              <p class="descricao-v-if" id="amarelo">RETIRADA DO INSTRUMENTO APENAS NA LOJA FISÍCA!</p>
              <ul>
                <li>Rua: Rua dos Sonhos</li>
                <li>Número: 42</li>
                <li>Bairro: Centro</li>
                <li>Cidade: Joinville</li>
              </ul>
            </div>

            <div class="img-v-if">
              <img src="@/assets/local.jpeg" alt="Imagem 3">
            </div>
          </div>





        </div>
        <div class="left">
          <div class="buttons">
            <button @click="selectImage('image1')" class="botao-selecionado"><span class="pi pi-receipt"></span>
              Pagamento</button>
            <button @click="selectImage('image2')" class="botao-selecionado"><span class="pi pi-users"></span> Sobre
              Nós</button>
            <button @click="selectImage('image3')" class="botao-selecionado"><span class="pi pi-map-marker"></span>
              Endereço</button>
          </div>
        </div>
      </div>


    </main>


    <NavFooter />
  </body>
</template>


<style scoped>
.botoes-categorias{
  margin-left: 4vw;
}
.botoes-categorias button{
  border: none;
  margin-left: 1vw;
  background-color: #f48200;
  
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  border-radius: 50px;

}

.botoes-categorias button a{
  text-decoration: none;
  color: white;
}
.categorias{
  display: flex;
  flex-direction: row;
  margin-bottom:15vh;
  padding-left: 7vw;
  align-items: center;
  position: relative;
  bottom: 10vh;
}
.categorias h2{
  color: #f48200;
  font-family: 'Josefin Sans', sans-serif;
}
.fundo-marcas{
  display: flex;
  flex-direction: column;
}
.imagens-marcas{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.titulo-marcas{
  display: flex;
  flex-direction:row ;
  justify-content: center;
  margin-bottom: 5vh;
}
.titulo-marcas h2{
  font-family: 'Kameron', sans-serif;
  font-weight: 600;
  color: black;
}
.marcas {
    width: 10vw;
    display: flex;
    margin-left: 1vw;
}

.marcas img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}



#vertical{
  height: 30vh;
  border-left: 2px solid #f48200;
  opacity: 1;
  border-top: transparent;
  position: relative;
  top: 12vh;
  left: 2.4vw;
  z-index: 0;
}
.numeros{
  color: #f48200;
  font-size: 1.3vw;
  margin-right: 1.5vw;
  background-color: white;
  position: relative; 
  padding-top: 7px;
  padding-bottom: 7px;
  
}
.esquerda{
  width: 50vw;
  display: flex;
  justify-content: right;
  padding-right: 4vw;
}

.direita{
  width: 50vw;
  padding-left: 2vw;
}
.img-passos img{
  width: 33vw;
  border-radius: 2vw;
}
.passos{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 60vh;
}
.texto-passos{
  width: 35vw;
 
}
.texto-passos h2{
  font-family: 'Kanit', sans-serif;
  font-weight: 400;
}
.texto-passos li{
  list-style: none;
  margin-top: 3vh;
  font-family: 'Kanit', sans-serif;
}

.background-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 10vh;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: black;
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(transparent, white);
  color: white;
  padding: 35vh;
}

.overlay-text {
  margin: 0;
  width: 27vw;
  position: absolute;
  right: 63vw;
  bottom: 47vh;
  color: black;
}

.overlay-text h1 {
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: .1vw;
  font-family: 'Kameron', sans-serif;
}

.overlay-text h4 {
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: .1vw;
  font-family: 'Kameron', sans-serif;
}

.overlay-text h4 a{
  text-decoration: none;
  color: #f48200;

}

.overlay-text button {
  border: none;
  padding: 5px 50px;
  border-radius: 30px;
  margin-top: 3vh;

}

.img-v-if {
  width: 300px;
  height: 300px;
  position: relative;
  top: 3vh;
  right: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-v-if img {
  width: 100%;
  /* A largura da imagem será igual à largura da div */
  height: 100%;
  /* A altura da imagem será igual à altura da div */
  object-fit: contain;
  /* A imagem será redimensionada para caber completamente na div sem distorção */
  border-radius: 10px;
  /* Mantém o arredondamento */
}

.descricao-v-if {
  width: 45vw;
  font-weight: 400;
  font-family: 'Kanit', sans-serif;
  font-size: 1.3vw;
  color: black;
}

.descricao-v-if a {
  color: #f48200;
  text-decoration: none;
  font-size: 1.7vw;
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

.titulo-v-iv-endereco h2 {
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

.v-if-cima ul {
  list-style: none;
  color: rgb(14, 14, 14);
  font-family: 'Kameron', sans-serif;
  font-size: 1.3vw;
}

.fundo-v-if {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffbe74;
  width: 100%;
  padding-top: 15vh;
  padding-bottom: 40vh;
  padding-left: 20vw;
  padding-right: 20vw;
  box-sizing: border-box;
  margin-top: 20vh;
}


.left {
  color: white;
  position: relative;
  right: 34vw;
  top: 13vh;
  padding-left: 15vw;
}


.left p {
  margin: 0 0 10px;
  font-size: 18px;
}


.left .buttons {
  display: flex;
  gap: 3vw;
  margin-left: 2vw;
}


.left button {
  background-color: #ff6f00;
  color: white;
  border: none;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 17px;
  transition: .3s;
  font-family: 'Poppins', sans-serif;

}


.left button:hover {

  background-color: white;
  color: black;
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