import { hpSideBySideImageConfig } from 'theme/hpSideBySideImageConfig';
import { heroConfig } from 'theme/heroConfig';
import { parallaxContentConfig } from 'theme/parallaxContentConfig';
import shadowyContentContainerWithBg from 'theme/largeContentContainerConfig';

const homepageLayout = [
  {
    type: 'Hero',
    storyName: 'Homepage Hero',
    config: {
      ...heroConfig,
      showLogo: false,
    },
  },
  {
    type: 'SideBySideImage',
    storyName: 'Homepage story 1',
    config: {
      ...hpSideBySideImageConfig,
    },
  },

  {
    type: 'GridBoxes',
    storyName: ['homepage story 3', 'homepage story 4', 'homepage story 5'],
  },
  {
    type: 'LargeContentContainer',
    storyName: 'Homepage story 6',
    config: {
      styles: shadowyContentContainerWithBg,
    },
  },
  {
    type: 'SideBySideImage',
    storyName: 'Homepage story 7',
    config: {
      ...hpSideBySideImageConfig,
      reversed: false,
    },
  },
  {
    type: 'SideBySideImage',
    storyName: 'Homepage story 8',
    config: {
      ...hpSideBySideImageConfig,
    },
  },
  {
    type: 'SideBySideImage',
    storyName: 'Homepage story 9',
    config: {
      ...hpSideBySideImageConfig,
      reversed: false,
    },
  },
  {
    type: 'LargeContentContainer',
    storyName: 'Homepage story 10',
    config: {
      styles: shadowyContentContainerWithBg,
    },
  },
];

const aboutLayout = [
  {
    type: 'BasicAbout',
    // storyName: 'About page 1',
    // config: {
    //   ...hpSideBySideImageConfig,
    // },
  },
  {
    type: 'SideBySideImage',
    storyName: 'about us page story',
    config: {
      ...hpSideBySideImageConfig,
      reversed: false,
    },
  },
];

const menuLayout = [
  {
    type: 'menu',
    poweredList: 1, // If left blank, we get all of them.
    config: null,
  },
];

const galleryLayout = [
  {
    type: 'AlbumGallery',
    config: {
      styles: {
        container: {
          p: 4,
          bg: 'light',
        },
        grid: {
          gap: 6,
          templateColumns: {
            base: 'repeat(1, 1fr)',
            md: 'repeat(auto-fit, minmax(250px, 1fr))',
          },
          autoRows: '200px',
          autoFlow: 'dense',
        },
        box: {
          boxShadow: 'lg',
          bg: 'white',
          p: 4,
        },
        image: {
          objectFit: 'cover',
          height: '100%',
          width: '100%',
        },
      },
    },
  },
];
const contactLayout = [
  {
    type: 'ContactPageLayout',
    config: {
      formName: 'contact',
      title: 'Get In Touch',
      fields: [
        { type: 'text', name: 'Name', placeholder: 'Name' },
        { type: 'email', name: 'Email', placeholder: 'Email' },
        { type: 'tel', name: 'Phone', placeholder: 'Phone' },
        { type: 'text', name: 'Date of Event', placeholder: 'Date of Event' },
        {
          type: 'text',
          name: 'Number of People',
          placeholder: 'Number of People',
        },
        { type: 'textarea', name: 'Message', placeholder: 'Your Message' },
      ],
    },
  },
];

const eventsLayout = [
  {
    type: 'Events',
  },
];

