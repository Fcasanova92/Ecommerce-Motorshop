import React from "react";
import moto from "@/assets/img/products/motorcycle.png";

export const Card = ({ data, onAddToCart }) => {
  const getRandomMillionDecimalFormatted = () => {
    const min = 1_000_000;
    const max = 3_000_000;
    const random = Math.random() * (max - min) + min;

    return random.toLocaleString("es-ES", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

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
        <h3 className="title-c">{data.model}</h3>
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
            <span className="see">
              <i className="fa-regular fa-eye"></i>
            </span>
            <button
              className="add-to-cart"
              onClick={() => onAddToCart?.(data)}
            >
              🛒 Agregar al carrito
            </button>
          </ul>
        </div>
      </div>
    </article>
  );
};