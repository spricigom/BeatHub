<script setup>
import { getImage } from "@/utils/getProductImage.js";
const props = defineProps([
    "produto",
    "index"
]);


</script>

<template>
    
    <div class="produto">
        <div class="img-produtos"> <img :src="getImage(index)" alt=""></div>
        
        <div class="texto-e-preco">
            <h2 class="texto-produtos"> {{ props.produto?.nome }}</h2>
          
            <h5>{{ props.produto?.preco }} </h5>
        </div>
      
        <div class="funcoes">
 <div class="compra-e-coracao_produto">
            <img src="@/assets/coracaoVermelho.png" alt="" class="icones" @click="$emit('favorito', props.produto.id)"
                v-if="props.produto?.favoritado" />
            <img src="@/assets/coracao.png" alt="" class="icones" @click="$emit('favorito', props.produto.id)" v-else>
        </div>  
        <img src="@/assets/lixeira.png" alt="" id="lixeira">
        </div>
       
    </div>
</template>

<style scoped>
.funcoes{
    display: flex;
    position: relative;
    left: 5vw;
}
#lixeira{
    width: 1.5vw;
    opacity: .7;
    margin-left: .4vw;
}
.texto-e-preco{
    display: flex;
    justify-content: baseline;
    flex-wrap: wrap;
    padding-left: 3vw ;
    width: 17vw;
}
.texto-e-preco h2, h5{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
}
template{
    display: flex;
    flex-direction: row;
}
  
.produto{
    display: flex;
    flex-direction: row;
    width: 32.69rem;
    height: 13vh   ;
    align-items: center;
}

.img-produtos {
    width: 5vw;
    display: flex;
    margin-left: 1vw;
}

.img-produtos img {
    width: 100%;
    height: 100%;
    object-fit:contain;
}

.nomePreco {
    display: flex;
    flex-direction: column;
    font-family: 'Josefin Sans', sans-serif;
    padding-left: 2vw;
    background-color: yellow;
    width: 20vw;
    height: 100px;


}

.texto-produtos {
    font-size: 1.2vw;
    margin-top: 2vh;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
}

.compra-e-coracao_produto {
    display: flex;
    justify-content: space-between;   
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

.preco {
    float: left;
    width: 10vw;
}



</style>