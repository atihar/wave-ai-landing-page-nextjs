import React from "react";
import { cn } from "../../utils/cn";

// interface ContainerProps {
//   className?: string;
//   children: React.ReactNode;
// }

const Container = ({ className, children }) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
