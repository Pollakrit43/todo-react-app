import { Button, FormContainer, Input } from "./FormStyle";

export const Form = ({ input, setInput, addTodo }) => {
  return (
    <FormContainer>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        role="input"
      />
      <Button type="submit" onClick={(e) => addTodo(e)}>
        Add
      </Button>
    </FormContainer>
  );
};
