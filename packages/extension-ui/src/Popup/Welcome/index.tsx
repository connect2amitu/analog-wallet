import styled from "styled-components";
import { useTranslation } from "react-i18next";
import * as Bowser from 'bowser';

import { ActionContext, Button } from "../../components";
import SpiralSphereIcon from "../../assets/icons/spiralsphere.png";
import { useContext, useEffect } from "react";


const Welcome = ({ className }: { className?: string }) => {

  const { t } = useTranslation();
  const browser = Bowser.getParser(window.navigator.userAgent);
  const onAction = useContext(ActionContext);



  if (!!browser.getBrowser() && !!browser.getBrowser().name && !!browser.getOS().name) {
    window.localStorage.setItem('browserInfo', browser.getBrowser().name as string);
    window.localStorage.setItem('osInfo', browser.getOS().name as string);
  }


  useEffect(() => {
    const isWelcomeDone = window.localStorage.getItem('welcome_read') === 'ok';

    if (isWelcomeDone) {
      onAction("/")
    }

  }, [onAction])



  const goTo = (path: string) => {
    localStorage.setItem("welcome_read", "ok")
    onAction(path)
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
      <span className="title">{t("Welcome Back")}</span>
      <span className="subtitle">{t("The decentralized web awaits")}</span>
      <Button className="create-wallet-btn" onClick={() => goTo("/account/create")} >{t("Create Wallet")}</Button>
      <Button className="already-have-account" onClick={() => goTo("/account/import-seed")} >{t("I already have a wallet")}</Button>
    </div>
  );
};

export default styled(Welcome)`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 30px 47px;
  .title{
    font-weight: 700;
    font-size: 24px;
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
    margin-top:4px;
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