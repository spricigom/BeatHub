
export const MockBateria = [
    
    {
        id: 1,
        nome: 'Bateria Gretsch',
        preco: 'R$ 92,00 por mês',
        img: 'bateria1.webp', 
    },
    {
        id: 2,
        nome: 'Bateria Recording Custom',
        preco: 'R$ 77,00 por mês',
        img: 'bateria2.webp', 
        
    },
    {
        id: 3,
        nome: 'Bateria American Musical',
        preco: 'R$ 72,00 por mês',
        img: 'bateria33.jpeg', 

    },
    {
        id: 4,
        nome: 'Bateria D one Grestch',
        preco: 'R$ 84,00 por mês',
        img: 'bateria4.webp', 
        
    },
    {
        id: 5,
        nome: 'Bateria Well Drums',
        preco: ' R$ 31,00 por mês',
        img: 'bateria5.webp', 
        
    },
    {
        id: 6,
        nome: 'Bateria Fusion',
        preco: 'R$ 38,00 por mês',
        img: 'bateria6.webp', 
    },
    {
        id: 7,
        nome: 'Bateria AudioTek',
        preco: 'R$ 69,00 por mês',
        img: 'bateria7.webp', 
        
    },
    {
        id: 8,
        nome: 'Bateria Tama Stagestar',
        preco: ' R$ 20,00 por mês',
        img: 'bateria8.jpeg', 
        
    },
    {
        id: 9,
        nome: 'Bateria Bumbo 20',
        preco: ' R$ 44,00 por mês',
        img: 'bateria9.jpeg', 
        
    },
    {
        id: 10,
        nome: 'Bateria Power ROckers',
        preco: 'R$ 50,00 por mês',
        img: 'bateria10.webp', 
    }
]
export const favoritos = MockBateria.filter(p => p.favoritado)
