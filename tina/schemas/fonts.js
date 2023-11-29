import { createFontField } from '../tinaUtilities';

export const fontSchema = {
  // Group for font settings
  label: 'Fonts',
  name: 'fonts',
  component: 'group',
  type: 'object',
  description: 'Configure the font settings for your theme.',
  fields: [
    createFontField('body', 'Body', 'Font for body text'),
    createFontField('heading', 'Heading', 'Font for headings'),
    createFontField('links', 'Links', 'Font for links'),
    createFontField('accent', 'Accent', 'Font for accents'),
  ],
};
