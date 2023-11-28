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

export const buttonSchema = {
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
