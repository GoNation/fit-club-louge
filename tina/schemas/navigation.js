import {
  createSelectField,
  createColorField,
  createNumberField,
} from '../tinaUtilities';
import { fixedNavigationCTABarSchema } from './fixedNavigationCTABar';
import { hamburgerSchema } from './hamburger';

// schemas/navigation.js

// Define the schema for navigation settings
export const navigationSchema = {
  name: 'navigationSettings',
  label: 'Navigation Settings',
  component: 'group',
  type: 'object',
  fields: [
    createSelectField('Navigation Layout', 'navLayout', [
      // Can be logoLeft, logoRIght, logoCentered or stacked
      { label: 'Logo Left', value: 'logoLeft' },
      { label: 'Logo Right', value: 'logoRight' },
      { label: 'Logo Centered', value: 'logoCentered' },
      { label: 'Stacked', value: 'stacked' },
    ]),
    createSelectField('Navigation Position', 'navPosition', [
      'fixed',
      'absolute',
      'relative',
    ]),
    hamburgerSchema,
    fixedNavigationCTABarSchema,

    // ... other navigation settings fields here
  ],
};
