import React from 'react';
import { wrapFieldsWithMeta } from 'tinacms';

const BorderWidthSlider = wrapFieldsWithMeta(({ input }) => {
  const handleChange = e => {
    input.onChange(e.target.value + 'px');
  };
  return (
    <div>
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        defaultValue={1}
        value={input.value.replace('px', '')} // Remove 'px' for the slider value
        onChange={handleChange} // Use the custom handler
      />
      <br />
      Value: {input.value}
    </div>
  );
});

export default BorderWidthSlider;
