import '../styles/Utility.css'
import '../styles/Testimonials.css'
import '../styles/Home.css'
import '../styles/header.css'
import '../styles/Solution.css'
import '../styles/Pricing.css'
import '../styles/Contact.css'

import vector from '../assets/Vector.svg'
import ryan from '../assets/Rayan.png'
import CarouselCard from '../components/CarouselCard'
import elon from '../assets/ellon.svg'
import check from '../assets/check.svg'
import logo from '../assets/Untitled (2).svg'
import close from '../assets/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import menu from '../assets/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import { useState } from 'react'
import Button from '../components/Button'
import rectagleOne from '../assets/images/retanguloMaior.svg'
import rectagleTwo from '../assets/images/retanguloMenor.svg'
import Card from '../components/Card'
import award from '../assets/award.svg'
import "../styles/Hero.css"
import '../styles/Rodape.css'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { RemoveScroll } from 'react-remove-scroll'

export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false)


    // const [btcAmount, setBtcAmoin] = useState([]);

    // function consultarBtc() {
    //     fetch("https://economia.awesomeapi.com.br/json/BTC").then(res => res.json()).then(res => setBtcAmoin(res[0].bid)).catch(console.error)
    // }

    interface EmailPayload {
        destinatario: string;
        mensagem: string;
    }


    const [email, setEmail] = useState("");
    const [motivo, setMotivo] = useState("");

    // const username = "user";
    // const password = "";

    // const credentials = `${username}:${password}`;

    // const base64Credentials = btoa(credentials);
    //console.log(base64Credentials)
    const enviarEmail = async () => {

        const payload: EmailPayload = {
            destinatario: email,
            mensagem: motivo
        };

        console.log("Enviando para API:", payload);

        try {
            const response = await fetch("http://localhost:8081/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert("Dados enviados com sucesso!");
            } else {
                alert("Erro ao enviar dados!");
            }
        } catch (error) {
            console.error("Erro:", error);
        }
    };


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
                            <RemoveScroll>
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
                            </RemoveScroll>
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
                    <Card titulo='Produto Vencedor' paragrafo='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, excepturi dolorem. Nisi dolores ipsam natus fugit accusamus sed minima, dolore autem enim unde nam iusto non. Architecto inventore sunt maiores!' award={award} />
                    <Card titulo='Produto Vencedor' paragrafo='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, excepturi dolorem. Nisi dolores ipsam natus fugit accusamus sed minima, dolore autem enim unde nam iusto non. Architecto inventore sunt maiores!' award={award} />
                    <Card titulo='Produto Vencedor' paragrafo='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, excepturi dolorem. Nisi dolores ipsam natus fugit accusamus sed minima, dolore autem enim unde nam iusto non. Architecto inventore sunt maiores!' award={award} />

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

            {/* testimonials */}
            <section id="testimonials" >
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                        comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>

                <section className='carousel'>
                    <CarouselCard elon={elon} menu={vector} />
                    <CarouselCard elon={ryan} menu={vector} />
                    <CarouselCard elon={elon} menu={vector} />
                    <CarouselCard elon={ryan} menu={vector} />

                </section>
                {/* <section className="carousel">




                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={menu} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={menu} alt="ícone estrela" width={22} height={20} />
                                <img src={menu} alt="ícone estrela" width={22} height={20} />
                                <img src={menu} alt="ícone estrela" width={22} height={20} />
                                <img src={menu} alt="ícone estrela" width={22} height={20} />
                                <img src={menu} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>


                    </div>

                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={menu} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={menu} alt="ícone estrela" width={22} height={20} />
                                <img src={menu} alt="ícone estrela" width={22} height={20} />
                                <img src={menu} alt="ícone estrela" width={22} height={20} />
                                <img src={menu} alt="ícone estrela" width={22} height={20} />
                                <img src={menu} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>


                    </div>
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={menu} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Certamente o mercado chinês de eletricos está bombando, só existe
                                    uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={menu} alt="ícone estrela" width={22} height={20} />
                                <img src={menu} alt="ícone estrela" width={22} height={20} />
                                <img src={menu} alt="ícone estrela" width={22} height={20} />
                                <img src={menu} alt="ícone estrela" width={22} height={20} />
                                <img src={menu} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>


                    </div>
                </section> */}
            </section >

            {/* pricing */}
            < section id="pricing" className="container" >
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">

                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={check} alt="ícone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </li>
                        </ul>
                    </div>

                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º MÊS COM DESCONTO</p>
                        </span>
                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Pedir agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={check} alt="ícone check" width={24} height={24} />
                            <p>2 Entregas</p>
                        </span>
                        <span className="features">
                            <img src={check} alt="ícone check" width={24} height={24} />
                            <p>5 Refeições por semana</p>
                        </span>
                        <span className="features">
                            <img src={check} alt="ícone check" width={24} height={24} />
                            <p>2 Sucos por semana</p>
                        </span>
                    </div>


                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={check} alt="ícone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </section >

            {/* <section id='contact'>
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <div>
                    <input id='email' />
                    <input id="motivo" />
                    <button></button>
                </div>
            </section> */}


            < section id="contact" className='container' >
                <header>
                    <p className="desktop-only">Você também pode</p>
                    <h2>Entre em contato conosco</h2>
                </header>
                <div >

                    <p className="contact-text">
                        Entre em contato, estamos dispostos a tirar qualquer dúvida,
                        seja um orçamento, uma dúvida técnica de algum de nossos produtos.
                        Estamos à disposição para responder. 😎
                    </p>

                    <form className="contact-form">
                        <input type="email" id="email" placeholder="Seu melhor Email" required onChange={(e) => setEmail(e.target.value)} />
                        <input
                            type="text"
                            id="motivo"
                            placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
                            required
                            onChange={(e) => setMotivo(e.target.value)}

                        />
                        <button type="submit" onClick={enviarEmail}>Enviar</button>
                    </form>
                </div>
                {/* <h1>valor do btc</h1>
                {btcAmount &&
                    <p>{btcAmount}
                    </p>}
                <button onClick={consultarBtc}>consutltar brc</button> */}
            </section >

            {/* btc */}

            < footer id='rodape' >
                <section>
                    <span>
                        <h1>Logo marca</h1>
                        {/* <img src={instagran} alt="insta" />
                        <img src={facebook} alt="face" />
                        <img src={youtube} alt="you" /> */}
                        <span className='icone' >
                            <FaInstagram className='icon' />
                            <FaYoutube className='icon' />
                            <FaFacebook className='icon' /></span>





                    </span>
                    <span>
                        <h1>empresa</h1>
                        <p>Sobre nós</p>
                        <p>Faça parte do time</p>
                        <p>Blog</p>

                    </span>
                    <span>
                        <h1>funcionalidades</h1>
                        <p>Marketing</p>
                        <p>Análise de dados</p>
                        <p>Boot discord</p>

                    </span>
                    <span>
                        <h1>recursos</h1>
                        <p>IOS & Android</p>
                        <p>Teste a Demo</p>
                        <p>Clientes</p>
                        <p>API</p>
                    </span>
                </section>
            </footer >


        </>
    )
}

