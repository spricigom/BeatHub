
<script setup>
import { onMounted } from "vue";
import { useProdutoStore } from '@/stores/produto';
import NavFooter from '@/components/NavFooter.vue';

import ListHome from '@/components/ListHome.vue';
import HeaderComponente from '@/components/HeaderComponente.vue';

const produtoStore = useProdutoStore()

onMounted(() => {
    produtoStore.buscarTodosOsProdutos();
});

</script>

<template>

    <body>
    
    <HeaderComponente/>

    
        <hr class="hr" />
        <main>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="@/assets/instrumentos.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/instrumentos.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/instrumentos.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="container text-center">
                <div class="row">

                    <div class="col categorias">
                        <div class="texto-categoria">
                            <h5>Faça seu Login</h5>
                        </div>
                        <RouterLink to="/Login">  <img src="@/assets/user.png" alt="" /></RouterLink>

                    </div>
                    <img src="@/assets/user.png" alt="" />
                </div>


                    <div class="col categorias">
                        <div class="texto-categoria">
                            <h5>Mais alugados</h5>
                            <a href="#mais-alugados"><img src="@/assets/item.png" alt="" /></a>
                            
                        </div>

                    </div>
                </div>
        <div class="col categorias">
                        <div class="texto-categoria">
                            <h5>Membros</h5>
                            <RouterLink to="/Membros"><img src="@/assets/membros.png" alt="" /> </RouterLink>

                            
                        </div>
                    </div>
                </div>

                <div class=" categorias">
                    <div class="texto-categoria">
                        <h5>Categorias</h5>
                    </div>
                    <img src="@/assets/categoria.png" alt="" />
                </div>
            </div>


            <h2 id="amarelo" style="margin-left: 10vw;position: relative;bottom: 1vh;">Os mais alugados</h2>
            
            
            
            
            <div class="campo">
               
               
                <div class="mais-alugados">
                    <div class="compra-e-coracao2">
                        <img src="@/assets/coracao.png" alt="" class="icones" />
                        <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
                    </div>                    
                    <img src="@/assets/ukulele.png" alt="" class="img-maisAlugados" />
                    <div class="conteudo">                        
                        <div class="nome-maisAlugados">
                            <h2>Ukulele Concert Us23 Spring</h2>
                        </div>
                        <div class="preco">
                            <h5>R$ 17,00 por mês</h5>
                            <img src="@/assets/tres-pontinhos.png" alt="" class="compartilhe" />
                        </div>
                    </div>
                </div>

                <div class="mais-alugados">
                    <div class="compra-e-coracao2">
                        <img src="@/assets/coracao.png" alt="" class="icones" />
                        <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
                    </div>                    
                    <img src="@/assets/violao.png" alt="" class="img-maisAlugados" />
                    <div class="conteudo">                        
                        <div class="nome-maisAlugados">
                            <h2>Violão Di Giorgio Master</h2>
                        </div>
                        <div class="preco">
                            <h5>R$ 17,00 por mês</h5>
                            <img src="@/assets/tres-pontinhos.png" alt="" class="compartilhe" />
                        </div>
                    </div>
                </div>

                <div class="mais-alugados">
                    <div class="compra-e-coracao2">
                        <img src="@/assets/coracao.png" alt="" class="icones" />
                        <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
                    </div>                    
                    <img src="@/assets/guitarra.png" alt="" class="img-maisAlugados" />
                    <div class="conteudo">                        
                        <div class="nome-maisAlugados">
                            <h2>Guitarra elétrica SG</h2>
                        </div>
                        <div class="preco">
                            <h5>R$ 17,00 por mês</h5>
                            <img src="@/assets/tres-pontinhos.png" alt="" class="compartilhe" />
                        </div>
                    </div>
                </div>

                <div class="mais-alugados">
                    <div class="compra-e-coracao2">
                        <img src="@/assets/coracao.png" alt="" class="icones" />
                        <img src="@/assets/carrinho-de-compras.png" alt="" class="icones" />
                    </div>                    
                    <img src="@/assets/baixo.png" alt="" class="img-maisAlugados" />
                    <div class="conteudo">                        
                        <div class="nome-maisAlugados">
                            <h2>Baixo Strinberg JBS50</h2>
                        </div>
                        <div class="preco">
                            <h5>R$ 17,00 por mês</h5>
                            <img src="@/assets/tres-pontinhos.png" alt="" class="compartilhe" />
                        </div>
                    </div>
                </div>

            </div>
            <h2 class="texto-produtos">Gaita de boca harmônica</h2>
            <div class="preco-produtos">
                <h5>R$ 17,00 por mes</h5>
                <img src="@/assets/tres-pontinhos.png" alt="" class="compartilhe-produtos">
            </div>
        </div>
    </div>
</div>
        </main>

        <NavFooter/>
        
    </body>






    </body>
</template>

<style scoped>
.nome-maisAlugados h2{
    font-size: 1.1vw;
    margin-top: 4vh;
    font-family: 'Inter',  sans-serif;
    font-weight: 600;
}
.nome-maisAlugados{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}
.compartilhe {
    width: 1.2vw;
}

.img-maisAlugados {
   display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    height: 20vh;
}

.img-maisAlugados{
    width: 10vw;
    height: 45vh;
    object-fit: contain;
}