const kidsPartiesLayout = [
  {
    type: 'SideBySideImage',
    storyName: 'kids parties',
    config: {
      ...hpSideBySideImageConfig,
      reversed: false,
      contentConfig: {
        ...hpSideBySideImageConfig.contentConfig,
        bodyContainerStyle: {
          ...hpSideBySideImageConfig.contentConfig.bodyContainerStyle,
          leading: 'loose',
          fontSize: ['lg', 'xl'],
        },
      },
    },
  },
  {
    type: 'ContactPageLayout',
    config: {
      formName: 'kidsParties',
      title: 'Get In Touch',
      fields: [
        { type: 'text', name: 'Name', placeholder: 'Name' },
        { type: 'email', name: 'Email', placeholder: 'Email' },
        { type: 'tel', name: 'Phone', placeholder: 'Phone' },
        { type: 'text', name: 'Date of Event', placeholder: 'Date of Event' },
        {
          type: 'text',
          name: 'Number of People',
          placeholder: 'Number of People',
        },
        { type: 'textarea', name: 'Message', placeholder: 'Your Message' },
      ],
    },
  },
];

const corporateEventsLayout = [
  {
    type: 'SideBySideImage',
    storyName: 'corporate page',
    config: {
      ...hpSideBySideImageConfig,
      reversed: false,
      contentConfig: {
        ...hpSideBySideImageConfig.contentConfig,
        bodyContainerStyle: {
          ...hpSideBySideImageConfig.contentConfig.bodyContainerStyle,
          leading: 'loose',
          fontSize: ['lg', 'xl'],
        },
      },
    },
  },
  {
    type: 'ContactPageLayout',
    config: {
      formName: 'corporateParties',
      title: 'Get In Touch',
      fields: [
        { type: 'text', name: 'Name', placeholder: 'Name' },
        { type: 'email', name: 'Email', placeholder: 'Email' },
        { type: 'tel', name: 'Phone', placeholder: 'Phone' },
        { type: 'text', name: 'Date of Event', placeholder: 'Date of Event' },
        {
          type: 'text',
          name: 'Number of People',
          placeholder: 'Number of People',
        },
        { type: 'textarea', name: 'Message', placeholder: 'Your Message' },
      ],
    },
  },
];

const networkingEventsLayout = [
  {
    type: 'SideBySideImage',
    storyName: 'networking page',
    config: {
      ...hpSideBySideImageConfig,
      reversed: false,
      contentConfig: {
        ...hpSideBySideImageConfig.contentConfig,
        bodyContainerStyle: {
          ...hpSideBySideImageConfig.contentConfig.bodyContainerStyle,
          leading: 'loose',
          fontSize: ['lg', 'xl'],
        },
      },
    },
  },
  {
    type: 'ContactPageLayout',
    config: {
      formName: 'networking',
      title: 'Get In Touch',
      fields: [
        { type: 'text', name: 'Name', placeholder: 'Name' },
        { type: 'email', name: 'Email', placeholder: 'Email' },
        { type: 'tel', name: 'Phone', placeholder: 'Phone' },
        { type: 'text', name: 'Date of Event', placeholder: 'Date of Event' },
        {
          type: 'text',
          name: 'Number of People',
          placeholder: 'Number of People',
        },
        { type: 'textarea', name: 'Message', placeholder: 'Your Message' },
      ],
    },
  },
];

export {
  homepageLayout,
  //   aboutLayout,
  //   menuLayout,
  //   privateDiningLayout,
  galleryLayout,
  contactLayout,
  aboutLayout,
  //   careersLayout,
  //   pressLayout,
  //   contactLayout,
  //   diningGuidelinesLayout,
  //   nomineesLayout,
  eventsLayout,
  kidsPartiesLayout,
  corporateEventsLayout,
  networkingEventsLayout,
  //   sponsorsLayout,
};

// const privateDiningLayout = [
//   {
//     type: 'LargeContentContainer',
//     storyName: 'private dining page 1',
//     config: {
//       styles: shadowyContentContainerWithBg,
//     },
//   },
//   {
//     type: 'SideBySideImage',
//     storyName: 'private dining page 2',
//     config: {
//       ...hpSideBySideImageConfig,
//     },
//   },
//   {
//     type: 'SideBySideImage',
//     storyName: 'private dining page 3',
//     config: {
//       ...hpSideBySideImageConfig,
//     },
//   },
// ];
