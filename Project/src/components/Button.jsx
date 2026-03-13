import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button {...props} className={`${bgColor} ${className} ${textColor} px-4 py-2 rounded`}>
      {children}
    </button>
  );
}

export default Button;
