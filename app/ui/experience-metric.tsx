import { getYearsSince } from '@/app/lib/date-utils';

type Props = {
  startYear: number;
  label: string;
};

export default function ExperienceMetric({ startYear, label }: Props) {
  return (
    <div>
      <h1>{getYearsSince(startYear)}+</h1>
      <h3>{label}</h3>
    </div>
  );
}
