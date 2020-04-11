import React from 'react';

import EmployeeInfo from '../components/EmployeeInfo';

const Home = () => {
  return (
    <div>
      <EmployeeInfo
        displayName="Tejendra Patel"
        jobTitle="Engineering Manager"
      />

      {/* <Paper elevation={0}>
        <ActionCard
          title="Your Pay"
          description="View your pay and direct deposit information"
          location="/pay"
        />
        <ActionCard
          title="Benefits Center"
          description="FooBar Benefits Center"
        />
        <ActionCard
          title="Contact"
          description="View your personal contact information"
          location="/contact"
        />
        <ActionCard
          title="Organization"
          description="View your company organization heirarchy"
        />
      </Paper> */}
    </div>
  );
};

export default Home;
