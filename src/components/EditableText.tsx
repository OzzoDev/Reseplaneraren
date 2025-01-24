interface Props {
  tag: React.ElementType;
  name: string;
  value: string;
  text: string;
  labelText: string;
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
 * @param {string} props.text - The current text of the editable text.
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
 *   text = "activity"
 *   value={activityValue}
 *   isEditing={isEditing}
 *   onChange={handleChange}
 * />
 */

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
          <Tag>{text}</Tag>
        </div>
      )}
    </div>
  );
}
