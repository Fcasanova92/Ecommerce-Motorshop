import { List } from "../List";
import { ListItem } from "../ListItem";
import { UserSessionLink } from "./components/UserSessionItem";
import { menuItems } from "./constant/menuItem";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <nav id="primary">
        <Icon name = {"fa-solid fa-motorcycle fa-tw"} />
        <List type = {"ul"} className = {"menu"}>
          {
            menuItems.map((item) => {
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
    </header>
  );
};
