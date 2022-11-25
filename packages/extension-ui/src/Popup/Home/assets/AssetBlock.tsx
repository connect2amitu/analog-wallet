import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { size } from 'lodash';

import { AssetsInfo } from '../../../shared/constants';
import { getLogoByNetworkKey } from '../../../shared/functions';

import NoAssetIcon from "../../../assets/icons/no-asset.svg";
import UpIcon from "../../../assets/icons/up.svg";

const AssetBlock = ({ assets, className }: { className?: string, assets: AssetsInfo[] }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>

      {size(assets) <= 0 && <div className='no-assets'>
        <img src={NoAssetIcon} alt="close-icon" height={110} width={110} />
        <span className='title'>{t("Add your first Asset")}</span>
      </div>}

      {
        size(assets) > 0 && <div className='asset-list'>
          {
            assets.map(({ icon, title, amount, balance, change, symbol }, index) =>
              <div key={index} className="asset-main-area">
                <div className='area-part-1'>
                  <img className='logo' src={getLogoByNetworkKey(icon)} alt="close-icon" height={30} width={30} />
                  <div className='meta-wrapper'>
                    <div className='name'>{title}</div>
                    <div className='balance-info'>
                      <div className='amount'>{amount}</div>
                      <div className='change'>  <img src={UpIcon} alt="up-icon" height={10} width={10} />{change}</div>
                    </div>
                  </div>
                </div>
                <div className='area-part-2'>
                  <span className='balance'>{balance} {symbol}</span>
                  <span className='amount'>{amount}</span>
                </div>
              </div>
            )
          }
        </div>
      }

    </div>
  )
}

export default styled(AssetBlock)`
  height: calc(100% - 227px);
  margin-top: 15px;
  overflow: auto;

  .no-assets{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .title{
      font-weight: 500;
      font-size: 16px;
      text-align: center;
      color: #0F0040;
    }
  }

  .asset-list{
    .asset-main-area{
      margin-top: 12px;
      display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
      .area-part-1{
        display: flex;
        align-items: center;

    .meta-wrapper{
      display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;
    gap:2px;

    .name{
      font-weight: 600;
    font-size: 12px;
    color: #0F0040;
    }

    .balance-info{
      display: flex;
      align-items: center;
      margin-top: -5px;
      line-height: 0;
      .change{
        margin-left: 8px;
        font-weight: 400;
        font-size: 12px;
        display: flex;
        color: #2CC99A;
        align-items: center;

      }

      .amount{
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #746B92;
      }
    }
    }
      }

      .area-part-2{
        display: flex;
        align-items: flex-end;
        justify-content: center;
        flex-direction: column;
        gap:2px;
        .balance{
          font-weight: 600;
          font-size: 12px;
          text-align: right;
          color: #0F0040;
        }
        .amount{
          font-weight: 400;
          font-size: 12px;
          color: #746B92;
          margin-top: -5px;
          line-height:18px;
        }
      }
    }
  }
`