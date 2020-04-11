import React from 'react';
import {Avatar, Card, CardContent, Typography } from '@material-ui/core';

const EmployeeInfo = (props) => {
  return (
    <Card data-test-id="employeeInfoCard">
      <CardContent style={{display: 'flex', flexDirection: 'row', padding: '8px', alignItems: 'center'}}>
        <Avatar>TP</Avatar>
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '16px'}}>
          <Typography variant="subtitle1">{props.displayName}</Typography>
          <Typography variant="subtitle2">{props.jobTitle}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default EmployeeInfo;