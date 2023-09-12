import { DeleteIcon, ListContainer, Row, Text } from "./TodoListStyle";
import axios from "../../axios";
import './TodoList.css'
import { useState } from "react";

export const TodoList = ({ todos, fetchData }) => {
  console.log(todos, "hi");

  const updateTodo = async (id) => {
    try {
      const response = await axios.put(`/todos/${id}`, {
        id,
      });
      fetchData();
      return response.data.json;
    } catch (error) {
      console.error(error.message);
    }
  };


  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`/todos/${id}`, {
        id,
      });
      fetchData();
      return response.data.json;
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <ListContainer>
        {todos?.map((todo) => (
          <Row key={todo._id}>
            <Text
              onClick={() => updateTodo(todo._id)}
              className={todo.completed ?  'completed' : '' }
            >
              {todo.text}
            </Text>
            <DeleteIcon onClick={() => deleteTodo(todo._id)}>X</DeleteIcon>
          </Row>
        ))}
      </ListContainer>
    </div>
  );
};
