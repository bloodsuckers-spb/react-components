import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import FormItem from 'components/FormItem';
import getValidateMethod from '../../services/getValidateMethod';

import './index.css';

import { IProps, IFormItems, ISubmit } from './interfaces';

const Form = ({ data, addCard }: IProps) => {
  const [isDisabled, setBtnState] = useState(true);
  const [isCardAdded, setCardState] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitted, isSubmitSuccessful },
    reset,
    resetField,
  } = useForm<IFormItems>();

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

  const setRegister = (id: string, type = 'text') =>
    register(id, {
      validate: getValidateMethod(id, type),
    });

  const getImgUrl = (elem: File | Blob) => URL.createObjectURL(elem);

  const getSwitchValue = (isChecked: boolean, values = ['Male', 'Female']) => {
    const [checked, unchecked] = values;
    return !isChecked ? checked : unchecked;
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} data-testid="react-form">
      {data.map((data, i) => {
        return <FormItem key={i} data={data} errors={errors} register={setRegister} />;
      })}
      <input className="submit" type="submit" value="submit" disabled={isDisabled} />
      {isCardAdded && <p className="confirm-message">The data has been saved</p>}
    </form>
  );
};

export default Form;
