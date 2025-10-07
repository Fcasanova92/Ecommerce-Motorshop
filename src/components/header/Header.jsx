import { Link } from "react-router";
import { Icon } from "../Icon";
import { List } from "../List";
import { ListItem } from "../ListItem";
import { LoginHeader } from "./components/LoginHeader";
import { headerItems } from "./constant/headerItem";
import "./Header.css";
import { Banner } from "@/components/header/components/Banner";
import { useAuth } from "@/hooks/useAuth";
import { User } from "./components/User";

export const Header = () => {
  const {isOnline}  = useAuth();
  return (
    <header>
      <nav id="primary">
        <Icon name = {"fa-solid fa-motorcycle fa-tw"} />
        <List type = {"ul"} className = {"menu"}>
          {
            headerItems.map((item) => {
                    return (
            <ListItem key={item.path}>
              <Link className="link-a" to={item.path}>
                {item.label}
              </Link>
            </ListItem>
             );
            })
          }
          {
            isOnline ?
            <User />
            :
            <LoginHeader/>
          }
        </List>
      </nav>
      <Banner/>
    </header>
  );
};
