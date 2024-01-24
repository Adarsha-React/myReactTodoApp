import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../redux/cartSlice";
import { useEffect } from "react";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.cart.items);
  const isLoading = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  return isLoading === true ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {todos?.map((todo) => {
        return <h1 key={todo?.id}>{todo?.title}</h1>;
      })}
    </div>
  );
};

export default Todo;
