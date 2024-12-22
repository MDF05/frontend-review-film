import { Box } from "@chakra-ui/react";
import useButtonDelete from "../hooks/use-button-delete-review";

export default function ButtonDeleteReview({ id }: { id: string }) {
  const { handleDelete } = useButtonDelete(id);

  return (
    <Box borderBottom={"1px solid grey"} w={"full"} py={"10px"} textAlign={"center"} color={"red"} cursor={"pointer"} onClick={handleDelete}>
      Delete
    </Box>
  );
}
