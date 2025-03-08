import type { ValidationMessages } from '@/app/lib/contentful/generated/sdk';
import type { ValidationMessageKey } from '@/app/lib/schemas';
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

type Props<T extends FieldValues> = {
  register: UseFormRegister<T>;
  name: Path<T>;
  label: string;
  defaultValue?: string;
  errors: FieldErrors<T>;
  validationMessages?: ValidationMessages | null;
};

export default function FormTextarea<T extends FieldValues>({
  register,
  name,
  label,
  defaultValue,
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
      <div
        className={`base-border relative max-h-36 rounded-xl duration-300 hover:bg-(--hover-color) ${errorMessage ? 'border-(--error-color)' : ''}`}
      >
        <textarea
          {...register(name)}
          id={name}
          rows={5}
          className="peer mt-5 w-full resize-none px-4 outline-none"
          defaultValue={defaultValue}
          placeholder=" "
          aria-describedby={`${String(name)}-error`}
          aria-invalid={!!errorMessage}
        />
        <label
          htmlFor={name}
          className="pointer-events-none absolute top-3 left-4 text-(--secondary) duration-300 peer-[:not(:placeholder-shown),:focus]:top-1.5 peer-[:not(:placeholder-shown),:focus]:text-xs"
        >
          {label}
        </label>
        <div
          className={`-inset-[1px] -z-10 absolute rounded-xl border-(--border-color) bg-(--surface-color) duration-300 ${errorMessage ? 'border-(--error-color) border-l-[6px]' : ''}`}
        />
      </div>
      <p
        id={`${String(name)}-error`}
        aria-live="polite"
        className={`ml-0.5 pt-1 text-(--error-color) text-sm opacity-0 duration-500 ${errorMessage ? 'h-5 opacity-100' : 'h-0 p-0!'}`}
      >
        {message}
      </p>
    </>
  );
}
