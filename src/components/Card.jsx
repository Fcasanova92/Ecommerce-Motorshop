import React from "react";
import moto from "@/assets/img/products/motorcycle.png";
import { getRandomMillionDecimalFormatted } from "./helpers/getPrice";
import { useNavigate } from "react-router";
import { PathConfig } from "@/utils/pathConfig";
import { useAppContext } from "@/context/AppContext";

export const Card = ({data}) => {

  const navigate = useNavigate();
  const {agregarProducto} = useAppContext();

  return (
    <article className="card fx-deep-shadow-dinamyc fx-move-up">
      <div className="media">
        <img
          className="card-thumbnail"
          src={moto}
          alt="Imagen a modo de referencia del producto."
        />
      </div>

      <div className="supporting-text">
        <p className="overline">MODELO</p>
        <h3 className="title-c">{data.make}</h3>
        <p className="caption">
          {data.model} | {data.cooling} | {data.year}
        </p>
        <p className="body-b">{data.description}</p>

        <div className="footer">
          <div className="price">
            <h4 className="title">Precio: </h4>
            <span className="amount">{getRandomMillionDecimalFormatted()}</span>
          </div>

          <ul className="actions">
            <span className="see" onClick={() => navigate(PathConfig.Product, {state: {product:data}})}>
              <i className="fa-regular fa-eye"></i>
            </span>
            <button
              className="add-to-cart"
              onClick={() => agregarProducto(data)}
            >
              🛒 Agregar al carrito
            </button>
          </ul>
        </div>
      </div>
    </article>
  );
};