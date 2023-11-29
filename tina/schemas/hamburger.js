// schemas/hamburger.js
import {
  createColorField,
  createNumberField,
  createSelectField,
} from '../tinaUtilities';

export const hamburgerSchema = {
  label: 'Hamburger Menu Settings',
  name: 'hamburgerSettings',
  component: 'group',
  type: 'object',
  fields: [
    createColorField('Hamburger Color', 'hamburgerColor'),
    createNumberField('Hamburger Size', 'hamburgerSize'),
    createSelectField(
      'Hamburger Menu Visibility',
      'hamburgerVisibility',
      [
        { label: 'Mobile', value: 'mobile' },
        { label: 'Tablet', value: 'tablet' },
        { label: 'Large Displays', value: 'largeDisplays' },
        { label: 'Always Visible', value: 'alwaysVisible' },
      ],
      'Select when the hamburger menu should be visible'
    ),
  ],
};
