type Props = {
  startYear: number;
  label: string;
};

export default function ExperienceMetric({ startYear, label }: Props) {
  const years = new Date().getFullYear() - startYear;

  return (
    <div>
      <h1>{years}+</h1>
      <h3>{label}</h3>
    </div>
  );
}
