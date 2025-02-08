import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import { ValidationMessages } from '@/app/lib/contentful/generated/sdk';
import { ValidationMessageKey } from '@/app/lib/schemas';

type Props<T extends FieldValues> = {
  register: UseFormRegister<T>;
  name: Path<T>;
  label: string;
  defaultValue?: string;
  errors: FieldErrors<T>;
  validationMessages?: ValidationMessages | null;
};

export default function FormText<T extends FieldValues>({
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
    <div>
      <div className="relative">
        <input
          {...register(name)}
          id={name}
          className="peer w-full rounded-xl px-4 pt-5 pb-1 duration-300 outline-none hover:bg-(--hover-color)"
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
          className={`base-border absolute inset-0 -z-10 rounded-xl bg-(--surface-color) duration-300 ${errorMessage ? 'border-l-8 border-(--error-color)' : ''}`}
        />
      </div>
      <p
        id={`${String(name)}-error`}
        aria-live="polite"
        className={`ml-0.5 pt-1 text-sm text-(--error-color) opacity-0 duration-500 ${errorMessage ? 'h-5 opacity-100' : 'h-0 p-0!'}`}
      >
        {message}
      </p>
    </div>
  );
}
