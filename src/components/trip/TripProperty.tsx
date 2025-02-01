interface Props {
  property: string;
  labelText: string;
}

export default function TripProperty({ property, labelText }: Props) {
  return (
    <div className="flex items-center space-x-2">
      <p className="text-gray-300">{labelText}</p>
      <p>-</p>
      <p>{property}</p>
    </div>
  );
}
