<script setup>
import { onMounted } from 'vue';
import { useProdutoStore2 } from '@/stores/produto';
const produtoStore2 = useProdutoStore2()


// function favoritar(productId) {
//     produtoStore.favoritar(productId)   
// }
// function addCarrinho(productId) {
//    produtoStore.addCarrinho(productId)
// }


// function getImage(productIndex) {
//     return new URL(`../assets/${produtoStore.produtos[productIndex].img}`, import.meta.url).href
// }


// onMounted(async () => {
//     await produtoStore.buscarTodosOsProdutos()
// })
onMounted(async () => {
    await produtoStore2.buscarTodosOsProdutos();
    console.log(produtoStore2.produtos2); // Verifique se os produtos foram carregados corretamente.
}); 

function getImage(productIndex) {
    if (!produtoStore2.produtos2[productIndex] || !produtoStore2.produtos2[productIndex].img) {
        return ''; // Verifica se o produto ou a propriedade `img` existe.
    }
    return new URL(`../assets/${produtoStore2.produtos2[productIndex].img}`, import.meta.url).href;
}
</script>

<template>
    <h2 id="amarelo" style="margin-left: 10vw;position: relative;bottom: 1vh;">Os mais alugados</h2>
      <div class="campo" v-for="(produto2, index) in produtoStore2.produtos2" :key="produto2.id">
                <div class="mais-alugados text-center">
                    <div class="compra-e-coracao2">
                        <img src="@/assets/coracao.png" alt="" class="icones" />
                        <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
                    </div>

                    <img :src="getImage(index)" class="produtos-MaisAlugados" />
                    <h2>{{ produto2.nome }}</h2>

                    <div class="conteudo1">
                        <img src="@/assets/estrelas.png" alt="" class="estrelas" />
                        <div class="avaliacao">
                            <h6>130 avaliações</h6>
                        </div>
                    </div>

                    <div class="conteudo2">
                        <div class="preco">
                            <h5>{{ produto2.preco }} </h5>
                        </div>
                        <img src="@/assets/compartilhe.png" alt="" class="compartilhe" />
                    </div>
                </div>

            </div>

</template>


<style scoped>
.container {
    position: relative;
    bottom: 17vh;
}
.compra-e-coracao2 {
    display: flex;
    justify-content: space-between;
    margin-left: 1vw;
    margin-top: 3vh;
    margin-right: 1vw;
}
.conteudo2 {
    margin-top: 5vh;
}.icones {
    width: 1.5vw;
}
.compra-e-coracao2 {
    display: flex;
    justify-content: space-between;
    margin-left: 1vw;
    margin-top: 3vh;
    margin-right: 1vw;
}

.preco {
    display: flex;
    float: left;
    margin-left: 3vw;
    font-family: 'Inter', 'sans serif';
}



.compartilhe {
    display: flex;
    float: right;
    margin-right: 3vw;
    width: 1.2vw;
}




.estrelas {
    display: flex;
    float: left;
    margin-left: 2.5vw;
}



.avaliacao {
    display: flex;
    float: right;
    margin-right: 2.5vw;
}


.produtos-MaisAlugados {
    width: 130px;
    height: 321px;
}

.mais-alugados {
    height: 64vh;
    width: 19vw;
    background-color: white;
    border-radius: 1vw;

}

.mais-alugados h2 {
    margin-top: 2vh;
    font-size: 1.3vw;
    font-family: 'Inter', 'sans-serif';
}

.campo {
    background-color: white;
    height: 66vh;
    width: 80vw;
    transform: translate(-50%, -50%);
    margin-top: 33vh;
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 50%;
    box-shadow: 1px 1px 5px 5px rgb(150, 146, 146);
    border-radius: 1vw;

}

* {
    padding: 0;
}

</style>