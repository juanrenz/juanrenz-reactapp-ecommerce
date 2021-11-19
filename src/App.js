import { useState, useEffect } from "react";
import "@material-tailwind/react/tailwind.css";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar.jsx";
import { getFetch } from "./components/helpers/getFetch";


function AppEcommerce() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch //api Fetch()
      .then((data) => {
        console.log("llamada Api");
        setItems(data);
      })
      //.then(resp => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    return () => {
      console.log("clean");
    };
  }, []);

  console.log(items);

  return (
    <div className="App">
      <NavBar />
      {loading ? (
          <h1>Cargando...</h1>
      ) : (
        <ItemListContainer />
      )}
    </div>
  );
}

export default AppEcommerce;
