import React from 'react';
import { Paper } from '@material-ui/core';

import { DynamicComponentList } from '../utils';

const Section = (props) => {
  return (
    <Paper
      elevation={1}
      data-test-id="rowItem"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '8px',
        marginBottom: '8px',
      }}
    >
      <DynamicComponentList list={props.rows} />
    </Paper>
  );
};

export default Section;
