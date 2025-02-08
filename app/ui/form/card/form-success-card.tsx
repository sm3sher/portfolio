import { MailOpenIcon } from 'hugeicons-react';
import StatusCard from '@/app/ui/card/status-card';
import { Form } from '@/app/lib/contentful/generated/sdk';

type Props = {
  content?: Form;
  handleResend: () => void;
  resendAttempts: number;
};

export default function SubmittedStatusCard({
  content,
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
        disabled: resendAttempts >= 2,
      }}
    >
      <p className="text-center">{content?.emailVerificationDescription}</p>
    </StatusCard>
  );
}
