import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'

import { SearchBox } from '../../../components';
import QRModal from '../../../components/modal/QRModal';
import RecieveCardItem from './RecieveCardItem';

import ScanCodeIcon from '../../../assets/icons/scan-code.svg';
import { LogoEnum } from '../../../assets';

interface Props {
  className?: string;
}

export interface Assets {
  amount: number;
  title: string;
  icon: LogoEnum;
  unit: string;
}

const Recieve = ({ className }: Props) => {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [showQRModal, setShowQRModal] = useState(false);
  const [assets, setAssets] = useState<Assets[]>([]);

  useEffect(() => {
    setAssets([
      {
        amount: 0,
        icon: "bitcoin",
        title: "Bitcoin",
        unit: "BTC"
      },
      {
        amount: 0,
        icon: "solana",
        title: "Solana",
        unit: "SOL"
      },
      {
        amount: 0,
        icon: "polkadot",
        title: "Polkadot",
        unit: "DOT"
      },
      {
        amount: 0,
        icon: "tether",
        title: "Tether",
        unit: "USDT"
      }
    ])
  }, [])

  const onSearch = (value: string) => {
    setSearch(value)
  }

  return (
    <div className={className}>
      <div className='searchbox-wrapper'>
        <SearchBox className='searchbox' clearable={false} placeholder='Search...' name='search' value={search} onChange={onSearch} actionIcon={ScanCodeIcon} onActionClick={() => {
          setShowQRModal(true)
        }} />
      </div>
      <div className='contract-container'>
        {assets.map((asset, index) =>
          <RecieveCardItem key={index} asset={asset} />
        )}
      </div>

      {showQRModal && <QRModal className="qr-code" onClose={(() => setShowQRModal(false))} >
        <div>Scan QR code</div>
      </QRModal>}
    </div>
  )
}

export default styled(Recieve)`
.searchbox-wrapper{
  padding: 0px 16px 0;

  .action-icon{
    background: transparent;
  }

}
.contract-container{
    margin-top: 8px;
    width: 100%;
    padding: 24px 16px;   
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: calc(100vh - 155px);
  .contact-label{
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: #0F0040;
  } 
}
`