import styles from "./Formulario.module.css";
import useSelect from "./hooks/useSelect";

const Formulario = () => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  const [categoria, SelectNoticia] = useSelect("sports", OPCIONES);
  return (
    <div>
      <div className={`${styles.buscador} row`}>
        <form className="col s12 m8 offset-m2">
          <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
          <SelectNoticia />

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
