import React, { useState } from 'react'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Button, Dialog, TextBox } from '../../../components';
import ModalHeader from '../../../partials/ModalHeader';
import { Contact } from './Send';
import { useToast } from '../../../components/toast/ToastProvider';
import Menu from '../../../components/Menu';

import ThreeDotIcon from "../../../assets/icons/three-dot.svg"
import DirectionRightIcon from "../../../assets/icons/direction-right.svg"
import PencilIcon from "../../../assets/icons/edit.png"
import BinIcon from "../../../assets/icons/bin.png"

interface Props {
  className?: string;
  contact: Contact; // update the interface later on
}

const Container = styled.div`
  .body{
    padding: 16px;
    .row{
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      align-items: start;
      :first-of-type{
        margin-top: 0;
      }

      .textbox{
        margin-top: 2px;
      }
      span{
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #746B92;
      }

      .title{
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #0F0040;
      }

      &.center{
        align-items: center;
      }

      &.action-btns{
        flex-direction: row;
        gap: 8px;

        .cancel-btn{
          background: linear-gradient(89.78deg, rgba(36, 6, 226, 0.1) 0.19%, rgba(123, 53, 238, 0.1) 99.81%);
          color: #4D20D9;
        }
        
        .confirm-btn{
          color: #DF2A1E;
          background: rgba(223, 30, 76, 0.1);
          background-blend-mode: darken;
        }
      }
    }
  }
  .save-btn{
    margin-top: 16px;
  }
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
  const [openDeleteContact, setOpenDeleteContact] = useState(false);

  const { show } = useToast()
  const { t } = useTranslation();

  const onEditContact = () => {
    setOpenDrawer(prev => !prev)
  }

  const onSave = () => {
    show(t("Saved"))
    setOpenEditContact(false)
    setOpenDrawer(true)
  }

  const onCloseConfirm = () => {
    setOpenDeleteContact(false)
    setOpenDrawer(false)
  }

  const onSubmit = () => {
    show(t("Deleted!"))
    onCloseConfirm()
  }

  return (
    <React.Fragment>
      <Menu className={className} onAction={() => onEditContact()} title={name} subTitle={address} actionIcon={ThreeDotIcon} icon={icon} />

      {/* contact menu drawer */}
      <Dialog fullscreen={false} open={openDrawer} onClose={setOpenDrawer}>
        <Container>
          <ModalHeader title={contact.name} onClose={() => setOpenDrawer(false)} onBack={() => setOpenDrawer(false)} />
          <div className='body'>
            <Menu onClick={() => setOpenEditContact(true)} title={t("Edit Contact ")} icon={PencilIcon} />
            <Menu onClick={() => setOpenDeleteContact(true)} title={t("Remove Contact ")} icon={BinIcon} />
          </div>
        </Container>
      </Dialog>

      {/* edit contact drawer */}
      <Dialog fullscreen={false} open={openEditContact} onClose={() => setOpenEditContact(false)}>
        <Container>
          <ModalHeader title={"Edit Contact"} onClose={() => { setOpenDrawer(true); setOpenEditContact(false) }} onBack={() => { setOpenDrawer(true); setOpenEditContact(false) }} />
          <div className='body'>
            <div className='row'>
              <span>{t("Name")}</span>
              <TextBox className='textbox' name="name" type='text' value={name} />
            </div>
            <div className='row'>
              <span>{t("Address")}</span>
              <TextBox className='textbox' name="address" type='text' value={address} />
            </div>
            <Button className='save-btn' onClick={onSave}>{t("Save")}</Button>
          </div>
        </Container>
      </Dialog>

      {/* delete confirm drawer */}
      <Dialog fullscreen={false} open={openDeleteContact} onClose={() => setOpenDeleteContact(false)}>
        <Container>
          <ModalHeader title={""} onClose={() => { setOpenDrawer(true); setOpenDeleteContact(false) }} onBack={() => { setOpenDrawer(true); setOpenDeleteContact(false) }} />
          <div className='body'>
            <div className='row center'>
              <img className='icon' src={BinIcon} alt="bin-icon" height={94} width={94} />
            </div>
            <div className='row'>
              <p className='title'>Are you sure you want to delete  wallet 1(fvjdhhf..33fdugcd)?</p>
            </div>
            <div className='row action-btns'>
              <Button className='cancel-btn' onClick={onCloseConfirm}>{t("No")}</Button>
              <Button className='confirm-btn' onClick={onSubmit}>{t("Yes")}</Button>
            </div>

          </div>
        </Container>
      </Dialog>
    </React.Fragment>

  )
}

export default styled(SendCardItem)`
  .left{
    .avatar {
      padding: 0;
    }
  }

  :first-of-type{
    margin-top: 0;
  }
`