import React, { useState } from 'react'
import { Button, Dialog } from '../../../components';
import Drawer from '../../../partials/Drawer';
import Highlighter from 'react-highlight-words';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { getLogoByNetworkKey } from '../../../shared/functions';
import { useToast } from '../../../components/toast/ToastProvider';
import { Assets } from './Recieve';

import DummyQRCodeIcon from '../../../assets/icons/dummy-qr.svg';


interface Props {
  className?: string;
  asset: Assets; // update the interface later on
  search: string;
}

const DrawerBody = styled.div`
  margin-top: 57px;
  height: calc(100vh - 110px);
  position: relative;
  .qr-code-preview{
    width: calc(100% - 96px);
    border-radius: 12px;
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgb(15 0 64 / 10%);
    margin: auto;
    padding: 15px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  
  .btn{
    position: absolute;
    bottom: 16px;
    padding: 0 16px;
    width: 100%;
  }
  .guide-text{
    margin-top: 7px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #9A97A6;
  }
`

const RecieveCardItem = React.memo(({ asset, className, search = "" }: Props) => {
  const [showQRModal, setShowQRModal] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState<Assets | null>(null)
  const { t } = useTranslation();
  const { show } = useToast()

  const { title } = asset;

  const onCopy = () => {
    show(t("Copied!"))
    // setShowQRModal(false)
  }

  return (
    <>
      <div className={className} onClick={() => { setSelectedNetwork(asset); setShowQRModal(true) }}>
        <div className='send-card-wrapper'>
          <img src={getLogoByNetworkKey(asset.icon)} alt="cross-icon" height={30} width={30} />
          <div className='detail'>
            <p className='title'>
              <Highlighter
                className='text'
                highlightClassName="highlight"
                unhighlightClassName="unhighlight"
                searchWords={search.split(" ")}
                autoEscape={true}
                textToHighlight={`${title}`}
              /></p>
          </div>
        </div>

        <div className='amount-meta'>
          <span>{asset.amount} {asset.unit}</span>
        </div>
      </div>


      <Dialog fullscreen={true} open={showQRModal}>
        <Drawer onBack={() => setShowQRModal(false)} title={`Receive ${selectedNetwork?.unit}`} >
          <DrawerBody>
            {showQRModal ? "true" : "false"}
            <div className='qr-code-preview'>
              <img src={DummyQRCodeIcon} alt="qr-code" />
              <p className='guide-text'>{selectedNetwork?.address}</p>
            </div>
            <div className='btn'>
              <Button onClick={onCopy}>{t("Copy")}</Button>
            </div>
          </DrawerBody>
        </Drawer>
      </Dialog>
    </>
  )
})

export default styled(RecieveCardItem)`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  width: 100%; 
  cursor: pointer;

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