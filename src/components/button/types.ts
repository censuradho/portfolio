import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pulse?: boolean
  fullWidth?: boolean
  loading?: boolean
}