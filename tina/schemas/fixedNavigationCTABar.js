export const fixedNavigationCTABarSchema = {
  type: 'object',
  name: 'fixedNavigationCTABar',
  label: 'Fixed Navigation CTA Bar',
  component: 'group',
  description: 'Settings for the Fixed Navigation CTA Bar.',
  fields: [
    {
      type: 'boolean',
      name: 'displayFixedBarCTA',
      label: 'Display Fixed Bar CTA',
      description: 'Display a fixed bar CTA above the navigation.',
    },
    {
      type: 'string',
      name: 'storyName',
      label: 'Story Name',
      description:
        'The name of the story for the CTA, if the bar is displayed.',
      required: true, // Only required if displayFixedBarCTA is true
    },
    {
      type: 'string',
      name: 'label',
      label: 'CTA Label',
      description: 'Text for the CTA button.',
    },
    {
      type: 'string',
      name: 'url',
      label: 'CTA URL',
      description: 'URL for the CTA button.',
    },
  ],
};
