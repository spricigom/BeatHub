<script setup>
import { ref } from 'vue';
import HeaderComponente from '@/components/HeaderComponente.vue';
import NavFooter from '@/components/NavFooter.vue';

const showModal = ref(false);

const toggleModal = () => {
    showModal.value = !showModal.value;
};
</script>
<template>
    <body>
        <HeaderComponente />
       
        <main :class="{ 'blur-background': showModal }">
            <div class="fundo">
                <h2>Pagamento Via Pix</h2>
                <div class="qr">
                    <img src="@/assets/pix.jpg" alt="QR Code">
                </div>
                <button @click="toggleModal">Ok</button>
            </div>
        </main>
        <NavFooter />

        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <h4>A reserva do seu instrumento já está feita!</h4>
                <p>Pagamento realizado com sucesso!</p>
                <p id="retirada">RETIRADA SOMENTE NA LOJA</p>
                <button @click="toggleModal" style="width: 10vw;"><RouterLink to="/" id="routerlink">Voltar ao site</RouterLink></button>
            </div>
        </div>
    </body>
</template>

<style scoped>
.modal-content #routerlink{
    text-decoration: none;
    color: white;
}

#retirada{
    font-family: 'Josefin Sans', sans-serif;
    font-size: .8vw;
    margin-top: 2vh;
    color: #333333;
}
main{
    display: flex;
    justify-content: center;
}
.fundo {
    width: 60vw;
    height: 110vh;
    background-color: #c4c4c4;
    border-radius: 1.5vw;
    margin-bottom: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7vh;
}
.fundo h2 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2.5vw;
    margin-bottom: 3vh;
}
.qr {
    width: 35vw;
    height: 35vw;
    display: flex;
    margin-left: 1vw;
    background-color: black;
}
.qr img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
button {
    border: 0;
    background-color: #2C2B2B;
    color: white;
    width: 20vw;
    height: 6vh;
    font-family: 'Josefin Sans', sans-serif;
    border-radius: 3vw;
    margin-top: 7vh;
}
.main {
    background-color: #efefef;
    display: flex;
    align-items: center;
    flex-direction: column;
}

body {
    background-color: rgb(240, 240, 240);
}

/* Adicionando o fundo desfocado */
.blur-background {
    filter: blur(10px);
    pointer-events: none;
}

/* Estilo do modal */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.modal-content {
    background-color: #c4c4c4;
    padding-top: 2rem;
    border-radius: 1rem;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 35vw;
    height: 40vh;
    display: flex;
    align-items: center;
}

.modal-content h4 {
    margin-bottom: 1rem;
    color: #F48200;
    font-family: 'Josefin Sans', sans-serif;
}
.modal-content p{
    font-size: 1.3vw;
    color: black;
}
.modal-content button {
    background-color: #2C2B2B;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    width: 7vw;
}
</style>
