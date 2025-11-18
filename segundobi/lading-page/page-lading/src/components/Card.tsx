import '../styles/Solution.css'

interface CardProps {
    titulo: string;
    paragrafo: string;
    award: string;
}

export default function Card({ titulo, paragrafo, award }: CardProps) {
    return (
        <div className="card">
            <span>
                <img src={award} alt="ícone campeão" width={64} height={64} />
            </span>
            <div>
                <h3>
                    {titulo}
                </h3>
                <p>
                    {paragrafo}
                </p>
                <hr />
            </div>
        </div>
    )
}