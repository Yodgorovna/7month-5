import React from "react";
import { useDispatch } from "react-redux";
import { editItem } from "../redux/toDo";

export const Card = ({ name, id }) => {
  const dispatch = useDispatch();

  const changeName = () => {
    const newName = prompt("");
    dispatch(editItem({ id, name: newName }));
  };
  return (
    <div>
      <h1>{name}</h1>
      <p>{id}</p>
      <button>delete</button>
      <button onClick={changeName}>edit</button>
    </div>
  );
};
