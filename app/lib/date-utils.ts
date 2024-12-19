export const calculateAge = (birthDateString: string): number => {
  const birthDate = new Date(birthDateString);
  const today = new Date();
  return (
    today.getFullYear() -
    birthDate.getFullYear() -
    (today <
    new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
      ? 1
      : 0)
  );
};

export const getYearsSince = (startYear: number): number => {
  return new Date().getFullYear() - startYear;
};
