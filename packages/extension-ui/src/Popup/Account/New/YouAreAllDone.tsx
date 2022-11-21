import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Button } from '../../../components'

import TwitterIcon from "../../../assets/icons/social/twitter.svg";
import DirectionRightIcon from "../../../assets/icons/direction-right.svg";
import DiscordIcon from "../../../assets/icons/social/discord.svg";

interface Props {
  className?: string;
  onChange: () => void | Promise<void | boolean>;
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
  margin-top: 20px;
`

const LinkButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  border-radius: 12px;
  padding: 14px;
  flex-grow: 0;
  filter: drop-shadow(0px 4px 30px rgba(15, 0, 64, 0.1));
  margin-top: 16px;
  cursor: pointer;

  .icon-text-wrap{
    display: flex;
    align-items: center;
  }
`

const Text = styled.span`
  margin-left: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #0F0040;
  text-decoration: none;
`;

const YouAreAllDone = ({ className, onChange }: Props) => {

  const { t } = useTranslation();

  const openLink = (URL: string) => {
    window.open(URL, "_blank");
  }

  const SOCIAL_LINKS = [
    { icon: TwitterIcon, text: "Follow us on Twitter", url: "https://twitter.com/OneAnalog" },
    { icon: DiscordIcon, text: "Follow us on Discord", url: "https://discord.com/invite/analog" }
  ]

  const _onChange = useCallback(() => {
    localStorage.setItem("step", "1")
    localStorage.setItem("auth", "ok")
    onChange()
  }, [onChange])

  return (
    <div className={className}>
      <PageHeading>
        <h1>{t("You’re all done!")}</h1>
        <p>{t("Follow along with product updates or reach out if you have any questions.")}</p>
      </PageHeading>

      <Container>
        {
          SOCIAL_LINKS.map(({ icon, url, text }, index) =>
            <LinkButton key={index} onClick={() => openLink(url)}>
              <div className='icon-text-wrap'>
                <img className='icon' height={32} src={icon} width={32} alt="icon" />
                <Text>{text}</Text>
              </div>
              <img className='icon' height={12} src={DirectionRightIcon} width={12} alt="icon" />
            </LinkButton>
          )
        }
      </Container>

      <Button className='finish-btn' onClick={_onChange}> {t("Finish")}</Button>
    </div>
  )
}

export default styled(YouAreAllDone)`
  .finish-btn{
      margin-top: 26px;
    }
`