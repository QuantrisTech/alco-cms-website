"use client";
import React from "react";

type CheckboxProps = {
  checked: boolean;
  onChange: (val: boolean) => void;
  label: React.ReactNode;
};

export default function CheckboxWithLabel({
  checked,
  onChange,
  label,
}: CheckboxProps) {
  return (
    <label className="flex items-start gap-2 cursor-pointer text-xs">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 w-4 h-4"
      />
      <span className="text-gray-600">{label}</span>
    </label>
  );
}