<script setup>
import { onMounted } from 'vue';
import { useProdutoStore } from '@/stores/produto';
const produtoStore = useProdutoStore()


function favoritar(productId) {
    produtoStore.favoritar(productId)   
}

function getImage(productIndex) {
    return new URL(`../assets/${produtoStore.produtos[productIndex].img}`, import.meta.url).href
}

function addCarrinho(productId) {
   produtoStore.addCarrinho(productId)
}

onMounted(async () => {
    await produtoStore.buscarTodosOsProdutos()
})

</script>
<template>
    <div class="row">
        <div v-for="produto, index in produtoStore.produtos" :key="produto.id" class="col produtos text-center">
            <div class="compra-e-coracao_produto">
                 <img src="@/assets/coracaoVermelho.png" alt="" class="icones" @click="favoritar(produto.id)" v-if="produto.favoritado" />
                <img src="@/assets/coracao.png" alt="" class="icones" @click="favoritar(produto.id)" v-else>
                <img src="@/assets/carrinho-de-compra-laranja.png" alt="" class="icones" style="opacity: .7;" @click="addCarrinho(produto.id)" v-if="produto.noCarrinho"/>
                <img src="@/assets/carrinho-de-compras.png" alt="" class="icones"  @click="addCarrinho(produto.id)" v-else />
                
            </div>
            <div class="img-produtos"> <img :src="getImage(index)" alt=""></div>
            <div>
                <h2 class="texto-produtos"> {{ produto.nome }}</h2>
            </div>
            <img src="@/assets/estrelas.png" alt="" class="esq1">
            <div class="dir1">
                <h6>100 avaliações</h6>
            </div>
            <div class="esq2">
                <h5>{{ produto.preco }} </h5>
                <img src="@/assets/compartilhe.png" alt="" class="compartilhe-produtos dir2">
            </div>
        </div>
    </div>
</template>
<style scoped>
.texto-produtos {
    font-size: 1.2vw;
    margin-top: 2vh;

}

.compra-e-coracao_produto {
    margin-top: 1vw;
    display: flex;
    justify-content: space-between;
    padding-left:.7vw ;
    padding-right: .7vw;
}

.icones {
    width: 1.8vw;
}

.compartilhe-produtos {
    width: 1.3vw;
}


.dir1 {
    float: right;
    position: relative;
}

.dir2 {
    float: right;
    position: relative;
    left: 2vw;
    bottom: 3.3vh;
}

.esq1 {
    float: left;
    position: relative;
    width: 6.5vw;
}

.esq2 {
    float: left;
    width: 10vw;
    position: relative;
    left: .5vw;
}

.esq2 h5 {
    font-size: 1.1vw;
}

.produtos {
    background-color: white;
    min-width: 14.5vw;
    height: 47vh;
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 4vh;
    box-shadow: -.5px .5px .5px .5px rgb(150, 146, 146);
    margin-bottom: 8vh;
    border-radius: 2vw;

}

.img-produtos {
    height: 25vh;
}

.img-produtos img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>