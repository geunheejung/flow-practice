import { ReactNode, useMemo } from "react";
import './Text.css';

interface Props {
  type?: "default" | "primary" | "error" | "success";
  weight?: "normal" | "bold";
  className?: string;
  children: ReactNode;
}
const Text = ({
  type = "primary",
  weight = "normal",
  className,
  children,
}: Props) => {
  const classNames = useMemo(() => {
    let _className = ['text'];

    if (type) _className.push(`--${type}`);
    if (weight) _className.push(`--${weight}`);
    if (className) _className.push(` ${className}`);

    return _className.join(' ');
  }, [type, weight]);
  return <span className={classNames}>{children}</span>;
};

export default Text;
