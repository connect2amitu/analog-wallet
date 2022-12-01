import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

import AssetDrawer from './assets/AssetDrawer';

import AddIcon from "../../assets/icons/add.svg";

const Footer = ({ className }: { className?: string }) => {

  const { t } = useTranslation();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className={className}>
      <div className='add-asset-menu'>
        <div className='icon' onClick={() => setOpenDrawer(true)}>
          <img src={AddIcon} alt="add-asset" height={44} width={44} />
        </div>
        <span className='menu-text'>{t("Add Asset")}</span>
      </div>

      {openDrawer && <AssetDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />}

    </div>
  )
}

export default styled(Footer)`
height: 44px;
background: red;
width: 100%;
left: 0;
position: absolute;
bottom: 0;
background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
backdrop-filter: blur(25.5px);

.add-asset-menu{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .icon{
    position: absolute;
    background: linear-gradient(89.78deg, #2406E2 0.19%, #7B35EE 99.81%);
    box-shadow: 0px 4px 9px rgba(51, 14, 228, 0.15), inset 2px 5px 4px rgba(33, 0, 181, 0.18);
    border-radius: 50%;
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    left: 50%;
    top: -20px;
    transform: translateX(-50%);
    border: 5px solid #ffffff;
    cursor: pointer;
  }

  .menu-text{
    font-weight: 500;
    font-size: 8px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #0F0040;
    margin-top: 25px;
    text-transform: uppercase;
  }
  
  img{
    height: 27px;
    width: 27px;
  }
}
  
`