import { Box, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import Navbar from "@/features/navbar/Navbar";
import TextComponent from "./component/Text-Component";
import LoginForm from "./component/Login-Form";
import RegisterForm from "./component/Register-Form";

import "@/css/auth.css";
import useAuth from "./hooks/use-auth";
import { ToastContainer } from "react-toastify";

export default function Auth(): React.ReactNode {
  const { urlPathname, setCheckedInput, checkedInput } = useAuth();

  return (
    <VStack>
      <Navbar />
      <ToastContainer autoClose={2000} />
      <Box display={"flex"} w={"100%"} justifyContent={"center"} boxSizing={"border-box"} p={{ base: "60px 10px", md: "50px 10px", lg: "60px" }}>
        <HStack
          w={{ base: "100%", md: "100%", lg: "80%" }}
          bg={"white"}
          _dark={{ bg: "white", boxShadow: "basicLight" }}
          rounded={"20px"}
          display={"grid"}
          gridTemplateColumns={{ base: "100%", md: "49% 49%" }}
          border={"2px solid"}
          borderColor={"rgba(0, 0, 0, 0.2)"}
          boxShadow={"basicDark"}
          position={"relative"}
          pb={"20px"}
        >
          <TextComponent to={"register"} setCheckedInput={setCheckedInput} idName="register">
            Register
            <FaArrowLeftLong />
          </TextComponent>
          <TextComponent to={"login"} setCheckedInput={setCheckedInput} idName="login">
            Login
            <FaArrowRightLong />
          </TextComponent>
          <Input type={"checkbox"} id="checkboxFormAuth" className="checkboxAuth" checked={checkedInput} hidden onChange={(event) => setCheckedInput(event.target.checked)}></Input>
          <Box
            w={{ base: "100%", md: "50%" }}
            bg={"blue.brand"}
            _dark={{ bg: "black" }}
            height={{ base: "50%", md: "100%" }}
            rounded={"20px"}
            position={{ base: "absolute", md: "absolute" }}
            right={"0px"}
            className="formBox"
            id="formBox"
            overflow={"auto"}
          >
            <Box textAlign={"center"} mt={"20px"}>
              <Text fontWeight={"bold"} fontSize={"4xl"} color={"white"} textTransform={"capitalize"}>
                {urlPathname}
              </Text>
              {urlPathname == "login" ? <LoginForm /> : <RegisterForm />}
            </Box>
          </Box>
        </HStack>
      </Box>
    </VStack>
  );
}
