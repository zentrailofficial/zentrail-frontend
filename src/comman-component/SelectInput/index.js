import * as React from "react";

export default function SelectInput({ value, label, placeholder, field }) {
  const [filtered, setFiltered] = React.useState([]);

  const handleChange = (e) => {
    const text = e.target.value;
    field.onChange(text); 

    if (text.length > 0) {
      const match = value.filter((val) =>
        val.toLowerCase().includes(text.toLowerCase())
      );
      setFiltered(match);
    } else {
      setFiltered([]);
    }
  };

  return (
    <div className="relative w-full mb-8 mt-1">
      {label && (
        <label className="dm_sans font-medium text-[14px] leading-[25px]">
          {label}
        </label>
      )}

      <input
        type="text"
        value={field.value || ""} 
        onChange={handleChange}
        className="bg-white w-full rounded-[6px] p-2 outline-0 border-0"
        placeholder={placeholder}
      />

      {filtered.length > 0 && (
        <ul className="absolute z-10 bg-white  rounded-md w-full max-h-40 overflow-y-auto mt-1">
          {filtered.map((item, i) => (
            <li
              key={i}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                field.onChange(item);
                setFiltered([]);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
