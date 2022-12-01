import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';

import { ActionContext, Button, TextBox } from "../../components";
import SpiralSphereIcon from "../../assets/icons/spiralsphere.png";
import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Password must be at least 3 characters')
    .max(10, 'Password must not exceed 10 characters')
});

const Link = styled.p`
  margin-top: 11px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  color: #4D20D9;
`

const Lock = ({ className }: { className?: string }) => {
  const [isBusy, setIsBusy] = useState(false);

  const { t } = useTranslation();

  const onAction = useContext(ActionContext);

  const { handleSubmit, formState: { errors, isDirty, isValid }, control } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema)
  });

  const onUnlock = (data: any) => {
    setIsBusy(true)

    setTimeout(() => {
      setIsBusy(false)
      onAction("/")
    }, 1000);
  }

  const onForgotPassword = () => {
    console.info('onForgotPassword=>', onForgotPassword);
  }

  return (
    <div className={className}>
      <img
        className='icon'
        src={SpiralSphereIcon}
        height={90}
        width={90}
        alt="icon"
      />
      <span className="subtitle">{t("Welcome to")}</span>
      <span className="title">{t("Spectrum")}</span>

      <form onSubmit={handleSubmit(onUnlock)} className="form">

        <TextBox
          className='textbox'
          type="password"
          label="Enter your password"
          name="password"
          control={control}
          errors={errors}
        />

        <Button isBusy={isBusy} className='unlock-btn' isDisabled={!isDirty || !isValid} type="submit"> {t("Unlock")}</Button>

      </form>

      <Link onClick={onForgotPassword}>{t("Forgot password")}</Link>

    </div>
  );
};

export default styled(Lock)`
display: flex;
flex-direction: column;
-webkit-box-align: center;
align-items: center;
padding: 63px 16px 0px;

.form{
  width: 100%;
}

.textbox{
  margin-top: 21px;
  width: 100%;
}

.unlock-btn{
  margin-top: 16px;
}

.title{
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  text-align: center;
  color: #0F0040;
  margin-top:11px;
}
.subtitle{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #746B92;
  margin-top:20px;
} 

.create-wallet-btn{
  margin-top:15px;
}

.already-have-account{
  background: linear-gradient(89.78deg, rgba(36, 6, 226, 0.1) 0.19%, rgba(123, 53, 238, 0.1) 99.81%);
  border-radius: 12px;
  margin-top:16px;
  color: #4D20D9;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
}
`