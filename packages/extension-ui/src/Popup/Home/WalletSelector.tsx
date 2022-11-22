import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

import { Dialog } from '../../components';

import CopyIcon from "../../assets/icons/copy-gradient.svg";
import OpenIcon from "../../assets/icons/open-icon.svg";
import CloseIcon from "../../assets/icons/close.svg";
import WalletOneIcon from "../../assets/icons/wallet-1.svg";
import WalletTwoIcon from "../../assets/icons/wallet-2.svg";


interface Props {
  className?: string;
}

const Image = styled.img`
  width: ${(props: any) => (props.width ? `${props.width}px` : '19.64px')};
  height: ${(props: any) => (props.height ? `${props.height}px` : '19.64px')};
  cursor:pointer;
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
  min-height: 160px;
  overflow: auto;
  padding: 8px 16px;
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
`;


const WalletCard = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 30px rgba(15, 0, 64, 0.1);
  border-radius: 12px;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  .wallet-detail-wrapper{
    display: flex;
    align-items: center;
    .detail{
      margin-left: 9px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .title{
        font-weight: 600;
        font-size: 14px;
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

  :first-of-type{
    margin-top: 0;
  }
`

const DUMMY_ACCOUNTS = [
  {
    title: "Wallet 1",
    icon: WalletOneIcon,
    type: "",
    address: "DokDL115tg78Fr...15tg78Fr"
  }, {
    title: "Wallet 2",
    icon: WalletTwoIcon,
    type: "",
    address: "DokDL115tg78Fr...15tg78Fr"
  }
]

const WalletSelector = ({ className }: Props) => {
  const { t } = useTranslation();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className={className}>
      <div className='box'>
        <div className='address-status'>
          <div className='dot' />
          <div className='selected-wallet'><p>My Universal Wallet 1 </p></div>
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

            {
              DUMMY_ACCOUNTS.map(({ title, icon, address }, index) =>
                <WalletCard key={index}>
                  <div className='wallet-detail-wrapper'>
                    <div>
                      <Image src={icon} alt="cross-icon" height={32} width={32} />
                    </div>
                    <div className='detail'>
                      <p className='title'>{title}</p>
                      <p className='address'>{address}</p>
                    </div>
                  </div>
                  <Image src={CopyIcon} alt="cross-icon" height={16} width={16} />
                </WalletCard>
              )
            }
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
  margin-top: 10px;
  
  .box{
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 7px 3px rgb(15 0 64 / 10%);
    border-radius: 8px;
    height: 30px;
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
      p{
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #0F0040;
        width: 120px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
        cursor: pointer;
        
        &.open-link{
          margin-left: 4px;
        }
      }
    }
  }
`