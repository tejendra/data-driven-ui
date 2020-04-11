import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { useHistory, useRouteMatch } from 'react-router-dom';

const ActionCard = (props) => {
  let { path } = useRouteMatch();
  let history = useHistory();

  const handleOnClick = () => {
    history.push(`${path}${props.location}`);
  };

  return (
    <Card data-test-id="actionCard" onClick={handleOnClick}>
      <CardContent
        style={{ display: 'flex', flexDirection: 'column', padding: '8px' }}
      >
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ActionCard;
