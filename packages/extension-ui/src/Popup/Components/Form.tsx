import React from 'react'
import { useForm, SubmitHandler, Controller, UseControllerProps } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { TextBox } from '../../components';

const Form = () => {

  type UserSubmitForm = {
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
    mode: "all",
    reValidateMode: "onChange"
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <TextBox
            label="Password"
            type="password"
            props={{ ...register('password') }}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group" style={{ marginTop: 5 }}>
          <TextBox
            label="Confirm Password"
            type="password"
            props={{ ...register('confirmPassword') }}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            {...register('acceptTerms')}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form