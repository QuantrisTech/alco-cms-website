"use client";
import React, { useState } from "react";

type InputProps = {
  label: string;
  type?: "text" | "password" | "number" | "email" | "tel";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  name?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
};

const InputField: React.FC<InputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  textarea = false,
  name,
  disabled = false,
  size = "medium",
}) => {
  const [focus, setFocus] = useState(false);

  const isActive = focus || value;

  // ✅ Size classes
  const sizeClasses: Record<string, string> = {
    sm: "px-2 pt-4 pb-1 text-sm",
    md: "px-3 pt-5 pb-2 text-base",
    lg: "px-4 pt-6 pb-3 text-lg",
  };

  return (
    <div className="relative w-full">
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="w-full border border-gray-300 rounded-lg px-2 pt-4 pb-1 focus:outline-none focus:border-primary resize-none"
          // className={`w-full border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none ${sizeClasses[size]}`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="w-full border border-gray-300 rounded-lg px-2 pt-4 pb-1 focus:outline-none focus:border-primary"
          // className={`w-full border border-gray-300 rounded-lg focus:outline-none focus:border-primary ${sizeClasses[size]}`}
        />
      )}

      {/* Floating Label */}
      <label
        className={`absolute left-3 transition-all duration-200 pointer-events-none
        ${isActive ? "top-1 text-xs text-primary" : "text-sm top-3 text-gray-400"}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;