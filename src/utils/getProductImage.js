import { useProdutoStore } from "@/stores/produto"

const produtoStore = useProdutoStore()

export function getImage(productIndex) {
    console.log(productIndex)
    const product = produtoStore.produtos.find(p => p.id === productIndex)
    console.log(product)
    const url = new URL(`../assets/${product?.img}`, import.meta.url).href
    console.log(url)
    return url
}