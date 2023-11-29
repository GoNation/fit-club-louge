import { hpSideBySideImageConfig } from 'theme/hpSideBySideImageConfig';
import { heroConfig } from 'theme/heroConfig';
import { parallaxContentConfig } from 'theme/parallaxContentConfig';
import shadowyContentContainerWithBg from 'theme/largeContentContainerConfig';

const homepageLayout = [
  // Modals & Widgets
  //   {
  //     type: 'CustomModal',
  //     storyName: 'popup',
  //     config: {
  //       alwaysDisplay: false, // Use this and every time it mounts on this page, it will open.
  //       //   Create a field for expirationDate. If this exists and is in the past, don't open.
  //       modalKey: 'hpModal',
  //       expirationDate: '2023-10-30',
  //       hideForGoodOnClose: true,
  //     },
  //   },

  // UI Components
  {
    type: 'Hero',
    storyName: 'hero',
    eventId: 'evt-Ib3OHensSsihVOlVKiRWwQ',
    showLogo: false,
    shouldShowPhoneAndDirections: false,
    config: heroConfig,
  },
  //   {
  //     type: 'CTAGrid',
  //     storyName: 'cta-grid',
  //     config: {},
  //   },
  //   {
  //     type: 'MultiStoryHero',
  //     storyName: ['Mecha', `Pellicci's`, 'Shady'],
  //     config: {},
  //   },
  //   {
  //     type: 'LargeContentContainer',
  //     storyName: '',
  //     config: {
  //       styles: {
  //         container: {
  //           bg: 'dark',
  //           backgroundImage: `url("https://www.transparenttextures.com/patterns/black-lozenge.png")`,
  //           pt: [8, 12],
  //         },
  //         contentBox: {
  //           p: 8,
  //           mx: 4,
  //           color: 'white',
  //           position: 'relative',
  //           bg: 'dark',
  //           border: 'white 1px solid',
  //         },
  //       },
  //     },
  //   },
  //   {
  //     type: 'Instagram',
  //     config: {
  //       widgetId: 'e3e2dc061e7854139320a12ba88e6b66',
  //     },
  //   },
  //   {
  //     type: 'NFTShowcase',
  //     config: {
  //       businessId: 'bzn-aGKtaV_DQoio5F49wltPhQ',
  //       title: 'CRAZIES 2023 Nominees and Categories',
  //       subtitle: 'Meet the Culinary Masters Competing for Excellence.',
  //       pills: [
  //         'Restaurateurs of the Year',
  //         'Hospitality Hall of Fame',
  //         'Vendor of the Year',
  //         'Caterer of the Year',
  //         'Server of the Year',
  //         'Bartender of the Year',
  //         'Pastry Chef of the Year',
  //         'Chef of the Year',
  //         "People's Choice",
  //         'Restaurant Newcomer',
  //         'Litchfield County Restaurant of the Year',
  //         'Fairfield County Restaurant of the Year',
  //         'Hartford County Restaurant of the Year',
  //         'New Haven County Restaurant of the Year',
  //         'Tolland County Restaurant of the Year',
  //         'Middlesex County Restaurant of the Year',
  //         'Windham County Restaurant of the Year',
  //         'New London County Restaurant of the Year',
  //       ],
  //     },
  //   },
  //   {
  //     type: 'SideBySideImage',
  //     useShout: true,
  //     config: {
  //       ...hpSideBySideImageConfig,
  //       reversed: false,
  //     },
  //   },
  //   {
  //     type: 'SideBySideImage',
  //     storyName: 'Homepage story 1',
  //     config: {
  //       ...hpSideBySideImageConfig,
  //     },
  //   },
  //   {
  //     type: 'LargeContentContainer',
  //     storyName: 'Homepages story 2',
  //     config: {
  //       styles: shadowyContentContainerWithBg,
  //     },
  //   },
  //   {
  //     type: 'GridBoxes',
  //     storyName: ['homepage story 3', 'homepage story 4', 'homepage story 5'],
  //   },
  //   {
  //     type: 'LargeContentContainer',
  //     storyName: 'Homepage story 6',
  //     config: {
  //       styles: shadowyContentContainerWithBg,
  //     },
  //   },
  //   {
  //     type: 'SideBySideImage',
  //     storyName: 'Homepage story 7',
  //     config: hpSideBySideImageConfig,
  //   },
  //   {
  //     type: 'SideBySideImage',
  //     storyName: 'Homepage story 8',
  //     config: {
  //       ...hpSideBySideImageConfig,
  //       reversed: false,
  //       sideBySideImageContainerStyle: {
  //         ...hpSideBySideImageConfig.sideBySideImageContainerStyle,
  //         py: 1,
  //         pb: 12,
  //       },
  //       contentConfig: {
  //         ...hpSideBySideImageConfig.contentConfig,
  //         containerStyle: {
  //           ...hpSideBySideImageConfig.contentConfig.containerStyle,
  //           mt: [0, 12, 0],
  //         },
  //       },
  //     },
  //   },
];

