import { CheckmarkCircle01Icon } from 'hugeicons-react';
import SpringAnimation from '@/app/ui/animation/spring-animation';
import ViewAnimation from '@/app/ui/animation/view-animation';
import { Locale } from '@/i18n/routing';
import contentfulClient from '@/app/lib/contentful/client';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;

  const query = await contentfulClient.thankYouContent({ locale });
  const content = query.thankYouCollection?.items[0];

  return (
    <div className="flex flex-1 items-center text-center">
      <div className="mx-auto max-w-(--breakpoint-xl) space-y-4 overflow-hidden px-6 py-24 text-center">
        <SpringAnimation>
          <CheckmarkCircle01Icon className="mx-auto h-16 w-16 text-(--highlight)" />
        </SpringAnimation>
        <ViewAnimation direction="fromRight" duration={0.5} delay={0.2}>
          <h1 className="text-3xl font-bold">{content?.title}</h1>
        </ViewAnimation>
        <ViewAnimation direction="fromLeft" duration={0.5} delay={0.2}>
          <p>{content?.description}</p>
        </ViewAnimation>
      </div>
    </div>
  );
}
