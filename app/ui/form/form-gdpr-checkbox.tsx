import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import { Link } from '@/i18n/routing';
import { Tick02Icon } from 'hugeicons-react';
import { ValidationMessages } from '@/app/lib/contentful/generated/sdk';
import { ValidationMessageKey } from '@/app/lib/schemas';

type Props<T extends FieldValues> = {
  content: {
    intro?: string | null;
    linkText?: string | null;
    details?: string | null;
  };
  register: UseFormRegister<T>;
  name: Path<T>;
  defaultChecked?: boolean;
  errors: FieldErrors<T>;
  validationMessages?: ValidationMessages | null;
};

export default function FormGdprCheckbox<T extends FieldValues>({
  content,
  register,
  name,
  defaultChecked,
  errors,
  validationMessages,
}: Props<T>) {
  const errorMessage = errors[name]?.message
    ? (String(errors[name]?.message) as ValidationMessageKey)
    : undefined;
  const message =
    errorMessage && validationMessages
      ? validationMessages[errorMessage]
      : errorMessage;

  return (
    <div>
      <div className="flex">
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
            defaultChecked={defaultChecked}
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
            {content.intro}{' '}
            <Link
              href="/privacy-policy"
              className="font-medium underline hover:text-[--primary]"
            >
              {content.linkText}
            </Link>
            {content.details}
          </p>
        </label>
      </div>
      <p
        id={`${String(name)}-error`}
        aria-live="polite"
        className={`ml-7 text-sm text-[--error-color] opacity-0 transition-all duration-500 ${errorMessage ? 'h-4 opacity-100' : 'h-0'}`}
      >
        {message}
      </p>
    </div>
  );
}
