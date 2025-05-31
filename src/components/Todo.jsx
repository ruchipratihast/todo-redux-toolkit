import { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  HStack,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/features/TodoSlice';

const Todo = () => {
const dispatch = useDispatch();

const allTodo = useSelector((state) => state.todo.todos);

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (input.trim()) {
      //setTodos([...todos, input.trim()]); 
      dispatch(addTodo({
        id:Date.now(),
        text: input
      }))
      setInput('');
    }
  };

  const handleRemoveTodo = (indexToRemove) => {
    // setTodos(todos.filter((_, i) => i !== indexToRemove));
  };

  return (
    <Box maxW="lg" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Heading mb={6} textAlign="center">Todo App</Heading>

      <HStack mb={4}>
        <Input
          placeholder="Enter a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleAddTodo}>
          Add
        </Button>
      </HStack>

      <VStack spacing={3} align="stretch">
        {allTodo.map((todo) => (
          <HStack key={todo.id} justify="space-between" p={3} borderWidth={1} borderRadius="md">
            <Text>{todo.text}</Text>
            <IconButton
              icon={<RiDeleteBin6Line />}
              size="sm"
              colorScheme="red"
              onClick={() => handleRemoveTodo(index)}
              aria-label="Remove Todo"
            />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Todo;
