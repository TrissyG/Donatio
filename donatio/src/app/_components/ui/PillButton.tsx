import { ReactNode } from "react";

interface PillButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const PillButton = ({ children, className, onClick }: PillButtonProps) => {
  return (
    <button onClick={onClick} className={`rounded-full ${className}`}>
      {children}
    </button>
  );
};

export default PillButton;
