import { forwardRef, useId } from "react";

// export default forwardRef(function Input({ label, type = "text" }, ref) {
const Input = forwardRef(({ label, type = "text", placeholder = "" }, ref) => {
  const id = useId();

  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="mt-2x">
        <input
          type={type}
          id={id}
          ref={ref}
          placeholder={`${label || placeholder}...`}
          className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
});

Input.displayName = "Input";
export default Input;
