export const globalStylesSchema = {
  // Group for style settings
  label: 'Styles',
  name: 'styles',
  component: 'group',
  type: 'object',
  description: 'Configure the style settings for your theme.',
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
};
