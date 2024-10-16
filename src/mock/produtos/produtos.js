
export const MockProducts = [
    {
        id: 1,
        nome: 'Microfone SoundPro SP',
        preco: 'R$ 42,00 por mês',
        img: 'microfone.png', 
        
    },
    {
        id: 2,
        nome: 'Pedal Over Drive',
        preco: 'R$ 17,00 por mês',
        img: 'pedal-OverDrive.png', 
    },
    {
        id: 3,
        nome: 'Cubo Amplificador',
        preco: 'R$ 32,00 por mês',
        img: 'amplificador.png', 

    },
    {
        id: 4,
        nome: 'Ukulele',
        preco: 'R$ 24,00 por mês',
        img: 'ukulele2.png', 
        
    },
    {
        id: 5,
        nome: 'Pandeiro',
        preco: ' R$ 32,00 por mês',
        img: 'pandeiro.png', 
        
    },
    {
        id: 6,
        nome: 'Teclado musical 61 teclas',
        preco: 'R$ 35,00 por mês',
        img: 'teclado.png', 
    },
    {
        id: 7,
        nome: 'Trompete Werill Master',
        preco: 'R$ 69,00 por mês',
        img: 'trompete.png', 
        
    },
    {
        id: 8,
        nome: 'Bateria Acústica',
        preco: ' R$ 287,00 por mês',
        img: 'bateria.png', 
        
    },
    {
        id: 9,
        nome: 'Prato Hi Hat',
        preco: ' R$ 42,00 por mês',
        img: 'prato.png', 
        
    },
    {
        id: 10,
        nome: 'Gaita de boca harmônica',
        preco: 'R$ 17,00 por mês',
        img: 'gaitaBoca.png', 
    }
]
export const favoritos = MockProducts.filter(p => p.favoritado)