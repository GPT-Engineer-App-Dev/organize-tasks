import { Box, VStack, Input, IconButton, Heading, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => setInput(e.target.value);

  const addTodo = () => {
    if (input.trim() === "") {
      toast({
        title: "No content!",
        description: "You can't add an empty todo.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const enterKeyAddTodo = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading mb={6}>Todo App</Heading>
        <Box>
          <Input placeholder="Add a new task..." value={input} onChange={handleInputChange} onKeyPress={enterKeyAddTodo} />
          <IconButton icon={<FaPlus />} ml={2} colorScheme="teal" aria-label="Add todo" onClick={addTodo} />
        </Box>
        <VStack spacing={2} align="stretch">
          {todos.map((todo, index) => (
            <Box key={index} p={3} display="flex" alignItems="center" justifyContent="space-between" borderWidth="1px" borderRadius="md">
              <Text>{todo}</Text>
              <IconButton icon={<FaTrash />} aria-label="Delete todo" onClick={() => deleteTodo(index)} />
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
