import React, { useState } from 'react'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Button, Dialog } from '../../../components';
import ModalHeader from '../../../partials/ModalHeader';
import { Contact } from './Send';
import { useToast } from '../../../components/toast/ToastProvider';

import ThreeDotIcon from "../../../assets/icons/three-dot.svg"
import DirectionRightIcon from "../../../assets/icons/direction-right.svg"
import PencilIcon from "../../../assets/icons/edit.png"
import BinIcon from "../../../assets/icons/bin.png"

interface Props {
  className?: string;
  contact: Contact; // update the interface later on
}

const Container = styled.div`
  max-height: 250px;
  min-height: 160px;
  overflow: auto;
  padding: 16px;
`;

const MenuCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  box-shadow: 0px 4px 30px rgba(15, 0, 64, 0.1);
  padding: 8px 12px 8px 8px;
  border-radius: 12px;
  background: #FFFFFF;
  cursor: pointer;

  &:first-of-type{
    margin-top: 0;
  }

  .icon-title{
    display: flex;
    align-items: center;

  .icon{
    border-radius: 10px;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
  }

  .edit-icon{
    background: #7979f733;
  }

  .remove-icon{
    background: #fa958933;
  }

  .title{
    margin-left: 9px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #0F0040;
  }

}
.right-icon{
  height: 12px;
  width: 7px;
}
`

const SendCardItem = ({ className, contact }: Props) => {
  const { name, address, icon } = contact;

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openEditContact, setOpenEditContact] = useState(false);

  const { show } = useToast()
  const { t } = useTranslation();

  const onEditContact = () => {
    setOpenDrawer(true)
  }

  const onSave = () => {
    show(t("Saved"))
    setOpenEditContact(false)
    setOpenDrawer(true)
  }

  return (
    <div className={className}>
      <div className='send-card-wrapper'>
        <img src={icon} alt="cross-icon" height={40} width={40} />
        <div className='detail'>
          <p className='title'>{name}</p>
          <p className='address'>{address}</p>
        </div>
      </div>

      <div className='menu-icon' onClick={() => onEditContact()}>
        <img src={ThreeDotIcon} alt="menu-icon" height={13} width={3} />
      </div>


      {/* wallet drawer */}
      <Dialog fullscreen={false} open={openDrawer} onClose={setOpenDrawer}>
        <React.Fragment>
          <ModalHeader title={contact.name} onClose={() => setOpenDrawer(false)} onBack={() => setOpenDrawer(false)} />
          <Container>
            <MenuCard onClick={() => setOpenEditContact(true)}>
              <div className='icon-title'>
                <div className='edit-icon icon'>
                  <img className='icon' src={PencilIcon} alt="edit-icon" height={24} width={24} />
                </div>
                <div className='title'>{t("Edit Contact")}</div>
              </div>
              <img className='right-icon' src={DirectionRightIcon} alt="right-icon" height={16} width={16} />
            </MenuCard>
            <MenuCard>
              <div className='icon-title'>
                <div className='remove-icon icon'>
                  <img className='icon' src={BinIcon} alt="bin-icon" height={24} width={24} />
                </div>
                <div className='title'>{t("Remove Contact")}</div>
              </div>
              <img className='right-icon' src={DirectionRightIcon} alt="right-icon" height={16} width={16} />
            </MenuCard>
            {/* <MenuCard> </MenuCard> */}
          </Container>
        </React.Fragment>
      </Dialog>

      {/* wallet drawer */}
      <Dialog fullscreen={false} open={openEditContact} onClose={() => setOpenEditContact(false)}>
        <React.Fragment>
          <ModalHeader title={"Edit Contact"} onClose={() => { setOpenDrawer(true); setOpenEditContact(false) }} onBack={() => { setOpenDrawer(true); setOpenEditContact(false) }} />
          <Container>
            <Button onClick={onSave}>{t("Save")}</Button>
          </Container>
        </React.Fragment>
      </Dialog>
    </div >
  )
}

export default styled(SendCardItem)`

background: #FFFFFF;
  box-shadow: 0px 4px 30px rgba(15, 0, 64, 0.1);
  border-radius: 12px;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;

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

  .menu-icon{
    cursor: pointer;
    padding: 10px;
    display: flex;
  }

  :first-of-type{
    margin-top: 0;
  }


`