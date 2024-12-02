<script setup>
import { getImage } from "@/utils/getProductImage.js";
const props = defineProps([
    "produto",
    "index"
]);


</script>

<template>
    <div class="container">
        <div class="img-produtos"> <img :src="getImage(index)" alt=""></div>
        <div class="nomePreco">
            <div>
                <h2 class="texto-produtos"> {{ props.produto?.nome }}</h2>
            </div>
            <div class="esq2">
                <h5>{{ props.produto?.preco }} </h5>
            </div>
        </div>
        <div class="compra-e-coracao_produto">
            <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" @click="$emit('carrinho', props.produto.id)" v-if="props.produto?.favoritado" />
            <img src="@/assets/carrinho-de-compra-laranja.png" alt="" class="icones" @click="$emit('carrinho', props.produto.id)" v-else>
        </div>
    </div>
</template>

<style scoped>

.container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.nomePreco {
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-right: 5%;
    row-gap: 5%;
}

.texto-produtos {
    font-size: 1.2vw;
    margin-top: 2vh;

}

.compra-e-coracao_produto {
    margin-top: 1vw;
    display: flex;
    justify-content: space-between;
    padding-left: .7vw;
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

.img-produtos {
    height: 25vh;
}

.img-produtos img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>