import { FC } from "react";

interface ButtonProps {
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Boop</button>;
};
