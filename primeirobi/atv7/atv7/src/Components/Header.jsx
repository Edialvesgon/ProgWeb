import { NavLink } from "react-router-dom";
import style from './Header.module.css'

function Header() {
  return (
    <header className={style.navbar}>
      <nav>
        <ul className={style.list}>
          <li className={style.item}><NavLink to="/" end>Início</NavLink></li>
          <li  className={style.item}><NavLink to="/sobre">Sobre</NavLink></li>
          <li className={style.item}><NavLink to="/servicos">Serviços</NavLink></li>
          <li className={style.item}><NavLink to="/contato">Contato</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
