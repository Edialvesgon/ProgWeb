import style from './Aside.module.css'

function Aside() {
  return (
    <aside className={style.aside}>
      <h3>Informações adicionais</h3>
      <p>Telefone, endereço ou promoções.</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Atque similique vel, nesciunt fugiat fuga amet earum dolorum 
        corporis obcaecati quod voluptas mollitia reiciendis!
      </p>
    </aside>
  );
}

export default Aside;
