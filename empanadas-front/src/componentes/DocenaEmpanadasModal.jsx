import React, { useState } from 'react';
import styles from '../styles/DocenaEmpanadas.module.css';

const saboresDisponibles = [
  "Carne",
  "Jamón y Queso",
  "Queso y Cebolla",
  "Pollo",
  "Humita"
];

const DocenaEmpanadasModal = ({ imagen, onAgregar, onCancelar, precioUnitario = 24800 }) => {
  const [cantidadDocenas, setCantidadDocenas] = useState(1);
  const [sabores, setSabores] = useState(
    saboresDisponibles.map(nombre => ({ nombre, cantidad: 0 }))
  );

  const totalSeleccionado = sabores.reduce((acc, s) => acc + s.cantidad, 0);
  const totalEsperado = cantidadDocenas * 12;

  const actualizarCantidad = (index, delta) => {
    setSabores(prev => {
      const nuevo = [...prev];
      const nuevaCantidad = nuevo[index].cantidad + delta;
      if (nuevaCantidad >= 0 && totalSeleccionado + delta <= totalEsperado) {
        nuevo[index].cantidad = nuevaCantidad;
      }
      return nuevo;
    });
  };

  const agregarAlPedido = () => {
    const detalle = sabores
      .filter(s => s.cantidad > 0)
      .map(s => `${s.cantidad} ${s.nombre}`)
      .join(', ');

    const producto = {
      id: 9, // si lo tenés en la base de datos
      nombre: "Docena de empanadas a elección",
      cantidad: cantidadDocenas,
      precio: precioUnitario,
      comentario: detalle
    };


    onAgregar(producto);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Docena de empanadas a elección</h2>

        <div className={styles.docenaSelector}>
          <button
            className={styles.btnDocena}
            onClick={() => {
              if (cantidadDocenas > 1) {
                setCantidadDocenas(cantidadDocenas - 1);
                setSabores(saboresDisponibles.map(nombre => ({ nombre, cantidad: 0 })));
              }
            }}
          >−</button>

          <span className={styles.docenaCantidad}>{cantidadDocenas}</span>

          <button
            className={styles.btnDocena}
            onClick={() => {
              setCantidadDocenas(cantidadDocenas + 1);
              setSabores(saboresDisponibles.map(nombre => ({ nombre, cantidad: 0 })));
            }}
          >+</button>
        </div>


        <h3>Selecciona tus sabores</h3>
        <p>Selecciona entre {totalSeleccionado} / {totalEsperado} opciones</p>

        {sabores.map((sabor, index) => (
          <div key={sabor.nombre} className={styles.saborItem}>
            <span>{sabor.nombre}</span>
            <div className={styles.controles}>
              <button className={styles.btnCantidad} onClick={() => actualizarCantidad(index, -1)}>-</button>
              <span className={styles.contador}>{sabor.cantidad}</span>
              <button className={styles.btnCantidad} onClick={() => actualizarCantidad(index, 1)}>+</button>
            </div>

          </div>
        ))}

        {totalSeleccionado !== totalEsperado && (
          <p className={styles.error}>Debés seleccionar exactamente {totalEsperado} empanadas</p>
        )}

        <button
          disabled={totalSeleccionado !== totalEsperado}
          onClick={agregarAlPedido}
          className={styles.confirmar}
        >
          Agregar al pedido
        </button>

        <button onClick={onCancelar} className={styles.cancelar}>Cancelar</button>
      </div>
    </div>
  );
};

export default DocenaEmpanadasModal;
