
export const MockPiano = [
    
    {
        id: 1,
        nome: 'Teclado  1PSR',
        preco: 'R$ 92,00 por mês',
        img: 'piano1.jpg', 
    },
    {
        id: 2,
        nome: 'Teclado Cst 3000',
        preco: 'R$ 77,00 por mês',
        img: 'piano2.jpg', 
        
    },
    {
        id: 3,
        nome: 'Teclado 3Pss',
        preco: 'R$ 72,00 por mês',
        img: 'piano3.jpg', 

    },
    {
        id: 4,
        nome: 'Teclado 4Pss',
        preco: 'R$ 84,00 por mês',
        img: 'piano4.jpg', 
        
    },
    {
        id: 5,
        nome: 'Teclado 4PSR',
        preco: ' R$ 31,00 por mês',
        img: 'piano5.avif', 
        
    },
    {
        id: 6,
        nome: 'Teclado MXT',
        preco: 'R$ 38,00 por mês',
        img: 'piano6.avif', 
    },
    {
        id: 7,
        nome: 'Teclado 4EZ',
        preco: 'R$ 69,00 por mês',
        img: 'piano7.jpg', 
        
    },
    {
        id: 8,
        nome: 'Teclado 4PSR',
        preco: ' R$ 20,00 por mês',
        img: 'piano8.jpg', 
        
    },
    {
        id: 9,
        nome: 'Teclado MXT 128',
        preco: ' R$ 44,00 por mês',
        img: 'piano10.avif', 
        
    },
    {
        id: 10,
        nome: 'Teclado 2PSR',
        preco: 'R$ 50,00 por mês',
        img: 'piano11.jpg', 
    }
]
export const favoritos = MockPiano.filter(p => p.favoritado)
