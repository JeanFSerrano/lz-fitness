import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/imgs/logo.png'
import { BsSearch, BsHandbag } from 'react-icons/bs'
import { RxPerson } from 'react-icons/rx'
import { CgMenuLeft, CgClose } from 'react-icons/cg'

const Navbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    return (
        <header className='fixed top-0 left-0 right-0 bg-[#fdf6f5] z-10'>
            <div className='bg-[#1C1E3A] p-[10px] gap-[10px]'>
                <p className='italic font-bold leading-5 text-center text-[#E78E93]'>PREÇO DE ATACADO, SEM PEDIDO MÍNIMO E EM ATÉ 10X
                </p>
            </div>
            <div
                className='flex justify-around'>

                {windowSize.width <= 919 ?
                    <div
                        className='flex items-center cursor-pointer'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen == false ?
                            <CgClose
                                size={'50px'}
                                color='#E78E93'
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            />
                            :
                            <CgMenuLeft size={'50px'} color='#E78E93' />
                        }
                    </div>
                    :
                    <nav className='flex justify-between items-center text-base px-6'>
                        <ul className='flex justify-start gap-2 mr-3'>
                            <Link to='/'>Home</Link>
                            <Link to='/collections/calcas'>Conjuntos de calça</Link>
                            <Link to='/collections/shorts'>Conjuntos de Shorts</Link>
                            <Link to='/collections/tops'>Tops</Link>
                            <Link to='/collections/blusas'>Blusas</Link>
                            
                        </ul>
                    </nav>
                }

                {isMenuOpen == false && (

                    <ul className='flex flex-col gap-4 fixed top-0 left-0 right-0 bg-white bg-opacity-80 z-10 mt-24 px-4 py-8 rounded-md'>
                        <li>Conjuntos de calça</li>
                        <li>Conjuntos de Shorts</li>
                        <li>Conjuntos de Shorts</li>
                        <li>Conjuntos de Shorts</li>
                        <li>
                            <div className='flex items-center gap-2 w-28 rounded-full bg-[#E78E93] py-[10px] px-[16px] text-white'>
                                <button>Entrar</button>
                                <i><RxPerson /></i>
                            </div>
                        </li>
                        <CgClose
                                size={'50px'}
                                color='#E78E93'
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            />
                    </ul>
                )}

                <div className='mr-12'>
                    <figure>
                        <img src={logo} alt="Logotipo" width='{218px}' height='{80px}' />
                    </figure>
                </div>
                <div className='flex justify-start items-center'>

                    {windowSize.width <= 1000 ?

                        <BsSearch size={'28px'} className='mr-2' />
                        :
                        <>
                            <div className='flex items-center'>
                                <input className='lg:block text-sm w-[140px] px-2 rounded-full placeholder:text-sm placeholder-black p-2 border-2 border-black mr-4 xs:hidden' type="search" placeholder='Buscar...' />
                                <BsSearch className='-ml-12 mr-8' />
                            </div>
                            <div className='lg:flex items-center gap-2 rounded-full bg-[#E78E93] py-[10px] px-[16px] text-white xs:hidden'>
                                <button>Entrar</button>
                                <i><RxPerson /></i>
                            </div>
                        </>
                    }


                    <i className='ml-3'>
                        <BsHandbag size={'32px'} />
                    </i>
                </div>
            </div>
        </header>
    )
}

export default Navbar