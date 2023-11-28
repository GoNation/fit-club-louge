const businessId = 'bzn-Dx3LNaHDT7K0ysN0zPzvhQ';
const poweredId = null;
const domain = 'https://castironchefnewhaven.com';
const iframeURL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11987.754274522009!2d-72.91847999999999!3d41.310199999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d9c9669109a1%3A0x1076f5642b7c2b47!2sCast%20Iron%20Chef%20Chop%20House%20%26%20Oyster%20Bar!5e0!3m2!1sen!2sus!4v1698072153081!5m2!1sen!2sus';
const iframe = `<iframe src="${iframeURL}" width="600" height="450" className="w-full h-full"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

const routes = [
  {
    name: 'Home', // name of the page in the navbar.
    path: '/', // path of the page. If not provided, the name will be used as the path slugified.
    pageDescription:
      'Experience the ultimate steakhouse with a twist. Indulge in our masterfully prepared dishes, featuring the finest ingredients and unique cast iron cooking technique.',
    customPageHero: 'home-pagehero',
    hidePageHero: true,
    hidden: true,
    isPrimaryCalledToAction: false,
    fetchingStrategy: 'static',
    dataTypes: ['stories', 'shout', 'poweredImages', 'about'], // types of data for the home page
    layout: 'homepageLayout',
  },
  {
    name: 'About',
    path: '/about',
    pageDescription:
      'Learn about our unique cast iron cooking technique, our commitment to the finest ingredients, and meet our Executive Chef.',
    customPageHero: 'about-pagehero',
    customPageHeroTitle: 'About The Cast Iron Chef Chop House',
    visiblePageDescription:
      'Discover the story of how we bring sizzling perfection to every plate.',
    fetchingStrategy: 'static',
    dataTypes: ['stories', 'shout', 'poweredImages', 'about'], // types of data for the home page
    tag: 'discover',
    layout: 'aboutLayout',
  },
  {
    name: 'Menu',
    path: '/menu',
    pageDescription:
      'Explore our diverse menu of hand-cut steaks, fresh seafood, and mouthwatering desserts, all prepared with finesse and the finest ingredients.',
    customPageHero: 'menu-pagehero',
    customPageHeroTitle: 'Our Menu',
    visiblePageDescription:
      'Savor the exceptional flavors curated by our master chefs.',
    fetchingStrategy: 'static',
    dataTypes: ['stories', 'shout', 'poweredImages', 'about', 'menuInventory'], // types of data for the home page
    tag: 'explore',
    layout: 'menuLayout',
    poweredListNumber: 1,
  },
  {
    name: 'Private Dining',
    path: '/private-dining',
    pageDescription:
      'Book a private dining experience in a sophisticated setting, perfect for any celebration or corporate event.',
    customPageHero: 'private-dining-pagehero',
    customPageHeroTitle: 'Private Dining',
    visiblePageDescription:
      'Exclusive dining rooms for your special occasions.',
    fetchingStrategy: 'static',
    dataTypes: ['stories', 'shout', 'poweredImages', 'about'], // types of data for the home page
    tag: 'explore',
    layout: 'privateDiningLayout',
  },
  {
    name: 'Gallery',
    path: '/gallery',
    pageDescription:
      'Browse our gallery to see our culinary masterpieces, vibrant dining atmosphere, and happy patrons.',
    customPageHero: 'gallery-pagehero',
    customPageHeroTitle: 'Gallery',
    visiblePageDescription: 'A picture is worth a thousand flavors.',
    fetchingStrategy: 'static',
    dataTypes: [
      'stories',
      'shout',
      'poweredImages',
      'about',
      'menuInventory',
      'gallery',
    ], // types of data for the home page
    tag: 'explore',
    layout: 'galleryLayout',
  },
  {
    name: 'Careers',
    path: '/careers',
    pageDescription:
      'Join our team of culinary professionals, passionate about delivering an unparalleled dining experience.',
    customPageHero: 'careers-pagehero',
    customPageHeroTitle: 'Careers',
    visiblePageDescription: 'Your culinary career starts here.',
    fetchingStrategy: 'static',
    dataTypes: ['stories', 'shout', 'poweredImages', 'about', 'menuInventory'], // types of data for the home page
    tag: 'engage',
    layout: 'careersLayout',
  },
  {
    name: 'Press',
    path: '/press',
    pageDescription:
      'Read about us in the news, see our awards, and watch interviews with our Executive Chef.',
    customPageHero: 'press-pagehero',
    customPageHeroTitle: 'Press',
    visiblePageDescription: "We're making headlines.",
    fetchingStrategy: 'static',
    dataTypes: ['stories', 'shout', 'poweredImages', 'about', 'menuInventory'], // types of data for the home page
    tag: 'explore',
    layout: 'pressLayout',
  },
  {
    name: 'Contact Us',
    path: '/contact',
    pageDescription:
      "Reach out for reservations, inquiries, or feedback. We'd love to hear from you.",
    customPageHero: 'contact-pagehero',
    customPageHeroTitle: 'Contact Us',
    visiblePageDescription: 'Stay in touch with us.',
    fetchingStrategy: 'static',
    dataTypes: ['stories', 'shout', 'poweredImages', 'about', 'menuInventory'], // types of data for the home page
    tag: 'engage',
    layout: 'contactLayout',
  },
  {
    name: 'Book Now',
    url: 'https://www.opentable.com/restref/client/?restref=1062781&rid=1062781&corrid=17518e2f-fb68-48bb-861c-3b524841bc61',
    tag: 'engage',
  },
  {
    name: 'Certificates',
    path: '/certificates',
    pageDescription:
      'Surprise your loved ones or colleagues with a gift of unparalleled dining. Explore our certificate options for an unforgettable culinary experience.',
    customPageHero: 'certificates-pagehero',
    customPageHeroTitle: 'Certificates',
    fetchingStrategy: 'static',
    visiblePageDescription: 'Gift the ultimate dining experience.',
    dataTypes: ['stories', 'shout', 'poweredImages', 'about', 'menuInventory'], // types of data for the home page
    tag: 'engage',
  },
  {
    name: 'Dining Guidelines',
    path: '/dining-guidelines',
    pageDescription:
      'Familiarize yourself with our dining guidelines and attire standards for an enjoyable experience.',
    customPageHero: 'dining-guidelines-pagehero',
    customPageHeroTitle: 'Dining Guidelines',
    visiblePageDescription:
      'Creating a comfortable atmosphere for all our guests.',
    fetchingStrategy: 'static',
    dataTypes: ['stories', 'shout', 'poweredImages', 'about', 'menuInventory'], // types of data for the home page
    layout: 'diningGuidelinesLayout',
  },
];

const filteredOutGalleryImages = [
  'Website photos',
  'website photos',
  'Website Photos',
  'shout',
  'shouts',
  'Shout',
  'Shouts',
];

const hardCodedAddressText = '';
const hardCodedAddressURL = '';

module.exports = {
  businessId,
  poweredId,
  domain,
  routes,
  iframe,
  filteredOutGalleryImages,
  hardCodedAddressText,
  hardCodedAddressURL, // todo re-add functionality for hardcded address stuff.
};
