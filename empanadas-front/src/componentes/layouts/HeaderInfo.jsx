import styles from "../../styles/HeaderInfo.module.css";

function HeaderInfo() {
  return (
    <header className={styles.header}>
      <div className={styles.logoFlotante}>
        <img src="/logo.jpeg" alt="Peña La Morena" className={styles.logo} />
      </div>
    
      <div className={styles.columnas}>
        {/* Columna 1: Titulo */}
        <div className={styles.col}>
          <div className={styles.item}>
            <h1 className={styles.titulo}>Peña La Morena</h1>
          </div>
        </div>

        {/* Columna 2: Dirección + Horario */}
        <div className={styles.col}>
          <div className={styles.item}>
            <i className="fas fa-map-marker-alt"></i>
            <span>Austria 3032</span>
          </div>
          <div className={styles.item}>
            <i className="fas fa-clock"></i>
            <span>10 a 20:30 h</span>
          </div>
        </div>

        {/* Columna 3: Teléfono + Email */}
        <div className={styles.col}>
          <div className={styles.item}>
            <i className="fas fa-phone"></i>
            <span>1160954945</span>
          </div>
          <div className={styles.item}>
            <i className="fas fa-envelope"></i>
            <span>lamorenacba.bsas@gmail.com</span>
          </div>
        </div>

        {/* Columna 4: Redes sociales */}
        <div className={styles.col}>
          <div className={styles.redesFila}>
            <span className={styles.redesTitulo}>Nuestros canales de contacto</span>
            <div className={styles.iconos}>
              <a href="https://wa.me/541160954945" target="_blank" rel="noopener noreferrer">
                <span className={styles.iconWrapper}>
                  <i className="fab fa-whatsapp"></i>
                </span>
              </a>
              <a href="https://www.instagram.com/lamorena.bsas" target="_blank" rel="noopener noreferrer">
                <span className={styles.iconWrapper}>
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
              <a href="https://www.facebook.com/lamorena.bsas" target="_blank" rel="noopener noreferrer">
                <span className={styles.iconWrapper}>
                  <i className="fab fa-facebook"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}

export default HeaderInfo;




