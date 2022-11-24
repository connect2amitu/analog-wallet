import React from 'react'
import styled from 'styled-components';

import ThreeDotIcon from "../../../assets/icons/three-dot.svg"

interface Props {
  className?: string;
  contacts?: any; // update the interface later on
}

const SendCardItem = (props: Props) => {
  const { contacts: { name, address, icon }, className } = props;
  return (
    <div className={className}>
      <div className='send-card-wrapper'>
        <div>
          <img src={icon} alt="cross-icon" height={32} width={32} />
        </div>
        <div className='detail'>
          <p className='title'>{name}</p>
          <p className='address'>{address}</p>
        </div>
      </div>

      <div className='menu-icon'>
        <img src={ThreeDotIcon} alt="menu-icon" height={13} width={3} />
      </div>
    </div>
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
  }

  :first-of-type{
    margin-top: 0;
  }


`