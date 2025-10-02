import { Icon } from "../Icon";
import { List } from "../List";
import { ListItem } from "../ListItem";
import { Title } from "../Title";
import { footerItem } from "./constant/footerItem";
import qrAfip from "@/assets/img/qr_afip/data_fiscal.png"

export const Footer = () => {
  return (
    <footer>
      <div className="social-networks">
        <div className="headline">
          <Title level={3} className="title-c">Redes Sociales</Title>
        </div>
        <List type="ul" className="networks">
          {footerItem.map((item) => (
            <ListItem key={item.label}>
              <Icon className={item.className} />
              <span>{item.label}</span>
            </ListItem>
          ))}
        </List>
      </div>

      <div className="data-fiscal">
        <div className="headline">
          <Title level={3} className="title-c">Datos Fiscales</Title>
        </div>
        <img
          className="data-fiscal-thumbnail"
          src={qrAfip}
          alt="QR data fiscal"
        />
      </div>
    </footer>
  );
};