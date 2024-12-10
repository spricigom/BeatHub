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
    background-color:rgb(95, 95, 95);
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
    width: 20vw;
    height: 10vh;
} 

 .colunas-footer {
    height: 10vh;
    width: 10vw;
    display: inline-block;
    margin-top: 5vh;

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

* {
    padding: 0;
}
@media (max-width: 1024px) {
  .logo-footer {
    width: 10vw;
  }

  .icones-footer {
    width: 4vw;
  }

  .redes-sociais {
    width: 30vw;
  }

  .colunas-footer h2 {
    font-size: 1rem;
  }
}

/* Telas até 780px */
@media (max-width: 780px) {
  .logo-footer {
    width: 12vw;
  }

  .icones-footer {
    width: 5vw;
  }

  .redes-sociais {
    width: 100%;
    justify-content: center;
  }

  .baixo-footer {
    flex-wrap: wrap;
  }

  .colunas-footer {
    width: 40%;
    text-align: center;
  }

  .colunas-footer h2 {
    font-size: 0.9rem;
  }
}

/* Telas até 480px */
@media (max-width: 480px) {
  .logo-footer {
    width: 20vw;
  }

  .icones-footer {
    width: 6vw;
  }

  .redes-sociais {
    justify-content: center;
    width: 100%;
  }

  .baixo-footer {
    flex-direction: column;
    align-items: center;
  }

  .colunas-footer {
    width: 80%;
    margin: 1vh 0;
  }

  .colunas-footer h2 {
    font-size: 0.8rem;
  }

  .Copyright {
    font-size: 0.8rem;
  }
}

/* Telas até 320px */
@media (max-width: 320px) {
  .logo-footer {
    width: 25vw;
  }

  .icones-footer {
    width: 8vw;
  }

  .redes-sociais {
    justify-content: center;
    width: 100%;
  }

  .baixo-footer {
    flex-direction: column;
    align-items: center;
  }

  .colunas-footer {
    width: 90%;
    text-align: center;
  }

  .colunas-footer h2 {
    font-size: 0.7rem;
  }

  .Copyright {
    font-size: 0.7rem;
  }
}


</style>

