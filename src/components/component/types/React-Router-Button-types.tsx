import { LinkProps } from "@chakra-ui/react";

export interface ReactRouterButtonProps extends LinkProps {
  children: React.ReactNode;
  to: string;
  state?: object;
}
