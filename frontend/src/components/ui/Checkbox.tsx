import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

export default function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <label className="checkbox-label">
      <input type="checkbox" {...props} />
      {children}
    </label>
  );
}