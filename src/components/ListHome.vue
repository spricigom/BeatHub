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
    <div class="fundo">
     <div class="linha">
        <div v-for="produto, in props.produtos" :key="produto.id" class=" produtos text-center">
            <ProductHome @favorito="favoritar" @imagem="getImage" @carrinho="addCarrinho" :produto="produto" :index="produto.id" v-if="props.tipo == 'home'" />
        </div>
    </div>   
    </div>
    
</template>
<style scoped>
.fundo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20vh;
}
template{
    display: flex;
    align-items: center;
    justify-content: center;
}
.linha {
    width: 88vw;
    display: flex;
    flex-direction: row;
    height: 50vh;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 70vh;
}
.produtos {
    background-color: white;
    height: 45vh;
    width: 15vw;

    margin-top: 4vh;
    margin-bottom: 8vh;
    border-radius: 0.44rem;
    text-align: center;
    justify-content: center;

}
</style>