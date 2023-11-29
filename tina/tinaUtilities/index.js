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
export const createSelectField = (label, name, options) => ({
  label,
  name,
  component: 'select',
  type: 'string',
  options,
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

export const COLOR_FORMAT = 'hex';
export const WIDGET = 'sketch';
