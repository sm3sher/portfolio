import { FieldErrors, UseFormRegister } from 'react-hook-form';
import FormText from '@/app/ui/form/input/form-text';
import FormTextarea from '@/app/ui/form/input/form-textarea';
import FormGdprCheckbox from '@/app/ui/form/input/form-gdpr-checkbox';
import SubmitButton from '@/app/ui/button/submit-button';
import { Form } from '@/app/lib/contentful/generated/sdk';
import { SaveMessageStatus } from '@/app/lib/actions';
import { ContactFormData } from '@/app/lib/schemas';

type Props = {
  content?: Form;
  state: SaveMessageStatus;
  handleFormAction: (formData: FormData) => void;
  errors: FieldErrors<ContactFormData>;
  register: UseFormRegister<ContactFormData>;
};

export default function ContactFormFields({
  content,
  state,
  handleFormAction,
  errors,
  register,
}: Props) {
  return (
    <form action={handleFormAction} className="space-y-4">
      <FormText
        register={register}
        name="name"
        label={content?.labels?.name || ''}
        defaultValue={state?.rawData?.name || ''}
        errors={errors}
        validationMessages={content?.validationMessages}
      />
      <FormText
        register={register}
        name="email"
        label={content?.labels?.email || ''}
        defaultValue={state?.rawData?.email}
        errors={errors}
        validationMessages={content?.validationMessages}
      />
      <FormText
        register={register}
        name="role"
        label={content?.labels?.role || ''}
        defaultValue={state?.rawData?.role}
        errors={errors}
        validationMessages={content?.validationMessages}
      />
      <FormTextarea
        register={register}
        name="message"
        label={content?.labels?.message || ''}
        defaultValue={state?.rawData?.message}
        errors={errors}
        validationMessages={content?.validationMessages}
      />
      <FormGdprCheckbox
        content={{
          intro: content?.gdprNoticeIntro,
          linkText: content?.gdprNoticeLinkText,
          details: content?.gdprNoticeDetails,
        }}
        register={register}
        name="consent"
        defaultChecked={state?.rawData?.consent}
        errors={errors}
        validationMessages={content?.validationMessages}
      />
      <SubmitButton>{content?.sendButtonLabel}</SubmitButton>
    </form>
  );
}
