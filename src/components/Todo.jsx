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
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, clearTodo, editTodo } from '../store/features/TodoSlice';

const Todo = () => {
  const dispatch = useDispatch();
  const allTodo = useSelector((state) => state.todo.todos);

  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAddTodo = () => {
    if (input.trim()) {
      if (editId !== null) {
        dispatch(editTodo({ id: editId, newText: input.trim() }));
        setEditId(null);
      } else {
        dispatch(addTodo({
          id: Date.now(),
          text: input.trim()
        }));
      }
      setInput('');
    }
  };

  const handleRemoveTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
    if (todoId === editId) {
      setEditId(null);
      setInput('');
    }
  };

  const handleEditClick = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
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
        <Button colorScheme={editId !== null ? "blue" : "green"} onClick={handleAddTodo}>
          {editId !== null ? "Update" : "Add"}
        </Button>
      </HStack>

      <VStack spacing={3} align="stretch">
        {allTodo.map((todo) => (
          <HStack key={todo.id} justify="space-between" p={3} borderWidth={1} borderRadius="md" bg={'#e7ebff'}>
            <Text>{todo.text}</Text>
            <HStack spacing={2}>
              <IconButton
                icon={<MdOutlineModeEditOutline />}
                size="sm"
                colorScheme="blue"
                onClick={() => handleEditClick(todo)}
                aria-label="Edit Todo"
              />
              <IconButton
                icon={<RiDeleteBin6Line />}
                size="sm"
                colorScheme="red"
                onClick={() => handleRemoveTodo(todo.id)}
                aria-label="Remove Todo"
              />
            </HStack>
          </HStack>
        ))}
      </VStack>

      <Button mt={2} colorScheme="red" onClick={() => dispatch(clearTodo())}>
        Clear All
      </Button>
    </Box>
  );
};

export default Todo;
