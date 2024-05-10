import { useState } from "react";

export default function Form(props) {
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.moviesearch(formData.searchterm);
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
          className="searchTerm"
        />
        <input type="submit" value="submit"  className="submit"/>
      </form>
    </div>
  );
}
