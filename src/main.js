import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'

import "primeicons/primeicons.css";


const app = createApp(App);

app.use(createPinia());
app.use(router);


app.mount('#app');
