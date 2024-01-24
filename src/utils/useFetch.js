import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchData(url);
  }, [url]);

  const fetchData = async (url) => {
    const data = await fetch(url);
    const json = await data.json();
    setTodos(json);
  };

  return todos;
};

export default useFetch;
