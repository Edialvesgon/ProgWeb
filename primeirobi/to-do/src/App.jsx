import { useState } from 'react'
import Container from './Container'

function App() {
  const [inputValue, setInputValue] = useState(""); 
  const [savedValue, setSavedValue] = useState([]);

  const handleSave = () => {
    const pessoa = { nome: inputValue };
    setSavedValue([...savedValue, pessoa]);
    setInputValue("");
  };

  const handleDelete = (indexToRemove) => {
    setSavedValue(savedValue.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <Container 
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSave={handleSave}
      />

      {savedValue.length > 0 && (
        <div>
          <h3>Lista de tarefa salvas:</h3>
          <ul>
            {savedValue.map((pessoa, index) => (
              <li key={index} onClick={() => handleDelete(index)}>
                Nome: {pessoa.nome}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App


// import { useState } from 'react'
// import Container from './Container'

// function App() {
//   const [inputValue, setInputValue] = useState(""); 
//   const [savedValue, setSavedValue] = useState([]);

//   const handleSave = () => {
//     const pessoa = { nome: inputValue };
//     setSavedValue([...savedValue, pessoa]);
//     setInputValue("");
//   };

//   const handleDelete = (indexToRemove) => {
//   setSavedValue(savedValue.filter((_, index) => index !== indexToRemove));
// };


//   return (
//     <div>
//       <Container></Container>
//       <input
//         type="text"
//         placeholder="Digite algo..."
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button onClick={handleSave}>Salvar</button>

//       {savedValue.length > 0 && (
//         <div>
//           <h3>Lista de tarefa salvas:</h3>
//           {savedValue.map((pessoa, index) => (
//             <ul key={index}>
//               <li onClick={() => handleDelete(index)}>Nome: {pessoa.nome}</li>
//             </ul>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default App
