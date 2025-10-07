import shop from '@/assets/img/branchs/shop.png'

export const Sucursal = ({sucursal}) => {

    return(
        <article className="card fx-deep-shadow-dinamyc fx-move-up">
              <div className="media">
                <img className="card-thumbnail" src={shop} alt="Sucursal" draggable="false" />
              </div>
              <div className="supporting-text">
                <div className="overline">Barrio N°XYZ</div>
                <h3 className="title-c">{sucursal}</h3>
                <p className="address body-b"><i className="fa-solid fa-location-dot"></i>Av. Calle P. Ahí N° 0303</p>
                <p className="phone body-c"><i className="fa-solid fa-phone"></i> +03 03456 4321</p>
              </div>
        </article>
    )
}