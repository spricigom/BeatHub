<script setup>
import { ref } from "vue"
import { produtos } from '@/mock';

const products = ref(produtos)

function getImage(productIndex) {
    return new URL(`../assets/${products.value[productIndex].img}`, import.meta.url).href
}

</script>
<template>
        <h1>Produtos</h1>
        <div class="row">
            <div v-for="produto, index in products" :key="produto.id" class="col produtos">
                <div >
                    <strong class="texto-produtos">{{ produto.nome }}</strong>: <div class="esq2"> {{ produto.preco }}
                    </div>
                    <div class="img-produtos"> <img :src="getImage(index)" alt=""></div>
                </div>
            </div>
        </div>
       
        
</template>
<style scoped>
.texto-produtos {
    font-size: 1.2vw;
    margin-top: 2vh;
}

.esq2 {
    float: left;
    width: 10vw;
    position: relative;
    left: 1.3vw;
}

.produtos {
    background-color: white;
    min-width: 14.5vw;
    height: 45vh;
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