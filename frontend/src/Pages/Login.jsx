import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../redux/auth/auth.actions";
import { setToast } from "../redux/products/actionTypes";
import { getItemSession } from "../utils/sessionStorage";
const init = {
  email: "",
  password: "",
};
const Login = () => {
  const token = useSelector(store=>store.auth.token);
  const [showPassword, setShowPassword] = useState(false);
  const [creds, setCreds] = useState(init);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit=(e) => {
     e.preventDefault();
     dispatch(login(creds));
     if(token==='') 
     {
      setToast(toast, "Unable to login to account", "error", 1000);
     }
     else{
       setToast(toast, "Login Success", "success", 1000); 
       navigate("/")
    }
      
  };

  return (
    <Flex>
      <Box width="100%">
        <Box width="30%" margin="auto" marginTop="35px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;" padding="25px" borderRadius="4px">
          <Text fontSize="30px" fontWeight="bold" textAlign="center">
           Sign in
          </Text>
          <br />
          <br />
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <Input
                _hover={{ border: "1px solid black" }}
                borderRadius="none"
                onChange={handleChange}
                name="email"
              ></Input>
            </InputGroup>
          </FormControl>
          <br />
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                borderRadius="none"
                _hover={{ border: "1px solid black" }}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <br />
          <Flex margin="5px" justifyContent="space-between">
                 <Box><Link to="/forgetpassword" > <Text fontSize="15px" fontWeight="bold" _hover={{ textDecoration:"underline" }}>Forgot Password</Text> </Link></Box>
                 <Box> <Link to="/signup" > <Text fontSize="15px" fontWeight="bold" _hover={{ textDecoration:"underline" }}>Create an account</Text> </Link></Box>
            </Flex>
          <br />
          <Button
            loadingText="Submitting"
            color="white"
            _hover={{ border: "1px solid black" }}
            borderRadius="none"
            width="100%"
            backgroundColor="rgb(66,148,242)"
            onClick={handleSubmit}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login