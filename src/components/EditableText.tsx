interface Props {
  tag: React.ElementType;
  name: string;
  value: string;
  inputType?: string;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EditableText({
  tag: Tag,
  name,
  value,
  inputType = "text",
  isEditing,
  onChange,
}: Props) {
  return (
    <div>
      {isEditing ? (
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          autoFocus
          required
        />
      ) : (
        <Tag>{value}</Tag>
      )}
    </div>
  );
}
