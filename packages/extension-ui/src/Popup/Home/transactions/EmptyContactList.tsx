import React from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import ContactIcon from '../../../assets/icons/contact.svg';


interface Props {
  className?: string;
}

const EmptyContactList = ({ className }: Props) => {
  const { t } = useTranslation();

  return <div className={className}>
    <img src={ContactIcon} alt="ContactIcon" className='icon' />
    <p>{t("Build your contact list")}</p>
    <span>{t("Add friends and addresses you trust")}</span>
  </div>
}

export default styled(EmptyContactList)`
  margin-top: 65px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .icon{
    height: 91px;
    width: 89px;
  }

  p{
    margin-top: 18px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #0F0040;
  }

  span{
    margin-top: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.3px;
    color: #746B92;
  }
`