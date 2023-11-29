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
