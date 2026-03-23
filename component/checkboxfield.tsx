"use client";
import React from "react";

type Option = {
  label: string;
  value: string;
};

type CheckboxfieldProps = {
  label: any;
  options?: Option[];
  values?: string[]; // 👈 optional
  checked?: boolean;
  onChange: (values: any) => void; // 👈 simple & flexible
  color?: "primary" | "black" | "green" | "red";
};

export default function Checkboxfield({
  label,
  options,
  values = [],
  onChange,
  checked,
  color = "primary",
}: CheckboxfieldProps) {

  const handleChange = (value: string) => {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value));
    } else {
      onChange([...values, value]);
    }
  };

  const colorClasses = {
    primary: "accent-primary",
    black: "accent-black",
    green: "accent-green-600",
    red: "accent-red-600",
  };

  return (
    <div className="space-y-3">
      {options && (
        <p className="font-medium text-sm text-gray-600">{label}</p>
      )}

      {options ? (
        options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
            <input
              type="checkbox"
              checked={values.includes(opt.value)}
              onChange={() => handleChange(opt.value)}
              className={`w-4 h-4 ${colorClasses[color]}`} // 👈 APPLY
            />
            <span>{opt.label}</span>
          </label>
        ))
      ) : (
        <label className=" flex items-start gap-2 cursor-pointer text-xs">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className={`mt-1 w-4 h-4 ${colorClasses[color]}`} // 👈 APPLY
          />
          <span className="text-gray-600">{label}</span>
        </label>
      )}
    </div>
  );
}