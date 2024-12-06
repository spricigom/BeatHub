
export const MockGuitarra = [
    
    {
        id: 1,
        nome: 'Masterbuilt John Frusciante Stratocaster',
        preco: 'R$ 42,00 por mês',
        img: 'guitarra1.jpg', 
    },
    {
        id: 2,
        nome: 'Fender® x Hello Kitty® Pink Stratocaster',
        preco: 'R$ 17,00 por mês',
        img: 'guitarra2.jpg', 
        
    },
    {
        id: 3,
        nome: 'Player II Jazzmaster',
        preco: 'R$ 32,00 por mês',
        img: 'guitarra3.jpg', 

    },
    {
        id: 4,
        nome: 'Jimmy Page Telecaster',
        preco: 'R$ 24,00 por mês',
        img: 'guitarra4.jpg', 
        
    },
    {
        id: 5,
        nome: 'Kurt Cobain Jaguar® Left-Han',
        preco: ' R$ 32,00 por mês',
        img: 'guitarra5.jpg', 
        
    },
    {
        id: 6,
        nome: 'American Performer Stratocaster® HSS',
        preco: 'R$ 35,00 por mês',
        img: 'guitarra6.jpg', 
    },
    {
        id: 7,
        nome: 'Eric Clapton Stratocaster®',
        preco: 'R$ 69,00 por mês',
        img: 'guitarra7.jpg', 
        
    },
    {
        id: 8,
        nome: 'Jimi Hendrix Stratocaster®',
        preco: ' R$ 287,00 por mês',
        img: 'guitarra8.jpg', 
        
    },
    {
        id: 9,
        nome: 'H.E.R. Stratocaster®',
        preco: ' R$ 42,00 por mês',
        img: 'guitarra9.jpg', 
        
    },
    {
        id: 10,
        nome: 'Tom Morello Stratocaster®',
        preco: 'R$ 17,00 por mês',
        img: 'guitarra10.jpg', 
    }
]
export const favoritos = MockGuitarra.filter(p => p.favoritado)
