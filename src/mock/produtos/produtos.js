
export const MockProducts = [
    {
        id: 1,
        nome: 'Microfone SoundPro SP',
        preco:42.00,
        img: 'microfone.png', 
        
    },
    {
        id: 2,
        nome: 'Pedal Over Drive',
        preco :17.00 ,
        img: 'pedal-OverDrive.png', 
    },
    {
        id: 3,
        nome: 'Cubo Amplificador',
        preco :32.00 ,
        img: 'amplificador.png', 

    },
    {
        id: 4,
        nome: 'Ukulele Classic',
        preco :24.00 ,
        img: 'ukulele2.png', 
        
    },
    {
        id: 5,
        nome: 'Pandeiro',
        preco:32.00 ,
        img: 'pandeiro.png', 
        
    },
    {
        id: 6,
        nome: 'Teclado musical 61 teclas',
        preco: 35.00 ,
        img: 'teclado.png', 
    },
    {
        id: 7,
        nome: 'Trompete Werill Master',
        preco :69.00 ,
        img: 'trompete.png', 
        
    },
    {
        id: 8,
        nome: 'Bateria Acústica',
        preco: 287.00 ,
        img: 'bateria.png', 
        
    },
    {
        id: 9,
        nome: 'Prato Hi Hat',
        preco: 42.00 ,
        img: 'prato.png', 
        
    },
    {
        id: 10,
        nome: 'Gaita de boca harmônica',
        preco: 17.00 ,
        img: 'gaitaBoca.png', 
    }
]
export const favoritos = MockProducts.filter(p => p.favoritado)
