<script setup>
import { useProdutoStore } from '@/stores/produto';
import HeaderComponente from '@/components/HeaderComponente.vue';
import NavFooter from '@/components/NavFooter.vue';
import ListProduct from '@/components/ListProduct.vue';

const produtoStore = useProdutoStore()

</script>

<template>

    <body>

        <HeaderComponente />

      
        <main>

            <div class="teste">
                <div class="esquerda">
                    <div v-if="produtoStore.produtosFavoritos.length > 0">
                        <ListProduct :produtos="produtoStore.produtosFavoritos" tipo="favorite" />

                    </div>
                    <div class="carrinho-e-texto" v-else>
                <img src="@/assets/coracao.png" alt="" id="carrinho" style="opacity: .7;">
                <p>Adicione itens no seu favorito</p>
                <RouterLink to="/">
                    <button>
                        <p id="texto_botao">Voltar para o site</p>
                    </button>
                </RouterLink>
            </div>
                </div>
                <div class="direita">
          <div class="finalizar" v-if="produtoStore.produtosFavoritos.length > 0">
            <h2>Finalize Seu Aluguel</h2>
            <RouterLink to="/Carrinho">
              <button>Alugue</button>
            </RouterLink>
          </div>
        </div>
            </div>
           
           

        </main>




        <NavFooter />
    </body>
</template>

<style scoped>
#chamada {
    font-family: 'Josefin Sans', sans-serif;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin-bottom: 6vh;
}

#chamada p {
    color: #2C2B2B;

}

.info {
    width: 25vw;
    display: flex;
    flex-direction: column;
}

.info input {
    width: 100%;
    margin-bottom: 4vh;
    border: none;
    height: 5vh;
    border-radius: .5vw;
}

.info ::placeholder {
    font-family: 'Josefin Sans', sans-serif;
}

.form {
    height: 20vh;
    width: 25vw;
    display: flex;
    flex-direction: column;
    margin-bottom: 5vh;
}

.form input {
    width: 100%;
    margin-bottom: 4vh;
    border: none;
    height: 5vh;
    border-radius: .5vw;
}

.form ::placeholder {
    font-family: 'Josefin Sans', sans-serif;
}

.finalizar {
    background-color: #dfdfdfe9;
    width: 30vw;
    height: 30vh;
    margin-top: 3vh;
    padding-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.finalizar h2,
h5 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
    margin-bottom: 5vh;
}

.teste {
    display: flex;
    width: 100%;
}

.esquerda {
    display: flex;
    float: left;
    width: 50%;
    justify-content: center;
    align-items: center;
}

.direita {
    display: flex;
    float: right;
    width: 50%;
    justify-content: center;
    

}

#texto_botao {
    color: #f48200;
    font-size: 1.2vw;
    position: relative;
    top: 1vh;
    font-family: 'Josefin Sans', sans-serif;
    width: 500;
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

button p {
    color: #f48200;

}

.carrinho-e-texto {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-top: 10vh;
    margin-bottom: 30vh;
    position: relative;
    left: 25vw;
}

.carrinho-e-texto p {
    color: #000000;
    font-weight: 700;
    font-size: 1.8vw;
    font-family: 'Josefin Sans', sans-serif;
}

#carrinho {
    width: 18vw;
}

main {
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 999
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

</style>