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
export function getImage2(productIndex) {
    console.log(productIndex)
    const product = produtoStore.produtos.find(p => p.id === productIndex)
    console.log(product)
    const url = new URL(`../assets/${product?.img2}`, import.meta.url).href
    console.log(url)
    return url
}
export function getImage3(productIndex) {
    console.log(productIndex)
    const product = produtoStore.produtos.find(p => p.id === productIndex)
    console.log(product)
    const url = new URL(`../assets/${product?.img3}`, import.meta.url).href
    console.log(url)
    return url
}
export function getImage4(productIndex) {
    console.log(productIndex)
    const product = produtoStore.produtos.find(p => p.id === productIndex)
    console.log(product)
    const url = new URL(`../assets/${product?.img4}`, import.meta.url).href
    console.log(url)
    return url
}