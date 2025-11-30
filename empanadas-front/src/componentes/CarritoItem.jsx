import React from 'react';
import styles from '../styles/CarritoItem.module.css';

const CarritoItem = ({ item, onEditar, onEliminar }) => {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <strong>{item.nombre}</strong> <br />
        x{item.cantidad} — ${item.precio * item.cantidad}
      </div>
      <div className={styles.acciones}>
        <button className={styles.editar} onClick={() => onEditar(item.id)}>Modificar</button>
        <button className={styles.eliminar} onClick={() => onEliminar(item.id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default CarritoItem;
