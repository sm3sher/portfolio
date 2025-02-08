'use client';

import { useEffect, useState } from 'react';
import SpringAnimation from '@/app/ui/animation/spring-animation';
import LoadingSpinner from '@/app/ui/loading/loading-spinner';
import { CancelCircleIcon, CheckmarkCircle01Icon } from 'hugeicons-react';
import ViewAnimation from '@/app/ui/animation/view-animation';
import { useSearchParams } from 'next/navigation';
import { Verify } from '@/app/lib/contentful/generated/sdk';

type Props = {
  content?: Verify;
};

export default function VerifyContent({ content }: Props) {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
    'loading',
  );
  const searchParams = useSearchParams();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = searchParams.get('token');
        if (!token) {
          setStatus('error');
          return;
        }

        const response = await fetch(`/api/verify?token=${token}`);
        const data = await response.json();

        setStatus(data.success ? 'success' : 'error');
      } catch {
        setStatus('error');
      }
    };

    void verifyToken();
  }, [searchParams]);

  return (
    <div className="flex flex-1 items-center text-center">
      <div className="mx-auto max-w-(--breakpoint-xl) overflow-hidden px-6 py-24 text-center">
        {status === 'loading' && <LoadingSpinner />}
        {status === 'success' && (
          <div className="space-y-4">
            <SpringAnimation>
              <CheckmarkCircle01Icon className="mx-auto h-14 w-14 text-(--highlight) sm:h-16 sm:w-16" />
            </SpringAnimation>
            <ViewAnimation direction="fromRight" duration={0.5} delay={0.2}>
              <h1 className="text-3xl font-bold">{content?.successTitle}</h1>
            </ViewAnimation>
            <ViewAnimation direction="fromLeft" duration={0.5} delay={0.2}>
              <p>{content?.successDescription}</p>
            </ViewAnimation>
          </div>
        )}
        {status === 'error' && (
          <div className="space-y-4">
            <SpringAnimation>
              <CancelCircleIcon className="mx-auto h-14 w-14 text-(--highlight) sm:h-16 sm:w-16" />
            </SpringAnimation>
            <ViewAnimation direction="fromRight" duration={0.5} delay={0.2}>
              <h1 className="text-3xl font-bold">{content?.errorTitle}</h1>
            </ViewAnimation>
            <ViewAnimation direction="fromLeft" duration={0.5} delay={0.2}>
              <p>{content?.errorDescription}</p>
            </ViewAnimation>
          </div>
        )}
      </div>
    </div>
  );
}
