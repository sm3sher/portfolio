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
import { http, HttpResponse, graphql } from 'msw';

const MOCK_IMAGE_URL = 'https://images.ctfassets.net/mock.png';
const MOCK_URL = 'https://example.com';
const MOCK_EMAIL = 'example@domain.com';

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
              projectStepsCollection: {
                items: [
                  {
                    title: 'Arrange a free 30-minute consultation',
                    description: 'Let’s discuss your project and goals.',
                  },
                  {
                    title: 'Receive a tailored offer',
                    description:
                      'For development work, you’ll get a fixed-price quote within 5 working days. For consulting and ongoing support, we’ll define a flexible model.',
                  },
                  {
                    title: 'Work begins',
                    description:
                      'I’ll start development, perform a technical audit, or collaborate with your team — keeping you updated throughout.',
                  },
                  {
                    title: 'Delivery & ongoing support',
                    description:
                      'Once completed, I’ll deliver the results and make adjustments as needed. For long-term projects, I provide continued support and optimizations.',
                  },
                ],
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
              errorContactEmail: MOCK_EMAIL,
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
                role: 'Job Title & Company (Optional)',
                message: 'Project Details',
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
                description: 'BrandIcon placeholder',
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
              profileGitHubHref: MOCK_URL,
              profileStackOverflow: 'Stack Overflow',
              profileStackOverflowHref: MOCK_URL,
              legalSection: 'Legal',
              legalNotice: 'Legal Notice',
              legalPrivacyPolicy: 'Privacy Policy',
              gitHubHref: MOCK_URL,
              gitHubHrefLabel: 'View the source code on GitHub',
              kofiHref: MOCK_URL,
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
              contactEmail: MOCK_EMAIL,
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
              metadataTitle: 'Page Not Found - Roman Jumatov',
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
              privacyOverview: {
                title: '1. Data Privacy at a Glance',
                generalInfoTitle: 'General Information',
                generalInfoDescription:
                  'Here you will find an overview of what happens to your personal data when you visit our website. Personal data is information that can be used to identify you personally. Detailed information on this can be found in this Privacy Policy.',
                dataCollectionTitle: 'Data Collection on This Website',
                responsiblePartyTitle: 'Who is responsible?',
                responsiblePartyDescription:
                  'The data processing on this website is carried out by the operator, Roman Jumatov. His contact details can be found in the section “Notice to the Responsible Party.”',
                dataCaptureTitle: 'How do we collect your data?',
                dataDirectCaptureText:
                  'Some of the data is collected when you provide it directly to us, for example, by entering it into a contact form.',
                dataAutomaticCaptureText:
                  'Other data is collected automatically or with your consent when you visit the website through our IT systems, such as technical data like your browser, operating system, or the time of page access.',
                dataPurposeTitle: 'What do we use your data for?',
                dataPurposeDescription:
                  'Some of the data is used to ensure the error-free provision of the website. Other data may be used to analyze user behavior. If you make inquiries or initiate contracts via the website, we use the transmitted data for processing.',
                userRightsTitle: 'Your Rights',
                userRightsIntroText: 'You have the right to:',
                userRightsList: [
                  'Obtain information about the stored data and its use.',
                  'Request the correction or deletion of your data.',
                  'Withdraw consent to data processing at any time.',
                  'Request the restriction of data processing under certain circumstances.',
                  'File a complaint with a data protection supervisory authority.',
                ],
                userRightsContactText:
                  'For questions or concerns about data protection, you can contact us at any time.',
                analysisToolsTitle: 'Analytic Tools and Third-Party Tools',
                analysisToolsIntroText:
                  'When visiting this website, your browsing behavior may be statistically evaluated. This is done primarily with analysis programs.',
                analysisToolsDetailsText:
                  'Detailed information on this can be found further down in this Privacy Policy.',
              },
              hosting: {
                title: '2. Hosting',
                netlifyTitle: 'Netlify',
                netlifyHostingInfo:
                  'Our website is hosted by Netlify. The provider is Netlify Inc., 2325 3rd Street, Suite 29, San Francisco, CA 94104, USA.',
                netlifyDataProcessing:
                  'Netlify processes personal data in the USA as well. The company is a participant in the EU-US Data Privacy Framework. This framework governs the secure and privacy-compliant transfer of data from the EU to the USA. Further information on this can be found at',
                netlifyDataProcessingLink: MOCK_URL,
                netlifyContractualClauses:
                  'Additionally, Netlify uses standard contractual clauses in accordance with Art. 46(2) and (3) of the GDPR. These model contracts, provided by the EU Commission, ensure that your data meets European data protection standards even in third countries such as the USA. The relevant decision by the EU Commission can be found here',
                netlifyContractualClausesLink: MOCK_URL,
                netlifyDataProcessingAgreement:
                  'Netlify offers a Data Processing Agreement in accordance with Art. 28 of the GDPR, based on the EU standard contractual clauses. Further information on this can be found at',
                netlifyDataProcessingAgreementLink: MOCK_URL,
                netlifyPrivacyPolicy:
                  'Details regarding the processing of your data by Netlify can be found in Netlify’s Privacy Policy at',
                netlifyPrivacyPolicyLink: MOCK_URL,
              },
              notesAndLegalInformation: {
                title: '3. General Notes and Mandatory Information',
                dataProtectionTitle: 'Data Protection',
                dataProtectionIntro:
                  'The protection of your personal data is important to us. We treat your personal data confidentially and in accordance with the legal data protection regulations as well as this Privacy Policy.',
                dataProtectionDetails:
                  'When you visit this website, various personal data will be collected. Personal data refers to information that can be used to identify you. This Privacy Policy explains what data we collect, how we use it, and for what purpose.',
                dataProtectionNotice:
                  'Please note that data transmission over the Internet (e.g., communication via email) may have security vulnerabilities. Complete protection of data from access by third parties is not possible.',
                responsiblePartyTitle:
                  'Information About the Responsible Party',
                responsiblePartyIntro:
                  'The responsible party for data processing on this website is:',
                responsiblePartyName: 'Roman Jumatov',
                responsiblePartyRole: 'Freelance Software Developer',
                responsiblePartyStreet: 'Main Street 25',
                responsiblePartyPostalCode: '12345',
                responsiblePartyCity: 'River Town',
                responsiblePartyEmailLabel: 'Email:',
                responsiblePartyEmail: MOCK_EMAIL,
                responsiblePartyInfo:
                  'The responsible party is the individual or entity that determines the purposes and means of processing personal data, either alone or jointly with others.',
                dataStorageDurationTitle: 'Storage Duration',
                dataStorageDurationDetails:
                  'Unless otherwise specified in this Privacy Policy, we store your personal data only as long as necessary to fulfill the purpose for which it was collected. Once the data is no longer required or you revoke your consent, we delete it, provided there are no statutory retention obligations to the contrary.',
                legalBasisTitle: 'Legal Basis for Data Processing',
                legalBasisIntro:
                  'The processing of your personal data is based on the following legal grounds under the GDPR, depending on the context:',
                legalBasisList: [
                  'Art. 6 (1) (a) GDPR: Consent (e.g., for cookies).',
                  'Art. 6 (1) (b) GDPR: Fulfillment of a contract or pre-contractual measures.',
                  'Art. 6 (1) (c) GDPR: Compliance with a legal obligation.',
                  'Art. 6 (1) (f) GDPR: Protection of legitimate interests.',
                ],
                legalBasisDetails:
                  'Details about these legal bases can be found in the respective sections of this Privacy Policy.',
                userRightsTitle: 'Your Rights',
                userRightsIntro: 'You have the following rights at any time:',
                userRightsList: [
                  'Right to access (Art. 15 GDPR)',
                  'Right to rectification (Art. 16 GDPR)',
                  'Right to erasure (Art. 17 GDPR)',
                  'Right to restrict processing (Art. 18 GDPR)',
                  'Right to data portability (Art. 20 GDPR)',
                  'Right to object (Art. 21 GDPR)',
                ],
                complaintRightTitle: 'Right to Lodge a Complaint',
                complaintRightDetails:
                  'If you believe that your data is being processed unlawfully, you have the right to file a complaint with a data protection authority. The competent authority is typically the one in your place of residence or workplace.',
                sslTlsEncryptionTitle: 'SSL/TLS Encryption',
                sslTlsEncryptionIntro:
                  'This website uses SSL/TLS encryption to protect your data during transmission. You can recognize an encrypted connection by the “https://” in the browser’s address bar and the padlock icon.',
                sslTlsEncryptionDetails:
                  'When SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.',
              },
              dataCollection: {
                title: '4. Data Collection on This Website',
                cloudflareTitle: 'Cloudflare Web Analytics',
                cloudflareIntro:
                  'We use the Cloudflare Web Analytics tool for our website. The service provider is Cloudflare Inc., 101 Townsend St., San Francisco, CA 94107, USA.',
                cloudflareDetails:
                  'Cloudflare processes data, including in the USA, and is a participant in the EU-US Data Privacy Framework, which regulates the secure and privacy-compliant transfer of personal data. Additionally, Standard Contractual Clauses in accordance with Art. 46 of the GDPR are used to ensure European data protection standards when processing data in third countries.',
                cloudflarePrivacyPolicy:
                  'For more information, please refer to Cloudflare’s Privacy Policy:',
                cloudflarePrivacyPolicyLink: MOCK_URL,
                contactFormTitle: 'Contact Form and Email Inquiries',
                contactFormIntro:
                  'Using the contact form and sending emails require the provision of personal data (e.g., name, email address, message). This data is only stored for the purpose of processing your inquiry and will not be shared without your consent.',
                contactFormSupabase:
                  'To process contact inquiries via the contact form, we use the database infrastructure of Supabase Inc., 970 Toa Payoh N, #07-04, Singapore. Data may be transferred to Singapore, and the data transfer to a third country (Singapore) is carried out based on the Standard Contractual Clauses of the EU in accordance with Art. 46 (2) (c) of the GDPR.',
                contactFormSupabasePrivacyPolicy:
                  'Detailed information about Supabase’s privacy practices can be found at:',
                contactFormSupabasePrivacyPolicyLink: MOCK_URL,
                legalBasisTitle: 'Legal Basis',
                legalBasisList: [
                  'Art. 6 (1) (b) GDPR: For the performance of a contract or pre-contractual measures.',
                  'Art. 6 (1) (f) GDPR: Legitimate interest in efficient processing.',
                  'Art. 6 (1) (a) GDPR: Based on your consent (which can be revoked).',
                ],
                storageDurationTitle: 'Storage Duration',
                storageDurationDetails:
                  'The data will be stored until the purpose is fulfilled or you request its deletion. Legal retention periods remain unaffected.',
              },
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
