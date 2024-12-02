<script setup>
import { useProdutoStore } from '@/stores/produto';
import ProductCart from '@/components/ProductCart.vue';
import ProductFavorite from '@/components/ProductFavorite.vue';

const props = defineProps([
    'produtos',
    'tipo'
])

const produtoStore = useProdutoStore()


function favoritar(productId) {
    produtoStore.favoritar(productId)
}

function addCarrinho(productId) {
    produtoStore.addCarrinho(productId)
}

</script>
<template>
        <div v-for="produto, in props.produtos" :key="produto.id" class="col produtos text-center">
            <ProductCart @favorito="favoritar" @imagem="getImage" @carrinho="addCarrinho" :produto="produto" :index="produto.id" v-if="props.tipo == 'cart'" />
            <ProductFavorite @favorito="favoritar" @imagem="getImage" @carrinho="addCarrinho" :produto="produto" :index="produto.id" v-if="props.tipo == 'favorite'"/>
        </div>
</template>
<style scoped>
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
</style>