interface aa {
    elon: string,
    menu: string
}

export default function CarouselCard({ elon, menu }: aa) {
    return (
        <div className="carousel-content">
            <div className="carousel-card">
                <img src={elon} alt="Imagem perfil cliente" />
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
    )
} 