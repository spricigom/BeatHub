import { useProdutoStore } from "@/stores/produto"

const produtoStore = useProdutoStore()

export function getImage(productIndex) {
    const product = produtoStore.produtos.find(p => p.id === productIndex)
    const url = new URL(`../assets/${product.img}`, import.meta.url).href
    return url
}