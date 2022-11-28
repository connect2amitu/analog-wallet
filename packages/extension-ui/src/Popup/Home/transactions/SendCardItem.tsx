import React, { useState } from 'react'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Dialog } from '../../../components';
import ModalHeader from '../../../partials/ModalHeader';
import { Contact } from './Send';

import ThreeDotIcon from "../../../assets/icons/three-dot.svg"
import DirectionRightIcon from "../../../assets/icons/direction-right.svg"

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
  
`

const SendCardItem = ({ className, contact }: Props) => {
  const { name, address, icon } = contact;

  const [openDrawer, setOpenDrawer] = useState(false);

  const { t } = useTranslation();

  const onEditContact = () => {
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
            <MenuCard>
              <div className='icon-title'>
                <div>
                  <img className='icon' src={DirectionRightIcon} alt="right-icon" height={16} width={16} />
                </div>
                <div></div>
              </div>
              <img className='right-icon' src={DirectionRightIcon} alt="right-icon" height={16} width={16} />
            </MenuCard>
            <MenuCard> </MenuCard>
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