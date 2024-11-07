<script setup>
import { favoritos } from "@/mock"
import { useProdutoStore } from '@/stores/produto';
const produtoStore = useProdutoStore()
import HeaderComponente from '@/components/HeaderComponente.vue';
import NavFooter from '@/components/NavFooter.vue';


</script>

<template>




    <body>

        <HeaderComponente />

        <hr class="hr" />
        <main>
            <div class="fundo">
                <div class="padrao">
                    <div class="titulo-e-cartoes">
                        <h2>Informacoes do Cartao</h2>
                        <div class="cartoes"></div>
                    </div>
                    <form class="formulario">
                        <div class="especial">
                            <input type="number" placeholder="Numero do Cartao" id="um">
                            <input type="number" placeholder="CVV" id="dois">
                        </div>
                        <input type="text" placeholder="Data de Validade (MM/AA)">
                        <input type="text" placeholder="Nome no Cartao">

                    </form>
                </div>

                <div class="padrao">
                    <div class="titulo-e-cartoes">
                        <h2>Endereco da cobranca</h2>
                    </div>
                    <form class="formulario">
                        <input type="text" placeholder="Estado">                      
                        <input type="text" placeholder="Cidade">
                        <div class="especial">
                            <input type="text" placeholder="Rua" id="um">
                            <input type="text" placeholder="Numero" id="dois">
                        </div>


                    </form>
                    <button>Alugar</button>
                </div>
            </div>
        </main>




        <NavFooter />
    </body>
</template>

<style scoped>
button{
    border: 0;
    background-color: #2C2B2B;
    color: white;
    width: 20vw;
    height: 6vh;
    font-family: 'Josefin Sans', sans-serif;
    border-radius: 3vw;
    margin-top: 7vh; 
    margin-left: 20vh; 
}
.especial{
    display: flex;
    flex-direction: row;
}
#um{
    width: 65%;
}
#dois{
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
    width: 40vw;
    height: 110vh;
    background-color: #c4c4c4;
    border-radius: 1.5vw;
    margin-bottom: 10vh;
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
