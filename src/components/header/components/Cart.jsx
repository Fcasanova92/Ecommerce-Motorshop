import React from "react";
import { Link } from "react-router";
import { ListItem } from "@/components/ListItem";
import { Icon } from "@/components/Icon";
import { useAppContext } from "@/context/AppContext";

export const CartHeader = () => {
  const { productInCart } = useAppContext();

  return (
    <ListItem>
      <Link
        className="link-a"
        to="/cart"
        style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
      >
        <Icon className="fa-solid fa-cart-shopping" />
        <span>Carrito</span>

        {/* Badge que indica si hay productos */}
        {productInCart.length > 0 && (
          <span
            style={{
              minWidth: "20px",
              height: "20px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ff4d4f",
              color: "#fff",
              fontSize: "0.7rem",
              padding: "0 6px",
            }}
          >
            {productInCart.length}
          </span>
        )}
      </Link>
    </ListItem>
  );
};
