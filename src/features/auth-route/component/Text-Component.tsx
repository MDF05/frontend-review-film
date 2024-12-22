import ReactRouterButton from "@/components/component/React-Router-Button";
import Brand from "@/features/navbar/component/Brand";
import { Box, Text } from "@chakra-ui/react";
import { TextComponentProps } from "../types/text-component-types";

export default function TextComponent(props: TextComponentProps): React.ReactNode {
  const { children, to, setCheckedInput, idName } = props;

  return (
    <Box w={"100%"} h={"100%"} p={"20px"} id={idName}>
      <Brand color={"blue.brand"} fontWeight={"extrabold"} fontSize={"5xl"}></Brand>
      <Text color={"black"} _dark={{ color: "black" }}>
        "Menjelajah Layar, Merasakan Cerita – Review Jujur dari Hati ke Hati"
      </Text>
      <Text mt={"20px"} color={"black"}>
        Sudah nonton film seru atau malah mengecewakan? Bagikan pendapatmu dan temukan ribuan review dari penonton lain! Gabung sekarang, tempat semua cerita film berkumpul!
      </Text>
      <Box mt={"10px"}>
        <ReactRouterButton
          to={to}
          bg={"blue.brand"}
          height={"40px"}
          width={"100px"}
          color={"white"}
          justifyItems={"center"}
          rounded={"10px"}
          display={"flex"}
          justifyContent={"center"}
          _dark={{ bg: "black" }}
          onClick={() => setCheckedInput((prev) => !prev)}
        >
          {children}
        </ReactRouterButton>
      </Box>
    </Box>
  );
}
