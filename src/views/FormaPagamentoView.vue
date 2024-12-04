<script setup>
import HeaderComponente from '@/components/HeaderComponente.vue';
import NavFooter from '@/components/NavFooter.vue';
</script>

<template>




    <body>

        <HeaderComponente />

        <hr class="hr" />
        <main>
            <div class="fundo">
                <h2>Pagamento Via Pix</h2>
                <div class="qr">
                    <img src="@/assets/pixx.jpg" alt="">
                </div>
                <button>ok</button>
            </div>
        </main>




        <NavFooter />
    </body>
</template>

<style scoped>
.fundo h2{
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

.especial {
    display: flex;
    flex-direction: row;
}

#um {
    width: 65%;
}

#dois {
    width: 20%;
    margin-left: 2vw;
}

::placeholder {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1vw;

}

.formulario input {
    border: none;
    height: 7vh;
    width: 65%;
    margin-bottom: 3vh;
    margin-left: 2vw;
    border-radius: .5vw;
    padding-left: 2vw;
}

.titulo-e-cartoes h2 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.7vw;
    margin-left: 2vw;


}

.titulo-e-cartoes {
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    padding-top: 8vh;
    margin-bottom: 3vh;
}


.fundo {
    width: 80vw;
    height: 110vh;
    background-color: #c4c4c4;
    border-radius: 1.5vw;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7vh;
}

main {
    background-color: #efefef;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.hr {
    position: relative;
    bottom: 5vh;
    border: 1px solid black;
}

body {
    background-color: rgb(240, 240, 240);
}
</style>
