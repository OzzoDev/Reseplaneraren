interface Props {
  btnText: string;
}

export default function FormButton({ btnText }: Props) {
  return (
    <div>
      <button
        type="submit"
        className="w-full mt-[-20px] bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600 transition duration-200">
        {btnText}
      </button>
    </div>
  );
}
