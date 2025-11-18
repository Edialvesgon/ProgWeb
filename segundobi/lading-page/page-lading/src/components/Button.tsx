import "../styles/Button.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;
    // handleFunciton?: Function;
}

export default function Button({ text, secondary }: IButtonProps) {
    return (
        <button className={secondary ? "btn-secondary" : "btn-primary"} >
            {text}
        </button >
    )
}