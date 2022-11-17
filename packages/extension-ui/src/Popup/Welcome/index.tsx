import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { Button } from "../../components";
import { useEffect, useState } from "react";
import SpiralSphereIcon from "../../assets/icons/spiralsphere.svg";

import { useNavigate } from "react-router";

const Welcome = ({ className }: { className: string }) => {
  const { t } = useTranslation();
  const navigate = useNavigate()

  const [step, setStep] = useState(1)

  useEffect(() => {
    const isRead = localStorage.getItem("welcome_read")
    if (isRead) {
      setStep(2)
    }
  }, [])

  const openMenuList = () => {
    setStep(2)
    localStorage.setItem("welcome_read", "ok")
  }

  const WelcomeScreen = () => {
    return <>
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
    </>
  }

  const goTo = (path: string) => {
    console.info('goTo path=>', path);
    navigate(path)
  }

  const MenuScreen = () => {
    return <div className="menu-list">
      <Button onClick={() => goTo("/account/create")} >{t("Create new account")}</Button>
      <Button onClick={() => goTo("/account/import-seed")} >{t("Import account from pre-existing seed")}</Button>
      <Button onClick={() => goTo("/account/import-metamask-private-key")} >{t("Import private key from MetaMask")}</Button>
      <Button onClick={() => goTo("/account/restore-json")} >{t("Restore account from JSON backup file")}</Button>
    </div>
  }

  const RenderComponent = () => {
    switch (step) {
      case 1:
        return <WelcomeScreen />
      case 2:
        return <MenuScreen />
      default:
        return <></>
    }
  }

  return (
    <div className={className}>
      <div className="container">
        <RenderComponent />
      </div>
    </div>
  );
};

export default styled(Welcome)`
.container{
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

    .menu-list{
      button{
        margin-bottom: 10px;
        border-radius: 40px;
      }
    }
}
`