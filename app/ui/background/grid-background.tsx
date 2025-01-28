export default function GridBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-20 h-full w-full bg-linear-to-r from-(--grid-color) from-5% to-transparent to-5% bg-[size:1.5rem_1.5rem]" />
      <div className="absolute inset-0 -z-20 h-full w-full bg-linear-to-b from-(--grid-color) from-5% to-transparent to-5% bg-[size:1.5rem_1.5rem]" />
    </>
  );
}
