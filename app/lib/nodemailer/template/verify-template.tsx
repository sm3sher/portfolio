import contentfulClient from '@/app/lib/contentful/client';
import type { Locale } from '@/i18n/routing';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

type Props = {
  locale: Locale;
  name: string;
  verifyUrl: string;
};

export default async function VerifyTemplate({
  locale,
  name,
  verifyUrl,
}: Props) {
  const query = await contentfulClient.emailContent({ locale });
  const content = query.emailCollection?.items[0];

  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              highlight: '#FE5100',
            },
          },
        },
      }}
    >
      <Html lang={locale}>
        <Head>
          <meta name="color-scheme" content="dark light" />
        </Head>
        <Preview>{content?.preview || ''}</Preview>
        <Body>
          <Container className="rounded bg-neutral-900 px-8 pt-8 pb-2">
            <Img
              className="mb-[24px] h-12 w-auto"
              src={content?.logo?.url || undefined}
              alt={content?.logo?.description || undefined}
            />
            <Heading className="text-white">{content?.heading}</Heading>
            <Section className="text-neutral-300">
              <Text>
                {content?.greeting} {name}!
              </Text>
              <Text>{content?.description}</Text>
              <Button
                href={verifyUrl}
                className="rounded-full bg-highlight px-6 py-3 font-medium text-white leading-4 tracking-wide"
              >
                {content?.buttonLabel}
              </Button>
            </Section>
            <Section className="text-neutral-300">
              <Text>{content?.linkDescription}</Text>
              <Link href={verifyUrl}>{verifyUrl}</Link>
            </Section>
            <Section className="text-neutral-300">
              <Text className="mb-0">{content?.ignoreDisclaimer}</Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
