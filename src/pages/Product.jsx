import React from "react";
import {  useLocation } from "react-router";
import moto from "@/assets/img/products/motorcycle.png"; // placeholder
import { getRandomMillionDecimalFormatted } from "@/components/helpers/getPrice";
import { MainLayout } from "@/layouts/MainLayout";
import { useAppContext } from "@/context/AppContext";

export const Product = () => {
  const location = useLocation();
  const product = location.state?.product;
   const {agregarProducto} = useAppContext();

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <MainLayout>
      <div className="product-viewer fx-deep-shadow-dinamyc fx-move-up">
        {/* Imagen lado izquierdo */}
        <div className="product-image">
          <img
            src={product.image || moto}
            alt={product.model}
            draggable="false"
          />
        </div>

        {/* Características lado derecho */}
        <div className="product-details">
          <h2 className="title-c">{product.make} {product.model}</h2>
          <ul className="features-list">
            <li><strong>Modelo:</strong> {product.model}</li>
            <li><strong>Año:</strong> {product.year}</li>
            <li><strong>Refrigeración:</strong> {product.cooling}</li>
            <li><strong>Descripción:</strong> {product.description}</li>
            <li><strong>Precio:</strong> {getRandomMillionDecimalFormatted()}</li>
          </ul>

          {/* Botón agregar al carrito */}
          <button
            className="add-to-cart"
            onClick={() => agregarProducto(product)}
          >
            🛒 Agregar al carrito
          </button>
        </div>
      </div>
    </MainLayout>
  );
};
