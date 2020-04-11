import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const RowItem = ({ title, value, withEmphasis, isIndented }) => {
  const withEmphasisStyle = { fontWeight: withEmphasis ? 'bold' : 'normal' };
  const isIndentedStyle = isIndented ? { marginLeft: '16px' } : {};

  return (
    <Paper
      elevation={0}
      data-test-id="rowItem"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Typography style={{ ...withEmphasisStyle, ...isIndentedStyle }}>
        {title}
      </Typography>
      <Typography style={{ ...withEmphasisStyle }}>{value}</Typography>
    </Paper>
  );
};

export default RowItem;
