import { useState } from "react";
import { currentDate } from "../../utils/utils";

interface Props {
  tag: React.ElementType;
  name: string;
  text: string;
  labelText: string;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EditableDate({
  tag: Tag,
  name,
  text,
  labelText,
  isEditing,
  onChange,
}: Props) {
  const [dateValue, setDateValue] = useState<string>(currentDate());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDateValue(value);
    onChange(e);
  };

  return (
    <div className="flex items-center">
      {isEditing ? (
        <input
          type="date"
          name={name}
          value={dateValue}
          onChange={handleChange}
          autoFocus
          required
          min={currentDate()}
          autoComplete="off"
          autoCorrect="off"
          className=".light-input border border-gray-300 rounded-lg bg-transparent w-full text-white px-4 py-1 focus:outline-none focus:ring-2 focus:ring-grey-500"
        />
      ) : (
        <div className="flex space-x-3">
          <p className="text-blue-200">{labelText}</p>
          <p>-</p>
          <Tag>{text}</Tag>
        </div>
      )}
    </div>
  );
}
