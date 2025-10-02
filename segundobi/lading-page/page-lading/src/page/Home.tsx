import '../styles/Utility.css'
import '../styles/Home.css'
import '../styles/header.css'
import logo from '../assets/Untitled (2).svg'
import close from '../assets/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import menu from '../assets/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import { useState } from 'react'
import Button from '../components/Button'

export default function Home(){

    const [showMobileMenu,setShowMobileMenu] = useState(false)

    return(
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
                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
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
        </>
    )
}

