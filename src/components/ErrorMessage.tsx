interface Props {
  error: string;
}

export default function ErrorMessage({ error }: Props) {
  return (
    <div className="h-[40px] pb-4 flex justify-center items-center">
      {error && <p className="text-center text-[1.3rem] text-red-500">{error}</p>}
    </div>
  );
}
