import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import Link from 'next/link';
import { Tick02Icon } from 'hugeicons-react';

type Props<T extends FieldValues> = {
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldErrors<T>;
};

export default function FormGdprCheckbox<T extends FieldValues>({
  register,
  name,
  errors,
}: Props<T>) {
  // TODO: handle errorMessage
  const errorMessage = errors[name]?.message && String(errors[name]?.message);
  console.error(errorMessage);

  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex cursor-pointer items-center"
        htmlFor="check-with-link"
      >
        <input
          {...register(name)}
          type="checkbox"
          className="base-border peer h-5 w-5 cursor-pointer appearance-none rounded transition-colors duration-200 checked:bg-[--color]"
          id="check-with-link"
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[--background-color] opacity-0 peer-checked:opacity-100">
          <Tick02Icon size={16} strokeWidth={3} />
        </span>
      </label>
      <label
        className="ml-2 cursor-pointer select-none text-sm text-[--footer]"
        htmlFor="check-with-link"
      >
        <p>
          I have taken note of the{' '}
          <Link
            href="/privacy-policy"
            className="font-medium underline hover:text-[--color]"
          >
            information regarding data processing
          </Link>
          . My provided data will be stored for the purpose of creating and
          processing my request.
        </p>
      </label>
    </div>
  );
}
