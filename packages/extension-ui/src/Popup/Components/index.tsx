import { useCallback, useContext, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import styled, { ThemeContext } from "styled-components";
import * as Yup from 'yup';


import { Button, Checkbox, Loader, NextStepButton, Switch, Tabs, TextBox, ThemeSwitchContext } from "../../components";
import Container from "../../components/common/Container";
import { toShortAddress } from "../../shared/functions";

import BackIcon from "../../assets/icons/back.svg";
import CopyIcon from "../../assets/icons/copy.svg";
import DownloadIcon from "../../assets/icons/download.svg";
import TwitterIcon from "../../assets/icons/social/twitter.svg";
import DiscordIcon from "../../assets/icons/social/discord.svg";
import { ThemeProps, Theme } from "../../types";





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


const Components = ({ className }: { className: string }) => {
  const [step, setStep] = useState(0);

  const setTheme = useContext(ThemeSwitchContext);
  const themeContext = useContext(ThemeContext as React.Context<Theme>);

  const _onChangeTheme = useCallback(
    (val: "dark" | "light"): void => setTheme(val),
    [setTheme]
  );

  const { reset, handleSubmit, formState: { errors }, control } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema)
  });


  return (
    <div className={className}>
      <Container>
        <Button>Primary Button</Button>
        <br />
        <Button inverted={true}>Inverted Button</Button>
        <br />
        <Button isDisabled={true}>Disabled button</Button>
        <br />
        <>
          <img
            className='icon'
            height={24}
            src={BackIcon}
            width={24}
            alt="icon"
          />&nbsp;&nbsp;
          <img
            className='icon'
            height={24}
            src={CopyIcon}
            width={24}
            alt="icon"
          />&nbsp;&nbsp;
          <img
            className='icon'
            height={24}
            src={DownloadIcon}
            width={24}
            alt="icon"
          />
          <img
            className='icon'
            height={24}
            src={TwitterIcon}
            width={24}
            alt="icon"
          />&nbsp;&nbsp;
          <img
            className='icon'
            height={24}
            src={DiscordIcon}
            width={24}
            alt="icon"
          />
          <br />

          <NextStepButton>With next icon button</NextStepButton>
          <br />
          <NextStepButton isDisabled={true}><div style={{ display: "flex", justifyContent: "start" }}>
            <img
              className='icon'
              height={24}
              src={TwitterIcon}
              width={24}
              alt="icon"
            />
            <span style={{ marginLeft: 10 }}>Follow us on Twitter</span>
          </div></NextStepButton>
          <br />
          <NextStepButton isDisabled={true}><div style={{ display: "flex", justifyContent: "start" }}>
            <img
              className='icon'
              height={24}
              src={DiscordIcon}
              width={24}
              alt="icon"
            />
            <span style={{ marginLeft: 10 }}>Follow us on Discord</span>
          </div></NextStepButton>

          Trimmed Address : <span>{toShortAddress("5FntYAhGeqxMf6VmLxYig3XAw64JQTKD9rCpRWACLTeFGThf", 4)}</span>

          <Tabs limit={3} value={step} onChange={(val) => setStep(val)} />
          <div style={{
            display: 'flex',
            marginTop: '10px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>

            <img
              className='icon'
              height={24}
              src={BackIcon}
              onClick={() => {
                step > 0 && setStep(prev => prev - 1)
              }}
              width={24}
              alt="icon"
            />
            <div className=''>
              <Button isDisabled={step >= 3} onClick={() => setStep(prev => prev + 1)} className="action-btn cancel-btn">Continue</Button>
            </div>

          </div>

        </>

        <Switch
          value={themeContext.id === "dark"}
          onChange={(data: boolean) => {
            _onChangeTheme(data ? "dark" : "light")
            console.info('Switch data=>', data);
          }} />

        <br />


        <form onSubmit={handleSubmit((data: any) => {
          console.info('data=>', data);
        })} className="form">

          <div>
            <TextBox type="password" label="Password" name="password" control={control} errors={errors} />
            <TextBox type="password" label="Confirm Password" name="confirmPassword" control={control} errors={errors} />

            <Checkbox name="acceptTerms" control={control} errors={errors} label="I have read and agree to the Terms" />

            <div className='action-btn-wrap'>
              <Button className="action-btn continue-btn" type="submit">Register</Button>
              <Button className="action-btn cancel-btn" onClick={() => reset()}>Reset</Button>
            </div>
          </div>

        </form>



        <Loader height={40} width={40} />
      </Container>
    </div >
  );
};

export default styled(Components)(({ theme }: ThemeProps) => `
.action-btn-wrap{
    margin-top: 20px;
    display: flex;
    margin-top: 20px;

    .action-btn{
      border-radius: 56px;
      margin-right: 8px;
      background-color: ${theme.buttonBackground1};
      span {
        color: ${theme.buttonTextColor2};
      }
    &.cancel-btn{
      background: ${theme.secondaryColor};
      border-radius: 56px;
    }

    &.continue-btn{
      background: ${theme.primaryColor};
    }
  }
}`);
