import "./Header.css";

export const Header = () => {
  return (
    <header>
      <nav id="primary">
        <i className="fa-solid fa-motorcycle fa-tw">Logo</i>
        <ul className="menu">
          <li>
            <a className="link-a" href="#products">Productos</a>
          </li>
          <li>
            <a className="link-a" href="#about-us">Sobre Nosotros</a>
          </li>
          <li id="user-session">
            <a className="link-a" href="/login">
              Ingresar <i className="fa-solid fa-right-to-bracket"></i>
            </a>
          </li>
        </ul>
      </nav>

      <div className="banner fx-deep-shadow-static">
        <div className="supporting-text">
          <p className="overline">El Camino te Espera</p>
          <h1 className="title-a">MOTORSHOP</h1>
          <p className="body-a">
            Inicia tu próxima aventura con una moto que define tu estilo y personalidad.
            Cada modelo está hecho para aquellos que buscan algo más que un medio de transporte;
            buscan una experiencia de vida. Conquista la carretera, siente la brisa en tu rostro
            y haz que cada kilómetro cuente. ¡El camino te espera, y nosotros estamos aquí para acompañarte!
          </p>
          <a className="trigger-b" href="#products">Comenzar</a>
        </div>

        <div className="media">
          <img
            className="banner-thumbnail"
            src="./static/img/banners/banner.png"
            alt="Imagen introductoria de la web"
            draggable="false"
          />
        </div>
      </div>
    </header>
  );
};
