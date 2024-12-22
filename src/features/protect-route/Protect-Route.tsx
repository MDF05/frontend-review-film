import { Box, VStack } from "@chakra-ui/react";
import Navbar from "@/features/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useProtectRoute from "./hooks/use-protect-route";

function ProtectRoute() {
  const { token } = useProtectRoute();

  if (!token) return <Navigate to={"/login"}></Navigate>;

  return (
    <VStack w={"100%"}>
      <ToastContainer />
      <Navbar />
      <Box w={"100%"}>
        <Outlet></Outlet>
      </Box>
    </VStack>
  );
}

export default ProtectRoute;
