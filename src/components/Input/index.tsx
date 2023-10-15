import { ChangeEvent, useCallback } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

const Input = (props: Props) => {
  return <input {...props} />;
};

export default Input;
