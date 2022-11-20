import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

import { Dialog } from '../../components';

import CopyIcon from "../../assets/icons/copy-gradient.svg";
import OpenIcon from "../../assets/icons/open-icon.svg";
import CloseIcon from "../../assets/icons/close.svg";


interface Props {
  className?: string;
}

const Image = styled.img`
  width: ${(props: any) => (props.width ? `${props.width}px` : '19.64px')};
  height: ${(props: any) => (props.height ? `${props.height}px` : '19.64px')};
`;

const Heading = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
`;

const Container = styled.div`
  margin-top: 11px;
  max-height: 250px;
  min-height: 200px;
  overflow: auto;
  padding: 8px 15px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #0F0040;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 16px;
  top: 8px;
  cursor: pointer;
`;



const WalletSelector = ({ className }: Props) => {
  const { t } = useTranslation();
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <div className={className}>
      <div className='box'>
        <div className='address-status'>
          <div className='dot' />
          <div className='selected-wallet'><span>My Universal Wallet 1 </span></div>
        </div>
        <div className='action-btn-wrap'>
          <div className='btn'>
            <Image src={CopyIcon} alt="cross-icon" height={11} width={11} />
          </div>
          <div className='btn open-link' onClick={() => setOpenDrawer(true)}>
            <Image src={OpenIcon} alt="cross-icon" height={11} width={11} />
          </div>
        </div>
      </div>


      <Dialog open={openDrawer} onClose={setOpenDrawer}>
        <>
          <Heading>
            <Title>{t("Wallets")}</Title>
            <CloseButton onClick={() => setOpenDrawer(false)}>
              <Image src={CloseIcon} alt="close-icon" height={12} width={12} />
            </CloseButton>
          </Heading>
          <Container>
            <h1>drawer</h1>
            <h1>drawer</h1>
            <h1>drawer</h1>
            <h1>drawer</h1>
            <h1>drawer</h1>
            <h1>drawer</h1>
          </Container>
        </>
      </Dialog>

    </div>
  )
}

export default styled(WalletSelector)`
  margin-top: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  .box{
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 9px rgba(241, 231, 255, 0.5);
    border-radius: 8px;
    height: 30px;
    /* padding: 9px 5px 9px 8px; */
    padding: 9px;
    display: flex;
    align-items: center;
    justify-content: space-between;

      .dot{
        height: 7px;
        width: 7px;
        border: 1px solid rgba(0,225,158,0.8);
        border-radius: 77px;
        display: inline-block;
        background: rgba(0,225,158,0.8);
        box-shadow: 0 0 0 2px #ffffff, 0 0 0 3px #00e19ecc;
      }
    .selected-wallet{
      margin-left: 7px;
      span{
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #0F0040;
      }
    }

    .address-status{
      display: flex;
      align-items: center;
    }

    .action-btn-wrap{
      display: flex;
      margin-left: 8px;
      .btn{
        height: 20px;
        width: 20px;
        background: #eae6fc;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &.open-link{
          margin-left: 4px;
        }
      }
    }
  }
`