<script setup>
import { ref } from "vue"
import { produtos } from '@/mock';

const products = ref(produtos)

function getImage(productIndex) {
    return new URL(`../assets/${products.value[productIndex].img}`, import.meta.url).href
}

</script>
<template>
<div>
    <h1>Produtos</h1>
    <ul>
        <li v-for="produto, index in products" :key="produto.id">
            <strong>{{ produto.nome }}</strong>: {{ produto.preco }}
            {{ produto.img }}
            <img :src="getImage(index)" alt="">
        </li>
    </ul>
</div>
</template>
<style scoped>


</style>