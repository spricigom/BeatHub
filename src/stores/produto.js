import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { MockProducts , MockProducts2 } from '@/mock';


export const useProdutoStore = defineStore('produto', () => {
    const produtos = ref([]);


    const buscarTodosOsProdutos = async () => {
        produtos.value = MockProducts; // vai buscar no servidor
    }

    const favoritar = (id) => {
        const product = produtos.value.find(p => p.id == id)
        product.favoritado = !product.favoritado
        // vai salvar no servidor
    }

    const produtosFavoritos = computed(() => produtos.value.filter(p => p.favoritado))

    const addCarrinho = (id) => {
        const product = produtos.value.find(p => p.id == id)
        product.noCarrinho = !product.noCarrinho
        // vai salvar no carrinho no localStorage ou algum outro lugar
    }

    const produtosCarrinho = computed(() => produtos.value.filter(p => p.noCarrinho))
    return {
        produtos,
        buscarTodosOsProdutos,
        favoritar,
        produtosFavoritos,
        addCarrinho,
        produtosCarrinho
    }
})


export const useProdutoStore2 = defineStore('produto2', () => {
    const produtos2 = ref([]);


    const buscarTodosOsProdutos2 = async () => {
        produtos2.value = MockProducts2; // vai buscar no servidor
    }

    const favoritar2 = (id) => {
        const product2 = produtos2.value.find(p => p.id == id)
        product2.favoritado = !product2.favoritado
        // vai salvar no servidor
    }

    const produtosFavoritos2 = computed(() => produtos2.value.filter(p => p.favoritado))

    const addCarrinho2 = (id) => {
        const product2 = produtos2.value.find(p => p.id == id)
        product2.noCarrinho = !product2.noCarrinho
        // vai salvar no carrinho no localStorage ou algum outro lugar
    }

    const produtosCarrinho2 = computed(() => produtos2.value.filter(p => p.noCarrinho))
    return {
        produtos2,
        buscarTodosOsProdutos2,
        favoritar2,
        produtosFavoritos2,
        addCarrinho2,
        produtosCarrinho2
    }
})