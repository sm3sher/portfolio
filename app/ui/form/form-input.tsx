import { ElementType } from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

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
    <div>
      <Component
        {...register(name)}
        {...(elementType === 'textarea' && { rows })}
        className={`base-border mt-1 block w-full rounded-lg px-4 py-2 duration-300 ${
          errorMessage
            ? 'border-l-8 border-[--error-color] bg-[--error-background] outline-[--error-color]'
            : ''
        }`}
        placeholder={placeholder}
        aria-label={placeholder}
        aria-describedby={`${String(name)}-error`}
      />
      <p
        id={`${String(name)}-error`}
        aria-live="polite"
        className={`ml-2 pt-1 text-sm text-[--error-color] opacity-0 transition-all duration-500 ${errorMessage ? 'h-5 opacity-100' : 'h-0'}`}
      >
        {errorMessage}
      </p>
    </div>
  );
}
