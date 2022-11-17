import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Checkbox, TextBox } from '../../components'


interface Props {
  className?: string;
  onChange?: () => void | Promise<void | boolean>;
}

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

const PageHeading = styled.div`
margin-top: 10px;
h1{
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #0F0040;
}

p{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #746B92;
}
`

const Container = styled.div`
  margin-top: 18px;
`

const CreatePassword = ({ onChange, className }: Props) => {

  const { t } = useTranslation();
  const [agree, setAgree] = useState(false);


  const { reset, handleSubmit, formState: { errors, isDirty, isValid }, control } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema)
  });

  return (
    <div className={className}>
      <PageHeading>
        <h1>{t("Сreate a password")}</h1>
        <p>{t("You will use this unlock your wallet")}</p>
      </PageHeading>

      <Container>
        <form onSubmit={handleSubmit((data: any) => {
          console.info('data=>', data);
        })} className="form">

          <div>
            <TextBox className='textbox' type="password" label="Password" name="password" control={control} errors={errors} />
            <TextBox className='textbox' type="password" label="Confirm Password" name="confirmPassword" control={control} errors={errors} />

            <div className='item'>
              <Checkbox name="acceptTerms" value={agree} label={<div className='agree-text'>I agree to the <span className='link'>Terms of Service</span></div>} control={control} errors={errors} onChange={setAgree} />
            </div>

          </div>

        </form>
      </Container>

      <Button isDisabled={!isDirty || !isValid} className='continue-btn' onClick={onChange}> {t("Continue")}</Button>

    </div >
  )
}

export default styled(CreatePassword)`
  .item{
      margin-top: 18px;
      display: flex;
      cursor: pointer;
      .agree-text{
        font-size: 14px;
        line-height: 20px;
        color: #746B92;
        .link{
          background: linear-gradient(89.78deg, #2406E2 0.19%, #7B35EE 99.81%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
          margin-left: 0;
        }
      }
    }
    .continue-btn{
      margin-top: 26px;
    }
`