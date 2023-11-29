import {
  createColorField,
  createModalStyleField,
  createSelectField,
  createColorSelectField,
} from '../tinaUtilities';

// Define the fields for the Modal component
export const modalSchema = {
  label: 'Modal',
  name: 'modal',
  component: 'group',
  type: 'object',
  description: 'Configure the modal styles for your theme.',
  fields: [
    createModalStyleField('dialog', 'Dialog', [
      createColorSelectField('Background Color', 'bg'),

      createColorSelectField('Text Color', 'color'),
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
        // set default value to 'flex'
      },
      createSelectField(
        'Align Items',
        'alignItems',
        [
          { label: 'Flex Start', value: 'flex-start' },
          { label: 'Flex End', value: 'flex-end' },
          { label: 'Center', value: 'center' },
          { label: 'Stretch', value: 'stretch' },
        ],
        'Aligns the items along the cross axis.'
      ),
      createSelectField(
        'Justify Content',
        'justifyContent',
        [
          { label: 'Flex Start', value: 'flex-start' },
          { label: 'Flex End', value: 'flex-end' },
          { label: 'Center', value: 'center' },
          { label: 'Stretch', value: 'stretch' },
        ],
        'Aligns the items along the main axis.'
      ),
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
          colorFormat: 'rgb',
          widget: 'sketch',
        },
      },
      {
        label: 'Opacity',
        name: 'opacity',
        component: 'text',
        type: 'string',
      },
      // Add other overlay style properties as needed
    ]),
  ],
};
