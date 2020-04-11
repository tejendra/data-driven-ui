const apps = [
  {
    type: 'ActionCard',
    title: 'Location Finder',
    description:
      'Blanditiis ab accusantium doloremque, nemo natus maxime rem consequuntur ipsam aliquam unde fuga odit ad sint omnis odio velit reprehenderit!',
    location: '/location-finder',
    api: '/location-finder-api',
  },
  {
    type: 'ActionCard',
    title: 'Your Pay',
    description:
      'Pay consequuntur ipsam aliquam unde fuga odit ad sint omnis odio velit reprehenderit!',
    location: '/paycheck',
    api: '/paycheck-api',
  },
  {
    type: 'ActionCard',
    title: 'JDE Approval',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, velit. Blanditiis ab accusantium doloremque, nemo natus maxime rem consequuntur ipsam aliquam unde fuga odit ad sint omnis odio velit reprehenderit!',
    location: '/jde-approval',
    api: '/jde-approval-api',
  },
];

export const getMyApps = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(apps);
    }, 0);
  });
