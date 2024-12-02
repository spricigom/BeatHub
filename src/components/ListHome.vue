<script setup>
import { useProdutoStore } from '@/stores/produto';
import ProductHome from '@/components/ProductHome.vue';
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
    <div class="row">
        <div v-for="produto, in props.produtos" :key="produto.id" class="col produtos text-center">
            <ProductHome @favorito="favoritar" @imagem="getImage" @carrinho="addCarrinho" :produto="produto" :index="produto.id" v-if="props.tipo == 'home'" />
        </div>
    </div>
</template>
<style scoped>
.produtos {
    background-color: white;
    height: 45vh;
    width: 15vw;
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 4vh;
    margin-bottom: 8vh;
    border-radius: 0.44rem;
    text-align: center;
    justify-content: center;

}
</style>