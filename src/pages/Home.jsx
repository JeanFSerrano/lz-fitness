import banner from '../assets/imgs/banner.png'
import { bannerCandy, modelo1, modelo2 } from '../assets/imgs'
import ProductsCard from '../components/ProductsCard'
import Button from '../components/Button'
import { Link } from 'react-router-dom'


const Home = () => {
  const productReleases8Loops = [1, 2, 3, 4, 5, 6, 7, 8]
  const productReleases4Loops = [1, 2, 3, 4]

  return (
    <>
      <main className='mt-32 mb-40'>
        <figure>
          <img src={banner} alt="Banner com anúncios" width={'100%vw'} />
        </figure>

        <section className='flex justify-center flex-wrap mt-24 gap-x-4 gap-y-36'>
          <Link to='/collections/blusas' className='bg-[#E78E93] lg:w-1/5 h-[341px] flex items-center justify-center rounded-2xl relative md:w-1/3 sm:1/1'>
            <figure>
              <img src={modelo1} alt="Modelo de Conjuntos" />
            </figure>
            <h2 className='absolute top-[75%] text-white text-4xl italic font-semibold lg:text-center md:text-3xl text-center '>Conjuntos</h2>
          </Link>

          <Link to='/collections/tops' className='bg-[#1C1E3A] lg:w-1/5 h-[341px] flex items-center justify-center rounded-2xl relative md:w-1/3 sm:1/1'>
            <figure>
              <img src={modelo2} alt="Modelo de Tops" />
            </figure>
            <h2 className='absolute top-[75%] text-white text-4xl italic font-semibold lg:text-center md:text-3xl text-center '>Tops</h2>
          </Link>

          <Link to='/collections/shorts' className='bg-[#E78E93] lg:w-1/5 h-[341px] flex items-center justify-center rounded-2xl relative md:w-1/3 sm:1/1'>
            <figure>
              <img src={modelo1} alt="Modelo de Shorts" />
            </figure>
            <h2 className='absolute top-[75%] text-white text-4xl italic font-semibold lg:text-center md:text-3xl text-center '>Shorts</h2>
          </Link>

          <Link to='/collections/calcas' className='bg-[#1C1E3A] lg:w-1/5 h-[341px] flex items-center justify-center rounded-2xl relative md:w-1/3 sm:1/1'>
            <figure>
              <img src={modelo2} alt="Modelo de Leggings" />
            </figure>
            <h2 className='absolute top-[75%] text-white text-4xl italic font-semibold lg:text-center md:text-3xl text-center '>Leggings</h2>
          </Link>
        </section>

        <section>
          <div className='flex items-start lg:justify-end mt-40 md:justify-between px-8 sm:justify-between'>
            <h2 className='text-center text-4xl mb-10' >Lançamentos <span className='text-[#E78E93]'>LZ</span>
            </h2>
            <Button />
          </div>

          <div className='flex flex-wrap items-center justify-center gap-4 px-10'>
            {
              productReleases8Loops.map(release => (
                <div className='lg:w-[23%] md:w-[32%] sm:w-[100%] flex justify-center' key={release}>
                  <ProductsCard />
                </div>
              ))
            }
          </div>
        </section>

        <section>
          <figure className='lg:px-16 mt-12 xs:p-2'>
            <img src={bannerCandy} alt="Banner divulgando cupom de desconto" />
          </figure>
        </section>

        <section>
          <div className='flex items-start justify-end mt-36'>
            <h2 className='text-center text-4xl mb-10' >Lançamentos <span className='text-[#E78E93]'>LZ</span>
            </h2>
            <Button />
          </div>

          <div className='flex flex-wrap items-center justify-center gap-4 px-10'>
            {
              productReleases4Loops.map(release => (
                <div className='lg:w-[23%] md:w-[32%] sm:w-[100%] flex justify-center' key={release}>
                  <ProductsCard />
                </div>
              ))
            }
          </div>

          <div className='flex items-start justify-end mt-16'>
            <h2 className='text-center text-4xl mb-10' >Lançamentos <span className='text-[#E78E93]'>LZ</span>
            </h2>
            <Button />
          </div>

          <div className='flex flex-wrap items-center justify-center gap-4 px-10'>
            {
              productReleases4Loops.map(release => (
                <div className='lg:w-[23%] md:w-[32%] sm:w-[100%] flex justify-center' key={release}>
                  <ProductsCard />
                </div>
              ))
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default Home