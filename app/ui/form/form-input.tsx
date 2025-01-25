import { ElementType } from 'react';
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
  placeholder: string;
  defaultValue?: string;
  errors: FieldErrors<T>;
  validationMessages?: ValidationMessages | null;
  elementType?: 'input' | 'textarea';
};

export default function FormInput<T extends FieldValues>({
  register,
  name,
  placeholder,
  defaultValue,
  errors,
  validationMessages,
  elementType = 'input',
}: Props<T>) {
  const errorMessage = errors[name]?.message
    ? (String(errors[name]?.message) as ValidationMessageKey)
    : undefined;
  const message =
    errorMessage && validationMessages
      ? validationMessages[errorMessage]
      : errorMessage;

  const Component: ElementType = elementType;

  return (
    <div>
      <Component
        {...register(name)}
        {...(elementType === 'textarea' && { rows: 5 })}
        className={`base-border mt-1 block w-full rounded-lg px-4 py-2 duration-300 placeholder:text-(--secondary) placeholder:opacity-80 ${
          errorMessage
            ? 'border-l-8 border-(--error-color) bg-(--error-background) outline-(--error-color)'
            : ''
        }`}
        placeholder={placeholder}
        defaultValue={defaultValue}
        aria-label={placeholder}
        aria-describedby={`${String(name)}-error`}
      />
      <p
        id={`${String(name)}-error`}
        aria-live="polite"
        className={`ml-2 pt-1 text-sm text-(--error-color) opacity-0 transition-all duration-500 ${errorMessage ? 'h-5 opacity-100' : 'h-0'}`}
      >
        {message}
      </p>
    </div>
  );
}
