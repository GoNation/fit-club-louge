import {
  createColorField,
  createFontField,
  COLOR_FORMAT,
  WIDGET,
} from '../tinaUtilities';

import { buttonBaseStyleSchema, buttonSchema } from './button';
import { modalSchema } from './modal';
import { headingSchema } from './heading';

const themeSchema = {
  label: 'Theme',
  type: 'object',
  name: 'theme',
  fields: [
    {
      // Group for color settings
      label: 'Colors',
      name: 'colors',
      component: 'group',
      type: 'object',
      fields: [
        'Primary',
        'Secondary',
        'Third',
        'Accent',
        'Dark',
        'Light',
        'Background',
      ].map(variant =>
        createColorField(`${variant} Color`, variant.toLowerCase())
      ),
    },
    {
      // Group for font settings
      label: 'Fonts',
      name: 'fonts',
      component: 'group',
      type: 'object',
      fields: [
        createFontField('body', 'Body', 'Font for body text'),
        createFontField('heading', 'Heading', 'Font for headings'),
        createFontField('links', 'Links', 'Font for links'),
        createFontField('accent', 'Accent', 'Font for accents'),
      ],
    },
    {
      // Group for style settings
      label: 'Styles',
      name: 'styles',
      component: 'group',
      type: 'object',
      fields: [
        {
          type: 'object',
          name: 'global',
          label: 'Global Styles',
          fields: [
            // Add specific style fields here
            {
              type: 'string',
              name: 'backgroundColor',
              label: 'Background Color',
              // You can reference a color from your color settings if needed
            },
          ],
        },
      ],
    },
    {
      label: 'Buttons',
      name: 'buttons',
      component: 'group',
      type: 'object',
      fields: [
        buttonBaseStyleSchema,
        {
          label: 'Default Button',
          name: 'default',
          ...buttonSchema,
        },
        {
          label: 'Primary Button',
          name: 'primary',
          ...buttonSchema,
        },
        {
          label: 'Primary Filled Button',
          name: 'primaryFilled',
          ...buttonSchema,
        },
        {
          label: 'Outline Button',
          name: 'outline',
          ...buttonSchema,
        },
        {
          label: 'Unset Button',
          name: 'unset',
          ...buttonSchema,
        },
        // ... other button types
      ],
    },
  ],
};

themeSchema.fields.push(modalSchema);
themeSchema.fields.push(headingSchema);

// Apply color format and widget settings to all color fields
themeSchema.fields[0].fields = themeSchema.fields[0].fields.map(field => ({
  ...field,
  ui: { ...field.ui, colorFormat: COLOR_FORMAT, widget: WIDGET },
}));

export default themeSchema;
