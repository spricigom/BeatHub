<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const menuOpen = ref(false);


function toggleMenu() {
    menuOpen.value = !menuOpen.value;


}
</script>


<template>
    <header>
        <div class="fundo">
            <div class="esquerda">
                <RouterLink to="/">
                    <img class="logo" src="@/assets/logo.png" alt="Logo" />
                </RouterLink>
                <div class="busca">
    <a class="busca-botao" href="#">
        <button><span class="pi pi-search" style="color: white;"></span></button>
    </a>
    <input class="busca-texto" type="text" placeholder="Pesquise">
</div>

                <!--
                -->
            </div>

            <div class="direita">
                <div class="login">
                    <button class="botao">
                        <span class="pi pi-user" style="font-size: 1.3rem; color: white;"></span>
                        <h6 id="amarelo">login</h6>
                    </button>
                </div>
                <div class="botoes-header">
                    <RouterLink to="/Carrinho"><span style="color: white; font-size: 1.3rem;" class="pi pi-shopping-cart"></span></RouterLink> 
                    <RouterLink to="/Favoritos"> <span style="color: white; font-size: 1.3rem;" class="pi pi-heart"></span></RouterLink>
                </div>

                <div class="icone-menu">
                    <button @click="toggleMenu"><span class="pi pi-bars" style="color: white;"></span></button>
                </div>
            </div>
        </div>
        <div :class="{ overlay: true, active: menuOpen }"></div>
        <div :class="{ menu: true, open: menuOpen }">
            <ul>
                <li class="nav-item">
                    <RouterLink to="/Guitarra">Guitarra</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/Baixo" id="amarelo">Baixo</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/Pedais">Pedais</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/Teclado" id="amarelo">Teclado</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/Violão">Violão</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/Bateria" id="amarelo">Bateria</RouterLink>
                </li>
            </ul>


        </div><hr class="hr">
        <div class="baixo">
            

            <nav>
                    <ul class="navegacao">
                        <li>
                            <RouterLink to="/Guitarra">Guitarra</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/Baixo" id="amarelo">Baixo</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/Pedais">Pedais</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/Teclado" id="amarelo">Teclado</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/Violão">Violão</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/Bateria" id="amarelo">Bateria</RouterLink>
                        </li>
                    </ul>
                </nav>
        </div>
    </header>
</template>

<style scoped>

@media (max-width: 768px) {
    header{
        margin-bottom: 7vh! important;
    }
    .hr{
        display: none !important;
    }
    .login h6{
        display: none !important;
    }
    .botoes-header {
        display: none !important;
    }
    .baixo{
        display: none !important;

    }
    .navegacao {
        display: none !important;
    }

    .icone-menu {
        display: block !important;
    }

    .icone-menu button {
        border: none;
        cursor: pointer;
        background-color: #f48200;
    }

    .menu ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 11rem;
    }

    .menu {
        background-color: #f48200;
        position: fixed;
        /* Fixa o menu na tela */
        top: 8rem;
        /* Alinha o menu no topo da tela */
        left: 0;
        right: 0;
        z-index: 9999;
        /* Garante que o menu ficará acima de outros conteúdos */
        display: none;
        /* Inicialmente o menu está oculto */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 40vh;
        /* O menu ocupa toda a altura da tela */
        box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
        /* Sombra suave apenas na parte inferior */
    }

    .overlay {
        position: fixed;
        top: 8rem;
        /* Ajuste conforme a altura do cabeçalho */
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        /* Escurece o fundo */
        z-index: 999;
        /* Fica acima de outros elementos, mas abaixo do cabeçalho */
        display: none;
        /* Inicialmente oculto */
    }

    .overlay.active {
        display: block;
        /* Torna visível quando o menu estiver aberto */
    }
 

    .menu.open {
        display: block;
    }

    .menu .open {
        display: flex;
    }

    .menu .nav-item {
        display: block;
        padding-bottom: 1.2rem;
    }

   
    .menu .Rlogin {
        display: flex;
        padding: 1rem 2rem;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: 2vh;
    }

    .menu.open {
        display: block;
    }

    .menu .Rlogin button {
        width: 100%;
    }
}
@media (max-width: 450px) {
    .busca-texto {
    
    width: 8rem !important;

}

}
@media (max-width: 360px) {
    .busca-texto {
    
    width: 6rem !important;

}

}
header{
    background-color: #f48200;
    height: 20vh;
    margin-bottom: 17vh;

}

.hr {
    /* margin: 1rem 0; */
    color: inherit;
    border: 0;
    border-top: 1px solid white;
    opacity: 1;
    z-index: 9999;
}
.login .botao {
    border: none;
    background-color: #f48200;
    width: 5.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.login {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 7vw;
}

.botao h6 {
    font-weight: 400;
    font-family: 'Josefin Sans', sans-serif;
    display: flex;
    position: relative;
    top: .5vh;
    font-size: 1.1rem;
}


.direita {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 18vw;
    margin-right: 2vw;
    text-align: center;
   
}

.esquerda {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 30vw;
    margin-left: 3vw;
}

.icone-menu {
    display: none;
}



.menu {
    display: none;
}

.busca-botao {
    color: white;
    height: 40px;
    width: 40px;
    float: right;
    border-radius: 50%;
    background-color: #f48200;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1vh;
}

.busca-botao button {
    border: none;
    background-color: #f48200;

}

.busca ::placeholder {
    color: white;
}

.fundo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 12vh;
    width: 100%;
    background: #f48200;
    padding-top: 3vh;


}
.baixo{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem 0;
    background-color: #f48200;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);   
    z-index: 0; 
    height: 5vh;


}
.busca {
    background: #f48200;
    border-radius: 40px;
    border: 1px solid white;
    padding-left: 1vw;
    display: flex;
    align-items: center;
}



.busca-texto {
    border: none;
    background: none;
    outline: none;
    float: left;
    color: white;
    font-size: 16px;
    width: 12rem;

}



.botoes-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 3rem;
    margin-right: 2vw;
}

.logo {
    width: 6rem;
    cursor: pointer;

}

.navegacao {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
}


.navegacao li {
    position: relative;
    padding: 0 20px;
    list-style: none;
    display: inline-block;
    cursor: pointer;
    font-family: 'Josefin Sans', sans-serif;
    transition:  0.2s ease-in-out; /* Transição suave na cor */
}
.navegacao li::after {
    content: "";
    position: absolute;
    bottom: 0; /* Posição da linha na parte inferior do texto */
    left: 15%;
    width: 0;
    height: 2px; /* Espessura da linha */
    background-color: white; /* Cor da underline */
    transition:  0.2s ease-in-out; /* Animação de largura */
}
.navegacao li:hover::after {
    width: 72%; /* A linha se expande ao passar o mouse */
}
a {
    text-decoration: none;
    color: white;
    font-family: 'Josefin Sans', sans-serif;
}

#amarelo {
    color: white;
}
</style>
