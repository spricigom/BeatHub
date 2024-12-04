import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { MockProducts } from '@/mock';

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

    const removerProduto = (productId) => {
        produtos.value = produtos.value.filter(produto => produto.id !== productId);
    }
    return {
        produtos,
        buscarTodosOsProdutos,
        favoritar,
        produtosFavoritos,
        addCarrinho,
        produtosCarrinho,
        removerProduto,
    }
})