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
import contentfulClient from '@/app/lib/contentful/client';
import { Locale } from '@/i18n/routing';

type Props = {
  locale: Locale;
  name: string;
  verifyUrl: string;
};

export default async function EmailTemplate({
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
              highlight: '#FF5C18',
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
                className="bg-highlight rounded-full px-6 py-3 leading-4 font-medium text-white"
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
