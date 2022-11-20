import React from 'react'
import styled from 'styled-components'

import ReceiveIcon from "../../assets/icons/recieve.svg";
import SendIcon from "../../assets/icons/send.svg";


interface Props {
  className?: string;
}

const Image = styled.img`
  width: ${(props: any) => (props.width ? `${props.width}px` : '19.64px')};
  height: ${(props: any) => (props.height ? `${props.height}px` : '19.64px')};
`;

const ActionButtons = ({ className }: Props) => {
  return (
    <div className={className}>
      <button className='btn'>
        <Image src={ReceiveIcon} alt="receive-icon" height={16} width={16} />
        <span>Receive</span>
      </button>
      <button className='btn'>
        <Image src={SendIcon} alt="send-icon" height={16} width={16} />
        <span>Send</span>
      </button>
    </div>
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