import { useEffect, useState } from "react";
import { Form } from "../Form/Form";
import { Container } from "./TodoStyle";
import axios from "../../axios";
import { TodoList } from "../TodoList/TodoList";
import { Key } from "../Keys/Key";
import { Author } from "../Author/Author";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/todos");
      setTodos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (input.length === 0) {
      return null;
    }
    await axios.post("/addtodos", [
      {
        ...todos,
        text: input,
        completed: false,
      },
    ]);
    fetchData();
    setInput("");
  };


  return (
    <Container>
      <h2>List of Todos</h2>
      {/* From component */}
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      {/* TodoList */}
      <TodoList todos={todos} fetchData={fetchData}/>
      {/* Key */}
      <Key/>
      {/* Author Component */}
      <Author/>
    </Container>
  );
};
