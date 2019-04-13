import { useState } from "react";

export const colorOptions = [
  { value: "green", label: "Green" },
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" }
];

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}
