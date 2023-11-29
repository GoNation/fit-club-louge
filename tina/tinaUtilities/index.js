import BorderWidthSlider from '../components/BorderWidthSlider';

// Utility function to create a color field
export const createColorField = (label, name) => ({
  label,
  name,
  component: 'color',
  type: 'string',
  ui: {
    component: 'color',
    colorFormat: 'hex',
    widget: 'sketch',
  },
});

// Utility function to create a select field
export const createSelectField = (label, name, options, description) => ({
  label,
  name,
  component: 'select',
  type: 'string',
  options,
  description,
});

// Utility function to create a font field
export const createFontField = (name, label, description) => ({
  type: 'string',
  name,
  label,
  description,
});

// Utility function to create a modal style field
export const createModalStyleField = (name, label, fields) => ({
  type: 'object',
  name,
  label,
  component: 'group',
  fields,
});

// Utility function for text transform options
export const createTextTransformField = (label, name) => ({
  label,
  name,
  component: 'select',
  type: 'string',
  options: ['none', 'capitalize', 'uppercase', 'lowercase', 'full-width'],
});

export const createFontWeightField = (label, name) => ({
  label,
  name,
  component: 'select',
  type: 'string',
  //   using chakra ui font weights
  options: ['normal', 'bold', 'lighter', 'bolder'],
});

// Utility function to create a spacing field
export const createSpacingField = (label, name) => ({
  label,
  name,
  component: 'select',
  type: 'string',
  options: ['sm', 'md', 'lg', 'xl'], // Add values based on your theme's spacing scale
});

// Spacing fields in your schema
export const spacingSchema = {
  label: 'Spacing',
  name: 'spacing',
  component: 'group',
  type: 'object',
  fields: [
    createSpacingField('Margin', 'margin'),
    createSpacingField('Padding', 'padding'),
    // Add other spacing-related fields as needed
  ],
};

// Utility function to create a shadow field
export const createShadowField = (label, name) => ({
  label,
  name,
  component: 'select',
  type: 'string',
  options: ['small', 'medium', 'large'], // Predefined shadow styles
});

// Shadow fields in your schema
export const shadowSchema = {
  label: 'Shadows',
  name: 'shadows',
  component: 'group',
  type: 'object',
  fields: [
    createShadowField('Box Shadow', 'boxShadow'),
    // Add other shadow-related fields as needed
  ],
};

// Utility function to create a color select field
export const createColorSelectField = (label, name, additionalColors = []) => {
  const baseColors = [
    'primary',
    'secondary',
    'accent',
    'dark',
    'light',
    'background',
    'white',
    'transparent',
  ];
  const colors = [...baseColors, ...additionalColors].map(color =>
    color.toLowerCase()
  );

  return createSelectField(label, name, colors);
};

export const createBorderStyleField = (label, name) => ({
  label,
  name,
  component: 'select',
  type: 'string',
  options: ['none', 'solid', 'dashed', 'dotted', 'double', 'groove', 'ridge'],
});

// Utility function for a simple text field
export const createTextField = (label, name, description) => ({
  label,
  name,
  component: 'text',
  type: 'string',
  description,
});

// Utility function for border radius chakra ui select optiosn
export const createBorderRadiusField = (label, name) => ({
  label,
  name,
  component: 'select',
  type: 'string',
  options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
});

// Utility function for font size chakra ui select options
export const createFontSizeField = (label, name) => ({
  label,
  name,
  component: 'select',
  type: 'string',
  options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
});

// Utility function to create a box shadow field
export const createBoxShadowField = (label, name) => {
  const boxShadowOptions = ['base', 'md', 'lg', 'xl', '2xl', 'none']; // Add or modify based on your theme
  return createSelectField(label, name, boxShadowOptions);
};

// Basic number field
export const createNumberField = (label, name) => ({
  label,
  name,
  component: 'number',
  type: 'number',
});

export const toCamelCase = str => {
  return str
    .split(' ')
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
};

// utility function for dropdown for fonts (body, heading, links, or acccent for now)
const fontOptions = ['body', 'heading', 'links', 'accent'];
export const createFontFamilyField = (label, name, options = fontOptions) => ({
  label,
  name,
  component: 'select',
  type: 'string',
  options,
});

export const COLOR_FORMAT = 'hex';
export const WIDGET = 'sketch';
