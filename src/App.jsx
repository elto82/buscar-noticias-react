import "materialize-css/dist/css/materialize.min.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

const App = () => {
  return (
    <>
      <Header titulo={"Buscador de Noticias"} />
      <div className="container whiter">
        <Formulario />
      </div>
    </>
  );
};

export default App;
