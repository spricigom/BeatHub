<script setup>
import { ref } from 'vue';

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
                    <img class="logo" src="@/assets/certa.png" alt="Logo" />
                </RouterLink>

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

            <div class="direita">
                <div class="login">
                        <button class="login botao">
                            <h6 id="amarelo">login</h6>
                            <span class="pi pi-user" style="font-size: 1.5vw; color: #f48200;"></span>
                        </button>
                    </div>
                <div class="botoes-header">
                    
                    <div class="busca">
                        <input class="busca-texto" type="text" placeholder="Pesquise">
                        <a class="busca-botao" href="#">
                            <button><span class="pi pi-search" style="color: #f48200;"></span></button>
                        </a>
                    </div>
                </div>

                <div class="icone-menu">
                    <button @click="toggleMenu"><span class="pi pi-bars"></span></button>
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
           
           
        </div>
    </header>
</template>

<style scoped>
@media (max-width: 800px) {
    .botoes-header {
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
    }

    .menu ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 11rem;
    }
    .menu{
        background-color: #efefef;
        position: fixed; /* Fixa o menu na tela */
        top: 8rem; /* Alinha o menu no topo da tela */ 
        left: 0;
        right: 0;
        z-index: 9999; /* Garante que o menu ficará acima de outros conteúdos */
        display: none; /* Inicialmente o menu está oculto */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 40vh; /* O menu ocupa toda a altura da tela */
        box-shadow: 0  4px 2px rgba(0, 0, 0, 0.2); /* Sombra suave apenas na parte inferior */
    }

    .overlay {
    position: fixed;
    top: 8rem; /* Ajuste conforme a altura do cabeçalho */
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); /* Escurece o fundo */
    z-index: 999; /* Fica acima de outros elementos, mas abaixo do cabeçalho */
    display: none; /* Inicialmente oculto */
}

.overlay.active {
    display: block; /* Torna visível quando o menu estiver aberto */
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

.login {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 5.5vw;
}

.login h6 {
    font-weight: 400;
    font-family: 'Josefin Sans', sans-serif;
    display: flex;
    position: relative;
    top: .5vh;
}

.direita {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 18vw;
    margin-right: 2vw;
    text-align: center;
    position: relative;
    bottom: 1vh;
}

.esquerda {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 38vw;
    margin-left: 3vw;
}

.icone-menu {
    display: none;
}

.botao {
    border: none;
    display: flex;
    justify-content: center;
}

.menu {
    display: none;
}

.busca-botao {
    color: #f48200;
    height: 40px;
    width: 40px;
    float: right;
    border-radius: 50%;
    background-color: #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1vh;
}

.busca-botao button {
    border: none;

}

.busca ::placeholder {
    color: #f48200;
}

.fundo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 20vh;
    width: 100vw;
}

.busca {
    background: #efefef;
    border-radius: 40px;
    border: 1px solid #f48200;
    padding-left: 1vw;
    display: flex;
    align-items: center;
}



.busca-texto {
    border: none;
    background: none;
    outline: none;
    float: left;
    color: #f48200;
    font-size: 16px;
    width: 6vw;
}

.login {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 5.5vw;
}

.botoes-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 18vw;
    margin-right: 2vw;
    position: relative;
}

.logo {
    width: 4rem;
    cursor: pointer;
    position: relative;
    bottom: 1.5vh;
}

.navegacao {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.navegacao li {
    padding: 0 20px;
}

a {
    text-decoration: none;
    color: #000;
    font-family: 'Josefin Sans', sans-serif;
}

#amarelo {
    color: #f48200;
}
</style>
