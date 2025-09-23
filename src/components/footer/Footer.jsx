import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="social-networks">
        <div className="headline">
          <h3 className="title-c">Redes Sociales</h3>
        </div>
        <ul className="networks">
          <li>
            <a className="link-a" href="#"><i className="fa-brands fa-twitter"></i> MotorShop Oficial</a>
          </li>
          <li>
            <a className="link-a" href="#"><i className="fa-brands fa-facebook"></i> Motorshop-Arg-Oficial</a>
          </li>
          <li>
            <a className="link-a" href="#"><i className="fa-brands fa-instagram"></i> Motorshop-Arg</a>
          </li>
          <li>
            <a className="link-a" href="#"><i className="fa-brands fa-youtube"></i> Motorshop-Channel</a>
          </li>
        </ul>
      </div>

      <div className="terms-conditions">
        <div className="headline">
          <h3 className="title-c">Términos y Condiciones</h3>
        </div>
        <ul className="networks">
          <li>
            <a className="link-a" href="#">Políticas de la Empresa</a>
          </li>
          <li>
            <a className="link-a" href="#">Políticas de Envío</a>
          </li>
          <li>
            <a className="link-a" href="#">Compras</a>
          </li>
        </ul>
      </div>

      <div className="data-fiscal">
        <div className="headline">
          <h3 className="title-c">Data Fiscal</h3>
        </div>
        <img
          className="data-fiscal-thumbnail"
          src="./static/img/qr_afip/data_fiscal.png"
          alt="QR data fiscal"
        />
      </div>
    </footer>
  );
};
