import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

type Props = {
  verifyUrl: string;
};

export function EmailTemplate({ verifyUrl }: Props) {
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
      <Html lang="en">
        <Head />
        <Preview>Verify your email address</Preview>
        <Body>
          <Container>
            <Heading>Verify your email address</Heading>
            <Section>
              <Text>
                Thank you for reaching out! To confirm your email address and
                complete your request, please verify your email by clicking the
                button below:
              </Text>
              <Button
                href={verifyUrl}
                className="bg-highlight rounded-full px-6 py-3 leading-4 font-medium text-white"
              >
                Verify email
              </Button>
            </Section>
            <Section>
              <Text>
                If the button doesn’t work, you can use the following link:
              </Text>
              <Link>{verifyUrl}</Link>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
