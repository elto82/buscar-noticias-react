import "materialize-css/dist/css/materialize.min.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";
import axios from "axios";
import ListadoNoticias from "./components/ListadoNoticias";

const App = () => {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=7ab9cdb44adc454a9b4955f016630e56`;

      try {
        const res = await axios(url);
        setNoticias(res.data.articles);
      } catch (error) {
        // Manejo del error
        console.error("Error al consultar la API:", error);
        // Puedes mostrar un mensaje de error al usuario o realizar alguna otra acción
      }
    };

    consultarApi();
  }, [categoria]);

  return (
    <>
      <Header titulo={"Buscador de Noticias"} />
      <div className="container whiter">
        <Formulario setCategoria={setCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </>
  );
};

export default App;
