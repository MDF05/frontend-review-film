import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { ReactRouterButtonProps } from "./types/React-Router-Button-types";

export default function ReactRouterButton(props: ReactRouterButtonProps): React.ReactNode {
  const { children, to, state, ...restProps } = props;
  return (
    <ChakraLink asChild {...restProps} outline={"none"}>
      <ReactRouterLink to={to} state={state}>
        {children}
      </ReactRouterLink>
    </ChakraLink>
  );
}
