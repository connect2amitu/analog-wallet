import React from 'react'
import styled from 'styled-components';

import { getLogoByNetworkKey } from '../../../shared/functions';
import { Assets } from './Recieve';

interface Props {
  className?: string;
  asset: Assets; // update the interface later on
}

const RecieveCardItem = ({ asset, className }: Props) => {

  return (
    <div className={className}>
      <div className='send-card-wrapper'>
        <img src={getLogoByNetworkKey(asset.icon)} alt="cross-icon" height={30} width={30} />
        <div className='detail'>
          <p className='title'>{asset.title}</p>
        </div>
      </div>

      <div className='amount-meta'>
        <span>{asset.amount} {asset.unit}</span>
      </div>
    </div>
  )
}

export default styled(RecieveCardItem)`

/* background: #FFFFFF; */
  /* box-shadow: 0px 4px 30px rgba(15, 0, 64, 0.1); */
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
    width: 100%;
  /* padding: 8px 16px; */

  .send-card-wrapper{
    display: flex;
    align-items: center;
    .detail{
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .title{
        font-weight: 600;
        font-size: 12px;
        line-height: 21px;
        color: #0F0040;
      }

      .address{
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #9A97A6;
      }
    }
  }

  .amount-meta{
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #0F0040;
  }

  :first-of-type{
    margin-top: 0;
  }


`