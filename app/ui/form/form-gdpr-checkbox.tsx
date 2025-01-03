import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import { Link } from '@/i18n/routing';
import { Alert01Icon, Tick02Icon } from 'hugeicons-react';

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
  const errorMessage = errors[name]?.message && String(errors[name]?.message);

  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex cursor-pointer items-center"
        htmlFor="check-with-link"
      >
        <input
          {...register(name)}
          type="checkbox"
          className={`base-border peer h-5 w-5 cursor-pointer appearance-none rounded backdrop-blur transition-colors duration-200 checked:bg-[--primary] ${
            errorMessage &&
            'border-[--error-color] bg-[--error-background] outline-[--error-color]'
          }`}
          id="check-with-link"
          aria-describedby={`${String(name)}-error`}
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[--background-color] opacity-0 peer-checked:opacity-100">
          <Tick02Icon size={16} strokeWidth={3} />
        </span>
      </label>
      <label
        className={`ml-2 cursor-pointer select-none text-sm text-[--secondary] ${errorMessage && 'text-[--error-color]'}`}
        htmlFor="check-with-link"
      >
        <p className="text-sm">
          I have taken note of the{' '}
          <Link
            href="/privacy-policy"
            className="font-medium underline hover:text-[--primary]"
          >
            information regarding data processing
          </Link>
          . My provided data will be stored for the purpose of creating and
          processing my request.
        </p>
        {errorMessage && (
          <div
            id={`${String(name)}-error`}
            aria-live="polite"
            className="pointer-events-none absolute z-10 ml-[-1.75rem] mt-2 flex items-center space-x-2 rounded-lg border border-[--error-color] bg-[--error-background] px-3 py-2 text-sm text-[--primary]"
          >
            <Alert01Icon />
            <span>{errorMessage}</span>
          </div>
        )}
      </label>
    </div>
  );
}
