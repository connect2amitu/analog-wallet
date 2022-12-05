import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import CopyToClipboard from 'react-copy-to-clipboard';

import { Dialog, Menu } from '../../components';
import { useToast } from '../../components/toast/ToastProvider';
import ModalHeader from '../../partials/ModalHeader';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';

import CopyIcon from "../../assets/icons/copy-gradient.svg";
import OpenIcon from "../../assets/icons/open-icon.svg";
import WalletIcon from "../../assets/icons/wallet.svg";

interface Props {
  className?: string;
}

const Container = styled.div`
  max-height: 250px;
  min-height: 160px;
  overflow: auto;
  padding:16px;
`;

const DUMMY_ACCOUNTS = [
  {
    title: "Wallet 1",
    icon: WalletIcon,
    type: "",
    address: "1FfmbHfnpaZjKF...okTjJJusN455paPH"
  }, {
    title: "Wallet 2",
    icon: WalletIcon,
    type: "",
    address: "mb7bmbgt2vcy9d....irr6kxy63ihd31"
  }
]

const WalletSelector = ({ className }: Props) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { t } = useTranslation();
  const { show } = useToast();
  const copy = useCopyToClipboard()

  return (
    <div className={className}>
      <div className='box'>
        <div className='address-status'>
          <div className='dot' />
          <div className='selected-wallet'><p>My Universal Wallet 1 </p></div>
        </div>
        <div className='action-btn-wrap'>
          <CopyToClipboard text={"My Universal Wallet 1"} onCopy={() => show("Copied!")}>
            <div className='btn'>
              <img className='icon' src={CopyIcon} alt="cross-icon" height={11} width={11} />
            </div>
          </CopyToClipboard>
          <div className='btn open-link' onClick={() => setOpenDrawer(true)}>
            <img className='icon' src={OpenIcon} alt="cross-icon" height={11} width={11} />
          </div>
        </div>
      </div>


      {/* wallet drawer */}
      <Dialog fullscreen={false} open={openDrawer} onClose={setOpenDrawer}>
        <React.Fragment>
          <ModalHeader title={t("Wallets")} onClose={() => setOpenDrawer(false)} />
          <Container>
            {
              DUMMY_ACCOUNTS.map(({ title, icon, address }, index) =>
                <Menu key={index} onAction={() => { copy(address); }} title={title} subTitle={address} actionIcon={CopyIcon} icon={icon} />
              )
            }
          </Container>
        </React.Fragment>
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