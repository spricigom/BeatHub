import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";
export const useProdutoStore = defineStore('produto', () => {
    const produtos = ref([]);
    
    function getProdutoById(id) {
      const produto = produtos.value.find(p => p.id == id);
      return produto;
    }

  
    const buscarTodosOsProdutos  = async () => {
    const { data, error } = await supabase.from('produtos').select('*').eq('categoria', 'Principal');
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
        console.log(product)
        const userData = localStorage.getItem('product');
        product.noCarrinho = !product.noCarrinho
        console.log(userData)
        return userData
    }

    const produtosCarrinho = computed(() => produtos.value.filter(p => p.noCarrinho))

    const removerProduto = (productId) => {
        produtos.value = produtos.value.filter(produto => produto.id !== productId);
    }


    const produtoGuitarra = async () => {
    const { data, error } = await supabase.from('produtos').select('*').eq('categoria', 'Guitarras');
    if (error) {
      console.error('Erro ao carregar produtos do catálogo:', error);
    } else {
      produtos.value = data;
      console.log(produtos)
    }}



    const produtoBaixo = async () => {
        const { data, error } = await supabase.from('produtos').select('*').eq('categoria', 'Baixos');
        if (error) {
          console.error('Erro ao carregar produtos do catálogo:', error);
        } else {
          produtos.value = data;
          console.log(produtos)
        }}

    const produtoPedais = async () => {
        const { data, error } = await supabase.from('produtos').select('*').eq('categoria', 'Pedais');
        if (error) {
          console.error('Erro ao carregar produtos do catálogo:', error);
        } else {
          produtos.value = data;
          console.log(produtos)
        }}

    const produtoTeclado = async () => {
        const { data, error } = await supabase.from('produtos').select('*').eq('categoria', 'Teclados');
        if (error) {
          console.error('Erro ao carregar produtos do catálogo:', error);
        } else {
          produtos.value = data;
          console.log(produtos)
        }}

    const produtoViolao = async () => {
        const { data, error } = await supabase.from('produtos').select('*').eq('categoria', 'Violões');
        if (error) {
          console.error('Erro ao carregar produtos do catálogo:', error);
        } else {
          produtos.value = data;
          console.log(produtos)
        }}

    const produtoBateria = async () => {
        const { data, error } = await supabase.from('produtos').select('*').eq('categoria', 'Baterias');
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