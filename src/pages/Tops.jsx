import axios from 'axios';
import { useQuery } from 'react-query';
import ProductsCard from '../components/ProductsCard'
import { formatPrice } from '../utils/formatPrice';

const Tops = () => {

  const { data: tops, status, error } = useQuery('tops', async () => {
    const response = await axios.get('https://test-api-production-1830.up.railway.app/tops')
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
      <h2 className='text-center mt-40 text-3xl'>Tops</h2>
      <div className='flex flex-wrap items-center justify-around mt-10 mb-40'>
        {
          tops?.map(top => (

            <ProductsCard
              key={top.id}
              id={top.id}
              name={top.nome}
              image={top.imagem}
              price={formatPrice(top.preço)}
            />

          ))
        }
      </div>
    </>
  )
}

export default Tops