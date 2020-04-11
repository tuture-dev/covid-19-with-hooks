import React, { useContext } from "react";
import { AppDispatch } from "../App";

function SelectDataKey() {
  const dispatch = useContext(AppDispatch);

  function onChange(e) {
    dispatch({ type: "SET_KEY", key: e.target.value });
  }

  return (
    <>
      <label htmlFor='key-select'>Select a key for sorting: </label>
      <select id='key-select' onChange={onChange}>
        <option value='cases'>Cases</option>
        <option value='todayCases'>Today Cases</option>
        <option value='deaths'>Death</option>
        <option value='recovered'>Recovered</option>
        <option value='active'>Active</option>
      </select>
    </>
  );
}

export default SelectDataKey;
