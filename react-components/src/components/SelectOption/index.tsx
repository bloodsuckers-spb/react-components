import React from 'react';

interface SelectOptionProps {
  country: string;
}

const SelectOption = ({ country }: SelectOptionProps) => {
  return <option value={country}>{country}</option>;
};

export default SelectOption;
