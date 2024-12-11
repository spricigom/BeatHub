import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";
export const useProdutoStore = defineStore('produto', () => {
    const produtos = ref([]);
    
    const getProdutoById = (id) => produtos.value.find(p => p.id == id)

  
    const buscarTodosOsProdutos  = async () => {
    const { data, error } = await supabase.from('produtos').select('*').eq('categoria', 'principal');
    if (error) {
      console.error('Erro ao buscar produtos:', error.message);
    } else {
      produtos.value = data;
      
    }
  };

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


    const produtoGuitarra = async () => {
    const { data, error } = await supabase.from('produtos').select('*').eq('categoria', 'guitarra');
    if (error) {
      console.error('Erro ao carregar produtos do catálogo:', error);
    } else {
      produtos.value = data;
      console.log(produtos)
    }}



    const produtoBaixo = async () => {
        const { data, error } = await supabase.from('produtos').select('*').eq('categoria', 'baixo');
        if (error) {
          console.error('Erro ao carregar produtos do catálogo:', error);
        } else {
          produtos.value = data;
          console.log(produtos)
        }}

    const produtoPedais = async () => {
        const { data, error } = await supabase.from('produtos').select('*').eq('categoria', 'pedal');
        if (error) {
          console.error('Erro ao carregar produtos do catálogo:', error);
        } else {
          produtos.value = data;
          console.log(produtos)
        }}

    const produtoTeclado = async () => {
        const { data, error } = await supabase.from('produtos').select('*').eq('categoria', 'teclado');
        if (error) {
          console.error('Erro ao carregar produtos do catálogo:', error);
        } else {
          produtos.value = data;
          console.log(produtos)
        }}

    const produtoViolao = async () => {
        const { data, error } = await supabase.from('produtos').select('*').eq('categoria', 'violao');
        if (error) {
          console.error('Erro ao carregar produtos do catálogo:', error);
        } else {
          produtos.value = data;
          console.log(produtos)
        }}

    const produtoBateria = async () => {
        const { data, error } = await supabase.from('produtos').select('*').eq('categoria', 'bateria');
        if (error) {
          console.error('Erro ao carregar produtos do catálogo:', error);
        } else {
          produtos.value = data;
          console.log(produtos)
        }}

    return {
        getProdutoById,
        produtoBaixo,
        produtoPedais,
        produtoTeclado,
        produtoViolao,
        produtoBateria,
        produtoGuitarra,
        produtos,
        buscarTodosOsProdutos,
        favoritar,
        produtosFavoritos,
        addCarrinho,
        produtosCarrinho,
        removerProduto,
    }
})