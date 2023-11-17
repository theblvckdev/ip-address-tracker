import React from "react";

const FormControl = ({ type, placeholder, value, onChange }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="py-3.5 px-4 w-full rounded-l-[15px] cursor-pointer bg-white outline-none border-0"
        placeholder={placeholder}
      />
    </>
  );
};

export default FormControl;
