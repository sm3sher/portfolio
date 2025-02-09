import { MailOpenIcon } from 'hugeicons-react';
import StatusCard from '@/app/ui/card/status-card';
import { Form } from '@/app/lib/contentful/generated/sdk';

type Props = {
  content?: Form;
  pending: boolean;
  email?: string;
  handleReturn: () => void;
  handleResend: () => void;
  resendAttempts: number;
};

export default function SubmittedStatusCard({
  content,
  pending,
  email,
  handleReturn,
  handleResend,
  resendAttempts,
}: Props) {
  return (
    <StatusCard
      icon={<MailOpenIcon size={52} />}
      title={content?.emailVerificationTitle}
      button={{
        label: content?.emailResendButtonLabel,
        onClick: handleResend,
        disabled: resendAttempts <= 0,
        isLoading: pending,
      }}
      attemptsLeft={resendAttempts}
      attemptsLabel={content?.attemptsLabel}
      attemptLabel={content?.attemptLabel}
    >
      <p className="text-center">{content?.emailVerificationDescription}</p>
      {email && (
        <button
          onClick={handleReturn}
          className="flex w-full cursor-pointer justify-center font-medium text-(--secondary) underline hover:text-(--primary)"
          aria-label={content?.emailEditAriaLabel || ''}
        >
          {email} {content?.emailEditPrompt}
        </button>
      )}
    </StatusCard>
  );
}
