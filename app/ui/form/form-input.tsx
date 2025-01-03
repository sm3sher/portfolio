import { ElementType } from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import { Alert01Icon } from 'hugeicons-react';

type Props<T extends FieldValues> = {
  register: UseFormRegister<T>;
  name: Path<T>;
  placeholder: string;
  errors: FieldErrors<T>;
  elementType?: 'input' | 'textarea';
  rows?: number;
};

export default function FormInput<T extends FieldValues>({
  register,
  name,
  placeholder,
  errors,
  elementType = 'input',
  rows = 5,
}: Props<T>) {
  const errorMessage = errors[name]?.message && String(errors[name]?.message);
  const Component: ElementType = elementType;

  return (
    <div className="relative">
      <Component
        {...register(name)}
        {...(elementType === 'textarea' && { rows })}
        className={`base-border peer mt-1 block w-full rounded-lg px-4 py-2 duration-300 ${
          errorMessage &&
          'border-l-8 border-[--error-color] bg-[--error-background] outline-[--error-color]'
        }`}
        placeholder={placeholder}
        aria-describedby={`${String(name)}-error`}
      />
      {errorMessage && (
        <div
          id={`${String(name)}-error`}
          aria-live="polite"
          className="pointer-events-none absolute z-10 mt-2 flex items-center space-x-2 rounded-lg border border-[--error-color] bg-[--error-background] px-3 py-2 text-sm opacity-0 transition-opacity duration-300 peer-focus:opacity-100"
        >
          <Alert01Icon />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
