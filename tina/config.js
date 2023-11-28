import { defineConfig } from 'tinacms';
import heroComponent from './schemas/hero';
import expandableShout from './schemas/expandableShout';
import largeContentContainer from './schemas/largeContentContainer';
import themeSchema from './schemas/theme';
import sideBySide from './schemas/sideBySide';
import siteConfigSchema from './schemas/siteConfig';

// Your hosting provider likely exposes this as an environment variable
const branch = 'crazies+templating-branch';

export default defineConfig({
  branch,
  clientId: 'f13368c7-ddd0-4891-b907-2d27da3e9d36', // Get this from tina.io
  token: '66d7d25ea4af81d728adcfc01032e4bc02c4be54', // Get this from tina.io

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
        create: true, // Allows creating the theme from the CMS if it doesn't exist
        extension: 'json', // Ensure the file is saved as a JSON file
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
