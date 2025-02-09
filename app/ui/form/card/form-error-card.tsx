import { CancelCircleIcon } from 'hugeicons-react';
import StatusCard from '@/app/ui/card/status-card';
import { Form } from '@/app/lib/contentful/generated/sdk';

type Props = {
  content?: Form;
  handleRetry: () => void;
  retryAttempts: number;
};

export default function FormErrorCard({
  content,
  handleRetry,
  retryAttempts,
}: Props) {
  return (
    <StatusCard
      icon={<CancelCircleIcon size={52} />}
      title={content?.errorTitle}
      button={{
        label: content?.errorButtonLabel,
        onClick: handleRetry,
        disabled: retryAttempts <= 0,
      }}
      attemptsLeft={retryAttempts}
      attemptsLabel={content?.attemptsLabel}
      attemptLabel={content?.attemptLabel}
    >
      <p className="text-center">
        {content?.errorDescription}{' '}
        <a
          href={`mailto:${content?.errorContactEmail}`}
          className="text-(--highlight) hover:underline hover:underline-offset-4"
        >
          {content?.errorContactEmail}
        </a>
        .
      </p>
    </StatusCard>
  );
}
