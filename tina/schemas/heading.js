import {
  createColorField,
  createSelectField,
  createTextTransformField,
} from '../tinaUtilities';

// Define the fields for the Heading component
export const headingSchema = {
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
