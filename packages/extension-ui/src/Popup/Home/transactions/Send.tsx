import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

import { SearchBox } from '../../../components';
import SendCardItem from './SendCardItem';

import ScanCodeIcon from '../../../assets/icons/scan-code.svg';
import DummyQRCodeIcon from '../../../assets/icons/dummy-qr.svg';
import UserIcon from '../../../assets/icons/user.svg';
import QRModal from '../../../components/modal/QRModal';
import ModalHeader from '../../../partials/ModalHeader';

interface Props {
  className?: string;
}

interface Constants { icon: string; name: string; address: string; }

const Send = ({ className }: Props) => {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [showQRModal, setShowQRModal] = useState(false);
  const [contacts, setContacts] = useState<Constants[]>([]);

  useEffect(() => {
    setContacts([
      {
        icon: UserIcon,
        name: "Victor Young",
        address: "gydf82378gdyuewguy23",
      },
      {
        icon: UserIcon,
        name: "Amit Chauhan",
        address: "gydf82378gdyuewguy23",
      },
      {
        icon: UserIcon,
        name: "Adeel Danish",
        address: "gydf82378gdyuewguy23",
      },
      {
        icon: UserIcon,
        name: "Isabelle Lau",
        address: "gydf82378gdyuewguy23",
      }, {
        icon: UserIcon,
        name: "Ali Tanveer",
        address: "gydf82378gdyuewguy23",
      }
    ])
  }, [])

  const onSearch = (value: string) => {
    setSearch(value)
  }

  return (
    <div className={className}>
      <div className='searchbox-wrapper'>
        <SearchBox className='searchbox' placeholder='Search, public address...' name='search' value={search} onChange={onSearch} actionIcon={ScanCodeIcon} onActionClick={() => {
          setShowQRModal(true)
        }} />
      </div>
      <div className='contract-container'>
        <div className='contact-label'>
          <span>{t("Contact")}:</span>
        </div>
        <div className='contract-list'>
          {contacts.map((contacts, index) =>
            <SendCardItem key={index} contacts={contacts} />
          )}
        </div>
      </div>

      {showQRModal && <QRModal className="qr-code" onClose={(() => setShowQRModal(false))} >
        <ModalHeader title='Scan QR code' onClose={() => setShowQRModal(false)} />
        <div className='body'>
          <img className='qr-code-preview' src={DummyQRCodeIcon} alt="qr-code" />
          <p className='guide-text'>Place the QR code in front of your camera</p>
        </div>
      </QRModal>}
    </div>
  )
}

export default styled(Send)`
.searchbox-wrapper{
  padding: 14px 16px 0;

  .action-icon{
    background: transparent;
  }

}
.contract-container{
    padding: 24px 16px;   
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  .contact-label{
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: #0F0040;
  }
  .contract-list{
    margin-top: 8px;
    width: 100%;
  }

}
`