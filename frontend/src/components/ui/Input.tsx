import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, className = "", id, ...props }: InputProps) {
  const inputId = id || `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="floating-label-group">
      <input 
        id={inputId}
        className={`login-input ${className}`} 
        placeholder=" " 
        {...props} 
      />
      <label htmlFor={inputId} className="floating-label">
        {label}
      </label>
    </div>
  );
}