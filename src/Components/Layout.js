import React from "react";

const layout = ({ children, className = "" }) => {
  return (
    <div
      className={` w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default layout;
