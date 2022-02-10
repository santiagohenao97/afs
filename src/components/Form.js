import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ search, setSearch, setQuery }) => {
  const [error, setError] = useState(false);

  const { city, state, country } = search;

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar
    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    setQuery(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <h1>holis</h1> : null}

      <div>
        <label htmlFor="country">País: </label>
        <input
          type="text"
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="city">Ciudad: </label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="city">Ciudad: </label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
      </div>

      <div className="input-field col s12">
        <input type="submit" value="Buscar" />
      </div>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired
};

export default Form;
