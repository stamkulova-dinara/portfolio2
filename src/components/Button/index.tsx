import { FC } from "react";
import './style.css'
type ButtonProps = {
  children: string;
  default?: boolean | undefined;
};

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className="btn">{children}</button>;
};
