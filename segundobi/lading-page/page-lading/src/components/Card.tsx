import menu from '../assets/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import '../styles/Solution.css'

interface CardProps {
    titulo: string;
    paragrafo: string;
}

export default function Card({ titulo, paragrafo }: CardProps) {
    return (
        <div className="card">
            <span>
                <img src={menu} alt="ícone campeão" width={64} height={64} />
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