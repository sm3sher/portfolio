type Props = {
  top: number | string;
  left: number | string;
  radius: number;
};

export default function RadialBackground({ top, left, radius }: Props) {
  return (
    <div
      className="-z-10 absolute inset-0 bg-radial from-(--radial-color) from-[1px] to-[1px] to-transparent [background-size:2px_2px]"
      style={{
        maskImage: `radial-gradient(circle at ${top} ${left}, black 0%, transparent ${radius}%)`,
      }}
    />
  );
}
