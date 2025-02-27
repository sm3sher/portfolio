import type { ValidationMessages } from '@/app/lib/contentful/generated/sdk';
import type { ValidationMessageKey } from '@/app/lib/schemas';
import { Link } from '@/i18n/routing';
import { Tick02Icon } from 'hugeicons-react';
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

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
    <>
      <div className="group flex">
        <label
          className="relative flex cursor-pointer items-center"
          htmlFor="check-with-link"
        >
          <input
            {...register(name)}
            type="checkbox"
            className="base-border peer before:-inset-[1px] after:-translate-x-1/2 after:-translate-y-1/2 relative h-6 w-6 appearance-none rounded-md bg-(--surface-color) before:absolute before:rounded-md before:bg-(--hover-color) before:opacity-0 before:duration-200 after:absolute after:top-1/2 after:left-1/2 after:h-10 after:w-10 after:scale-0 after:cursor-pointer after:rounded-full after:bg-(--hover-color) after:duration-300 checked:after:scale-0 checked:before:opacity-100 group-hover:after:scale-100"
            defaultChecked={defaultChecked}
            id="check-with-link"
            aria-describedby={`${String(name)}-error`}
          />
          <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 opacity-0 peer-checked:opacity-100">
            <Tick02Icon size={16} strokeWidth={3} />
          </span>
        </label>
        <label
          className={`ml-3 cursor-pointer select-none text-(--secondary) text-sm ${errorMessage && 'text-(--error-color)'}`}
          htmlFor="check-with-link"
        >
          <p className="text-sm">
            {content.intro}{' '}
            <Link
              href="/privacy-policy"
              className="font-medium underline hover:text-(--primary)"
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
        className={`ml-0.5 text-(--error-color) text-sm opacity-0 transition-all duration-500 ${errorMessage ? 'h-4 opacity-100' : 'h-0'}`}
      >
        {message}
      </p>
    </>
  );
}
