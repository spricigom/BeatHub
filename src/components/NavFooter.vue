<script setup></script>
<template>
    <footer>
        <div class="footer">



            <div class="cima-footer">
                <img src="@/assets/logocerta.png" alt="" class="logo-footer">

            </div>
            <hr style="border: 1px solid black; margin-top: 5vh;">
            <div class="baixo-footer">
                <div class="colunas-footer">
                    <span class="pi pi-map-marker" style="color: white; font-size: 2vh;"></span>
                    <p>Endereço:Rua dos Sonhos 42, Centro, Joinville</p>

                    <span class="pi pi-phone" style="color: white; font-size: 2vh;"></span>
                    <p>99999-999</p>


                    <span class="pi pi-envelope" style="color: white; font-size: 2vh;"></span>
                    <p>beathub@gmail.com</p>
                </div>
                <div class="coluna-direita">
                <h3 style="color: white;">Sobre</h3>
                <p>espero que tenha gostado da Beathub <br> voltada para voce, musico!</p>
                <div class="social-midia">

                <span class=" pi pi-instagram" style="color: white;" > </span>
                <span class="pi pi-whatsapp" style="color: white;"></span>
                <span class="pi pi-share-alt" style="color: white;"></span>
            </div>

            </div>
            
            </div>
            
        </div>


        <div class="Copyright">
            <p>© 2024 Copyright:</p>
            <a href="http://localhost:5173/">BeatHub.com</a>
        </div>
    </footer>
</template>
<style scoped>
.Copyright {
    background-color: #F48200;
    color: white;
    height: 7vh;
    display: flex;
    padding-top: 2.3vh;
    justify-content: center;
}
.Copyright p {
    font-size: 2vh;

}
.Copyright a {
    color: white;
    font-size: 2vh;

}

.icones-footer {
    width: 2.5vw;
    margin-top: 5vh;
    margin-left: 1vw;
    cursor: pointer
}

.redes-sociais {
    height: 10vh;
}

.coluna-direita p{
    display: flex;
}
.coluna-direita h3{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:3vh;
}
.social-midia span{
    margin-right: 20px; 
}

.baixo-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 1px;
    font-size: 2vh
}

.colunas-footer {
    display: flex;
    flex-direction: column;
    align-items: left;
    color: white;
    font-size: 2vh;
}



.cima-footer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-footer {
    width: 8vw;
}


.footer {
    width: 100%;
    background-color: #F48200;
}

* {
    padding: 0;
}

@media (max-width: 768px) {
    .logo-footer {
        width: 25vw;
    }

 
    .baixo-footer {
        flex-direction: column; 
        align-items: center;
        margin-top: 3vh;
        font-size: 3vh;
    }

    .colunas-footer {
        align-items: center;
        margin-bottom: 2vh;
    }

    .coluna-direita {
        text-align: center;
        margin-top: 2vh;
    }

    .social-midia span {
        font-size: 3vh; 
        margin-right: 15px;
    }

    .social-midia {
        margin-top: 1.5vh;
    }

    .cima-footer {
        padding: 3vh 0;
    }

    .baixo-footer p {
        font-size: 3vh; 
    }

    .pi {
        font-size: 3vh;
    }
}

@media (max-width: 820px) {
.logo-footer {
    width: 20vw; 
}

.baixo-footer {
    flex-direction: column; 
    align-items: center;
    margin-top: 3vh;
}

.colunas-footer {
    align-items: center;
    margin-bottom: 2vh;
}

.coluna-direita {
    text-align: center;
    margin-top: 2vh;
}

.social-midia span {
    font-size: 3vh; 
    margin-right: 15px;
}

.social-midia {
    margin-top: 1.5vh;
}

.pi {
    font-size: 3vh;
}


.cima-footer {
    padding: 3vh 0;
}

.baixo-footer p {
    font-size: 2.5vh; 
}

}

@media (min-width: 2560px) {

.logo-footer {
    width: 10vw; 
}

.Copyright {
    height: auto;
    flex-direction: row; 
    padding: 3vh 10vw;
}
.Copyright p, .Copyright a {
    font-size: 2.5vh; 
}

.baixo-footer {
    flex-direction: row; 
    justify-content: space-evenly; 
    margin-top: 5vh;
    font-size: 2vh; 
}

.colunas-footer {
    align-items: flex-start; 
    font-size: 2.5vh; 
    margin-right: 10vw;
}

.coluna-direita {
    text-align: left;
    font-size: 2.5vh; 
}

.social-midia span {
    font-size: 4vh; 
    margin-right: 25px;
}

.social-midia {
    margin-top: 2vh;
}

.pi {
    font-size: 4vh; 
}
.cima-footer {
    padding: 4vh 0;
}

.baixo-footer p {
    font-size: 3vh; 
}
}




@media (max-width: 375px) {
    .baixo-footer {
        flex-direction: column; 
        align-items: center; 
        padding: 10px;
    }

    .colunas-footer {
        font-size: 1.2rem;
        margin-bottom: 15px; 
    }

    .coluna-direita {
        text-align: center; 
        margin-top: 15px;
    }

    .logo-footer {
        width: 20vw; 
        
    }

 

    .social-midia span {
        font-size: 2.5vh; 
        margin-right: 15px; 
    }
}

@media (max-width: 414px) {
    .baixo-footer {
        flex-direction: column; 
        align-items: center; 
        padding: 10px;
    }

    .colunas-footer {
        font-size: 1.3rem; 
        margin-bottom: 20px; 
        width: 100%; 
        text-align: left; 
    }

    .coluna-direita {
        text-align: center; 
        margin-top: 20px;
        width: 100%; 
    }

    .logo-footer {
        width: 18vw; 

    

    .social-midia span {
        font-size: 2.5vh; 
        margin-right: 15px; 
    }

    .social-midia {
        margin-top: 10px; 
    }
}
}


@media(max-width: 1280px) {
    .cima-footer {
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

    .icones-footer {
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

    .baixo-footer h2 {
        font-size: 2vh
    }

}

</style>
