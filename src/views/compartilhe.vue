<script setup>
import { ref } from "vue";

const modal = ref(null);
const message = ref("Default message");
const isVisible = ref(false);

const shareData = {
    title: "Share this page",
    text: "Check out this website!",
    url: "https://example.com"
};

async function webShare() {
    if (navigator.share) {
        try {
            await navigator.share(shareData);
            showMsg("Thank you!");
        } catch {
            showMsg("Something went wrong");
        }
    } else {
        showMsg("Web Share API is not supported");
    }
}

function showMsg(msg) {
    message.value = msg;
    isVisible.value = true;
    setTimeout(() => {
        isVisible.value = false;
    }, 5000);
}
</script>

<template>
    <main>
        <div class="main">
            <h2>Web Share API</h2>
            <button @click="webShare">Share</button>
            <div ref="modal" :class="{ show: isVisible }" class="modal">
                <p>{{ message }}</p>
            </div>
        </div>
    </main>
</template>

<style scoped>
.modal {
    display: none;
    position: fixed;
    top: 3%;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 3;
    width: 16vw;
    height: 8vh;
    padding-top: 2.5vh;
    padding-left: 1ex;
    border-radius: 10px;
    background-color: rgb(255, 42, 42);
    color: white;
    animation: fadeIn 1s;
}
.modal.show {
    display: block;
}
@keyframes fadeIn {
    from {
        top: 0%;
        opacity: 0;
    }
    to {
        top: 3%;
        opacity: 1;
    }
}
.main button {
    padding: 6px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 8px;
    border: 1px solid gold;
    outline: none;
    background-color: transparent;
    color: black;
    cursor: pointer;
}
.main button:hover {
    border: 1px solid transparent;
    background-color: gold;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
