import React, { useState } from "react";
import { addtext } from "../actions";
import { useDispatch } from "react-redux";


const Task = () => {
  const [inputdata, setinputdata] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <figure>
        <figcaption>Write something here..</figcaption>
      </figure>

      <div className="addItems">
        <input
          type="text"
          placeholder="Here...."
          value={inputdata}
          onChange={(event) => {
            setinputdata(event.target.value);
            dispatch(addtext(event.target.value));
          }}
        />
      </div>
    </>
  );
};

export default Task;
