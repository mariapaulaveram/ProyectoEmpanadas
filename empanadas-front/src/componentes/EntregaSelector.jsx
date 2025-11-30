import React from 'react';
import styles from '../styles/EntregaSelector.module.css';

const EntregaSelector = ({ tipoEntrega, setTipoEntrega }) => {
  return (
    <div className={styles.entregaCard}>
      <div className={styles.entregaOpciones}>
        <button
          className={`${styles.entregaBtn} ${tipoEntrega === 'domicilio' ? styles.activo : ''}`}
          onClick={() => setTipoEntrega('domicilio')}
        >
          Entrega a domicilio
        </button>
        <button
          className={`${styles.entregaBtn} ${tipoEntrega === 'retiro' ? styles.activo : ''}`}
                  onClick={() => setTipoEntrega('retiro')}
              >
                  Retirar en el local
              </button>
          </div>
          <div className={styles.horarioBox}>
              <p><strong>Horario de entrega:</strong> Lo antes posible</p>
              <details>
                  <summary>Ver horarios por día</summary>
                  <ul className={styles.horarioLista}>
                      <li><strong>DO</strong>: 11:30–16:00 | 11:30–23:00</li>
                      <li><strong>LU</strong>: 11:30–16:00 | 19:00–23:30</li>
                      <li><strong>MA</strong>: 11:30–16:00 | 19:00–23:30</li>
                      <li><strong>MI</strong>: 11:30–16:00 | 19:00–23:30</li>
                      <li><strong>JU</strong>: 11:30–16:00 | 19:00–23:30</li>
                      <li><strong>VI</strong>: 11:30–16:00 | 19:00–23:30</li>
                      <li><strong>SA</strong>: 11:30–16:00 | 19:00–23:30</li>
                  </ul>
              </details>
          </div>
      </div>
  );
};

export default EntregaSelector;
