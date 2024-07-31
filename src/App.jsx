import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./components/card";
import { add } from "./redux/toDo";

function App() {
  const { toDoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();

  const input = React.useRef(null);

  const submit = (e) => {
    e.preventDefault();

    dispatch(add({ id: Date.now(), name: input.current.value }));
    input.current.value = "";
  };

  return (
    <>
      <form onSubmit={submit}>
        <input ref={input} type="text" name="name" />
        <button type="submit">onSubmit</button>
      </form>
      {toDoList.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </>
  );
}

export default App;
