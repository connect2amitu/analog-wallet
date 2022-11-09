import styled from "styled-components";
import { useTranslation } from "react-i18next";

import LoadingComponent from "../../components/ScreenLoader";
import { Button } from "../../components";
import AppHeader from "../../components/common/AppHeader";
import { useEffect, useState } from "react";
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
      <LoadingComponent text="" />
      <span className="title">{t("Welcome Back")}</span>
      <span className="subtitle">{t("The decentralized web awaits")}</span>
      <Button onClick={() => openMenuList()} >{t("Get Started")}</Button>
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
      <AppHeader />
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
      font-size: 32px;
    line-height: 44px;
    color: rgb(255, 255, 255);
    font-weight: 500;
    }
    .subtitle{
      margin-top: 3px;
    font-size: 18px;
    line-height: 30px;
    color: rgb(123, 128, 152);
    }

    .menu-list{
      button{
        margin-bottom: 10px;
        border-radius: 40px;
      }
    }
}
`