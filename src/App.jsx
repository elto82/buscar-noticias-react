import "materialize-css/dist/css/materialize.min.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=7ab9cdb44adc454a9b4955f016630e56`;

      const res = await axios(url);
      console.log(res.data.articles);
      setNoticias(res.data.articles);
    };
    consultarApi();
  }, [categoria]);

  return (
    <>
      <Header titulo={"Buscador de Noticias"} />
      <div className="container whiter">
        <Formulario setCategoria={setCategoria} />
      </div>
    </>
  );
};

export default App;
