import React from 'react';
import styles from '../styles/CarritoResumen.module.css';

const CarritoResumen = ({ subtotal, envio, total, onContinuar }) => {
  return (
    <div className={styles.resumen}>
      <h4>Resumen</h4>
      <p>Subtotal: ${subtotal}</p>
      <p>Costo de envío: ${envio}</p>
      <p><strong>Total: ${total}</strong></p>
      <button className={styles.btnContinuar} onClick={onContinuar}>
        Continuar pedido
      </button>
    </div>
  );
};

export default CarritoResumen;
