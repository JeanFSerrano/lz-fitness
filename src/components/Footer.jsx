
import { logo2 } from '../assets/imgs/index'
import { BsInstagram, BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (

    <footer className='flex flex-col items-center bg-[#1C1E3A] h-full'>

      <section className='bg-[#1C1E3A] rounded-2xl w-[90%] px-10 py-8 flex lg:flex-row items-center justify-between border-[1px] border-[#E78E93] -mt-16 xs:flex-col text-center '>
        <div>
          <h2 className='italic font-bold text-4xl text-white mb-2 '>Assine nossa <span className='text-[#E78E93]'>newsletter</span></h2>
          <p className='text-white italic text-lg mb-4'>Receba todos os lançamentos com vantagens únicas!</p>
        </div>
        <div className='flex flex-end lg:justify-between ml-6 lg:flex-row lg:w-[50%] md:flex-col gap-y-3 sm:flex-col xs:flex-col justify-center xs:w-[90%]'>
          <input type="text" placeholder='Insira seu melhor email' className='rounded-full lg:w-[380px] h-[50px] mr-4 px-8 xs:w-[100%]' />
          <button className='bg-[#E78E93] text-white rounded-full lg:w-[204px] h-[50px] xs:w-[100%]'>ASSINAR AGORA!</button>
        </div>

      </section>

      <div>
        <figure className='mb-8 mt-8'>
          <img src={logo2} alt="Logo da empresa" />
        </figure>
      </div>
      <hr className='w-[95%] mb-10' />

      <div className='flex lg:flex-row justify-between ml-20 xs:flex-col w-[90%]'>
        <section className='lg:w-1/4 mr-8 xs:w-3/4'>
          <h3 className='text-[#E78E93] font-bold italic mb-2'>Sobre nós</h3>
          <p className='text-white text-sm lg:block xs:hidden'>Somos uma empresa capixaba, com orgulho de nascer no Estado do Espírito Santo, atualmente compomos a rota de maiores atacadistas e varejistas de roupa fitness do Brasil.</p>
        </section>

        <section className='lg:w-1/6 xs:w-3/4'>
        <h3 className='text-[#E78E93] font-bold italic mb-2'>Para não ter dúvida</h3>
          <ul className='flex flex-col gap-2 text-white text-sm lg:block xs:hidden'>
            <li>Política de troca</li>
            <li>Política de reembolso</li>
            <li>Acompanhe seu pedido</li>
            <li>Política de Devolução</li>
            <li>Termos e Condições</li>
            <li>Termos e Serviço</li>
          </ul>
        </section>

        <section className='lg:w-1/6 xs:w-3/4'>
          <h3 className='text-[#E78E93] font-bold italic mb-2'>Atendimento</h3>
          <div className='text-white text-sm lg:block xs:hidden'>
            <p>Atendimento de segunda à sexta-feira, das 8h30 às 17h30, exceto feriados.</p>
            <p>Telefone: (27) 3535-3716</p>
            <p>Whatsapp: (27) 99229-6087</p>
            <p>sac.lzfitness@gmail.com</p>
          </div>
        </section>

        <section className='lg:w-1/4 xs:w-3/4'>
          <h3 className='text-[#E78E93] font-bold italic text-lg mb-2'>Nos acompanhe nas redes:</h3>
          <div className='flex justify-start gap-2'>
            <div className='p-3 bg-[#2A2D59] rounded-lg '>
              <BsInstagram size={'32px'} color={'white'} />
            </div>
            <div className='p-3 bg-[#2A2D59] rounded-lg'>
              <BsFacebook size={'32px'} color={'white'} />
            </div>
          </div>
        </section>
      </div>

      <div>
        <h3 className='italic text-white mt-20 mb-20'>Acelerada pela <span className='font-bold'>Turbo</span> Partners</h3>
      </div>

    </footer>

  )
}

export default Footer