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
function removerProduto(productId) {
    produtoStore.removerProduto(productId);
}
</script>
<template>
    <div class="lista">
        <h2 class="texto-carrinho">Itens no carrinho</h2>

        <div class="centro">
            <hr style="width: 90%; border: 1px solid;">
            <div v-for="produto, in props.produtos" :key="produto.id" class="col produtos text-center">
                <ProductCart @favorito="favoritar" @imagem="getImage" @carrinho="addCarrinho" @delete="removerProduto" :produto="produto"
                    :index="produto.id" v-if="props.tipo == 'cart'" />
                <ProductFavorite @favorito="favoritar" @imagem="getImage" @carrinho="addCarrinho"  @delete="removerProduto"  :produto="produto"
                    :index="produto.id" v-if="props.tipo == 'favorite'" />
            </div>
        </div>

    </div>

</template>

<style scoped>
.texto-carrinho {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 800;
    margin-top: 3vh;
    margin-left: 2vw;

}

.produtos {
    background-color: red;
    width: 35vw;
    height: 47vh;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 3vh;
    border-color: 1px solid black

}

.centro {
    display: flex;
    align-items: center;
    flex-direction: column;

}

.lista {
    margin-bottom: 30vh;
    background-color: #dfdfdfe9;
    width: 38vw;
    height: auto;
    padding-top: 1vh;
    margin-top: 3vh;
}
</style>