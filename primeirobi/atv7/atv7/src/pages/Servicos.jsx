import style from './Servicos.module.css'

function Servicos() {
  return (
    <>
      <h1 >Nossos Serviços</h1>
      <article className={style.servicos_container}>
        <h2>Serviço 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </article>
      <article className={style.servicos_container}>
        <h2>Serviço 2</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </article>
    </>
  );
}

export default Servicos;
