import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";

export default function App() {
  const [search, setSearch] = useState({
    city: "",
    state: "",
    country: ""
  });

  const [query, setQuery] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      if (query) {
        const url = `https://pruebatecnica2.santiagohenao97.repl.co/api/?${country}`;

        const res = await fetch(url);
        const result = await res.json();

        setResult(result);
        setQuery(false);

        // Detecta si hubo resultados correctos en la consulta

        if (res.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultarAPI();
    // eslint-disable-next-line
  }, [query]);

  let component;
  if (error) {
    component = <Error msg="No hay resultados" />;
  } else {
    component = <Table result={result} />;
  }

  return (
    <div className="container">
      <Header />
      <Form
        search={search}
        setSearch={setSearch}
        setQuery={setQuery}
        className="App"
      />
    </div>
  );
}
