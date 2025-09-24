import style from './Container.module.css'
import Button from './Button'
import Input from './Input'

function Container({ inputValue, setInputValue, handleSave }) {
  return (
    <div className={style.container}>
      <Input inputValue={inputValue} setInputValue={setInputValue}></Input>
      <Button handleSave={handleSave}/>
     </div>
  )
}

export default Container
