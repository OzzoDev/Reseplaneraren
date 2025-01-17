interface Props {
  tag: React.ElementType;
  name: string;
  value: string;
  inputType?: string;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A component that displays editable text.
 * Renders an input field when in editing mode and the specified tag when not.
 *
 * @param {Props} props - The properties for the component.
 * @param {React.ElementType} props.tag - The HTML element type to render when not editing.
 * @param {string} props.name - The name attribute for the input field.
 * @param {string} props.value - The current value of the editable text.
 * @param {string} [props.inputType] - The type of the input field (default is "text").
 * @param {boolean} props.isEditing - Flag to determine if the component is in editing mode.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - Function to handle input changes.
 *
 * @returns {JSX.Element} The rendered editable text component.
 *
 * @example
 * <EditableText
 *   tag="h3"
 *   name="activity"
 *   value={activityValue}
 *   isEditing={isEditing}
 *   onChange={handleChange}
 * />
 */

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
          autoComplete="off"
          autoCorrect="off"
        />
      ) : (
        <Tag>{value}</Tag>
      )}
    </div>
  );
}
