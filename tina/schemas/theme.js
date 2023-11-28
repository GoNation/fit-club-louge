import {
  createColorField,
  createSelectField,
  createFontField,
  createModalStyleField,
  createTextTransformField,
  COLOR_FORMAT,
  WIDGET,
} from '../tinaUtilities';

// Define the fields for the Modal component
const modalSchema = {
  label: 'Modal',
  name: 'modal',
  component: 'group',
  type: 'object',
  fields: [
    createModalStyleField('dialog', 'Dialog', [
      createColorField('Background Color', 'bg'),
      createColorField('Text Color', 'color'),
      {
        label: 'Border Radius',
        name: 'borderRadius',
        component: 'text',
        type: 'string',
      },
      // Add other dialog style properties as needed
    ]),
    createModalStyleField('dialogContainer', 'Dialog Container', [
      {
        label: 'Display',
        name: 'display',
        component: 'text',
        type: 'string',
      },
      {
        label: 'Align Items',
        name: 'alignItems',
        component: 'text',
        type: 'string',
      },
      {
        label: 'Justify Content',
        name: 'justifyContent',
        component: 'text',
        type: 'string',
      },
      // Add other dialog container style properties as needed
    ]),
    createModalStyleField('overlay', 'Overlay', [
      {
        label: 'Background',
        name: 'bg',
        component: 'color',
        type: 'string',
        ui: {
          component: 'color',
          colorFormat: 'rgba',
          widget: 'sketch',
        },
      },
      // Add other overlay style properties as needed
    ]),
  ],
};

const buttonDefaultPropsSchema = {
  label: 'Default Properties',
  name: 'defaultProps',
  component: 'group',
  type: 'object',
  fields: [
    createSelectField('Size', 'size', ['sm', 'md', 'lg', 'xl']), // Add sizes as per your theme's specification
    // Add other default properties as needed
  ],
};

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
    buttonDefaultPropsSchema, // Add the default properties schema here
    // ... other style fields
  ],
};

// Define the fields for the Heading component
const headingSchema = {
  label: 'Heading',
  name: 'heading',
  component: 'group',
  type: 'object',
  fields: [
    {
      label: 'Base Style',
      name: 'baseStyle',
      component: 'group',
      type: 'object',
      fields: [
        createSelectField('Font Weight', 'fontWeight', [
          'normal',
          'bold',
          'lighter',
          'bolder',
        ]),
        createTextTransformField('Text Transform', 'textTransform'),
        createColorField('Color', 'color'), // Assumes color refers to your theme colors
        // Add other base style properties as needed
      ],
    },
    // You can add variants here later as needed
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

themeSchema.fields.push(modalSchema);
themeSchema.fields.push(headingSchema);

// Apply color format and widget settings to all color fields
themeSchema.fields[0].fields = themeSchema.fields[0].fields.map(field => ({
  ...field,
  ui: { ...field.ui, colorFormat: COLOR_FORMAT, widget: WIDGET },
}));

export default themeSchema;
