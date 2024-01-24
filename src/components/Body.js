import React, { useContext } from "react";
import { TODOS_API } from "../utils/constants";
import useFetch from "../utils/useFetch";
import UserContext from "../contexts/UserContext";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

const Body = () => {
  const todos = useFetch(TODOS_API);
  const user = useContext(UserContext);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("apple"));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return todos?.length === 0 ? (
    <h3> Loading...</h3>
  ) : (
    <div>
      <h3>{user.name}</h3>
      {todos.map((todo) => {
        return (
          <div style={{ display: "flex", margin: "10px" }} key={todo?.id}>
            <h1 key={todo?.id} style={{ color: "red" }}>
              {todo?.title}
            </h1>
            <button
              style={{ backgroundColor: "lightgray", cursor: "pointer" }}
              onClick={handleAddItem}
            >
              Add
            </button>
            <button
              style={{ backgroundColor: "lightgray", cursor: "pointer" }}
              onClick={handleRemoveItem}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
