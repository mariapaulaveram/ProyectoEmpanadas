import React from 'react';
import styles from '../styles/FormularioPedido.module.css';

const FormularioPedido = ({
  tipoEntrega,
  onClose,
  onSubmit
}) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalFormulario}>
        <h3>Datos generales</h3>
        <form onSubmit={onSubmit}>
          <label>
            Nombre y apellido
            <input type="text" name="nombre" placeholder="Juan Pérez" required />
          </label>

          <label>
            Correo electrónico
            <input type="email" name="email" placeholder="ejemplo@gmail.com" required />
          </label>

          <label>
            Teléfono
            <input type="tel" name="telefono" placeholder="011 15-2345-6789" required />
          </label>

          {tipoEntrega === 'domicilio' && (
            <>
              <label>
                Dirección
                <input type="text" name="direccion" placeholder="Av. Argentina 1234" required />
              </label>

              <label>
                Piso y departamento
                <input type="text" name="pisoDepto" placeholder="Ej: 1B" />
              </label>
            </>
          )}

          <label>
            Forma de pago
            <select name="formaPago" required>
              <option value="">Seleccionar</option>
              <option value="efectivo">Efectivo</option>
              <option value="transferencia">Transferencia</option>
              <option value="mercadoPago">Mercado Pago</option>
            </select>
          </label>

          <label>
            Comentarios
            <textarea name="comentarios" placeholder="Algo que quieras aclarar..." rows="3" />
          </label>

          <div className={styles.modalBotones}>
            <button type="submit">Confirmar pedido</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioPedido;
