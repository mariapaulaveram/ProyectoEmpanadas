import React from 'react';
import styles from '../styles/EditarProductoModal.module.css';

const EditarProductoModal = ({ producto, cantidad, setCantidad, onGuardar, onCancelar, comentario,
    setComentario
}) => {
    const cantidadValida = Number.isInteger(cantidad) && cantidad >= 1;
    const handleGuardar = () => {
        if (!cantidadValida) return;
        onGuardar();
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <img src={producto.imagen} alt={producto.nombre} className={styles.imagen} />
                <h3>{producto.nombre}</h3>
                <p className={styles.precioUnitario}>Precio unitario: ${producto.precio}</p>
                <p className={styles.subtotal}>Subtotal: ${producto.precio * cantidad}</p>
                <p>{producto.descripcion}</p>

                <div className={styles.controles}>
                    <button onClick={() => setCantidad(Math.max(1, cantidad - 1))}>−</button>
                    <span className={styles.contador}>{cantidad}</span>
                    <button onClick={() => setCantidad(cantidad + 1)}>+</button>
                </div>

                <textarea
                    placeholder="Comentario (opcional)"
                    value={comentario}
                    onChange={(e) => {
                        if (e.target.value.length <= 200) {
                            setComentario(e.target.value);
                        }
                    }}
                    className={styles.textarea}
                />
                <p className={styles.contador}>{comentario.length}/200</p>
                <div className={styles.botones}>
                    <button onClick={handleGuardar} disabled={!cantidadValida}>Guardar</button>
                    <button onClick={onCancelar}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default EditarProductoModal;
