import {
  createSelectField,
  createColorSelectField,
  createFontWeightField,
  createBorderStyleField,
  createBorderRadiusField,
  createFontSizeField,
  createBoxShadowField,
  createNumberField,
  toCamelCase,
  createFontFamilyField,
} from '../tinaUtilities';
import BorderWidthSlider from '../components/BorderWidthSlider';

export const buttonBaseStyleSchema = {
  label: 'Button Base Style',
  name: 'baseStyle',
  component: 'group',
  type: 'object',
  fields: [
    createSelectField('Text Transform', 'textTransform', [
      'none',
      'capitalize',
      'uppercase',
      'lowercase',
      'full-width',
    ]),
  ],
};

// Common fields for all button variants
const commonButtonFields = [
  {
    label: 'Style',
    name: 'style',
    component: 'group',
    type: 'object',
    fields: [
      createColorSelectField('Background', 'bg'),
      createColorSelectField('Text Color', 'color'),
      createColorSelectField('Border Color', 'borderColor'),
      createBorderStyleField('Border Style', 'borderStyle'),
      createBorderRadiusField('Border Radius', 'borderRadius'),
      createBoxShadowField('Box Shadow', 'boxShadow'),

      {
        type: 'string',
        label: 'Border Width',
        name: 'borderWidth',
        component: 'number',
        ui: {
          component: BorderWidthSlider,
        },
      },
      // Add other style-related fields here
    ],
  },
  {
    label: 'Typography',
    name: 'typography',
    component: 'group',
    type: 'object',
    fields: [
      createFontSizeField('Font Size', 'fontSize'),
      createFontWeightField('Font Weight', 'fontWeight'),
      createNumberField('Letter Spacing', 'letterSpacing'),
      createFontFamilyField('Font Family', 'fontFamily'),
    ],
  },
  {
    label: 'Layout',
    name: 'layout',
    component: 'group',
    type: 'object',
    fields: [
      createNumberField('Padding Horizontal', 'px'),
      createNumberField('Padding Vertical', 'py'),
      // Add other layout-related fields here
    ],
  },

  {
    label: 'Hover',
    name: '_hover',
    component: 'group',
    type: 'object',
    fields: [
      createColorSelectField('Background', 'bg'),
      createColorSelectField('Text Color', 'color'),
    ],
  },
];

// Function to create fields for a button variant
const createButtonVariantFields = variantName => {
  const camelCaseName = toCamelCase(variantName);

  return [
    {
      label: `${variantName} Button`,
      name: camelCaseName,
      component: 'group',
      type: 'object',
      fields: [
        ...commonButtonFields,
        // Variant-specific fields
      ],
    },
  ];
};

export const buttonSchema = {
  label: 'Buttons',
  name: 'buttons',
  component: 'group',
  type: 'object',
  description: 'Configure the button styles for your theme.',
  fields: [
    buttonBaseStyleSchema,
    ...createButtonVariantFields('Default'),
    ...createButtonVariantFields('Primary'),
    ...createButtonVariantFields('Primary Filled'),
    ...createButtonVariantFields('Secondary'),
    ...createButtonVariantFields('Secondary Filled'),
    ...createButtonVariantFields('Accent'),
    ...createButtonVariantFields('Accent Filled'),
    ...createButtonVariantFields('Outline'),
    ...createButtonVariantFields('Unset'),
  ],
};
