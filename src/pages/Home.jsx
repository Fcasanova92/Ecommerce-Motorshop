import { MainLayout } from "@/layouts/MainLayout";
import shop from "@/assets/img/branchs/shop_a.png";
import { useObtenerProductos } from "@/hooks/useObtenerProductos";
import { Card } from "@/components/Card";
import { CardSkeleton } from "@/components/skeleton/producto/CardSkeleton";

export const Home = () => {
  // funciones para eventos
  const {productos, loading} = useObtenerProductos();
  
  return (
    <MainLayout>
      <main>
        <section id="products">
          <div className="headline">
            <h2 className="title-b">Productos</h2>
          </div>

          {loading ?
            <CardSkeleton number={10} />
            :
            productos.slice(0,10).map((product, index) => <Card key={index} data={product} isLoading={loading}/>)
          }
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

          <form id="contact" className="fx-deep-shadow-static" method="post" onSubmit={() => {}}>
            <div className="headline">
              <h3 className="title-c">Contacto</h3>
              <i className="fa-solid fa-comments"></i>
            </div>
            <label className="message" htmlFor="name">asd</label>
            <input id="name" type="text" onInput={() => {}} placeholder="Nombre..." data-validate="false" data-form="contact" />
            <label className="message" htmlFor="surname"></label>
            <input id="surname" type="text" onInput={() => {}} placeholder="Apellido..." data-validate="false" data-form="contact" />
            <label className="message" htmlFor="telephone"></label>
            <input id="telephone" type="text" onInput={() => {}} placeholder="Telefono" data-validate="false" data-form="contact" />
            <label className="message" htmlFor="email"></label>
            <input id="email" type="text" onInput={() => {}} placeholder="Email..." data-validate="false" data-form="contact" />
            <label className="message" htmlFor="consulta"></label>
            <input id="consulta" type="text" placeholder="Consulta..." onInput={() => {}} data-validate="false" data-form="contact" />
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
