<script setup>
import { getImage } from "@/utils/getProductImage.js";
const props = defineProps([
    "produto",
    "index"
]);
console.log();
const shareProduct = () => {
    const productUrl = `${window.location.origin}/produto/${props.produto?.id}`;
    const message = encodeURIComponent(`Confira este incrível produto: ${props.produto?.nome}! 🎉\nPreço: R$${props.produto?.preco}\nAcesse agora: ${productUrl}`);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;

    // Redirecionar para WhatsApp
    window.open(whatsappUrl, "_blank");
};

const fallbackShare = () => {
    const productUrl = `${window.location.origin}/produto/${props.produto?.id}`;
    const shareText = `Confira este produto: ${props.produto?.nome}\nPreço: ${props.produto?.preco}\nLink: http://localhost:5173/produto`;
    
    navigator.clipboard.writeText(shareText).then(() => {
        alert("Os detalhes do produto foram copiados para a área de transferência!");
    }).catch((error) => {
        console.error("Erro ao copiar texto:", error);
        alert("Não foi possível copiar o texto para a área de transferência.");
    });
};


</script>

<template>
    <div class="compra-e-coracao_produto">
        <img src="@/assets/coracaoVermelho.png" alt="" class="icones" @click="$emit('favorito', props.produto.id)"
            v-if="props.produto?.favoritado" />
        <img src="@/assets/coracao.png" alt="" class="icones" @click="$emit('favorito', props.produto.id)" v-else>
        <img src="@/assets/carrinho-de-compra-laranja.png" alt="" class="icones" style="opacity: .7;"
            @click="$emit('carrinho', props.produto.id)" v-if="props.produto?.noCarrinho" />
        <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" @click="$emit('carrinho', props.produto.id)"
            v-else />

    </div>
    <router-link :to="`/produto/${props.produto.id}`"  @imagem="getImage">
        <div class="img-produtos"> <img :src="getImage(index)" alt=""></div>
    </router-link>
    <div>
        <h2 class="texto-produtos"> {{ props.produto?.nome }}</h2>
    </div>

    <div class="preco-produtos">
        <h5>R${{ props.produto?.preco }} por mês</h5>
        <img src="@/assets/compartilhe.png" alt="" class="compartilhe-produtos" @click="shareProduct">
    </div>
</template>

<style scoped>
.preco-produtos {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

}

.preco-produtos h5 {
    font-size: 1.1vw;
    font-weight: 400;
    margin-top: 1vh;
    justify-content: center;
    align-items: center;
    padding-bottom: 1vh
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
    cursor: pointer;
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
