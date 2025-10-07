import { Icon } from "@/components/Icon";
import { ListItem } from "@/components/ListItem";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

export const User = () => {
  const {logout} = useAuth();
  return (
    <ListItem className="link-a">
        <span className="link-a" onClick={logout}>
            Logout <Icon className="fa-solid fa-right-from-bracket" />
        </span>
    </ListItem>
  );
};
