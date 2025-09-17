import style from './Home.module.css'

function Home() {
  return (
    <>
      <article className={style.home_container}>
        <h2>Título do Post</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      </article>

      <figure>
        <img src="image.png" alt="qualquer imagem" width="600" height="400" />
        <figcaption>Uma imagem qualquer ai</figcaption>
      </figure>
    </>
  );
}

export default Home;
