import React, { useState } from 'react';
import styles from "../styles/ProductoCard.module.css";
import DocenaEmpanadasModal from "./DocenaEmpanadasModal";

const ProductoCard = ({ producto, onAgregar }) => {
  const { id, nombre, descripcion, precio, imagen, tipo } = producto;
  const [modalAbierto, setModalAbierto] = useState(false);

  const handleAgregar = () => {
    if (tipo === "combo") {
      setModalAbierto(true);
    } else {
      onAgregar(producto);
    }
  };

  return (
  <>
    <div data-testid={`producto-card-${id}`} className={styles.productoCard}>
      <div className={styles.info}>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <button onClick={handleAgregar} className={styles.btnAgregar}>
          {tipo === "combo" ? "Elegir sabores" : "Agregar"}
        </button>
      </div>
      <img src={imagen} alt={nombre} className={styles.productoImagen} />
    </div>

    {modalAbierto && tipo === "combo" && (
      <DocenaEmpanadasModal
        imagen={imagen}
        onAgregar={(productoFinal) => {
          onAgregar({ ...productoFinal, id, imagen });
          setModalAbierto(false);
        }}
        onCancelar={() => setModalAbierto(false)}
      />
    )}
  </>
);

};
export default ProductoCard;

