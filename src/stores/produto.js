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

    return {
        produtos,
        buscarTodosOsProdutos,
        favoritar,
        produtosFavoritos
    }
})