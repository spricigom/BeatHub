<script setup></script>
<template>  <footer>
    <div class="footer">



        <div class="cima-footer">
            <img src="@/assets/certa.png" alt="" class="logo-footer">
            <div class="redes-sociais">
                <img src="@/assets/facebook.png" alt="" class="icones-footer">
                <img src="@/assets/instagram (1).png" alt="" class="icones-footer">
                <img src="@/assets/twitter.png" alt="" class="icones-footer">
                <img src="@/assets/whatsapp (1).png" alt="" class="icones-footer">
                <img src="@/assets/youtube.png" alt="" class="icones-footer">
            </div>
        </div>
        <hr style="border: 1px solid black; margin-top: 5vh;">
        <div class="baixo-footer">
            <div class="colunas-footer">
                <h2><strong>Membros</strong></h2>
                
            </div>
            <div class="colunas-footer">
                <h2><strong>Cadastro</strong></h2>
                
            </div>
            <div class="colunas-footer">
                <h2><strong>Favoritos</strong></h2>
                
            </div>
            <div class="colunas-footer">
                <h2><strong>Carrinho</strong></h2>
                
            </div>
        </div>

    </div>
    
<div class="Copyright" >
© 2024 Copyright:
<a  href="http://localhost:5173/">BeatHub.com</a>
</div>
</footer>
</template>
<style scoped>

.Copyright{
    background-color:#F48200;
    color: white;
    height: 7vh;
    display: flex;
    padding-top: 2.3vh;
    justify-content: center;
}
.Copyright a{
    color: white;
}
.icones-footer {
    width: 2.5vw;
    margin-top: 5vh;
    margin-left: 1vw;
    cursor: pointer
} 

 .redes-sociais {
    width: 30vw;
    height: 10vh;
} 

 .colunas-footer {
    height: 10vh;
    width: 10vw;
    display: inline-block;

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
    background-color: #F48200;
} 

* {
    padding: 0;
}
@media(max-width: 1280px){
    .cima-footer  {
        margin: 0;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        justify-items: baseline;
        align-items: center;
        flex-direction: column;

    }
    .cima-footer .logo-footer {
        padding: 10px;
        width: 15vh;
    }
    .icones-footer{
    width: 2vh;

}

    .baixo-footer {
        margin: 0;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        justify-items: baseline;
        flex-direction: column;
        align-items: center;
    }
    .baixo-footer h2{
        font-size: 2vh 
    }

}
@media (max-width: 412px){
    .cima-footer  {
        margin: 0;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        justify-items: baseline;
        align-items: center;
        flex-direction: column;

    }
    .cima-footer .logo-footer {
        padding: 10px;
        width: 15vh;
    }

.icones-footer{
    width: 3vh;

}

    .baixo-footer {
        margin: 0;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        justify-items: baseline;
        flex-direction: column;
        align-items: center;
    }
    .baixo-footer h2{
        font-size: 2vh 
    }

}

</style>

