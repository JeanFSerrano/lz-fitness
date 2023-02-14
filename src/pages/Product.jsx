import axios from 'axios'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import ProductsCard from '../components/ProductsCard'
import { formatPrice } from '../utils/formatPrice'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'


const Product = () => {

  const { id } = useParams()

  const { data: product, status, error } = useQuery('produto', async () => {
    const response = await axios.get(`https://test-api-production-1830.up.railway.app/products/${id}`)
    return response.data
  })

  if (status === 'loading') {
    return <p>Carregando...</p>;
  }

  if (status === 'error') {
    return <p>Ocorreu um erro: {error.message}</p>;
  }

  const calculateDiscount = (price, percentage) => {

    const factor = product[0].desconto / 100
    const result = product[0].preço * (1 - factor)
    return formatPrice(result)

  }

  return (
    <>
      <section className='mb-40'>
        <div className='flex mt-40 mb-20 justify-around items-center px-4'>
          <div className='flex items-center justify-center w-3/5'>
            <ProductsCard
              name=' '
              image={product[0].imagem}
              price=' '
            />
          </div>

          <div className='flex flex-col gap-2 flex-grow'>
            <h2 className='italic text-4xl'>{product[0].nome}</h2>
            <span className='text-[#717171]'>Tamanho único (36-40)</span>

            {product[0].desconto == null ?
              <p className='italic text-3xl'>Preço: R$ {formatPrice(product[0].preço)}</p>
              :
              <div className='flex items-center'>
                <p className='italic text-4xl flex-grow-0 mr-3'>Preço: {calculateDiscount(product[0].preço, product[0].desconto)} </p>
                <span className='text-[#E78E93] line-through'>{formatPrice(product[0].preço)}</span>
              </div>
            }

            <p>Em até <span className='font-extrabold'>3x R$ 12,34 </span>sem juros</p>
            <p><span className='text-[#E78E93] font-bold'>ATENÇÃO:</span> Restam <span className='font-extrabold'>2</span> unidade(s) em estoque!</p>

            <div className='flex items-center'>
              <h3 className='mt-5 text-[#E78E93] font-bold'>Descrição</h3>
              <RiArrowDropDownLine size={'30px'} className='mt-4' color='#E78E93' />
            </div>

            <span className='text-sm'>Composição: Poliamida e Elastano</span>

            <div className='flex'>
              <div className='bg-white border-2 border-black px-8 py-2 gap-2 rounded-full flex justify-between mr-4 '>
                <button>-</button><span>1</span><button>+</button>
              </div>
              <button className='bg-[#E78E93] text-white rounded-full flex items-center justify-center flex-grow'>COMPRAR</button>
            </div>

            <div className='flex items-center gap-2  bg-white rounded-full border-[1px] border-[#E78E93] px-4 py-2'>
              <TbTruckDelivery size={'36px'} color={'#E78E93'} />
              <input type='text' placeholder='Consultar Frete:' className='placeholder-[#E78E93] flex-grow text-[#E78E93] text-left' />
            </div>
          </div>
        </div>

        <section>
          <h2 className='text-center italic text-4xl mb-6'>Complete o look:</h2>
          <div className='flex lg:flex-row items-start justify-center px-6 xs:flex-col'>
            <div className='flex flex-grow-0 items-center gap-3 mr-4'>
              <ProductsCard />
              <span className='text-9xl text-[#E78E93]'>+</span>
              <ProductsCard />
              <span className='text-9xl text-[#E78E93]'>=</span>
            </div>

            <div className='flex lg:flex-col xs:flex flex-wrap'>
              <div className='flex'>
                <div className='flex lg:flex-row items-center justify-start w-3/3 gap-4 xs:flex-col'>
                  <div className='lg:w-1/4 xs:w-2/4'>
                    <ProductsCard
                      name=' '
                      price=' '
                    />
                  </div>
                  <p className='w-[99%] text-sm' >Conjunto Calça Básica - ChocoBasic</p>
                </div>
              </div>
              <div className='flex'>
              <div className='flex lg:flex-row items-center justify-start w-3/3 gap-4 xs:flex-col'>
                <div className='lg:w-1/4 xs:w-2/4'>
                    <ProductsCard
                      name=' '
                      price=' '
                    />
                  </div>
                  <p className='w-[99%] text-sm' >Conjunto Calça Básica - ChocoBasic</p>
                </div>
              </div>

              <div className='flex flex-col gap-2 text-center xs:w-full mt-8 '>
                <h3 className='italic'>Valor total: R$ 250,00</h3>
                <p className='text-sm'>Em até 3x sem juros</p>
                <button className='bg-[#E78E93] text-white rounded-full py-3'>COMPRAR</button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Product