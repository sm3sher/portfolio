type Props = {
  data: {
    date: string;
    title: string;
    points: string[];
  }[];
};

export default function Timeline({ data }: Props) {
  return (
    <ol className="relative border-s border-[--primary]">
      {data.map((item) => (
        <li key={item.date} className="ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-[--primary] bg-[--secondary]" />
          <time className="mb-1 text-sm leading-none text-[--secondary]">
            {item.date}
          </time>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <ul className="mb-4 list-inside list-disc text-[--secondary]">
            {item.points.map((point, pointIndex) => (
              <li key={pointIndex}>{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
