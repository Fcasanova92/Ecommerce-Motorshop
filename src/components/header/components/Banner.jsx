import { Title } from "@/components/Title"
import bannerImg from "@/assets/img/banners/banner.png";
import { Link } from "react-router";
import { Text } from "@/components/Text";

export const Banner = () => {

    return (
    <div className="banner fx-deep-shadow-static">
        <div className="supporting-text">
          <p className="overline">El Camino te Espera</p>
          <Title level = {1} className ={"title-a"} />MOTORSHOP<Title/>
          <Text className="body-a">
            Inicia tu próxima aventura con una moto que define tu estilo y personalidad.
            Cada modelo está hecho para aquellos que buscan algo más que un medio de transporte;
            buscan una experiencia de vida. Conquista la carretera, siente la brisa en tu rostro
            y haz que cada kilómetro cuente. ¡El camino te espera, y nosotros estamos aquí para acompañarte!
          </Text>
          <Link className="trigger-b" to = {"#products"}>Comenzar</Link>
        </div>
        <div className="media">
          <img
            className="banner-thumbnail"
            src={bannerImg}
            alt="Imagen introductoria de la web"
            draggable="false"
          />
        </div>
    </div>
    )
}