const products = [
    {
        id: '1',
        name: 'Torta de Chocolate',
        price: 30,
        Category: 'tortas',
        stock: 5,
        description: 'Descripción de la torta de chocolate',
        img: 'https://img.itdg.com.br/tdg/images/recipes/000/000/443/279011/279011_original.jpg?mode=crop&width=710&height=400'
    },
    {
        id: '2',
        name: 'Café Mocaccino',
        price: 15,
        Category: 'cafes',
        stock: 10,
        description: 'Descripción del café mocaccino',
        img: 'https://mrcheney.com.br/wp-content/uploads/2016/03/moccha.png'
    },
    {
        id: '3',
        name: 'Pan casero relleno',
        price: 20,
        Category: 'panes',
        stock: 7,
        description: 'Descripción del pan casero',
        img: 'https://songtre.tv/img/how-make-potato-bread/48/how-make-artisan-sourdough-bread-41.jpg'
    }
]

export const getProducts = () => {
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}

export const getItem = (id) => {
    return new Promise (resolve=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === id))
        },2000)
    })
}