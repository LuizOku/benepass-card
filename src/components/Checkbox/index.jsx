import React from "react";

function Checkbox({ label, value, onChange, className }) {
  return (
    <div
      data-testid="checkbox-component"
      className={`flex items-center ${className}`}
    >
      <input
        data-testid="checkbox"
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="mr-3 transform scale-110 border-0 outline accent-brand-pink-100 cursor-pointer transition-all duration-500 md:hover:scale-125"
      />
      <label
        className={`text-base font-normal ${value && "text-brand-pink-100"}`}
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
