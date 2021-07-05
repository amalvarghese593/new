import React, { useState } from "react";
import template from "../images/usa_flag.jpg";

export const Dropdown = () => {
  const initialState = {
    value: "India (+91)",
  };

  const [data, setData] = useState(initialState);

  const handleSubmit = (event) => {
    alert("selected country is: " + data.value);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setData({ ...data, value: event.target.value });
  };

  return (
    <div>
      <img src={template} alt="Image unavailable" width="50" height="30" />
      <form onSubmit={handleSubmit}>
        <label>Ph-No: </label>

        <select value={data.value} onChange={handleChange}>
          <option value="uk">UK (+44)</option>
          <option value="usa">
            USA (+1)
            <img
              src={template}
              alt="Image unavailable"
              width="50"
              height="30"
            />
          </option>
          <option selectedvalue="india">India (+91)</option>
          <option value="mexico">Mexico (+52)</option>
        </select>

        <input type="text" name="name" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
