import React from 'react'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Header } from '../../components'

import ContactsIcon from '../../assets/icons/settings-contacts.svg';
import Menu from '../../components/Menu';

interface Props {
  className?: string;
  title: string | React.ReactNode;
  onBack?: () => void;
}

const Settings = ({ className, onBack }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <Header title="Settings" subTitle="" onBack={onBack} />
      <div className='menu-list'>
        <Menu onClick={() => alert("Сontacts")} title={t("Сontacts")} subTitle={"32 contacts"} icon={ContactsIcon} />
        <Menu onClick={() => alert("Security ")} title={t("Security ")} subTitle={"Update your security settings"} icon={ContactsIcon} />
        <Menu onClick={() => alert("Backup")} title={t("Backup")} subTitle={"Restore your wallet"} icon={ContactsIcon} />
        <Menu onClick={() => alert("About Spectrum")} title={t("About Spectrum ")} subTitle={"Redirect to help center"} icon={ContactsIcon} />
      </div>
    </div>
  )
}

export default styled(Settings)`

`