.conteudo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.preco {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Inter', 'sans serif';
    width: 100%;
} .preco h5{
    font-size: 1.1vw;
    font-weight: 400;
    margin-top: 1vh;
    justify-content: center;
    align-items: center;
    padding-bottom: 1vh
}
.mais-alugados {
    height: 64vh;
    width: 19vw;
    background-color: white;
    border-radius: 0.44rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.compra-e-coracao2 {
    display: flex;
    justify-content: space-between;
    margin-left: 1vw;
    margin-right: 1vw;
    width: 80%;
}

.linha{
    width: 88vw;
    display: flex;
    flex-direction: row;
    height: 50vh;
    justify-content: space-around;
}

.fundo-categorias {
    position: relative;
    bottom: 20vh;
    display: flex;
    justify-content: center;

}

.fundo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -10vw;
    margin-bottom: 20vh;
}

.Copyright {
    background-color: rgb(95, 95, 95);
    color: white;
    height: 7vh;
    display: flex;
    padding-top: 2.3vh;
    justify-content: center;
}

.Copyright a {
    color: white;
}

.icones-footer {
    width: 2.5vw;
    margin-top: 5vh;
    margin-left: 1vw
}

.redes-sociais {
    width: 20vw;
    height: 10vh;
}

.colunas-footer {
    height: 10vh;
    width: 10vw;
    display: inline-block;
    margin-top: 5vh;
    margin-bottom: 15vh;

}

.colunas-footer ul li {
    list-style: none;
    color: white;
    font-family: 'Inter', 'sans serif';
    font-size: 1vw;
    text-align: center;
    margin-top: 1vh;
    width: 12vw;
    position: relative;
    right: 1vw;

}

.colunas-footer h2 {
    font-size: 1.2vw;
    font-family: 'Inter', 'sans serif';
    color: white;
    text-align: center
}

.cima-footer {
    display: flex;
    justify-content: space-around;
    padding-top: 5vh
}

.logo-footer {
    width: 8vw;
}

.baixo-footer {
    display: flex;
    justify-content: space-around;
}

.footer {
    width: 100%;
    background-color: #9b9a9a;
}

</template>

<style scoped>

.container {
    position: relative;
    bottom: 17vh;
}


.esq1 {
    float: left;
    position: relative;
    width: 6.5vw;
    left: 1vw;
}

.dir1 {
    float: right;
    position: relative;
    right: 1vw;
}

.esq2 {
    float: left;
    width: 10vw;
    position: relative;
    left: 1.3vw;
}

.esq2 h5 {
    font-size: 1.1vw;
}

.dir2 {
    float: right;
    position: relative;
    right: 2.5vw;
    margin-top: .5vh;
}

.compartilhe-produtos {
    width: 1.3vw;
}

.compra-e-coracao_produto {
    margin-top: 1vw;
    display: flex;
    justify-content: space-between;
    padding-left: .7vw;
    padding-right: .7vw;
}

.compra-e-coracao_produto .icones {
    margin-right: .3vw;
}

.texto-produtos {
    font-size: 1.1vw;
    margin-top: 4vh;
    font-family: 'Inter',  sans-serif;
    font-weight: 600;
}

.img-produtos {
    height: 25vh;
    margin-top: 1vh;
}

.img-produtos img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.preco-produtos{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    
}
.preco-produtos h5{
    font-size: 1.1vw;
    font-weight: 400;
    margin-top: 1vh;
    justify-content: center;
    align-items: center;
    padding-bottom: 1vh

   
}

.produtos {
    background-color: white;
    height: 45vh;
    width: 15vw;
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 4vh;
    margin-bottom: 8vh;
    border-radius: 0.44rem;
    text-align: center;
    justify-content: center;
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
    border-radius: 1vw;

}

* {
    padding: 0;
    margin: 0;
}

/*estilos do header */
.logo {
    width: 8vw;
    cursor: pointer;
    position: relative;
    bottom: 15px
}

input {

    display: flex;
    position: relative;
    left: 7vw;
    bottom: 1.1vh;

}

.regiao {
    position: relative;
    left: 5vw;
    font-family: 'Inter', sans-serif;
    color: #595959;
    font-size: 1vw;
}

::placeholder {
    padding-left: 20px;
    font-family: 'Inter', sans-serif;
    font-size: 1.8vh;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
    height: 20vh;
    background-color: #efefef;
}

.navegacao {
    list-style: none;
    position: relative;
    right: 8vw;
}

.navegacao li {
    display: inline-block;
    padding: 0px 10px;
}

a {
    text-decoration: none;
    color: #595959;
    font-family: 'Josefin Sans', sans-serif;
}

#amarelo {
    color: #f48200;
}

.hr {
    position: relative;
    bottom: 5vh;
    border: 1px solid black;
}

.icones {
    width: 1.5vw;
}

.compra-e-coracao {
    position: relative;
    left: 7vw;
    bottom: 1.3vh;
}

.compra-e-coracao .icones {
    margin-right: 1.5vw;
}

/*estilos do carrossel */
body {
    background-color: rgb(240, 240, 240);
    overflow-x: hidden;
}

.carousel {
    margin-top: -3vh;
}

#carouselExample .carousel-item::before {
    content: '';
    background: linear-gradient(0deg, rgb(240, 240, 240) 50%, transparent 73%);
    display: block;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 120vh;
}

.categorias {
    height: 35vh;
    width: 13vw;
    margin-left: 4vw;
    margin-right: 4vw;
    background-color: white;
    border-radius: 1vw;
    padding: 1vw;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 6.5vh;
    box-shadow: 1px 1px 5px 5px rgb(150, 146, 146);
    text-align: center;
    align-items: center;
}

.categorias img {
    width: 10vw;
    height: 10vw;
    margin-top: 0.5vw;
    align-items: center;
}

.texto-categoria {
    margin-top: 1vw;
    font-family: 'Josefin Sans', sans-serif;
    color: #f48200;
    font-size: 1.8vh;
}
</style>