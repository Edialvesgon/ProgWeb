import { useState } from 'react'

import './App.css'

function App() {
 const [inputValue, setInputValue] = useState([]); 
  const [savedValue, setSavedValue] = useState([]);
  const [count, setCount] = useState(0);
  const [fruits, setFruits] = useState(["😊","😎", "😁"])
  
  const handleSave = () => {
    setSavedValue(inputValue);
    console.log("Valor armazenado:", inputValue);
  };
  const [listaPessoa, setListaPessoa] = useState([
  {
    nome: "ed", 
    idade: 12 
  },
  { 
    nome: "maria", 
    idade: 25 
  },
  { nome: "joão", 
    idade: 30 
  }
]);

const novaPessoa = {
  nome:"soadinf",
  idade: 32
}

  return (



    <div style={{ padding: "20px" }}>

     {listaPessoa.map((pessoa, index) => (
      <ul key={index}>
        <li>Nome: {pessoa.nome}</li>
        <li>Idade: {pessoa.idade}</li>
      </ul>
    ))}

    <button onClick={() => setListaPessoa(() => ([...listaPessoa,novaPessoa]))}>botão pra adicionar</button>

  
    <div>
      {fruits.map(fruits => (
        <li>{fruits}</li>
      ))}
    </div>

    <div>
      {count} <br/>
      <button onClick={() => setCount(count + 1)}>count is</button>
      {count > 5 ? <p> é maior</p> : <p> é menor</p>}
    </div>


      <input
        type="text"
        placeholder="Digite algo..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSave}>Salvar</button>

      {savedValue && <p>Você digitou: {savedValue}</p>}
    </div>
  );
  
}

export default App
