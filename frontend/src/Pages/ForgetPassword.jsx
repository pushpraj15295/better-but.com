import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Link,useNavigate } from "react-router-dom";
import { setToast } from "../redux/products/actionTypes";

const init = {
  email: "",
};
// ForgetPassword***************************
const ForgetPassword = () => {
  const [creds, setCreds] = useState(init);
 const navigate = useNavigate()
 const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit=(e) => {
     e.preventDefault();
      if(creds.email.length > 6){
        setTimeout(() => {
          navigate("/resetPassword")
        },1000)
      }
      else{
         setToast(toast, "Unable to find user account", "error", 1000);
      }
     
     console.log("cred", creds)

  }

  return (
    <Flex>
      <Box width="100%">
        <Box width="25%" margin="auto" marginTop="35px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;" padding="25px" borderRadius="4px">
          <Text fontSize="30px" fontWeight="bold" textAlign="center">
           Forget Password
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
          
          <Flex margin="5px" justifyContent="space-between">
                 <Box><Link to="/login" > <Text fontSize="15px" fontWeight="bold" _hover={{ textDecoration:"underline" }}>Return Login</Text> </Link></Box>
                 <Box> <Link to="/signup" > <Text fontSize="15px" fontWeight="bold" _hover={{ textDecoration:"underline" }}>Create an account</Text> </Link></Box>
            </Flex>
          <br />
          <Button
            loadingText="Submitting"
            color="white"
            _hover={{ border: "1px solid black" }}
            borderRadius="none"
            width="100%"
            backgroundColor="rgb(60,193,1)"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default ForgetPassword;