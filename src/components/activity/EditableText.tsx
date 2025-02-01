import React from "react";

interface Props {
  tag: React.ElementType;
  name: string;
  value: string;
  text: string;
  labelText: string;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EditableText({
  tag: Tag,
  name,
  value,
  text,
  labelText,
  isEditing,
  onChange,
}: Props) {
  return (
    <div className="flex items-center">
      {isEditing ? (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          autoFocus
          required
          autoComplete="off"
          autoCorrect="off"
          className="border border-gray-300 rounded-lg bg-transparent w-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-grey-500"
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
