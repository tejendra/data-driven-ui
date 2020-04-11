import React from 'react';
import RowItem from '../components/RowItem';
import Section from '../components/Section';
import ActionCard from '../components/ActionCard';

export const _getComponent = (value) => {
  switch (value) {
    case 'ActionCard':
      return ActionCard;
    case 'RowItem':
      return RowItem;
    case 'Section':
      return Section;
    default:
      return null;
  }
};

export const DynamicComponent = (props) => {
  const { type, ...otherProps } = props;
  const Type = _getComponent(type);

  return <Type {...otherProps} />;
};

export const DynamicComponentList = (props) => {
  return (
    <>
      {(props?.list || []).map((section, index) => (
        <DynamicComponent {...section} key={index} />
      ))}
    </>
  );
};
