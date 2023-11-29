import {
  createSelectField,
  createTextTransformField,
  createColorSelectField,
} from '../tinaUtilities';

// Define the fields for the Heading component
export const headingSchema = {
  label: 'Heading',
  name: 'heading',
  component: 'group',
  type: 'object',
  description: 'Configure the heading styles for your theme.',
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
        createColorSelectField('Color', 'color'),
        // ... other fields

        // Add other base style properties as needed
      ],
    },
    // You can add variants here later as needed
  ],
};
