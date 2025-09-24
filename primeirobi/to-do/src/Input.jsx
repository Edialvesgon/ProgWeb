import style from './Input.module.css'

function Input({inputValue,setInputValue}){
    return(
        <>
        <input className={style.input}
        type="text"
        placeholder="Digite algo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      </>
    )
}
export default Input