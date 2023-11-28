import React from 'react';
import shortid from 'shortid';
import splitSectionChildren from '../../helpers/menu/splitSectionChildren';
import MenuCell from './menuCell';
import { Grid } from '@chakra-ui/react';

const Cells = ({ menuData, onCellClick, mode }) => {
  const { childSections } = splitSectionChildren(menuData);

  const renderChildSections = () => {
    return childSections.map(({ section, inventory }, idx) => (
      <MenuCell
        key={shortid.generate()}
        section={section}
        inventory={inventory}
        onCellClick={onCellClick}
        numSections={childSections.length}
        mode={mode}
      />
    ));
  };

  return (
    <div>
      {/* Updated to use Chakra's Grid component */}
      <Grid
        className="cellContainer"
        templateColumns={{
          base: '1fr', // 1 column on mobile
          sm: '1fr 1fr', // 2 columns from the "sm" breakpoint
          md: '1fr 1fr 1fr', // 3 columns from the "md" breakpoint
        }}
        gap={4} // spacing between grid items
      >
        {renderChildSections()}
      </Grid>
    </div>
  );
};

export default React.memo(Cells);
