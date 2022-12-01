import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { SearchBox } from '../../../components';
import RecieveCardItem from './RecieveCardItem';

import { LogoEnum } from '../../../assets';

interface Props {
  className?: string;
}

export interface Assets {
  amount: number;
  title: string;
  icon: LogoEnum;
  unit: string;
  address: string;
}

const ASSET_LIST: Assets[] = [
  {
    amount: 0,
    icon: "bitcoin",
    title: "Bitcoin",
    unit: "BTC",
    address: "BTCDokDL115..DL115tg5tg78tg78Fr"
  },
  {
    amount: 0,
    icon: "solana",
    title: "Solana",
    unit: "SOL",
    address: "SOLDokDL115..DL115tg5tg78tg78Fr"
  },
  {
    amount: 0,
    icon: "polkadot",
    title: "Polkadot",
    unit: "DOT",
    address: "POKADokDL115..DL115tg5tg78tg78Fr"
  },
  {
    amount: 0,
    icon: "tether",
    title: "Tether",
    unit: "USDT",
    address: "THETHERDokDL115..DL115tg5tg78tg78Fr"
  }
]

const Recieve = ({ className }: Props) => {
  const [search, setSearch] = useState("");
  const [assets, setAssets] = useState<Assets[]>([]);

  useEffect(() => {
    setAssets(ASSET_LIST)
  }, [])

  useEffect(() => {
    let _assets = ASSET_LIST;

    if (search) {
      _assets = ASSET_LIST.filter(assets => assets.title.toLowerCase().includes(search.toLowerCase()))
    }

    setAssets(_assets)
  }, [search])

  return (
    <div className={className}>
      <div className='searchbox-wrapper'>
        <SearchBox className='searchbox' clearable={true} placeholder='Search...' name='search' value={search} onChange={setSearch} onActionClick={() => {
          setSearch("")
        }} />
      </div>
      <div className='contract-container'>
        {assets.map((asset, index) =>
          <RecieveCardItem key={index} asset={asset} search={search} />
        )}
      </div>
    </div>
  )
}

export default styled(Recieve)`
.searchbox-wrapper{
  padding: 0px 16px 0;
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