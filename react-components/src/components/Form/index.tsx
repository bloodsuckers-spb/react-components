import React, { useState, useEffect } from 'react';

import FormItem from 'components/FormItem';
import getValidateMethod from '../../services/getValidateMethod';

import './index.css';

import { useFormContext } from 'react-hook-form';

import { IProps, ISubmit } from './interfaces';

const Form = ({ data, addCard }: IProps) => {
  const [isDisabled, setBtnState] = useState(true);
  const [isCardAdded, setCardState] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors, isDirty, isValid, isSubmitted, isSubmitSuccessful },
  } = useFormContext();

  useEffect(() => {
    if (!isSubmitted && isDirty) {
      setBtnState(false);
      setCardState(false);
    }
    if (isValid) {
      setBtnState(false);
    }
  }, [isDirty, isSubmitted, isValid]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      setCardState(true);
      resetField('confirm');
      resetField('switcher');
      reset();
    }
    setBtnState(true);
  }, [isSubmitSuccessful, reset, resetField]);

  const onSubmit = (data: ISubmit) => {
    const file = data.profilePic[0];
    addCard({
      ...data,
      switcher: getSwitchValue(!!data.confirm),
      profilePic: file instanceof File ? getImgUrl(file) : '',
    });
  };

  const setRegister = (id: string, type?: string) =>
    register(id, {
      validate: getValidateMethod(id, type),
    });

  const getImgUrl = (elem: File | Blob) => URL.createObjectURL(elem);

  const getSwitchValue = (isChecked: boolean, checked = 'Male', unchecked = 'Female') =>
    !isChecked ? checked : unchecked;

  return (
    <form className="custom-cards-form" onSubmit={handleSubmit(onSubmit)} data-testid="react-form">
      {data.map((data, i) => (
        <FormItem key={i} data={data} errors={errors} register={setRegister} />
      ))}
      <input className="submit" type="submit" value="submit" disabled={isDisabled} />
      {isCardAdded && <p className="confirm-message">The data has been saved</p>}
    </form>
  );
};

export default Form;
