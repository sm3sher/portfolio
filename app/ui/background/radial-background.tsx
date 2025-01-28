type Props = {
  position: 'circle_at_top' | 'circle_at_top_left' | 'circle_at_bottom_left';
  gradientStop?: number;
};

export default function RadialBackground({ position, gradientStop }: Props) {
  return (
    <div
      className={`absolute inset-0 -z-10 bg-radial-[${position}] from-(--radial-color) to-transparent to-${gradientStop || 50}%`}
    />
  );
}
