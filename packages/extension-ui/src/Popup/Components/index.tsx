import { useCallback, useContext, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import styled, { ThemeContext } from "styled-components";
import * as Yup from 'yup';

import { Button, Checkbox, Dialog, Loader, NextStepButton, Switch, Tabs, TextBox, ThemeSwitchContext } from "../../components";
import Container from "../../components/common/Container";
import { getLogoByNetworkKey, toShortAddress } from "../../shared/functions";

import BackIcon from "../../assets/icons/back.svg";
import CopyIcon from "../../assets/icons/copy.svg";
import DownloadIcon from "../../assets/icons/download.svg";
import TwitterIcon from "../../assets/icons/social/twitter.svg";
import DiscordIcon from "../../assets/icons/social/discord.svg";
import { ThemeProps, Theme } from "../../types";
import { useToast } from "../../components/toast/ToastProvider";
import NavBar from "../Navbar";

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


  // Lowercase & Uppercase
  // Number (0-9)
  // Special Character (!@#$%^&*)
  // Atleast 8 Character

  const [error, setError] = useState<{
    case: null | boolean;
    number: null | boolean;
    specialChar: null | boolean;
    limit: null | boolean;
    strength: number
  }>({
    case: null,
    number: null,
    specialChar: null,
    limit: null,
    strength: 0
  })

  const setTheme = useContext(ThemeSwitchContext);
  const themeContext = useContext(ThemeContext as React.Context<Theme>);

  const { show } = useToast()

  const _onChangeTheme = useCallback(
    (val: "dark" | "light"): void => setTheme(val),
    [setTheme]
  );

  const { reset, handleSubmit, formState: { errors }, control } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema)
  });



  const checkStrength = (password: string) => {
    console.info('password=>', password);

    const _error = { ...error };


    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      _error.case = true
    } else {
      _error.case = false
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
      _error.number = true
    } else {
      _error.number = false
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      _error.specialChar = true
    } else {
      _error.specialChar = false
    }
    //If password is greater than 7
    if (password.length > 7) {
      _error.limit = true
    } else {
      _error.limit = false
    }


    let strength = 0;
    if (_error.case) {
      strength++;
    }
    if (_error.limit) {
      strength++;
    }
    if (_error.number) {
      strength++;
    }
    if (_error.specialChar) {
      strength++;
    }

    console.info('_error=>', _error);
    _error.strength = strength
    setError(_error)
  }

  console.info('error=>', error);
  return (
    <div className={className}>
      <Container>



        <NavBar />

        <TextBox type="password" label="Password" name="password" onChange={(value: string) => checkStrength(value)} />


        <div id="popover-password" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start'
        }}>
          <br />

          <Tabs limit={4} value={error.strength} />
          <div style={{ color: error.case ? "" : "green" }}>{error.case ? "✅" : "❌"}Lowercase &amp; Uppercase</div>
          <div style={{ color: error.number ? "" : "green" }}>{error.number ? "✅" : "❌"}Number (0-9)</div>
          <div style={{ color: error.specialChar ? "" : "green" }}>{error.specialChar ? "✅" : "❌"}Special Character (!@#$%^&*)</div>
          <div style={{ color: error.limit ? "" : "green" }}>{error.limit ? "✅" : "❌"}Atleast 8 Character</div>
        </div >
        <br />


        <Button inverted={true}>Inverted Button</Button>
        <br />
        <Button onClick={() => {
          show("Hello")
        }}>Show Toast</Button>
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

        Image from LogosMap
        <br />

        <img
          className='icon'
          height={24}
          src={getLogoByNetworkKey("analog")}
          width={24}
          alt="icon"
        />
        <img
          className='icon'
          height={24}
          src={getLogoByNetworkKey("bifrost")}
          width={24}
          alt="icon"
        />
        <img
          className='icon'
          height={24}
          src={getLogoByNetworkKey("crust")}
          width={24}
          alt="icon"
        />
        <img
          className='icon'
          height={24}
          src={getLogoByNetworkKey("dot")}
          width={24}
          alt="icon"
        />

        <div style={{ display: "flex" }}>

          <Switch
            value={themeContext.id === "dark"}
            onChange={(data: boolean) => {
              _onChangeTheme(data ? "dark" : "light")
            }} />
          <span style={{ marginLeft: 5 }}>{themeContext.id === "dark" ? "Light" : "Dark"}</span>
        </div>
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

        {/* <Dialog onClose={() => {
          console.info('onClose called=>');
        }}>
          <Drawer>
            <DrawerHeader>
              title
            </DrawerHeader>

            <DrawerBody>
              <h1>Body</h1>
            </DrawerBody>

            <DrawerFooter>
              <div className='action-btn-wrap'>
                <Button inverted={true}>Cancel</Button>
                <Button onClick={() => {
                  show("Hello")
                }}>Save</Button>
              </div>
            </DrawerFooter>
          </Drawer>
        </Dialog> */}

        <Loader height={40} width={40} />
      </Container >
    </div >
  );
};


// const Drawer = styled.div`
//   position: absolute;
//   bottom: 0;
//   border-radius: 20px 20px 0 0;
//   background: #18142b;
//   width: 100%;
//   border: 1px solid rgba(245, 245, 255, 0.2);
//   border-radius: 16px 16px 0px 0px;
//   overflow: hidden;
// `;

// const DrawerHeader = styled.div`
//   width: 100%;
//   position: relative;
// `;

// const DrawerBody = styled.div`
//   padding: 15px;
// `;

// const DrawerFooter = styled.div`
//   padding: 15px;
// `;


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
