type Props = {
  label: string;
};

export default function Chip({ label }: Props) {
  return (
    <span className="base-border rounded-full bg-[--background-color] px-3 py-1 text-sm font-medium">
      {label}
    </span>
  );
}
