import { MainLayout } from "@/layouts/MainLayout";
import shop from "@/assets/img/branchs/shop_a.png";

export const Home = () => {
  // funciones para eventos
  const hide = (id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = el.style.display === "none" ? "block" : "none";
  };

  const validateInput = (event) => {
    const { value } = event.target;
    // ejemplo simple de validación
    event.target.dataset.validate = value.trim().length < 3 ? "false" : "true";
  };

  const sendMessageEmail = (event) => {
    event.preventDefault();
    console.log("Enviar formulario de contacto");
  };

  return (
    <MainLayout>
      <main>
        <section id="news">
          <div className="headline">
            <h2 className="title-b">Novedades</h2>
            <a className="link-b" href="#products">
              Ver más...
            </a>
          </div>
          <div id="newness" className="card-track"></div>
        </section>

        <section id="products">
          <div className="headline">
            <h2 className="title-b">Productos</h2>
            <ul className="actions">
              {/* <li>
                <form id="search-bar">
                  <input type="text" name="query" placeholder="Que estas buscando?" />
                  <button className="trigger-b" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </li> */}
              <li className="toggler">
                <button className="trigger-a" onClick={() => hide("filter")}>
                  Filtrar <i className="fa-solid fa-sliders fa-fw"></i>
                </button>
              </li>
            </ul>
          </div>

          <form id="filter">
            <div className="headline">
              <h3 className="title-c">Filtrar</h3>
              <ul className="actions">
                <li className="headline-icon body-b">
                  <i className="fa-solid fa-sliders fa-fw"></i>
                </li>
                <li className="trigger-b" onClick={() => hide("filter")}>
                  <i className="fa-solid fa-xmark fa-fw"></i>
                </li>
              </ul>
            </div>

            <fieldset className="brands input-grid">
              <legend className="title-d">Marca:</legend>
              <input id="brand-a" type="checkbox" name="brand" value="yamaha" />
              <label htmlFor="brand-a">Yamaha</label>
              <input id="brand-b" type="checkbox" name="brand" value="zanella" />
              <label htmlFor="brand-b">Zanella</label>
              <input id="brand-c" type="checkbox" name="brand" value="honda" />
              <label htmlFor="brand-c">Honda</label>
              <input id="brand-d" type="checkbox" name="brand" value="kawasaki" />
              <label htmlFor="brand-d">Kawasaki</label>
              <input id="brand-e" type="checkbox" name="brand" value="ducati" />
              <label htmlFor="brand-e">Ducati</label>
              <input id="brand-f" type="checkbox" name="brand" value="susuki" />
              <label htmlFor="brand-f">Susuki</label>
              <input id="brand-g" type="checkbox" name="brand" value="triumph" />
              <label htmlFor="brand-g">Triumph</label>
              <input id="brand-h" type="checkbox" name="brand" value="harley-davidson" />
              <label htmlFor="brand-h">Harley-Davidson</label>
            </fieldset>

            <fieldset className="colors input-grid">
              <legend className="title-d">Color:</legend>
              <input id="color-a" type="checkbox" name="color" value="blanco" />
              <label htmlFor="color-a">Blanco</label>
              <input id="color-b" type="checkbox" name="color" value="negro" />
              <label htmlFor="color-b">Negro</label>
              <input id="color-c" type="checkbox" name="color" value="gris" />
              <label htmlFor="color-c">Gris</label>
              <input id="color-d" type="checkbox" name="color" value="rojo" />
              <label htmlFor="color-d">Rojo</label>
              <input id="color-e" type="checkbox" name="color" value="amarillo" />
              <label htmlFor="color-e">Amarillo</label>
              <input id="color-f" type="checkbox" name="color" value="azul" />
              <label htmlFor="color-f">Azul</label>
              <input id="color-g" type="checkbox" name="color" value="verde" />
              <label htmlFor="color-g">Verde</label>
              <input id="color-h" type="checkbox" name="color" value="violeta" />
              <label htmlFor="color-h">Violeta</label>
              <input id="color-i" type="checkbox" name="color" value="naranja" />
              <label htmlFor="color-i">Naranja</label>
            </fieldset>

            <fieldset className="capacity input-grid">
              <legend className="title-d">Cilindrada:</legend>
              <input id="capacity-a" type="radio" name="capacity" value='{"min":0,"max":125}' />
              <label htmlFor="capacity-a">Menor a 125cc</label>
              <input id="capacity-b" type="radio" name="capacity" value='{"min":125,"max":300}' />
              <label htmlFor="capacity-b">125cc a 300cc</label>
              <input id="capacity-c" type="radio" name="capacity" value='{"min":300,"max":600}' />
              <label htmlFor="capacity-c">300cc a 600cc</label>
              <input id="capacity-d" type="radio" name="capacity" value='{"min":600,"max":2500}' />
              <label htmlFor="capacity-d">Mayor a 600cc</label>
            </fieldset>

            <fieldset className="price input-grid">
              <legend className="title-d">Precio:</legend>
              <input type="text" name="minPrice" placeholder="Mínimo..." defaultValue="" />
              <input type="text" name="maxPrice" placeholder="Máximo..." defaultValue="" />
            </fieldset>

            <button className="trigger-a" type="submit">
              Enviar
            </button>
          </form>

          <div id="viewer">
            <div id="filter-message"></div>
            <div id="card-wrapper"></div>
            <ul id="pages">
              <li id="prev" className="trigger-b">
                Anterior
              </li>
              <li id="next" className="trigger-b">
                Siguiente
              </li>
            </ul>
          </div>
        </section>

        <section id="about-us">
          <div className="headline">
            <h2 className="title-b">Sobre Nosotros</h2>
          </div>
          <div className="company fx-deep-shadow-static">
            <div className="headline">
              <h2 className="title-c">La Empresa</h2>
              <i className="fa-solid fa-shop"></i>
            </div>
            <p className="body-b">
              En <b><i>MOTORSHOP</i></b>, creemos que cada viaje cuenta una historia...
            </p>
            {/* resto de párrafos */}
          </div>

          <form id="contact" className="fx-deep-shadow-static" method="post" onSubmit={sendMessageEmail}>
            <div className="headline">
              <h3 className="title-c">Contacto</h3>
              <i className="fa-solid fa-comments"></i>
            </div>
            <label className="message" htmlFor="name">asd</label>
            <input id="name" type="text" onInput={validateInput} placeholder="Nombre..." data-validate="false" data-form="contact" />
            <label className="message" htmlFor="surname"></label>
            <input id="surname" type="text" onInput={validateInput} placeholder="Apellido..." data-validate="false" data-form="contact" />
            <label className="message" htmlFor="telephone"></label>
            <input id="telephone" type="text" onInput={validateInput} placeholder="Telefono" data-validate="false" data-form="contact" />
            <label className="message" htmlFor="email"></label>
            <input id="email" type="text" onInput={validateInput} placeholder="Email..." data-validate="false" data-form="contact" />
            <label className="message" htmlFor="consulta"></label>
            <input id="consulta" type="text" placeholder="Consulta..." onInput={validateInput} data-validate="false" data-form="contact" />
            <button id="send" className="trigger-a" type="submit" data-id="contact">
              Enviar
            </button>
            <label className="message" htmlFor="send"></label>
          </form>
        </section>

        <section id="branchs">
          <div className="headline">
            <h2 className="title-b">Sucursales</h2>
          </div>
          <div className="info fx-deep-shadow-static">
            {/* contenido empresa */}
          </div>

          <div className="location-wrapper">
            <article className="card fx-deep-shadow-dinamyc fx-move-up">
              <div className="media">
                <img className="card-thumbnail" src={shop} alt="Sucursal" draggable="false" />
              </div>
              <div className="supporting-text">
                <div className="overline">Barrio N°XYZ</div>
                <h3 className="title-c">Sucursal A</h3>
                <p className="address body-b"><i className="fa-solid fa-location-dot"></i>Av. Calle P. Ahí N° 0303</p>
                <p className="phone body-c"><i className="fa-solid fa-phone"></i> +03 03456 4321</p>
              </div>
            </article>
            {/* repetí más sucursales */}
          </div>
        </section>
      </main>
    </MainLayout>
  );
};
