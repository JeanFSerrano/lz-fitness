import axios from 'axios'
import { useQuery } from 'react-query'
import ProductsCard from '../components/ProductsCard'
import { formatPrice } from '../utils/formatPrice'

const Conjuntos = () => {

    const { data: conjuntos, status, error } = useQuery('conjuntos', async () => {
        const response = await axios.get('https://test-api-production-1830.up.railway.app/calcas')
        return response.data
    })

    if (status === 'loading') {
        return <p>Carregando...</p>;
    }

    if (status === 'error') {
        return <p>Ocorreu um erro: {error.message}</p>;
    }

    return (

        <>
            <h2 className='text-center mt-40 text-3xl'>Conjuntos de Calças</h2>
            <div className='flex flex-wrap items-center justify-around mt-10 mb-40'>
                {
                    conjuntos?.map(conjunto => (

                        <ProductsCard
                            key={conjunto.id}
                            id={conjunto.id}
                            name={conjunto.nome}
                            image={conjunto.imagem}
                            price={formatPrice(conjunto.preço)}
                        />

                    ))
                }
            </div>
        </>
    )
}

export default Conjuntos