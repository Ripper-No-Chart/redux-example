import React from "react";
import * as actions from "../actions";
import "./Counter.module.css"
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  function handleChange(e) {
    setValue(e.target.value);
  }
  const [value, setValue] = React.useState("");
  const counter = useSelector((store) => store.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12"><h3>Contador: {counter}</h3></div>
          <div className="col-12">
            <button onClick={() => dispatch(actions.suma())}>+</button>
            <button onClick={() => dispatch(actions.resta())}>-</button>
          </div>
          <div className="col-12">
            <button onClick={() => dispatch(actions.multiply(value))}>*</button>
            <input
              type="text"
              name="box"
              id="box"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
