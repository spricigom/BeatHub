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
        <span class="pi pi-upload" @click="shareProduct" style="cursor: pointer; font-size: 1.5vw; opacity: .7;"></span>
        <img src="@/assets/coracaoVermelho.png" alt="" class="icones" @click="$emit('favorito', props.produto.id)"
            v-if="props.produto?.favoritado" />
        <img src="@/assets/coracao.png" style="cursor: pointer;" alt="" class="icones"
            @click="$emit('favorito', props.produto.id)" v-else>
    </div>
    <router-link :to="`/produto/${props.produto.id}`"  @imagem="getImage">
        <div class="img-produtos"> <img :src="getImage(index)" alt=""></div>
    </router-link>
    <div>
        <h2 class="texto-produtos"> {{ props.produto?.nome }}</h2>
    </div>

    <div class="preco-produtos">
        <h5>R${{ props.produto?.preco }} por mês</h5>
    </div>
    <button class="ver-mais-btn">
        <div v-if="props.produto?.noCarrinho">
            <div class="img-botao">
                <img src="@/assets/cart-fill.png" alt="" class="icones" style="opacity: .7;"
                @click="$emit('carrinho', props.produto.id)"  />
            </div>
            <div class="texto-botao">
                <p>Adicionado</p>
            </div>
        </div>
        <div   v-else>
            <div class="img-botao">
                <img src="@/assets/cart.png" alt="" class="icones" @click="$emit('carrinho', props.produto.id)" />
            </div>
            <div class="texto-botao">
                <p>Adicionar</p>

            </div>
        </div>
    </button>
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
    font-weight: 600;
    margin-top: 1vh;
    font-family: 'Poppins', sans-serif;
    justify-content: center;
    align-items: center;
    padding-bottom: 1vh
}

.texto-produtos {
    font-size: 1.2vw;
    margin-top: 2vh;
    color: #888888;
}

.compra-e-coracao_produto {
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
    padding: .5vw;
}

.img-produtos img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.ver-mais-btn {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f48200;
    color: white;
    height: 5vh;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s ease, opacity .7s ease, visibility 0.3s ease;
    opacity: 0;
    display: flex;
    justify-content: space-evenly;
    width: 12vw;
    margin-bottom: 1vh;
    border-radius: 60px; 
    /* Botão começa invisível */
    visibility: hidden;
    /* Esconde do fluxo visual */
}
button .img-botao{
    display: flex;
    float: left;
}

button .texto-botao{
    display: flex;
    float: right;
}
.texto-botao p{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.1rem;
    margin-left: 1vw;
}
.produtos:hover .ver-mais-btn {
    opacity: 1;
    /* Torna o botão visível */
    visibility: visible;

}
</style>
