import { CheckmarkCircle01Icon } from 'hugeicons-react';
import SpringAnimation from '@/app/ui/animation/spring-animation';
import ViewAnimation from '@/app/ui/animation/view-animation';

export default function Page() {
  return (
    <div className="flex flex-1 items-center text-center">
      <div className="mx-auto max-w-(--breakpoint-xl) space-y-4 overflow-hidden px-6 py-24 text-center">
        <SpringAnimation>
          <CheckmarkCircle01Icon className="mx-auto h-16 w-16 text-(--highlight)" />
        </SpringAnimation>
        <ViewAnimation direction="fromRight" duration={0.5} delay={0.2}>
          <h1 className="text-3xl font-bold">
            Thank you for verifying your email!
          </h1>
        </ViewAnimation>
        <ViewAnimation direction="fromLeft" duration={0.5} delay={0.2}>
          <p>
            I typically respond within 24 hours. If you don’t hear from me soon,
            please check your spam folder.
          </p>
        </ViewAnimation>
      </div>
    </div>
  );
}
