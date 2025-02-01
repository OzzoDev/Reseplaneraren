import React, { useState } from "react";

interface Props {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: string[];
}

export default function AutocompleteInput({
  name,
  value,
  placeholder = "",
  onChange,
  options,
}: Props) {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(e);

    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(filteredOptions);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange({ target: { name, value: suggestion } } as React.ChangeEvent<HTMLInputElement>);
    setSuggestions([]);
  };

  const showSuggestions = value.length > 0 && suggestions.length > 0;

  return (
    <div className="relative w-full max-w-[300px]">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className="w-full px-10 py-3 border-[1px] text-center border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black bg-opacity-10 text-white"
        autoCorrect="off"
        autoComplete="off"
        required
      />
      {showSuggestions && (
        <ul className="absolute z-10 w-full max-h-[300px] bg-cyan-900 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="cursor-pointer hover:bg-gray-200 p-2">
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
