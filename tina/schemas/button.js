import { createColorField, createSelectField } from '../tinaUtilities';

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
    // Add fields for other base style properties as needed
    // For example, if you want to make fontWeight customizable, add a select field for it
    // createSelectField('Font Weight', 'fontWeight', ['normal', 'bold', 'lighter', 'bolder']),
  ],
};

const createButtonVariantFields = hoverFields => [
  createColorField('Background', 'bg'),
  createColorField('Border Color', 'borderColor'),
  createSelectField('Font Weight', 'fontWeight', ['normal', 'bold']),
  {
    label: 'Hover',
    name: '_hover',
    component: 'group',
    type: 'object',
    fields: hoverFields,
  },
];

// const buttonVariantFields = (additionalFields) => [
//   ...commonButtonFields,
//   ...additionalFields,
// ];

export const buttonSchema = {
  label: 'Buttons',
  name: 'buttons',
  component: 'group',
  type: 'object',
  description: 'Configure the button styles for your theme.',
  fields: [
    buttonBaseStyleSchema,
    {
      label: 'Default Button',
      name: 'default',
      component: 'group',
      type: 'object',
      fields: createButtonVariantFields([
        createColorField('Background', 'bg'),
        createColorField('Text Color', 'color'),
        // Add other hover style fields for the default variant if needed
      ]),
    },
    {
      label: 'Primary Button',
      name: 'primary',
      component: 'group',
      type: 'object',
      fields: createButtonVariantFields([
        createColorField('Background', 'bg'),
        createColorField('Text Color', 'color'),
        // Add other hover style fields for the default variant if needed
      ]),
    },
    {
      label: 'Primary Filled Button',
      name: 'primaryFilled',
      component: 'group',
      type: 'object',
      fields: createButtonVariantFields([
        createColorField('Background', 'bg'),
        createColorField('Text Color', 'color'),
        // Add other hover style fields for the default variant if needed
      ]),
    },
    {
      label: 'Secondary Button',
      name: 'secondary',
      component: 'group',
      type: 'object',
      fields: createButtonVariantFields([
        createColorField('Background', 'bg'),
        createColorField('Text Color', 'color'),
        // Add other hover style fields for the default variant if needed
      ]),
    },
    {
      label: 'Secondary Filled Button',
      name: 'secondaryFilled',
      component: 'group',
      type: 'object',
      fields: createButtonVariantFields([
        createColorField('Background', 'bg'),
        createColorField('Text Color', 'color'),
        // Add other hover style fields for the default variant if needed
      ]),
    },
    {
      label: 'Tertiary Button',
      name: 'tertiary',
      component: 'group',
      type: 'object',
      fields: createButtonVariantFields([
        createColorField('Background', 'bg'),
        createColorField('Text Color', 'color'),
        // Add other hover style fields for the default variant if needed
      ]),
    },
    {
      label: 'Tertiary Filled Button',
      name: 'tertiaryFilled',
      component: 'group',
      type: 'object',
      fields: createButtonVariantFields([
        createColorField('Background', 'bg'),
        createColorField('Text Color', 'color'),
        // Add other hover style fields for the default variant if needed
      ]),
    },
    // Variant for outline button
    {
      label: 'Outline Button',
      name: 'outline',
      component: 'group',
      type: 'object',
      fields: createButtonVariantFields([
        createColorField('Border Color', 'borderColor'),
        createColorField('Text Color', 'color'),
        // Add other hover style fields for the default variant if needed
      ]),
    },
    // variant for unset button
    {
      label: 'Unset Button',
      name: 'unset',
      component: 'group',
      type: 'object',
      fields: createButtonVariantFields([
        createColorField('Text Color', 'color'),
        // Add other hover style fields for the default variant if needed
      ]),
    },

    // Repeat for other button variants like 'primary', 'primaryFilled', etc.
    // ...
  ],
};
