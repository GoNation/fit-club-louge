import themeSchema from './theme';

const siteConfigSchema = {
  name: 'siteConfig',
  label: 'Site Configuration',
  path: 'content/config',
  fileName: 'siteConfig',
  format: 'json',
  fields: [
    {
      type: 'string',
      name: 'businessId',
      label: 'Business ID (Required)',
      required: true,
      description:
        'This is the GoNationID of the business. Can be found at https://www.gonation.com/',
    },
    {
      ...themeSchema,
    },
    {
      type: 'string',
      name: 'poweredId',
      label: 'Powered ID',
      description: `For legacy sites (around pre 2013). These are ID's that don't have biz in front of it.`,
    },
    {
      type: 'string',
      name: 'domain',
      label: 'Website Domain',
      description:
        'The full domain of the website. Ex: https://www.gonationsites.com. For SEO purposes only.',
    },
    {
      type: 'string',
      name: 'iframeURL',
      label: 'Iframe URL',
      description:
        'Can be retrieved from google. Looks like: https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11987.754274522009!2d-72.91847999999999!3d41.310199999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768......',
    },
    {
      type: 'string',
      name: 'filteredOutGalleryImages',
      label: 'Filtered Out Gallery Images',
      list: true,
      // Add default values to be "website photos", and "shout"
      defaultItem: ['1', '2'],
    },
    // {
    //   type: 'string',
    //   name: 'hardCodedAddressText',
    //   label: 'Hard Coded Address Text',
    // },
    // {
    //   type: 'string',
    //   name: 'hardCodedAddressURL',
    //   label: 'Hard Coded Address URL',
    // },
    // ... add other fields in a similar manner

    {
      type: 'object',
      name: 'navigationSettings',
      label: 'Additional Navigation Settings',
      component: 'group',
      fields: [
        {
          type: 'boolean',
          name: 'displayFixedBarCTA',
          label: 'Display Fixed Bar CTA',
          description:
            'Display fixed bar CTA. This is a thin CTA clickable bar above the navigation.',
        },
        {
          type: 'string',
          name: 'storyName',
          label: 'Story Name',
          description:
            'The name of the story you want to be displayed. If Display Fixed Bar CTA is true, this is required.',
        },
        {
          type: 'string',
          name: 'label',
          label: 'CTA Label',
          description:
            'The actual text of what will be displayed for the CTA button.',
        },
        {
          type: 'string',
          name: 'url',
          label: 'CTA URL',
          description: 'The URL of the CTA button.',
        },
      ],
    },

    {
      type: 'object',
      name: 'routes',
      label: 'Routes',
      list: true,
      ui: {
        itemProps: item => {
          return {
            label: item?.name,
          };
        },
      },
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Name',
          description: 'Name of the page in the navbar.',
          // Make this the title
        },
        {
          type: 'string',
          name: 'path',
          label: 'Path',
          description:
            'Path of the page. If not provided, the name will be used as the path slugified.',
        },
        {
          type: 'string',
          name: 'pageDescription',
          label: 'Page Description',
          description: 'Description of the page for SEO purposes.',
          //   make a max character length of 160 characters
          ui: {
            validate: (value, data) => {
              if (value?.length > 180) {
                return 'Page description must be less than 160 characters';
              }
            },
          },
        },
        {
          type: 'string',
          name: 'customPageHero',
          label: 'Custom Page Hero',
          description: 'Custom page hero image',
        },
        {
          type: 'boolean',
          name: 'hidePageHero',
          label: 'Hide Page Hero',
          description:
            'Whether or not we should hide the page hero. Defaults to false. Normally we will set this to false if homepage, assuming we are using a more custom hero component.',
        },
        {
          type: 'boolean',
          name: 'hidden',
          label: 'Is hidden in the navigation',
          description: `If true, the route will still exist, however it won't exist within the navigation.`,
        },
        {
          type: 'boolean',
          name: 'isPrimaryCalledToAction',
          label: 'Is Primary Called To Action',
          description: `If true, the route will be the primary CTA in the navbar. (special styles)`,
        },
        {
          type: 'string',
          name: 'fetchingStrategy',
          label: 'Fetching Strategy',
          component: 'select',
          options: [
            { label: 'Static', value: 'static' },
            { label: 'Server', value: 'server' },
          ],
          description:
            'Choose whether the fetching strategy is static or server-based. If nothing selected, we default to static. ',
          // defaults to static
        },
        {
          type: 'object',
          name: 'dataTypes',
          label: 'Data Types',
          component: 'group',
          fields: [
            {
              type: 'boolean',
              name: 'stories',
              label: 'Stories',
              description: 'Stories',
            },
            {
              type: 'boolean',
              name: 'shout',
              label: 'Shout',
              description: 'Shout',
            },
            {
              type: 'boolean',
              name: 'poweredImages',
              label: 'Powered Images',
              description: 'Powered Images',
            },
            {
              type: 'boolean',
              name: 'about',
              label: 'About',
              description: 'About',
            },
            {
              type: 'boolean',
              name: 'menuInventory',
              label: 'Menu Inventory',
              description: 'Menu Inventory',
            },
            {
              type: 'boolean',
              name: 'gallery',
              label: 'Gallery',
              description: 'Gallery',
            },
            {
              type: 'boolean',
              name: 'events',
              label: 'Events',
              description: 'Events',
            },
          ],
        },
        {
          type: 'string',
          name: 'layout',
          label: 'Layout',
          description:
            'Layout that will be referenced to get content for this page.',
        },
        {
          type: 'string',
          name: 'footerTag',
          label: 'Footer Tag (Optional)',
          description:
            'Tag to use for the footer. If not provided, we will use the tag from the first route.',
        },
        // ... define other properties for routes
      ],
    },
  ],
};

export default siteConfigSchema;
