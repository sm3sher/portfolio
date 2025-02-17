import { graphql, GraphQLHandler, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import {
  AboutContentDocument,
  ContactContentDocument,
  FooterContentDocument,
  HomeContentDocument,
  MainMetadataContentDocument,
  NavbarContentDocument,
  NotFoundContentDocument,
  ServiceBannerContentDocument,
  ServicesContentDocument,
} from '@/app/lib/contentful/generated/sdk';

const handlers: GraphQLHandler[] = [
  graphql.query(MainMetadataContentDocument, () =>
    HttpResponse.json({
      data: {
        metadataCollection: {
          items: [{ mainTitle: 'Roman Jumatov' }],
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
  graphql.query(HomeContentDocument, ({ variables }) =>
    HttpResponse.json({
      data: {
        homeCollection: {
          items: [
            {
              greeting:
                variables.locale === 'en'
                  ? "I'm Roman Jumatov"
                  : 'Ich bin Roman Jumatov',
            },
          ],
        },
      },
    }),
  ),
  graphql.query(ServiceBannerContentDocument, () =>
    HttpResponse.json({
      data: {
        servicesCollection: {
          items: [{ services: [] }],
        },
      },
    }),
  ),
  graphql.query(AboutContentDocument, () =>
    HttpResponse.json({
      data: {
        aboutCollection: {
          items: [{ title: 'About me' }],
        },
      },
    }),
  ),
  graphql.query(ServicesContentDocument, () =>
    HttpResponse.json({
      data: {
        servicesCollection: {
          items: [{ title: 'Selected services' }],
        },
      },
    }),
  ),
  graphql.query(ContactContentDocument, () =>
    HttpResponse.json({
      data: {
        contactCollection: {
          items: [{ title: 'Contact me' }],
        },
      },
    }),
  ),
  graphql.query(FooterContentDocument, () =>
    HttpResponse.json({
      data: {
        footerCollection: {
          items: [{ title: 'Roman Jumatov' }],
        },
      },
    }),
  ),
  graphql.query(NotFoundContentDocument, () =>
    HttpResponse.json({
      data: {
        notFoundCollection: {
          items: [{ title: '404 Not found' }],
        },
      },
    }),
  ),
];

export default setupServer(...handlers);
