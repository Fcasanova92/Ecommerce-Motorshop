import { MainLayout } from "@/layouts/MainLayout";
import { useObtenerProductos } from "@/hooks/useObtenerProductos";
import { Card } from "@/components/Card";
import { CardSkeleton } from "@/components/skeleton/producto/CardSkeleton";
import { useState } from "react";
import { useServiceEmail } from "@/hooks/useServiceEmail";
import { Sucursal } from "@/components/Suscursal";
import { sucursales } from "@/components/constant/sucursales";

export const Home = () => {
  // funciones para eventos
  const {productos, loading} = useObtenerProductos();
   const [formData, setFormData] = useState({
    name: "",
    surname: "",
    telephone: "",
    email: "",
    consulta: ""
  });
  const {sendMessage, loading: loadingSendMail, message} = useServiceEmail();

 const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Manejo de submit
  const handleSendMessage = async (event) => {
    event.preventDefault();
    await sendMessage(formData);
  };
  
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

 <form
      id="contact"
      className="fx-deep-shadow-static"
      onSubmit={handleSendMessage}
    >
      <div className="headline">
        <h3 className="title-c">Contacto</h3>
        <i className="fa-solid fa-comments"></i>
      </div>

      <label className="message" htmlFor="name">Nombre</label>
      <input
        id="name"
        type="text"
        placeholder="Nombre..."
        value={formData.name}
        onChange={handleChange}
      />

      <label className="message" htmlFor="surname">Apellido</label>
      <input
        id="surname"
        type="text"
        placeholder="Apellido..."
        value={formData.surname}
        onChange={handleChange}
      />

      <label className="message" htmlFor="telephone">Teléfono</label>
      <input
        id="telephone"
        type="text"
        placeholder="Teléfono"
        value={formData.telephone}
        onChange={handleChange}
      />

      <label className="message" htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={handleChange}
      />

      <label className="message" htmlFor="consulta">Consulta</label>
      <input
        id="consulta"
        type="text"
        placeholder="Consulta..."
        value={formData.consulta}
        onChange={handleChange}
      />

      <button
        id="send"
        className="trigger-a"
        type="submit"
        disabled={loadingSendMail}
      >
        {loadingSendMail ? "Enviando..." : "Enviar"}
      </button>

      {message && (
        <label className="message" style={{ color: loading ? "black" : "green" }}>
          {message}
        </label>
      )}

    </form>
        </section>

        <section id="branchs">
          <div className="headline">
            <h2 className="title-b">Sucursales</h2>
          </div>
          <div className="location-wrapper">
            {
              sucursales.map((sucursal) => {

                return <Sucursal key = {sucursal} sucursal={sucursal}/>
              })
            }
          </div>
        </section>
      </main>
    </MainLayout>
  );
};
