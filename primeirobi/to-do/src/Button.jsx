import style from './Button.module.css'

function Button({handleSave}){
    return(
        <button className={style.button} onClick={handleSave}>Salvar</button>
    )
}

export default Button