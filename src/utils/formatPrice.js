export const formatPrice = (preco) => {
    const formatedPrice = (preco / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    return formatedPrice
}
