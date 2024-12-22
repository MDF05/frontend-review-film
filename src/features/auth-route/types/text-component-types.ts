import { LinkProps } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

export interface TextComponentProps extends LinkProps {
  children: React.ReactNode;
  to: string;
  setCheckedInput: Dispatch<SetStateAction<boolean>>;
  idName: string;
}
