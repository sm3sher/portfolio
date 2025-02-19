import { graphql, http, HttpResponse } from 'msw';
import {
  AboutContentDocument,
  ContactContentDocument,
  EmailContentDocument,
  FooterContentDocument,
  HomeContentDocument,
  LegalMetadataContentDocument,
  LegalNoticeContentDocument,
  MainMetadataContentDocument,
  NavbarContentDocument,
  NotFoundContentDocument,
  PrivacyMetadataContentDocument,
  PrivacyPolicyContentDocument,
  ServiceBannerContentDocument,
  ServicesContentDocument,
  VerifyContentDocument,
} from '@/app/lib/contentful/generated/sdk';

const MOCK_IMAGE_URL = 'https://images.ctfassets.net/mock.png';

export const handlers = [
  http.get(MOCK_IMAGE_URL, () =>
    HttpResponse.arrayBuffer(new ArrayBuffer(0), {
      headers: { 'Content-Type': 'image/png' },
    }),
  ),
  graphql.query(AboutContentDocument, () =>
    HttpResponse.json({
      data: {
        aboutCollection: {
          items: [
            {
              title: 'About me',
              ageStatementPrefix: "I'm a",
              age: '1999-04-02T00:00:00.000Z',
              ageStatementSuffix: '-year-old',
              professionalTitle: 'freelance software developer',
              locationStatement: 'based in Germany.',
              description:
                'After earning my Bachelor’s degree in Computer Science from Heinrich Heine University Düsseldorf in 2020, I have continuously developed my skills as a developer. Over the past few years, I have worked in various roles and with a wide range of technologies to create digital, reliable solutions. Whether frontend or backend – with Java, Spring Boot, JavaScript, TypeScript, React, and Next.js, I drive projects forward and craft innovative applications that leave a lasting impression.',
              experienceMetricsCollection: {
                items: [
                  {
                    startYear: 2017,
                    labelPrefix: 'Years of',
                    labelSuffix: 'Coding Excellence',
                  },
                  {
                    startYear: 2020,
                    labelPrefix: 'Years of',
                    labelSuffix: 'Professional Impact',
                  },
                ],
              },
              image: {
                url: MOCK_IMAGE_URL,
                width: 1395,
                height: 1473,
                description: 'Portrait placeholder',
              },
            },
          ],
        },
      },
    }),
  ),
  graphql.query(ContactContentDocument, () =>
    HttpResponse.json({
      data: {
        contactCollection: {
          items: [
            {
              title: 'Get in Touch!',
              subTitleMain: 'Send a',
              subTitleHighlight: 'Message.',
              description:
                'Do you have a project or an idea you’d like to bring to life? Share your goals and requirements with me, so I can assess how I might assist you best. I’ll respond promptly to discuss further steps.',
              avatarTitle: 'Roman Jumatov',
              avatarDescription: 'Freelance Software Developer',
              avatarImage: {
                url: MOCK_IMAGE_URL,
                width: 1100,
                height: 1100,
                description: 'Avatar placeholder',
              },
            },
          ],
        },
        formCollection: {
          items: [
            {
              gdprNoticeIntro: 'I have taken note of the',
              gdprNoticeLinkText: 'information regarding data processing',
              gdprNoticeDetails:
                '. My provided data will be stored for the purpose of creating and processing my request.',
              sendButtonLabel: 'Send Message',
              errorTitle: 'Something went wrong.',
              errorIntro:
                'It seems there was an issue processing your message.',
              errorEditPrompt: 'Go back to the form',
              errorEditAriaLabel: 'Return to form to edit your message',
              errorDescription:
                'or try again using the button below. If the problem persists, feel free to reach out to me directly at',
              errorContactEmail: 'contact@domain.com',
              errorButtonLabel: 'Try again',
              emailVerificationTitle: 'Check your email',
              emailVerificationDescription:
                'I’ve just sent you a verification link. Please check your inbox and click the link to confirm your email. If you don’t see the email within a few minutes, check your spam folder.',
              emailResendButtonLabel: 'Resend Email',
              emailEditPrompt: 'is not your email?',
              emailEditAriaLabel: 'Return to form to edit email',
              attemptsLabel: 'attempts left',
              attemptLabel: 'attempt left',
              labels: {
                name: 'Name',
                email: 'Email',
                role: 'Job title, company name (optional)',
                message: 'Message',
              },
              validationMessages: {
                nameRequired: 'Please enter your name',
                nameMaxLength: 'Name cannot exceed 100 characters',
                emailInvalid: 'The email provided is invalid',
                emailMaxLength: 'Email cannot exceed 100 characters',
                roleMaxLength:
                  'Job title and company name cannot exceed 150 characters',
                messageRequired: 'Please enter your message',
                messageMaxLength: 'Message cannot exceed 1000 characters',
                consentRequired: 'You must agree to proceed',
              },
            },
          ],
        },
        testimonialsCollection: {
          items: [
            {
              title: 'What others say',
              prevSlideLabel: 'Previous slide',
              nextSlideLabel: 'Next slide',
              testimonialEntriesCollection: {
                items: [
                  {
                    quote:
                      'Their work style is focused and efficient. This individual demonstrates exceptional commitment and delivers strong performance in both qualitative and quantitative terms. Through their work, they achieve outstanding results.',
                    author: 'John D.',
                    jobTitle: 'Executive at Leading Insurance Company',
                    logoInvert: null,
                    logo: {
                      url: MOCK_IMAGE_URL,
                      width: 360,
                      height: 180,
                      description: 'Company logo placeholder',
                    },
                  },
                  {
                    quote:
                      'This professional possesses highly comprehensive and excellent expertise… They quickly familiarize themselves with assigned tasks and pursue agreed goals consistently and with the highest level of success.',
                    author: 'Jane S.',
                    jobTitle: 'CTO at Tech Solutions Inc.',
                    logoInvert: null,
                    logo: {
                      url: MOCK_IMAGE_URL,
                      width: 500,
                      height: 250,
                      description: 'Company logo placeholder',
                    },
                  },
                  {
                    quote:
                      'Due to their excellent comprehension skills, they quickly adapt to every task. This individual is consistently highly resilient and acts with composure even in stressful situations.',
                    author: 'Michael T.',
                    jobTitle: 'Managing Director at Software Corp.',
                    logoInvert: null,
                    logo: {
                      url: MOCK_IMAGE_URL,
                      width: 400,
                      height: 200,
                      description: 'Company logo placeholder',
                    },
                  },
                  {
                    quote:
                      'Their outstanding academic performance reflects their technical expertise. Furthermore, they demonstrate a high level of self-learning ability and motivation…',
                    author: 'Alex R.',
                    jobTitle: 'Team Lead at StartupX',
                    logoInvert: true,
                    logo: {
                      url: MOCK_IMAGE_URL,
                      width: 620,
                      height: 310,
                      description: 'Company logo placeholder',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    }),
  ),
  graphql.query(EmailContentDocument, () =>
    HttpResponse.json({
      data: {
        emailCollection: {
          items: [
            {
              preview: 'Click the button below to confirm your email.',
              heading: 'Confirm your email address',
              greeting: 'Hi',
              description:
                'Thank you for reaching out! To confirm your email address and complete your request, please click the button below:',
              buttonLabel: 'Confirm email',
              linkDescription:
                'If the button doesn’t work, you can use the following link:',
              ignoreDisclaimer:
                'If you didn’t request this, you can ignore this email.',
              logo: {
                url: MOCK_IMAGE_URL,
                description: 'Logo placeholder',
              },
            },
          ],
        },
      },
    }),
  ),
  graphql.query(FooterContentDocument, () =>
    HttpResponse.json({
      data: {
        footerCollection: {
          items: [
            {
              title: 'Roman Jumatov',
              description: 'Tailored Software Solutions',
              profileSection: 'Profiles',
              profileGitHub: 'GitHub',
              profileGitHubHref: 'https://github.com/username',
              profileStackOverflow: 'Stack Overflow',
              profileStackOverflowHref:
                'https://stackoverflow.com/users/userId',
              legalSection: 'Legal',
              legalNotice: 'Legal Notice',
              legalPrivacyPolicy: 'Privacy Policy',
              gitHubHref: 'https://github.com/username/repo',
              gitHubHrefLabel: 'View the source code on GitHub',
              kofiHref: 'https://ko-fi.com/username',
              kofiHrefLabel: 'Visit Ko-Fi profile',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(HomeContentDocument, ({ variables }) =>
    HttpResponse.json({
      data: {
        homeCollection: {
          items: [
            {
              greeting: variables.locale === 'en' ? 'Hello there!' : 'Hallo!',
              greetingDescription: 'Waving Hand',
              introHeadingMain: "I'm Roman",
              introHeadingHighlight: 'Jumatov',
              introSubheading: 'Freelance full-stack developer',
              introDescription:
                'I will guide your project from the first idea to the finished product – with full-stack expertise, technical know-how, and an eye for detail.',
              ctaButtonLabel: 'Contact Me',
              scrollDownLabel: 'Scroll down',
              image: {
                url: MOCK_IMAGE_URL,
                width: 1037,
                height: 1629,
                description: 'Portrait placeholder',
              },
            },
          ],
        },
      },
    }),
  ),
  graphql.query(LegalNoticeContentDocument, () =>
    HttpResponse.json({
      data: {
        legalNoticeCollection: {
          items: [
            {
              title: 'Legal Notice',
              subTitleInformation:
                'Information in accordance with § 5 Digital Services Act (DSA)',
              addressName: 'Roman Jumatov',
              addressJobTitle: 'Freelance Software Developer',
              addressStreet: 'Main Street 25',
              addressPostalCode: '12345',
              addressCity: 'Rivertown',
              subTitleContact: 'Contact',
              contactEmailLabel: 'Email:',
              contactEmail: 'contact@domain.com',
              contactFormLabel: 'Contact Form',
              subTitleDispute:
                'Consumer Dispute Resolution / Universal Arbitration Body',
              disputeLabel: 'Notice pursuant to § 36 of the German VSBG:',
              disputeStatement:
                'I am neither obligated nor willing to participate in dispute resolution procedures before a consumer arbitration body.',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(MainMetadataContentDocument, () =>
    HttpResponse.json({
      data: {
        metadataCollection: {
          items: [
            {
              mainTitle:
                'Roman Jumatov - Freelance Software Developer & Web Expert',
              mainDescription:
                'Explore my portfolio: I build scalable, user-friendly web applications and provide custom solutions for frontend, backend, and MVPs.',
              mainKeywords: ['Freelance Developer'],
            },
          ],
        },
      },
    }),
  ),
  graphql.query(LegalMetadataContentDocument, () =>
    HttpResponse.json({
      data: {
        metadataCollection: {
          items: [
            {
              legalTitle: 'Legal Notice - Roman Jumatov',
              legalDescription:
                'Legal information for the website of Roman Jumatov, freelance software developer.',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(PrivacyMetadataContentDocument, () =>
    HttpResponse.json({
      data: {
        metadataCollection: {
          items: [
            {
              privacyTitle: 'Privacy Policy - Roman Jumatov',
              privacyDescription:
                'Learn how your personal data is processed and protected on the website of Roman Jumatov, freelance software developer.',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(NavbarContentDocument, () =>
    HttpResponse.json({
      data: {
        navbarCollection: {
          items: [
            {
              usFlagDescription: 'Flag of the United States',
              deFlagDescription: 'Flag of Germany',
              englishLabel: 'English',
              germanLabel: 'German',
              switchLanguageLabel: 'Select language',
              homeLabel: 'Home',
              aboutLabel: 'About',
              servicesLabel: 'Services',
              contactLabel: 'Contact',
              switchThemeLabel: 'Toggle theme',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(NotFoundContentDocument, () =>
    HttpResponse.json({
      data: {
        notFoundCollection: {
          items: [
            {
              title: 'Houston,',
              subTitleMain: 'we have a',
              subTitleHighlight: 'problem',
              description: '404: This page is off the map.',
              buttonLabel: 'Take Me Home',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(PrivacyPolicyContentDocument, () =>
    HttpResponse.json({
      data: {
        privacyPolicyCollection: {
          items: [
            {
              title: 'Privacy Policy',
              lastModified: 'Last updated: February 2025',
              introDescription:
                'In this Privacy Policy, “we” refers to Roman Jumatov, the operator of this website.',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(ServiceBannerContentDocument, () =>
    HttpResponse.json({
      data: {
        serviceBannerCollection: {
          items: [
            {
              services: [
                'Web Development',
                'MVP Creation',
                'Consulting',
                'Code Review',
                'Feature Development',
                'Responsive Design',
                'Migration',
                'Maintenance',
              ],
            },
          ],
        },
      },
    }),
  ),
  graphql.query(ServicesContentDocument, () =>
    HttpResponse.json({
      data: {
        servicesCollection: {
          items: [
            {
              title: 'What I offer',
              subTitleMain: 'Featured',
              subTitleHighlight: 'Services.',
              serviceEntriesCollection: {
                items: [
                  {
                    iconName: 'WebDesign01Icon',
                    title: 'Web Development',
                    tags: ['Responsive Design', 'Accessibility'],
                    description:
                      'I build modern, scalable, and performant websites that are tailored to your specific business needs while being user-friendly and accessible.',
                  },
                  {
                    iconName: 'IdeaIcon',
                    title: 'MVP Development',
                    tags: ['Zero to One', 'Prototype', 'Scalability'],
                    description:
                      'I bring your ideas to life by creating a minimum viable product (MVP). My focus is on building a well-architected application that’s ready for future growth.',
                  },
                  {
                    iconName: 'MentoringIcon',
                    title: 'Technical Consulting',
                    tags: ['Mentoring', 'Code Reviews', 'Workshop'],
                    description:
                      'I provide expert consulting to optimize your software systems and conduct code audits with your team. Together, we’ll review your JavaScript application in 2-3 days and establish best practices.',
                  },
                  {
                    iconName: 'SoftwareLicenseIcon',
                    title: 'Software Development',
                    tags: ['Team Collaboration', 'Feature Development'],
                    description:
                      'I work alongside your team on complex applications to delight your customers with new features and performance improvements.',
                  },
                  {
                    iconName: 'SystemUpdate01Icon',
                    title: 'Support & Maintenance',
                    tags: ['Migration', 'Updates', 'Optimization'],
                    description:
                      'I help you migrate your existing systems to modern technologies or new platforms. Additionally, I ensure that your digital products stay up-to-date, secure, and high-performing.',
                  },
                ],
              },
            },
          ],
        },
      },
    }),
  ),
  graphql.query(VerifyContentDocument, () =>
    HttpResponse.json({
      data: {
        verifyCollection: {
          items: [
            {
              successTitle: 'Thank you for verifying your email!',
              successDescription:
                'I’ll review your message and typically respond within 24 hours. Looking forward to connecting!',
              errorTitle: 'Verification failed.',
              errorDescription: 'Your token is either invalid or expired.',
            },
          ],
        },
      },
    }),
  ),
];
