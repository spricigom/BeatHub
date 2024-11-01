<script setup>
import { getImage } from "@/utils/getProductImage.js";
const props = defineProps([
    "produto",
    "index"
]);


</script>

<template>
    <div class="compra-e-coracao_produto">
        <img src="@/assets/coracaoVermelho.png" alt="" class="icones" @click="$emit('favorito', props.produto.id)"
            v-if="props.produto?.favoritado" />
        <img src="@/assets/coracao.png" alt="" class="icones" @click="$emit('favorito', props.produto.id)" v-else>
        <img src="@/assets/carrinho-de-compra-laranja.png" alt="" class="icones" style="opacity: .7;"
            @click="$emit('carrinho', props.produto.id)" v-if="props.produto?.noCarrinho" />
        <img src="@/assets/carrinho-de-compras.png" alt="" class="icones"
            @click="$emit('carrinho', props.produto.id)" v-else />

    </div>
    <div class="img-produtos"> <img :src="getImage(index)" alt=""></div>
    <div>
        <h2 class="texto-produtos"> {{ props.produto?.nome }}</h2>
    </div>
    <img src="@/assets/estrelas.png" alt="" class="esq1">
    <div class="dir1">
        <h6>100 avaliações</h6>
    </div>
    <div class="esq2">
        <h5>{{ props.produto?.preco }} </h5>
        <img src="@/assets/compartilhe.png" alt="" class="compartilhe-produtos dir2">
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