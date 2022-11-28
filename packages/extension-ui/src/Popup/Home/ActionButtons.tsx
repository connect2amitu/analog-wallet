import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

import ReceiveIcon from "../../assets/icons/recieve.svg";
import SendIcon from "../../assets/icons/send.svg";
import { Dialog } from '../../components';
import Drawer from '../../partials/Drawer';
import Send from './transactions/Send';
import Recieve from './transactions/Recieve';
import ModalHeader from '../../partials/ModalHeader';

interface Props {
  className?: string;
}

const ActionButtons = ({ className }: Props) => {
  const [openSend, setOpenSend] = useState(false);
  const [openRecieve, setOpenRecieve] = useState(false);

  const { t } = useTranslation();

  const toggleSendDrawer = () => {
    setOpenSend(prev => !prev)
  }

  const toggleRecieveDrawer = () => {
    setOpenRecieve(prev => !prev)
  }

  return (
    <div className={className}>
      <button className='btn' onClick={toggleRecieveDrawer}>
        <img src={ReceiveIcon} alt="receive-icon" height={16} width={16} />
        <span>{t("Recieve")}</span>
      </button>
      <button className='btn' onClick={toggleSendDrawer}>
        <img src={SendIcon} alt="send-icon" height={16} width={16} />
        <span>{t("Send")}</span>
      </button>

      <Dialog fullscreen={true} open={openRecieve}>
        <Drawer onClose={toggleRecieveDrawer} title={t("Recieve")}>
          <Recieve />
        </Drawer>
      </Dialog>

      <Dialog fullscreen={true} open={openSend}>
        <Drawer title='Send' onClose={toggleSendDrawer} >
          <Send />
        </Drawer>
      </Dialog>
    </div >
  )
}

export default styled(ActionButtons)`
margin-top: 15px;
display: flex;
justify-content: center;
gap: 8px;

.btn{
  background: #eae6fc;
  border-radius: 12px;
  border: none;
  padding: 10px 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 40px;
  width: 105px;

  span{
  margin-left: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #4D20D9;
  }
}
  
`