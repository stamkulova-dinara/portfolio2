import { FC } from "react";
import './style.css'
type ButtonProps = {
  children: string;
};

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className="btn">{children}</button>;
};
