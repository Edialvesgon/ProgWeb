import '../styles/Utility.css'
import '../styles/Home.css'
import '../styles/header.css'
import '../styles/Solution.css'
import logo from '../assets/Untitled (2).svg'
import close from '../assets/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import menu from '../assets/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import { useState } from 'react'
import Button from '../components/Button'
import rectagleOne from '../assets/images/retanguloMaior.svg'
import rectagleTwo from '../assets/images/retanguloMenor.svg'
import Card from '../components/Card'
import "../styles/Hero.css"

export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <>
            <header className='container py-sm'>
                <nav className="flex items-center justify-between">
                    <img src={logo} alt="Dra. debora" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper menu-icon">
                                        <img src={close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>


                </nav>
            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={rectagleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={rectagleOne} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>Mais do que tratar dentes, transformamos autoestima.</h1>
                    <p>Aqui, cada sorriso é tratado com atenção, tecnologia e carinho. Nosso objetivo é fazer você se sentir confiante, saudável e feliz ao se olhar no espelho</p>

                    <div className="flex gap-1">

                        <span><Button text="Cadastre-se" /></span>

                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
                {/* <div className="container content">
                    <p className='desktop-only'>Olá</p>
                    <span className="desktop-only">
                        <img src={rectagleTwo} alt="Retangulo um tela inicial" />
                    </span>
                    <img src={rectagleOne} alt="Retangulo dois tela inicial" />
                    <h1>Conheça a mehor dentista do mundo</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, repellat? Unde asperiores, quas repellat consectetur eum aperiam expedita sequi laboriosam incidunt, nulla libero magni quisquam veniam id aspernatur neque corporis.
                    </p>
                    <div className='flex gap-1'>
                        <Button text='Cadastre-se'/>
                        <span className="desktop-only">
                            <Button text='veja mais' secondary/>
                        </span>
                    </div>
                </div> */}
            </section>

            <section id='solution' className='container'>
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2 className='solution-h2'>
                                Sob medida para você
                            </h2>
                        </span>
                    </span>
                    <p>
                        Qualidade estamos a disposição <strong>Dra. Débora </strong>
                        já conquistou diversos clientes, seja você mais um deles,
                        veja tudo que pode ganhar com nossos serviços.
                    </p>
                </header>
                <section className="even-columns">
                    <Card titulo='Produto Vencedor' paragrafo='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, excepturi dolorem. Nisi dolores ipsam natus fugit accusamus sed minima, dolore autem enim unde nam iusto non. Architecto inventore sunt maiores!' />
                    <Card titulo='Produto Vencedor' paragrafo='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, excepturi dolorem. Nisi dolores ipsam natus fugit accusamus sed minima, dolore autem enim unde nam iusto non. Architecto inventore sunt maiores!' />
                    <Card titulo='Produto Vencedor' paragrafo='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, excepturi dolorem. Nisi dolores ipsam natus fugit accusamus sed minima, dolore autem enim unde nam iusto non. Architecto inventore sunt maiores!' />

                    {/* <div className="card">
                        <span>
                            <img src={menu} alt="ícone campeão" width={64} height={64} />
                        </span>
                        <div>
                            <h3>
                                Produto Vencedor
                            </h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, excepturi dolorem. Nisi dolores ipsam natus fugit accusamus sed minima, dolore autem enim unde nam iusto non. Architecto inventore sunt maiores!
                            </p>
                            <hr />
                        </div>
                    </div>

                    <div className="card">
                        <span>
                            <img src={menu} alt="ícone campeão" width={64} height={64} />
                        </span>
                        <div>
                            <h3>
                                Produto Vencedor
                            </h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, excepturi dolorem. Nisi dolores ipsam natus fugit accusamus sed minima, dolore autem enim unde nam iusto non. Architecto inventore sunt maiores!
                            </p>
                            <hr />
                        </div>
                    </div> */}
                </section>

            </section>
        </>
    )
}

