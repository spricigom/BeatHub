<script setup>
import { useProdutoStore } from '@/stores/produto';
import HeaderComponente from '@/components/HeaderComponente.vue';
import NavFooter from '@/components/NavFooter.vue';
import ListProduct from '@/components/ListProduct.vue';

const produtoStore = useProdutoStore()

</script>

<template>
    <body>
        
<HeaderComponente/>
        
        <hr class="hr" />
        <main>
            <ListProduct :produtos="produtoStore.produtosFavoritos" v-if="produtoStore.produtosFavoritos.length > 0" tipo="favorite"/>
                <div class="carrinho-e-texto" v-else>
                <img src="@/assets/coracao.png" alt="" id="carrinho">
                <p>Adicione itens no seu favorito</p>
                <RouterLink to="/">
                    <button>
                        <p id="texto_botao">voltar para o site</p>
                    </button>
                </RouterLink>
            </div>

        </main>



        
<NavFooter/>
    </body>
</template>

<style scoped>
#texto_botao{
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

.carrinho-e-texto{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-top: 10vh;
}
.carrinho-e-texto p{
    color: #000000;
    font-weight: 700;
    font-size: 1.8vw;
    font-family: 'Josefin Sans', sans-serif;
}
#carrinho{
    width: 16vw;
    opacity: 0.8;
}
main{
    height: 80vh;
    background-color: #efefef;
    display: flex; 
    align-items: center;
    flex-direction: column;
}

.Copyright{
    background-color:rgb(95, 95, 95);
    color: white;
    height: 7vh;
    display: flex;
    padding-top: 2.3vh;
    justify-content: center;
}
.Copyright a{
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



</style>
