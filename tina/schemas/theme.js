// Utility function to create a color field
const createColorField = (label, name) => ({
  label,
  name,
  component: 'color',
  type: 'string',
  ui: {
    component: 'color',
    colorFormat: 'hex',
    widget: 'sketch',
  },
});

// Utility function to create a select field
const createSelectField = (label, name, options) => ({
  label,
  name,
  component: 'select',
  type: 'string',
  options,
});

// Utility function to create a font field
const createFontField = (name, label, description) => ({
  type: 'string',
  name,
  label,
  description,
});

const COLOR_FORMAT = 'hex';
const WIDGET = 'sketch';

const buttonSchema = {
  type: 'object',
  fields: [
    createColorField('Background', 'bg'),
    createColorField('Border Color', 'borderColor'),
    createSelectField('Font Weight', 'fontWeight', ['normal', 'bold']),
    {
      label: 'Hover',
      name: '_hover',
      component: 'group',
      type: 'object',
      fields: [
        createColorField('Background', 'bg'),
        createColorField('Text Color', 'color'),
      ],
    },
    // ... other style fields
  ],
};

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

// Apply color format and widget settings to all color fields
themeSchema.fields[0].fields = themeSchema.fields[0].fields.map(field => ({
  ...field,
  ui: { ...field.ui, colorFormat: COLOR_FORMAT, widget: WIDGET },
}));

export default themeSchema;
