import { beforeAll, describe, expect, it, vi } from 'vitest';
import { calculateAge, getYearsSince } from '@/app/lib/date-utils';

describe('date utils', () => {
  const currentDate = new Date('2024-12-05');

  beforeAll(() => {
    vi.useFakeTimers().setSystemTime(currentDate);
  });

  describe('calculateAge', () => {
    it('should calculate age correctly when birthday has passed this year', () => {
      const birthDate = '1990-01-01';
      const age = calculateAge(birthDate);
      expect(age).toBe(34);
    });

    it('should calculate age correctly when birthday is today', () => {
      const today = currentDate;
      const birthDate = `${today.getFullYear() - 25}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      const age = calculateAge(birthDate);
      expect(age).toBe(25);
    });

    it('should calculate age correctly when birthday is yet to occur this year', () => {
      const birthDate = '1999-12-31';
      const age = calculateAge(birthDate);
      expect(age).toBe(24);
    });
  });

  describe('getYearsSince', () => {
    it('should calculate the correct years since the start year', () => {
      const startYear = 2015;
      const yearsSince = getYearsSince(startYear);
      expect(yearsSince).toBe(9);
    });

    it('should handle a start year in the future', () => {
      const futureYear = 2025;
      const yearsSince = getYearsSince(futureYear);
      expect(yearsSince).toBeLessThan(0);
    });
  });
});
