import React from "react";
import { cn } from "../../utils/cn";

// interface TButtonProps {
//   onClick?: () => void;
//   className?: string;
//   children: React.ReactNode;
// }

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-primary text-black px-4 py-2 rounded-lg hover:bg-[#A4E62B] transition-all duration-300",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
