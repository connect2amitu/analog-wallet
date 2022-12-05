import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { size } from 'lodash';

import { Button, SearchBox } from '../../../components';
import SendCardItem from './SendCardItem';
import EmptyContactList from './EmptyContactList';

import QRModal from '../../../components/modal/QRModal';
import ModalHeader from '../../../partials/ModalHeader';
import Alert from '../../../components/Alert';

import UserIcon from '../../../assets/icons/user.svg';
import ScanCodeIcon from '../../../assets/icons/scan-code.svg';
import DummyQRCodeIcon from '../../../assets/icons/dummy-qr.svg';

interface Props {
  className?: string;
}

export interface Contact { icon: string; name: string; address: string }

const VALID_SAMPLE_ADDRESSES = [
  "gydf82378gdyuewguy23",
  "65CMx1lDg0ScUb1y4smV",
  "KRTsjQ6XHPNHOknKgGsh",
  "00v71MPgbLv9r5kJ1OEc",
  "ah78Bv7gg0oWxqft7fP2",
  "deqRBv7gg0oWxqVhepP2"
]


const Send = ({ className }: Props) => {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [showQRModal, setShowQRModal] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isValidAddress, setIsValidAddress] = useState(false)

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
        address: "65CMx1lDg0ScUb1y4smV",
      },
      {
        icon: UserIcon,
        name: "Adeel Danish",
        address: "KRTsjQ6XHPNHOknKgGsh",
      },
      {
        icon: UserIcon,
        name: "Isabelle Lau",
        address: "00v71MPgbLv9r5kJ1OEc",
      }, {
        icon: UserIcon,
        name: "Ali Tanveer",
        address: "deqRBv7gg0oWxqVhepP2",
      }, {
        icon: UserIcon,
        name: "Ali Tanveer",
        address: "deqRBv7gg0oWxqVhepP2",
      }
    ])
  }, [])

  const onSearch = (value: string) => {
    setSearch(value)

    if (value.length === 20) {
      setIsValidAddress(VALID_SAMPLE_ADDRESSES.includes(value))
    } else {
      setIsValidAddress(false)
    }
  }

  const onAddContact = () => {
    console.info(`onAddContact`)
  }

  return (
    <div className={className}>
      <div className='searchbox-wrapper'>
        <SearchBox className='searchbox'
          placeholder='Search, public address...'
          name='search'
          value={search}
          onChange={onSearch}
          actionIcon={ScanCodeIcon}
          onActionClick={() => {
            setShowQRModal(true)
          }} />
      </div>
      <div className='contract-container'>
        {/* <Alert onClick={() => {
          alert()
        }} text={<span>New address detected! <b>Click here</b> to add to your contact list.</span>} color='success' />
        <Alert text='Recipient address is invalid' color='danger' /> */}
        <>
          <div className='contact-label'>
            <span>{t("Contact")}:</span>
          </div>
          {size(contacts) > 0 ?
            <div className='contract-list'>
              {contacts.map((contact, index) =>
                <SendCardItem key={index} contact={contact} />
              )}

            </div> :
            <EmptyContactList />
          }
        </>
      </div>
      <div className="add-contact-btn">
        <Button onClick={onAddContact}>{t("Add Contact")}</Button>
      </div>

      {showQRModal && <QRModal className="qr-code" onClose={(() => setShowQRModal(false))} >
        <ModalHeader className='qr-code-header' title='Scan QR code' onClose={() => setShowQRModal(false)} />
        <div className='body'>
          <img className='qr-code-preview' src={DummyQRCodeIcon} alt="qr-code" />
          <p className='guide-text'>{t("Place the QR code in front of your camera")}</p>
        </div>
      </QRModal>}
    </div>
  )
}

export default styled(Send)`
.searchbox-wrapper{
  padding: 0px 16px 0;
  .action-icon{
    background: transparent;
  }
}

.contract-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    overflow: auto;
    padding: 24px 16px;
    height: calc(100vh - 155px);

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

.add-contact-btn{
  padding: 0 16px;
}
`