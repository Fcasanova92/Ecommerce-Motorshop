import { MainLayout} from "@/layouts/MainLayout"
import shop from "@/assets/img/branchs/shop_a.png"

export const Home = () => {
    // funciones para eventos
    const hide = (id) => {
        const el = document.getElementById(id);
        if (el) el.style.display = el.style.display === "none" ? "block" : "none";
    };
    const validateInput = (event) => {
        const { value } = event.target;
        // ejemplo simple de validación
        if (value.trim().length < 3) {
            event.target.dataset.validate = "false";
        } else {
            event.target.dataset.validate = "true";
        }
    };

    const sendMessageEmail = (event) => {
        event.preventDefault();
        console.log("Enviar formulario de contacto");
    };

    return (
        <MainLayout>
            <main>
                {/* ------------------- Novedades ------------------- */}
                <section id="news">
                    <div className="headline">
                        <h2 className="title-b">Novedades</h2>
                        <a className="link-b" href="#products">Ver más...</a>
                    </div>
                    <div id="newness" className="card-track"></div>
                </section>

                {/* ------------------- Productos ------------------- */}
                <section id="products">
                    <div className="headline">
                        <h2 className="title-b">Productos</h2>
                        <ul className="actions">
                            {/*
                            <li>
                                <form id="search-bar">
                                    <input type="text" name="query" placeholder="Que estas buscando?" />
                                    <button className="trigger-b" type="submit">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </form>
                            </li>
                            */}
                            <li className="toggler">
                                <button
                                    className="trigger-a"
                                    type="button"
                                    onClick={() => hide("filter")}
                                >
                                    Filtrar <i className="fa-solid fa-sliders fa-fw"></i>
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* ------------------- Filtros ------------------- */}
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
                        {/* ejemplo: Marcas */}
                        <fieldset className="brands input-grid">
                            <legend className="title-d">Marca:</legend>
                            <input id="brand-a" type="checkbox" name="brand" value="yamaha" />
                            <label htmlFor="brand-a">Yamaha</label>
                            {/* ... resto igual ... */}
                        </fieldset>
                        {/* demás filtros (colors, capacity, price) también corrigiendo class → className, for → htmlFor */}
                        <button className="trigger-a" type="submit">Enviar</button>
                    </form>

                    {/* ------------------- Viewer ------------------- */}
                    <div id="viewer">
                        <div id="filter-message"></div>
                        <div id="card-wrapper"></div>
                        <ul id="pages">
                            <li id="prev" className="trigger-b">Anterior</li>
                            <li id="next" className="trigger-b">Siguiente</li>
                        </ul>
                    </div>
                </section>

                {/* ------------------- Sobre Nosotros ------------------- */}
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
                        {/* ... resto de párrafos igual ... */}
                    </div>

                    {/* ------------------- Formulario contacto ------------------- */}
                    <form id="contact" className="fx-deep-shadow-static" method="post" onSubmit={sendMessageEmail}>
                        <div className="headline">
                            <h3 className="title-c">Contacto</h3>
                            <i className="fa-solid fa-comments"></i>
                        </div>
                        <label className="message" htmlFor="name">Nombre</label>
                        <input id="name" type="text" onInput={validateInput} placeholder="Nombre..." data-validate="false" data-form="contact" />

                        <label className="message" htmlFor="surname">Apellido</label>
                        <input id="surname" type="text" onInput={validateInput} placeholder="Apellido..." data-validate="false" data-form="contact" />

                        <label className="message" htmlFor="telephone">Teléfono</label>
                        <input id="telephone" type="text" onInput={validateInput} placeholder="Telefono" data-validate="false" data-form="contact" />

                        <label className="message" htmlFor="email">Email</label>
                        <input id="email" type="text" onInput={validateInput} placeholder="Email..." data-validate="false" data-form="contact" />

                        <label className="message" htmlFor="consulta">Consulta</label>
                        <input id="consulta" type="text" placeholder="Consulta..." onInput={validateInput} data-validate="false" data-form="contact" />

                        <button id="send" className="trigger-a" type="submit" data-id="contact">Enviar</button>
                    </form>
                </section>

                {/* ------------------- Sucursales ------------------- */}
                <section id="branchs">
                    <div className="headline">
                        <h2 className="title-b">Sucursales</h2>
                    </div>
                    <div className="info fx-deep-shadow-static">
                        <div className="headline">
                            <h3 className="title-c">Encuentra tu punto de venta</h3>
                            <i className="fa-solid fa-code-branch"></i>
                        </div>
                        <p className="body-b">
                            En cada una de nuestras sucursales, nos esforzamos por ofrecerte la mejor experiencia...
                        </p>
                    </div>
                    <div className="location-wrapper">
                        <article className="card fx-deep-shadow-dinamyc fx-move-up">
                            <div className="media">
                                <img className="card-thumbnail" src={shop} alt="Sucursal A" draggable="false" />
                            </div>
                            <div className="supporting-text">
                                <div className="overline">Barrio N°XYZ</div>
                                <h3 className="title-c">Sucursal A</h3>
                                <p className="address body-b"><i className="fa-solid fa-location-dot"></i>Av. Calle P. Ahí N° 0303</p>
                                <p className="phone body-c"><i className="fa-solid fa-phone"></i> +03 03456 4321</p>
                            </div>
                        </article>
                        {/* resto de sucursales igual */}
                    </div>
                </section>
            </main>
        </MainLayout>
    );
};
