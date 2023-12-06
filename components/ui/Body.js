import React, { useEffect, useState } from 'react';
import { chakra } from '@chakra-ui/react';

const StyledDiv = chakra('div');

const Body = ({ body, color = 'black', h2, h1, h3, h4, h5, ...props }) => {
  const [finalHtml, setFinalHtml] = useState('');

  useEffect(() => {
    const removeTrailingEmptyPTags = html => {
      let tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      const pElements = tempDiv.querySelectorAll('p');
      for (let i = pElements.length - 1; i >= 0; i--) {
        if (pElements[i].textContent.trim() === '') {
          pElements[i].remove();
        } else {
          break;
        }
      }
      setFinalHtml(tempDiv.innerHTML);
    };

    removeTrailingEmptyPTags(body);
  }, [body]);

  return (
    <StyledDiv
      dangerouslySetInnerHTML={{ __html: finalHtml }}
      color={color}
      css={{
        h1: h1,
        h2: h2,
        h3: h3,
        h4: h4,
        h5: h5,
      }}
      {...props}
    />
  );
};

export default Body;
