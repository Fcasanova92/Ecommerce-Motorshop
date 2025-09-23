import { ListItem } from "@/components/ListItem";
import { Link } from "react-router-dom";

export const UserSessionLink = () => {
  return (
    <ListItem id="user-session">
      <Link className="link-a" to="/login">
        Ingresar <Icon className = {"fa-solid fa-right-to-bracket"}/>
      </Link>
    </ListItem>
  );
};