const nomineesLayout = [
  {
    type: 'NFTShowcase',
    config: {
      businessId: 'bzn-aGKtaV_DQoio5F49wltPhQ',
      title: 'CRAZIES 2023 Nominees and Categories',
      subtitle: 'Meet the Culinary Masters Competing for Excellence.',
      pills: [
        'Restaurateurs of the Year',
        'Hospitality Hall of Fame',
        'Vendor of the Year',
        'Caterer of the Year',
        'Server of the Year',
        'Bartender of the Year',
        'Pastry Chef of the Year',
        'Chef of the Year',
        "People's Choice",
        'Restaurant Newcomer',
        'Litchfield County Restaurant of the Year',
        'Fairfield County Restaurant of the Year',
        'Hartford County Restaurant of the Year',
        'New Haven County Restaurant of the Year',
        'Tolland County Restaurant of the Year',
        'Middlesex County Restaurant of the Year',
        'Windham County Restaurant of the Year',
        'New London County Restaurant of the Year',
      ],
    },
  },
];

const aboutLayout = [
  {
    type: 'SideBySideImage',
    storyName: 'About page 1',
    config: {
      ...hpSideBySideImageConfig,
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

const privateDiningLayout = [
  {
    type: 'LargeContentContainer',
    storyName: 'private dining page 1',
    config: {
      styles: shadowyContentContainerWithBg,
    },
  },
  {
    type: 'SideBySideImage',
    storyName: 'private dining page 2',
    config: {
      ...hpSideBySideImageConfig,
    },
  },
  {
    type: 'SideBySideImage',
    storyName: 'private dining page 3',
    config: {
      ...hpSideBySideImageConfig,
    },
  },
];

const galleryLayout = [
  {
    type: 'AlbumGallery',
    config: {
      styles: {
        container: {
          p: 4,
          bg: 'dark',
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

const largeContentContainerClean = {
  container: {
    bg: 'dark',
    backgroundImage: `url("https://www.transparenttextures.com/patterns/black-lozenge.png")`,
    pt: [8, 12],
  },
  contentBox: {
    p: 8,
    mx: 4,
    color: 'white',
    position: 'relative',
    bg: 'dark',
    border: 'white 1px solid',
  },
  gradientBg: {
    //   bg: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent)',
  },
  navPosition: {},
  heading: {
    mb: [4, 8],
    fontSize: { base: '3xl', md: '3xl' },
    fontFamily: 'heading',
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: { base: 'xl', lg: '2xl' },
    fontWeight: 'bold',
  },
  body: {
    mx: 'auto',
    textAlign: 'center',
    color: 'white',
    maxW: '2xl',
  },
  cta: {
    unset: true,
  },
};

const largeContentContainerCleanLeftAligned = {
  ...largeContentContainerClean,
  contentBox: {
    ...largeContentContainerClean.contentBox,
    textAlign: 'left!important',
    maxW: '2xl',
    mx: 'auto',
  },
  heading: {
    textAlign: 'left',
    mb: 3,
  },
  subtitle: {
    textAlign: 'left',
  },
  body: {
    ...largeContentContainerClean.body,
    textAlign: 'left',
    h2: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      marginTop: '.5rem',
      marginBottom: '.5rem',
    },
  },
};
const careersLayout = [
  {
    type: 'LargeContentContainer',
    storyName: 'Careers page 1',
    config: {
      styles: {
        ...largeContentContainerCleanLeftAligned,
      },
    },
  },
  {
    type: 'LargeContentContainer',
    // storyName: ['', ''],
    tagName: 'career',
    config: {
      styles: {
        ...largeContentContainerCleanLeftAligned,
        container: {
          ...largeContentContainerCleanLeftAligned.container,
        },
        innerBox: {
          pb: 12,
        },
      },
    },
  },
  {
    type: 'CustomForm',
    config: {
      formName: 'careers',
      title: 'Careers Form',
      fields: [
        { type: 'text', name: 'Name', placeholder: 'Name' },
        { type: 'tel', name: 'Phone', placeholder: 'Phone' },
        { type: 'email', name: 'Email', placeholder: 'Email' },
        { type: 'textarea', name: 'Message', placeholder: 'Your Message' },
        { type: 'file', name: 'Resume', placeholder: 'Upload Resume' },
      ],
      styles: {},
    },
  },
];

const pressLayout = [
  {
    type: 'PressGrid',
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
        { type: 'tel', name: 'Phone', placeholder: 'Phone' },
        { type: 'email', name: 'Email', placeholder: 'Email' },
        { type: 'textarea', name: 'Message', placeholder: 'Your Message' },
      ],
    },
  },
];

const diningGuidelinesLayout = [
  {
    type: 'LargeContentContainer',
    storyName: 'dining guidelines page 1',
    config: {
      styles: largeContentContainerCleanLeftAligned,
    },
  },
  {
    type: 'LargeContentContainer',
    storyName: 'dining guidelines page 2',
    config: {
      styles: {
        ...largeContentContainerCleanLeftAligned,
        container: {
          ...largeContentContainerCleanLeftAligned.container,
          pb: 24,
        },
      },
    },
  },
];

const eventsLayout = [
  {
    type: 'Events',
  },
];

const sponsorsLayout = [
  {
    type: 'Sponsors',
  },
];

export {
  homepageLayout,
  aboutLayout,
  menuLayout,
  privateDiningLayout,
  galleryLayout,
  careersLayout,
  pressLayout,
  contactLayout,
  diningGuidelinesLayout,
  nomineesLayout,
  eventsLayout,
  sponsorsLayout,
};
