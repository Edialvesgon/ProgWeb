interface aa {
    imagem: string,
    estrela: string,
    texto: string,
    nome: string,
    cargo: string
}

export default function CarouselCard({ imagem, estrela, texto, nome, cargo }: aa) {
    return (
        <div className="carousel-content">
            <div className="carousel-card">
                <img src={imagem} alt="Imagem perfil cliente" />
                <span className="testimony">
                    <p>
                        {texto}
                    </p>
                </span>
                <span className="rating">
                    <img src={estrela} alt="ícone estrela" width={22} height={20} />
                    <img src={estrela} alt="ícone estrela" width={22} height={20} />
                    <img src={estrela} alt="ícone estrela" width={22} height={20} />
                    <img src={estrela} alt="ícone estrela" width={22} height={20} />
                    <img src={estrela} alt="ícone estrela sem fundo" width={20} height={22} />
                </span>
                <span className="names">
                    <p>{nome}</p>

                    <p>
                        {cargo}
                    </p>
                </span>
            </div>


        </div>
    )
} 