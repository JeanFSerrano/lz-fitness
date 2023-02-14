import axios from "axios";
import { useQuery } from "react-query";
import ProductsCard from "../components/ProductsCard";
import { formatPrice } from "../utils/formatPrice";

const Blusas = () => {
    const { data: blusas, status, error } = useQuery('blusas', async () => {
        const response = await axios.get('https://test-api-production-1830.up.railway.app/blusas')
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
            <h2 className='text-center mt-40 text-3xl'>Blusas</h2>
            <div className='flex flex-wrap items-center justify-around mt-10 mb-40'>
                {
                    blusas?.map(blusa => (

                        <ProductsCard
                            key={blusa.id}
                            id={blusa.id}
                            name={blusa.nome}
                            image={blusa.imagem}
                            price={formatPrice(blusa.preço)}
                        />


                    ))
                }
            </div>
        </>
    )
}

export default Blusas