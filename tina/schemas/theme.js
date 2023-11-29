import {
  createColorField,
  createFontField,
  COLOR_FORMAT,
  WIDGET,
  spacingSchema,
  shadowSchema,
} from '../tinaUtilities';

import { buttonBaseStyleSchema, buttonSchema } from './button';
import { modalSchema } from './modal';
import { headingSchema } from './heading';
import { colorSchema } from './colors';
import { fontSchema } from './fonts';
import { globalStylesSchema } from './globalStyles';

const themeSchema = {
  label: 'Theme',
  type: 'object',
  name: 'theme',
  fields: [
    colorSchema,
    fontSchema,
    globalStylesSchema,
    buttonSchema,
    modalSchema,
    headingSchema,
    // todo not sure how we'll use this yet (design tokens)
    // {
    //   label: 'Design Tokens',
    //   name: 'designTokens',
    //   component: 'group',
    //   type: 'object',
    //   description: 'Configure the design tokens for your theme.',
    //   fields: [spacingSchema, shadowSchema],
    // },
  ],
};

// Apply color format and widget settings to all color fields
themeSchema.fields[0].fields = themeSchema.fields[0].fields.map(field => ({
  ...field,
  ui: { ...field.ui, colorFormat: COLOR_FORMAT, widget: WIDGET },
}));

export default themeSchema;
