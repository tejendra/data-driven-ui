const checkPayMetadata = {
  type: 'Section',

  rows: [
    {
      type: 'RowItem',
      title: 'Check Date',
      value: '6/1/2020',
    },
    {
      type: 'RowItem',
      title: 'Pay Period',
      value: '6/1 - 6/15',
    },
    {
      type: 'RowItem',
      title: 'Total Hours',
      value: '80',
    },
    {
      type: 'RowItem',
      title: 'Check Number',
      value: '193827',
    },
  ],
};

const checkPayDetails = {
  type: 'Section',

  rows: [
    {
      type: 'RowItem',
      title: 'Gross Pay',
      value: '$3,500.00',
      withEmphasis: true,
    },
    {
      type: 'RowItem',
      title: 'Total Witholdings',
      value: '$1,000.00',
      withEmphasis: true,
    },
    {
      type: 'RowItem',
      title: 'Taxes',
      value: '$900.00',
      isIndented: true,
    },
    {
      type: 'RowItem',
      title: 'Deductions',
      value: '$100.00',
      isIndented: true,
    },
  ],
};

const paycheckData = {
  sections: [checkPayMetadata, checkPayDetails],
};

const jdeMetadata = {
  type: 'Section',

  rows: [
    {
      type: 'RowItem',
      title: 'JDE',
      value: '6/1/2020',
    },
    {
      type: 'RowItem',
      title: 'Pay Period',
      value: '6/1 - 6/15',
    },
    {
      type: 'RowItem',
      title: 'Total Hours',
      value: '80',
    },
    {
      type: 'RowItem',
      title: 'Check Number',
      value: '193827',
    },
  ],
};

const jdeDetails = {
  type: 'Section',

  rows: [
    {
      type: 'RowItem',
      title: 'JDE',
      value: '$3,500.00',
      withEmphasis: true,
    },
    {
      type: 'RowItem',
      title: 'Total Witholdings',
      value: '$1,000.00',
      withEmphasis: true,
    },
    {
      type: 'RowItem',
      title: 'Taxes',
      value: '$900.00',
      isIndented: true,
    },
    {
      type: 'RowItem',
      title: 'Deductions',
      value: '$100.00',
      isIndented: true,
    },
  ],
};

const jdeData = {
  sections: [jdeMetadata, jdeDetails],
};

export const getAppFromApi = (api) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(api);
      switch (api) {
        case '/jde-approval-api':
          return resolve(jdeData);
        case '/location-finder-api':
          return resolve(paycheckData);
        case '/paycheck-api':
          return resolve(paycheckData);
        default:
          return reject('no api defined');
      }
    }, 0);
  });
