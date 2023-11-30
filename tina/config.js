import { defineConfig } from 'tinacms';
import heroComponent from './schemas/hero';
import expandableShout from './schemas/expandableShout';
import largeContentContainer from './schemas/largeContentContainer';
import themeSchema from './schemas/theme';
import sideBySide from './schemas/sideBySide';
import siteConfigSchema from './schemas/siteConfig';

// Your hosting provider likely exposes this as an environment variable
const branch = 'fit-club-stray'; // chjange

export default defineConfig({
  branch,
  clientId: '8a4768d2-6f0e-4160-b74e-b425a2ea502e', // Get this from tina.io
  token: 'cb75190cd8beed546d39fe182cac682b8a049a3a', // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        label: 'Chakra Theme',
        name: 'theme',
        path: 'content/theme', // you can decide on the path, ensure it exists
        fields: themeSchema.fields,
        format: 'json', // I'm assuming you want to save the theme as a JSON
        create: false, // Allows creating the theme from the CMS if it doesn't exist
        extension: 'json', // Ensure the file is saved as a JSON file
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      siteConfigSchema,
      {
        name: 'pageLayouts',
        label: 'Page Layouts',
        path: 'content/layouts',
        fields: [
          {
            type: 'object',
            list: true,
            name: 'components',
            label: 'Components',
            templates: [
              heroComponent,
              sideBySide,
              expandableShout,
              largeContentContainer,
            ],
          },
        ],
      },
    ],
  },
});
