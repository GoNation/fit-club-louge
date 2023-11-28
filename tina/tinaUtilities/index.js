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

export const COLOR_FORMAT = 'hex';
export const WIDGET = 'sketch';
