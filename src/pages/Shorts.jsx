import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import ProductsCard from '../components/ProductsCard'
import { formatPrice } from '../utils/formatPrice'

const Shorts = () => {
  const { data: shorts, status, error } = useQuery('shorts', async () => {
    const response = await axios.get('https://test-api-production-1830.up.railway.app/shorts')
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
      <h2 className='text-center mt-40 text-3xl'>Shorts</h2>
      <div className='flex flex-wrap items-center justify-between mt-10 mb-40'>
        {
          shorts?.map(short => (
   
            <ProductsCard
              key={short.id}
              id={short.id}
              name={short.nome}
              image={short.imagem}
              price={formatPrice(short.preço)}
            />

          ))
        }
      </div>
    </>
  )
}

export default Shorts