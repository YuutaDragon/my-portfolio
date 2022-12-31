import { ButtonHTMLAttributes } from "react";
import { ButtonContainer, ButtonVariant } from "./styles";

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>  & {
  variant?: ButtonVariant;
  title: string;
  width?: string;
}

export function Button({ variant = "primary", title, width="6.875rem", ...props }: buttonProps) {
  return <ButtonContainer variant={variant} width={width} {...props}>{title}</ButtonContainer>;
}
