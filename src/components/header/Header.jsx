import { Link } from "react-router";
import { Icon } from "../Icon";
import { List } from "../List";
import { ListItem } from "../ListItem";
import { UserSessionLink } from "./components/UserSessionItem";
import { headerItems } from "./constant/headerItem";
import "./Header.css";
import { Banner } from "@/components/header/components/Banner";

export const Header = () => {
  return (
    <header>
      <nav id="primary">
        <Icon name = {"fa-solid fa-motorcycle fa-tw"} />
        <List type = {"ul"} className = {"menu"}>
          {
            headerItems.map((item) => {
              <ListItem>
                <Link className="link-a" to={item.path}>
                  {item.label}
                </Link>
              </ListItem>
            })
          }
            <UserSessionLink  />
        </List>
      </nav>
      <Banner/>
    </header>
  );
};
