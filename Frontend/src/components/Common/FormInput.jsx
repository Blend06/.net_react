function FormInput({ label, type = 'text', value, onChange, required = false, ...props }) {
  return (
    <input
      type={type}
      placeholder={label}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
}

export default FormInput;
