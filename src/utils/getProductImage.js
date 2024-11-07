import { useProdutoStore } from "@/stores/produto"

const produtoStore = useProdutoStore()

export function getImage(productIndex) {
    const url = new URL(`../assets/${produtoStore.produtos[productIndex].img}`, import.meta.url).href
    return url
}