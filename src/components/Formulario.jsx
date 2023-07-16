import styles from "./Formulario.module.css";

const Formulario = () => {
  return (
    <div>
      <div className={`${styles.buscador} row`}>
        <form className="col s12 m8 offset-m2">
          <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

          <div className={`input-field col s12`}>
            <input
              type="submit"
              className={`${styles.btnBlock} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
