import React, { useState, useEffect } from 'react';

import { DynamicComponentList } from '../utils';
import { getAppFromApi } from '../services/appFromApi';

const TheApp = (props) => {
  const [appDetails, setAppDetails] = useState({});

  useEffect(() => {
    getAppFromApi(props.api).then((res) => setAppDetails(res));
  });

  return <DynamicComponentList list={appDetails.sections} />;
};

export default TheApp;
