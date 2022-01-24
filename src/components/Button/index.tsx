import { ReactNode } from "react";

import { ButtonStyle } from "./styles";

type ButtonProps = {
  children: ReactNode;
  event?: any;
};

export const Button = ({ children, event }: ButtonProps) => {
  return <ButtonStyle onClick={event}>{children}</ButtonStyle>;
};
