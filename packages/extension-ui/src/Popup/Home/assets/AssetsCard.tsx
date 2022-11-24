import React from 'react'
import styled from 'styled-components'

import { Switch } from '../../../components';
import { getLogoByNetworkKey } from '../../../shared/functions';
import { Assets } from '../../../shared/constants';
import Highlighter from 'react-highlight-words';

export interface Props {
  className?: string;
  search?: string;
  asset: Assets;
  onSelect?: (val: boolean) => void | undefined;
}

const AssetsCard = ({ search = "", asset, className, onSelect = () => { } }: Props) => {
  const { amount, checked, title, icon, unit } = asset;

  return <div className={className}>
    <div className='left-section'>
      <div className='logo'>
        <img src={getLogoByNetworkKey(icon)} alt="add-asset" height={30} width={30} />
      </div>
      <div className='title-amount-wrap'>
        <div className='title'>
          <Highlighter
            className='text'
            highlightClassName="highlight"
            unhighlightClassName="unhighlight"
            searchWords={search.split(" ")}
            autoEscape={true}
            textToHighlight={`${title}`}
          />
        </div>
        <span className='amount'>{`${amount} ${unit}`}</span>
      </div>
    </div>
    <div className='right-section'>
      <Switch
        value={checked}
        onChange={onSelect} />
    </div>
  </div>
}

export default styled(AssetsCard)`
margin-top:16px;
display: flex;
justify-content: space-between;
width: 100%;

&:first-of-type{
  margin-top:0;
}
.left-section{
  display: flex;
  align-items: center;
  .logo{

  }
  .title-amount-wrap{
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .title{
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #0F0040;

      .unhighlight {
        background: transparent;
        color: #0F0040;
        font-weight: normal;
      }
      .highlight{
        background: transparent;
        color: #0F0040;
        font-weight: bolder;
      }
    }
    .amount{
      font-weight: 400;
      font-size: 10px;
      line-height: 15px;
      color: #746B92;

    }
  }
}
`