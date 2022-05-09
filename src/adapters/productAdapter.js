export const createAdapterProdfromFireStore = (doc) => {
    const data = doc.data()

    const formatProd = {
        id: doc.id,
        name: data.name,
        category: data.category,
        img: data.img,
        price: data.price,
        description: data.description,
        stock: data.stock
    }

    return formatProd
}