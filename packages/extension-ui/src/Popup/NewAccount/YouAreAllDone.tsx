import React from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Button, NextStepButton } from '../../components'

import TwitterIcon from "../../assets/icons/social/twitter.svg";
import DiscordIcon from "../../assets/icons/social/discord.svg";


interface Props {
  className?: string;
  onChange?: () => void | Promise<void | boolean>;
}


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

const YouAreAllDone = ({ className, onChange }: Props) => {

  const { t } = useTranslation();

  return (
    <div className={className}>
      <PageHeading>
        <h1>{t("You’re all done")}</h1>
        <p>{t("You will use this unlock your wallet")}</p>
      </PageHeading>

      <Container>
        <NextStepButton><div style={{ display: "flex", justifyContent: "start" }}>
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
        <NextStepButton><div style={{ display: "flex", justifyContent: "start" }}>
          <img
            className='icon'
            height={24}
            src={DiscordIcon}
            width={24}
            alt="icon"
          />
          <span style={{ marginLeft: 10 }}>Follow us on Discord</span>
        </div></NextStepButton>
      </Container>

      <Button className='finish-btn' onClick={onChange}> {t("Finish")}</Button>

    </div >
  )
}

export default styled(YouAreAllDone)`
  .finish-btn{
      margin-top: 26px;
    }
`