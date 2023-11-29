import { createColorField } from '../tinaUtilities';

const colorFields = [
  'Primary',
  'Secondary',
  'Accent',
  'Dark',
  'Light',
  'Background',
].map(variant => createColorField(`${variant} Color`, variant.toLowerCase()));

export const colorSchema = {
  label: 'Colors',
  name: 'colors',
  component: 'group',
  type: 'object',
  description: 'Configure the primary color palette for your theme.',
  fields: colorFields,
};
