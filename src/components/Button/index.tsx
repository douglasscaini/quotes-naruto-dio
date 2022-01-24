import { ReactNode } from "react";

import { ButtonStyle } from "./styles";

type ButtonProps = {
  children: ReactNode;
  handleUpdateContent?: () => void;
};

export const Button = ({ children, handleUpdateContent }: ButtonProps) => {
  return <ButtonStyle onClick={handleUpdateContent}>{children}</ButtonStyle>;
};
