import React, { useState } from "react";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { error } from "console";

const LoginModal: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const fakeDatabase = [
    { email: "Ejmen", password: "123" },
    { email: "Muhamed", password: "321" },
  ];

  const handleLogin2 = async () => {
    const result = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password: password,
        // expiresInMins: 60, // optional
      }),
    }).then((res) => {
      res.json();
      if (res.ok) {
        setMessage("Login Successful");
      } else {
        setMessage("Credentials are incorrect");
      }
    });
  };

  const handleLogin = () => {
    const user = fakeDatabase.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setMessage("Login Successful");
    } else {
      setMessage("Credentials are incorrect");
    }
  };

  return (
    <VStack spacing={4}>
      <Text fontSize="2xl">Login</Text>
      <Box>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="md"
        />
      </Box>
      <Box>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="md"
        />
      </Box>
      <Button colorScheme="blue" onClick={handleLogin2}>
        Login
      </Button>
      {message && <Text>{message}</Text>}
    </VStack>
  );
};

export default LoginModal;

// Grab the values from the dummyAPI Halit gave.
// Display the information from that array to display it on the test page as a table.
// Display ID, age, gender, phone, f name, l name
