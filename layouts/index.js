import { hpSideBySideImageConfig } from 'theme/hpSideBySideImageConfig';
import { heroConfig } from 'theme/heroConfig';
import { parallaxContentConfig } from 'theme/parallaxContentConfig';
import shadowyContentContainerWithBg from 'theme/largeContentContainerConfig';

const homepageLayout = [];

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

export {
  homepageLayout,
  //   aboutLayout,
  //   menuLayout,
  //   privateDiningLayout,
  galleryLayout,
  //   careersLayout,
  //   pressLayout,
  //   contactLayout,
  //   diningGuidelinesLayout,
  //   nomineesLayout,
  //   eventsLayout,
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
