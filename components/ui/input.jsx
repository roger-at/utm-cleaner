
export function Input({ value, onChange, placeholder, readOnly = false }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      className="w-full p-2 border rounded"
    />
  );
}
