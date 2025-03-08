import type { SaveMessageStatus } from '@/app/lib/actions';
import type { Form } from '@/app/lib/contentful/generated/sdk';
import type { ContactFormData } from '@/app/lib/schemas';
import StaggerAnimation from '@/app/ui/animation/stagger-animation';
import SubmitButton from '@/app/ui/button/submit-button';
import FormGdprCheckbox from '@/app/ui/form/input/form-gdpr-checkbox';
import FormText from '@/app/ui/form/input/form-text';
import FormTextarea from '@/app/ui/form/input/form-textarea';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

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
    <form action={handleFormAction}>
      <StaggerAnimation
        className="space-y-4"
        direction="fromLeft"
        translation={10}
      >
        <FormText
          key="name"
          register={register}
          name="name"
          label={content?.labels?.name || ''}
          defaultValue={state?.rawData?.name || ''}
          errors={errors}
          validationMessages={content?.validationMessages}
        />
        <FormText
          key="email"
          register={register}
          name="email"
          label={content?.labels?.email || ''}
          defaultValue={state?.rawData?.email}
          errors={errors}
          validationMessages={content?.validationMessages}
        />
        <FormText
          key="role"
          register={register}
          name="role"
          label={content?.labels?.role || ''}
          defaultValue={state?.rawData?.role}
          errors={errors}
          validationMessages={content?.validationMessages}
        />
        <FormTextarea
          key="message"
          register={register}
          name="message"
          label={content?.labels?.message || ''}
          defaultValue={state?.rawData?.message}
          errors={errors}
          validationMessages={content?.validationMessages}
        />
        <FormGdprCheckbox
          key="consent"
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
        <SubmitButton key="submit">{content?.sendButtonLabel}</SubmitButton>
      </StaggerAnimation>
    </form>
  );
}
