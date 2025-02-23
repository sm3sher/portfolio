import type { Form } from '@/app/lib/contentful/generated/sdk';
import StatusCard from '@/app/ui/card/status-card';
import { CancelCircleIcon } from 'hugeicons-react';

type Props = {
  content?: Form;
  handleReturn: () => void;
  handleRetry: () => void;
  retryAttempts: number;
};

export default function FormErrorCard({
  content,
  handleReturn,
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
        {content?.errorIntro}{' '}
        <button
          type="button"
          onClick={handleReturn}
          className="cursor-pointer font-medium text-(--secondary) underline hover:text-(--primary)"
          aria-label={content?.errorEditAriaLabel || ''}
        >
          {content?.errorEditPrompt}
        </button>{' '}
        {content?.errorDescription}{' '}
        <a
          href={`mailto:${content?.errorContactEmail}`}
          className="underline-effect text-(--highlight)"
        >
          {content?.errorContactEmail}
        </a>
        .
      </p>
    </StatusCard>
  );
}
